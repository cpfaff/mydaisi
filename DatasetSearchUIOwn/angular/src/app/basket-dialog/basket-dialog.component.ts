import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {NodeService} from '../services/remote/node.service';
import {environment} from '../../environments/environment';
import {Basket} from '../models/basket';
import {Hit} from '../models/result/hit';
import {plainToClass} from 'class-transformer';
import {KeycloakService} from 'keycloak-angular';

@Component({
    selector: 'app-basket-dialog',
    templateUrl: './basket-dialog.component.html',
    styleUrls: ['./basket-dialog.component.css']
})
export class BasketDialogComponent implements OnInit {
    // text for mouseover
    textTooltipBasketVATvisualizable = environment.textTooltipBasketVATvisualizable;
    textTooltipBasketVATnotVisualizable = environment.textTooltipBasketVATnotVisualizable;
    textTooltipBasketDataAvailable = environment.textTooltipBasketDataAvailable;
    textTooltipBasketDataNotAvailable = environment.textTooltipBasketDataNotAvailable;
    textTooltipBasketMetadataAvailable = environment.textTooltipBasketMetadataAvailable;
    textTooltipBasketMetadataNotAvailable = environment.textTooltipBasketMetadataNotAvailable;
    textTooltipBasketMultimediaAvailable = environment.textTooltipBasketMultimediaAvailable;
    textTooltipBasketMultimediaNotAvailable = environment.textTooltipBasketMultimediaNotAvailable;
    textTooltipBasketRemove = environment.textTooltipBasketRemove;
    textTooltipBasketRemoveSure = environment.textTooltipBasketRemoveSure;
    textTooltipBasketEmpty = environment.textTooltipBasketEmpty;
    spinner = false;
    savedData: Array<Hit> = [];
    user;
    basketId = ``;

    constructor(
        public dialogRef: MatDialogRef<BasketDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data, private nodeService: NodeService, private keycloakService: KeycloakService) {
    }

    ngOnInit(): void {
        this.initializeUserOptions();
        this.basketId = '';
    }

    remove(item): void {
        const index = this.data.indexOf(item);
        if (index >= 0) {
            this.data.splice(index, 1);
        }
    }

    downloadZip(): void {
        this.spinner = true;
        const basket = {
            basket: this.data
        };
        // console.log('downloadZip | this.data');
        // console.log(this.data);
        // console.log('downloadZip | basket');
        // console.log(basket);
        this.nodeService.basketDownload(basket).subscribe(data => this.downloadSuccess(data),
            err => this.downloadFailed());


    }

    downloadFailed(): void {
        alert(environment.textAlertBasketErrorDownload);
        this.spinner = false;
    }

    downloadSuccess(blob): void {
        const a = document.createElement('a');
        const objectUrl = URL.createObjectURL(blob);
        a.href = objectUrl;
        a.click();
        URL.revokeObjectURL(objectUrl);
        this.spinner = false;
    }

    sendBasketToCollectionService(): void {
        this.spinner = true;
        const basket = {
            basket: this.data
        };
        console.log('sendBasketToCollectionService | this.data');
        // console.log(this.data);
        // console.log('sendBasketToCollectionService | basket');
        // console.log(basket);
        this.nodeService.postBasketToCollection(basket, this.user).subscribe(data => this.sendCollectionSuccess(data),
            err => this.sendCollectionFailed(err));
    }


    sendCollectionFailed(err): void {
        console.log('sendCollectionFailed | err');
        console.log(err);
        this.spinner = false;
    }

    sendCollectionSuccess(data): void {
        // const a = document.createElement('a');
        // const objectUrl = URL.createObjectURL(blob);
        // a.href = objectUrl;
        // a.click();
        // URL.revokeObjectURL(objectUrl);
        console.log('sendCollectionSuccess | data');
        console.log(data);
        this.spinner = false;
    }


    emptyBasket(): void {
        const r = confirm('Are you sure that you want to empty the basket?');
        // console.log('emptyBasket | this.data');
        // console.log(this.data);
        if (r === true) {
            this.data.splice(0, this.data.length);
            // this.saveBasket();
        }
    }

    saveBasket(): void {
        const basket = new Basket();
        basket.setContent(this.data);
        // console.log('saveBaseket | this.data');
        // console.log(this.data);
        basket.setUserId(this.user);
        this.nodeService.addToBasket(basket).subscribe(val => {
            this.basketId = JSON.stringify(val.basketId);
        });
        this.savedData = this.data.slice(0);
    }

    checkSaveButton(): boolean {
        if (this.data.length === 0) {
            return true;
        }
        return JSON.stringify(this.data) === JSON.stringify(this.savedData);
    }

    visualize(): void {
        alert(this.basketId);
    }

    private initializeUserOptions(): void {
        try {
            this.user = this.keycloakService.getUsername();
            if (this.user !== undefined) {
                this.nodeService.readFromBasket(this.user).subscribe(result => {
                    if (result.length !== 0) {
                        const basket = JSON.parse(result[0]?.basketcontent)?.selected;
                        basket.forEach(item => {
                            const hit: Hit = plainToClass(Hit, item);
                            this.savedData.push(hit);
                        });
                    }
                });
            } else {
                this.user = null;
            }
        } catch {
            this.user = null;
        }

    }
}
