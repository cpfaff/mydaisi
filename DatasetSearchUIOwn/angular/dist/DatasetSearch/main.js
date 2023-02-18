(self["webpackChunkDatasetSearch"] = self["webpackChunkDatasetSearch"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _gfbio_gfbio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gfbio/gfbio.component */ 1194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




//import {BioDivComponent} from './bio-div/bio-div.component';
const routes = [
    // { path: '', component: GfbioComponent, canActivate: [AuthGuard] },
    { path: '', component: _gfbio_gfbio_component__WEBPACK_IMPORTED_MODULE_0__.GfbioComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reflect-metadata */ 3174);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! keycloak-angular */ 2715);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);






const _c0 = function () { return { exact: true }; };
function AppComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", index_r3.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](index_r3.key);
} }
function AppComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Log out");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(keycloakService) {
        this.keycloakService = keycloakService;
        this.isLoggedIn = false;
        this.userProfile = null;
        this.user = '';
        this.indexes = [
            {
                key: 'gfbio',
                link: '/'
            }
            /*, {
                        key: 'biodiv',
                        link: '/bio-div'
                    }*/
        ];
    }
    initializeUserOptions() {
        try {
            this.user = this.keycloakService.getUsername();
            this.keycloakService.loadUserProfile().then(profile => {
                console.log(profile.username);
                console.log(profile['attributes']); //gives you array of all attributes of user, extract what you need
            });
        }
        catch (_a) {
            this.user = null;
        }
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.initializeUserOptions();
            if (yield this.keycloakService.isLoggedIn()) {
                this.userProfile = yield this.keycloakService.loadUserProfile();
            }
            // this.isLoggedIn = await this.keycloakService.isLoggedIn();
            // if (this.isLoggedIn) {
            //     this.userProfile = await this.keycloakService.loadUserProfile();
            //     console.log(this.userProfile);
            // }
        });
    }
    login() {
        this.keycloakService.login();
    }
    logout() {
        this.keycloakService.logout();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](keycloak_angular__WEBPACK_IMPORTED_MODULE_3__.KeycloakService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 3, consts: [[1, "position-relative"], [1, "toolbarMenu", 2, "display", "none"], ["routerLinkActive", "toolbarMenuItemActive", "class", "toolbarMenuItem", 3, "routerLink", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], ["class", "toolbarMenuItem", 3, "click", 4, "ngIf"], [1, "p-3", "mt-menu"], ["routerLinkActive", "toolbarMenuItemActive", 1, "toolbarMenuItem", 3, "routerLink", "routerLinkActiveOptions"], [1, "toolbarMenuItem", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AppComponent_a_2_Template, 2, 4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AppComponent_a_3_Template, 2, 0, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AppComponent_a_4_Template, 2, 0, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.indexes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userProfile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.userProfile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _gfbio_gfbio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gfbio/gfbio.component */ 1194);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-input/search-input.component */ 9672);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-result/search-result.component */ 3424);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 398);
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pagination/pagination.component */ 3304);
/* harmony import */ var _suggestion_window_suggestion_window_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./suggestion-window/suggestion-window.component */ 3684);
/* harmony import */ var _filters_filter_box_filter_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filters/filter-box/filter-box.component */ 5411);
/* harmony import */ var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! jw-angular-pagination */ 1161);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-spinner */ 2777);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _citation_citation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./citation/citation.component */ 4444);
/* harmony import */ var _filters_filters_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filters/filters.component */ 6079);
/* harmony import */ var _filters_other_filters_other_filters_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./filters/other-filters/other-filters.component */ 7172);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reflect-metadata */ 3174);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _filters_filter_date_picker_filter_date_picker_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./filters/filter-date-picker/filter-date-picker.component */ 5035);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./material-module */ 8696);
/* harmony import */ var _basket_dialog_basket_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./basket-dialog/basket-dialog.component */ 378);
/* harmony import */ var _search_result_result_item_result_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./search-result/result-item/result-item.component */ 7158);
/* harmony import */ var _search_result_description_description_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./search-result/description/description.component */ 6246);
/* harmony import */ var _context_box_context_box_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./context-box/context-box.component */ 1752);
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./map/map.component */ 2761);
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! keycloak-angular */ 2715);
/* harmony import */ var _utils_app_init__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./utils/app.init */ 6858);






























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ providers: [{
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_20__.APP_INITIALIZER,
            useFactory: _utils_app_init__WEBPACK_IMPORTED_MODULE_19__.initializeKeycloak,
            multi: true,
            deps: [keycloak_angular__WEBPACK_IMPORTED_MODULE_21__.KeycloakService]
        }, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.Title], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            keycloak_angular__WEBPACK_IMPORTED_MODULE_21__.KeycloakAngularModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_25__.FontAwesomeModule,
            jw_angular_pagination__WEBPACK_IMPORTED_MODULE_26__.JwPaginationModule,
            ngx_spinner__WEBPACK_IMPORTED_MODULE_27__.NgxSpinnerModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule,
            _material_module__WEBPACK_IMPORTED_MODULE_13__.MaterialModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _gfbio_gfbio_component__WEBPACK_IMPORTED_MODULE_2__.GfbioComponent,
        _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_3__.SearchInputComponent,
        _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_4__.SearchResultComponent,
        _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__.PaginationComponent,
        _suggestion_window_suggestion_window_component__WEBPACK_IMPORTED_MODULE_6__.SuggestionWindowComponent,
        _filters_filter_box_filter_box_component__WEBPACK_IMPORTED_MODULE_7__.FilterBoxComponent,
        _citation_citation_component__WEBPACK_IMPORTED_MODULE_8__.CitationComponent,
        _filters_filters_component__WEBPACK_IMPORTED_MODULE_9__.FiltersComponent,
        _filters_other_filters_other_filters_component__WEBPACK_IMPORTED_MODULE_10__.OtherFiltersComponent,
        _filters_filter_date_picker_filter_date_picker_component__WEBPACK_IMPORTED_MODULE_12__.FilterDatePickerComponent,
        _basket_dialog_basket_dialog_component__WEBPACK_IMPORTED_MODULE_14__.BasketDialogComponent,
        _search_result_result_item_result_item_component__WEBPACK_IMPORTED_MODULE_15__.ResultItemComponent,
        _search_result_description_description_component__WEBPACK_IMPORTED_MODULE_16__.DescriptionComponent,
        _context_box_context_box_component__WEBPACK_IMPORTED_MODULE_17__.ContextBoxComponent,
        _map_map_component__WEBPACK_IMPORTED_MODULE_18__.MapComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        keycloak_angular__WEBPACK_IMPORTED_MODULE_21__.KeycloakAngularModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_25__.FontAwesomeModule,
        jw_angular_pagination__WEBPACK_IMPORTED_MODULE_26__.JwPaginationModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_27__.NgxSpinnerModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule,
        _material_module__WEBPACK_IMPORTED_MODULE_13__.MaterialModule] }); })();


/***/ }),

/***/ 378:
/*!**********************************************************!*\
  !*** ./src/app/basket-dialog/basket-dialog.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasketDialogComponent": () => (/* binding */ BasketDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _models_basket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/basket */ 4918);
/* harmony import */ var _models_result_hit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/result/hit */ 1473);
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! class-transformer */ 4486);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_remote_node_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/remote/node.service */ 2287);
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! keycloak-angular */ 2715);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 89);













function BasketDialogComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 15);
} }
function BasketDialogComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BasketDialogComponent_table_12_tr_10_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div");
} }
function BasketDialogComponent_table_12_tr_10_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r8.textTooltipBasketDataAvailable);
} }
function BasketDialogComponent_table_12_tr_10_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r10.textTooltipBasketDataNotAvailable);
} }
function BasketDialogComponent_table_12_tr_10_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div");
} }
function BasketDialogComponent_table_12_tr_10_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r13.textTooltipBasketMetadataAvailable);
} }
function BasketDialogComponent_table_12_tr_10_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r15.textTooltipBasketMetadataNotAvailable);
} }
function BasketDialogComponent_table_12_tr_10_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div");
} }
function BasketDialogComponent_table_12_tr_10_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r18.textTooltipBasketMultimediaAvailable);
} }
function BasketDialogComponent_table_12_tr_10_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r20.textTooltipBasketMultimediaNotAvailable);
} }
function BasketDialogComponent_table_12_tr_10_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, BasketDialogComponent_table_12_tr_10_div_4_Template, 1, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, BasketDialogComponent_table_12_tr_10_ng_template_5_Template, 2, 1, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, BasketDialogComponent_table_12_tr_10_ng_template_7_Template, 2, 1, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, BasketDialogComponent_table_12_tr_10_div_9_Template, 1, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, BasketDialogComponent_table_12_tr_10_ng_template_10_Template, 2, 1, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, BasketDialogComponent_table_12_tr_10_ng_template_12_Template, 2, 1, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, BasketDialogComponent_table_12_tr_10_div_14_Template, 1, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, BasketDialogComponent_table_12_tr_10_ng_template_15_Template, 2, 1, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, BasketDialogComponent_table_12_tr_10_ng_template_17_Template, 2, 1, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BasketDialogComponent_table_12_tr_10_Template_button_click_20_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22); const item_r5 = restoredCtx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r21.remove(item_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](13);
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](16);
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("matTooltip", item_r5.getTitle());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", item_r5.getTitle(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r5.getLinkage().getData())("ngIfThen", _r7)("ngIfElse", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r5.getLinkage().getMetadata())("ngIfThen", _r12)("ngIfElse", _r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r5.getLinkage().getMultimedia())("ngIfThen", _r17)("ngIfElse", _r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r4.textTooltipBasketRemove);
} }
function BasketDialogComponent_table_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Your selected datasets ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, BasketDialogComponent_table_12_tr_10_Template, 23, 12, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.data);
} }
function BasketDialogComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.textTooltipBasketEmpty, " ");
} }
const _c0 = function (a0) { return [a0]; };
class BasketDialogComponent {
    constructor(dialogRef, data, nodeService, keycloakService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.nodeService = nodeService;
        this.keycloakService = keycloakService;
        // text for mouseover
        this.textTooltipBasketVATvisualizable = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.textTooltipBasketVATvisualizable;
        this.textTooltipBasketVATnotVisualizable = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.textTooltipBasketVATnotVisualizable;
        this.textTooltipBasketDataAvailable = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.textTooltipBasketDataAvailable;
        this.textTooltipBasketDataNotAvailable = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.textTooltipBasketDataNotAvailable;
        this.textTooltipBasketMetadataAvailable = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.textTooltipBasketMetadataAvailable;
        this.textTooltipBasketMetadataNotAvailable = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.textTooltipBasketMetadataNotAvailable;
        this.textTooltipBasketMultimediaAvailable = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.textTooltipBasketMultimediaAvailable;
        this.textTooltipBasketMultimediaNotAvailable = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.textTooltipBasketMultimediaNotAvailable;
        this.textTooltipBasketRemove = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.textTooltipBasketRemove;
        this.textTooltipBasketRemoveSure = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.textTooltipBasketRemoveSure;
        this.textTooltipBasketEmpty = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.textTooltipBasketEmpty;
        this.spinner = false;
        this.savedData = [];
        this.basketId = ``;
    }
    ngOnInit() {
        this.initializeUserOptions();
        this.basketId = '';
    }
    remove(item) {
        const index = this.data.indexOf(item);
        if (index >= 0) {
            this.data.splice(index, 1);
        }
    }
    downloadZip() {
        this.spinner = true;
        const basket = {
            basket: this.data
        };
        // console.log('downloadZip | this.data');
        // console.log(this.data);
        // console.log('downloadZip | basket');
        // console.log(basket);
        this.nodeService.basketDownload(basket).subscribe(data => this.downloadSuccess(data), err => this.downloadFailed());
    }
    downloadFailed() {
        alert(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.textAlertBasketErrorDownload);
        this.spinner = false;
    }
    downloadSuccess(blob) {
        const a = document.createElement('a');
        const objectUrl = URL.createObjectURL(blob);
        a.href = objectUrl;
        a.click();
        URL.revokeObjectURL(objectUrl);
        this.spinner = false;
    }
    sendBasketToCollectionService() {
        this.spinner = true;
        const basket = {
            basket: this.data
        };
        console.log('sendBasketToCollectionService | this.data');
        // console.log(this.data);
        // console.log('sendBasketToCollectionService | basket');
        // console.log(basket);
        this.nodeService.postBasketToCollection(basket, this.user).subscribe(data => this.sendCollectionSuccess(data), err => this.sendCollectionFailed(err));
    }
    sendCollectionFailed(err) {
        console.log('sendCollectionFailed | err');
        console.log(err);
        this.spinner = false;
    }
    sendCollectionSuccess(data) {
        // const a = document.createElement('a');
        // const objectUrl = URL.createObjectURL(blob);
        // a.href = objectUrl;
        // a.click();
        // URL.revokeObjectURL(objectUrl);
        console.log('sendCollectionSuccess | data');
        console.log(data);
        this.spinner = false;
    }
    emptyBasket() {
        const r = confirm('Are you sure that you want to empty the basket?');
        // console.log('emptyBasket | this.data');
        // console.log(this.data);
        if (r === true) {
            this.data.splice(0, this.data.length);
            // this.saveBasket();
        }
    }
    saveBasket() {
        const basket = new _models_basket__WEBPACK_IMPORTED_MODULE_1__.Basket();
        basket.setContent(this.data);
        // console.log('saveBaseket | this.data');
        // console.log(this.data);
        basket.setUserId(this.user);
        this.nodeService.addToBasket(basket).subscribe(val => {
            this.basketId = JSON.stringify(val.basketId);
        });
        this.savedData = this.data.slice(0);
    }
    checkSaveButton() {
        if (this.data.length === 0) {
            return true;
        }
        return JSON.stringify(this.data) === JSON.stringify(this.savedData);
    }
    visualize() {
        alert(this.basketId);
    }
    initializeUserOptions() {
        try {
            this.user = this.keycloakService.getUsername();
            if (this.user !== undefined) {
                this.nodeService.readFromBasket(this.user).subscribe(result => {
                    var _a, _b;
                    if (result.length !== 0) {
                        const basket = (_b = JSON.parse((_a = result[0]) === null || _a === void 0 ? void 0 : _a.basketcontent)) === null || _b === void 0 ? void 0 : _b.selected;
                        basket.forEach(item => {
                            const hit = (0,class_transformer__WEBPACK_IMPORTED_MODULE_5__.plainToClass)(_models_result_hit__WEBPACK_IMPORTED_MODULE_2__.Hit, item);
                            this.savedData.push(hit);
                        });
                    }
                });
            }
            else {
                this.user = null;
            }
        }
        catch (_a) {
            this.user = null;
        }
    }
}
BasketDialogComponent.ɵfac = function BasketDialogComponent_Factory(t) { return new (t || BasketDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_remote_node_service__WEBPACK_IMPORTED_MODULE_3__.NodeService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](keycloak_angular__WEBPACK_IMPORTED_MODULE_7__.KeycloakService)); };
BasketDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: BasketDialogComponent, selectors: [["app-basket-dialog"]], decls: 27, vars: 10, consts: [[1, "position-relative"], ["class", "bg-spinner", 4, "ngIf"], ["class", "Absolute-Center", 4, "ngIf"], ["mat-dialog-title", "", 1, "flex-container"], [1, "dialog-title"], ["mat-button", "", "cdkFocusInitial", "", 1, "close-icon", 3, "mat-dialog-close"], ["mat-dialog-content", ""], [1, "p-4"], ["class", "mat-table", "id", "table", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], ["align", "end", 1, "mt-3"], [1, "btn", "btn-danger", "mr-3", 3, "disabled", "click"], ["inline", "true"], [1, "btn", "btn-primary", "btn-blue", "mr-3", 3, "disabled", "click"], [1, "btn", "btn-success", 3, "disabled", "click"], [1, "bg-spinner"], [1, "Absolute-Center"], ["src", "assets/gif/loading-icon.jpg", "alt", "", "width", "50"], ["id", "table", 1, "mat-table"], [1, "mat-header-row"], ["scope", "col", 1, "mat-header-cell"], ["class", "mat-row", 4, "ngFor", "ngForOf"], [1, "mat-row"], [1, "mat-cell"], [1, "overFlowText", "w-200p", 3, "innerHTML", "matTooltip"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlockData", ""], ["elseBlockData", ""], ["thenBlockMeta", ""], ["elseBlockMeta", ""], ["thenBlockMedia", ""], ["elseBlockMedia", ""], [1, "iconButton", 3, "click"], [1, "text-danger", 3, "matTooltip"], [1, "px-1", 3, "matTooltip"], [1, "fas", "fa-table"], [1, "half-opacity", "px-1", 3, "matTooltip"], [1, "fas", "fa-info-circle"], [1, "fas", "fa-photo-video"], [1, "text-danger"]], template: function BasketDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, BasketDialogComponent_div_1_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, BasketDialogComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Dataset Basket ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, BasketDialogComponent_table_12_Template, 11, 1, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, BasketDialogComponent_div_13_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-dialog-actions", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BasketDialogComponent_Template_button_click_15_listener() { return ctx.emptyBasket(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " Empty the basket ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BasketDialogComponent_Template_button_click_19_listener() { return ctx.downloadZip(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "download");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BasketDialogComponent_Template_button_click_23_listener() { return ctx.sendBasketToCollectionService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, " visualize in VAT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.spinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.spinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mat-dialog-close", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c0, ctx.data));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data.length !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.data.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.data.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.data.length === 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNrZXQtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 4444:
/*!************************************************!*\
  !*** ./src/app/citation/citation.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CitationComponent": () => (/* binding */ CitationComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _models_result_hit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/result/hit */ 1473);







function CitationComponent_div_8_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const creator_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", creator_r5, ", ");
} }
function CitationComponent_div_8_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r4.result.getDOI(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.result.getDOI());
} }
function CitationComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CitationComponent_div_8_span_1_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CitationComponent_div_8_a_5_Template, 2, 2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.result.getCreator());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", ctx_r0.result.getPubYear(), "):");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.result.getTitle(), ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.result.getDOI() !== "undefined");
} }
function CitationComponent_div_9_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const creator_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", creator_r8, ", ");
} }
function CitationComponent_div_9_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r7.result.getDOI(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.result.getDOI());
} }
function CitationComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CitationComponent_div_9_span_1_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CitationComponent_div_9_a_5_Template, 2, 2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.result.getCreator());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", ctx_r1.result.getPubYear(), "):");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.result.getTitle(), ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.result.getDOI() !== "undefined");
} }
function CitationComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.result.getSource(), " ");
} }
class CitationComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
        this.result = this.data.getCitation();
    }
}
CitationComponent.ɵfac = function CitationComponent_Factory(t) { return new (t || CitationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA)); };
CitationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CitationComponent, selectors: [["app-citation"]], decls: 11, vars: 4, consts: [["mat-dialog-title", "", 1, "flex-container"], [1, "dialog-title"], ["mat-button", "", 1, "close-icon", 3, "mat-dialog-close"], [1, "mat-typography"], [4, "ngIf"], ["class", "font-weight-bold", 4, "ngFor", "ngForOf"], [1, "font-weight-bold"], ["target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 3, "href"]], template: function CitationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Citation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-dialog-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CitationComponent_div_8_Template, 6, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CitationComponent_div_9_Template, 6, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CitationComponent_div_10_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.result.getDataCenter() == "PANGAEA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.result.getDataCenter() == "GATERSLEBEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.result.getSource() !== undefined);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaXRhdGlvbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 1752:
/*!******************************************************!*\
  !*** ./src/app/context-box/context-box.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContextBoxComponent": () => (/* binding */ ContextBoxComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_remote_node_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/remote/node.service */ 2287);
/* harmony import */ var _services_local_communication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/local/communication.service */ 425);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ 89);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ 9975);











const _c0 = ["contentEditable"];
function ContextBoxComponent_div_0_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r2.label, " ");
} }
function ContextBoxComponent_div_0_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", ctx_r5.infoText);
} }
function ContextBoxComponent_div_0_div_3_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r2.description, " ");
} }
function ContextBoxComponent_div_0_div_3_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " URI: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", data_r2.uri, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r2.uri, " ");
} }
function ContextBoxComponent_div_0_div_3_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Source: ", data_r2.sourceTerminology, " ");
} }
function ContextBoxComponent_div_0_div_3_div_9_span_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ContextBoxComponent_div_0_div_3_div_9_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ContextBoxComponent_div_0_div_3_div_9_span_2_span_1_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const synonym_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r20 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", synonym_r19, "");
} }
function ContextBoxComponent_div_0_div_3_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Synonyms: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ContextBoxComponent_div_0_div_3_div_9_span_2_Template, 3, 2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", data_r2.synonyms);
} }
function ContextBoxComponent_div_0_div_3_div_10_span_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ContextBoxComponent_div_0_div_3_div_10_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ContextBoxComponent_div_0_div_3_div_10_span_2_span_1_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const commonNames_r24 = ctx.$implicit;
    const i_r25 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r25 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", commonNames_r24, "");
} }
function ContextBoxComponent_div_0_div_3_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Synonyms: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ContextBoxComponent_div_0_div_3_div_10_span_2_Template, 3, 2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", data_r2.commonNames);
} }
function ContextBoxComponent_div_0_div_3_div_12_mat_spinner_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-spinner", 18);
} }
function ContextBoxComponent_div_0_div_3_div_12_mat_icon_13_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ContextBoxComponent_div_0_div_3_div_12_mat_icon_13_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); ctx_r30.showSearchInformation = !ctx_r30.showSearchInformation; return ctx_r30.icon == "expand_less" ? ctx_r30.icon = "expand_more" : ctx_r30.icon = "expand_less"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r29.icon, " ");
} }
function ContextBoxComponent_div_0_div_3_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ContextBoxComponent_div_0_div_3_div_12_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34); const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r32.narrow(data_r2.sourceTerminology, data_r2.uri); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "close_fullscreen");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Narrower ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ContextBoxComponent_div_0_div_3_div_12_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34); const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r35.broad(data_r2.sourceTerminology, data_r2.uri); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "zoom_out_map");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Broader ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ContextBoxComponent_div_0_div_3_div_12_mat_spinner_12_Template, 1, 0, "mat-spinner", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ContextBoxComponent_div_0_div_3_div_12_mat_icon_13_Template, 2, 1, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.loading && data_r2.uri == ctx_r11.searchUri);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r11.loading && data_r2.uri == ctx_r11.searchUri && ctx_r11.searchData != undefined && ctx_r11.searchData.length > 0);
} }
function ContextBoxComponent_div_0_div_3_div_13_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dblclick", function ContextBoxComponent_div_0_div_3_div_13_div_3_div_1_Template_span_dblclick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44); const data_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r42.onDoubleClick(data_r39.label); })("click", function ContextBoxComponent_div_0_div_3_div_13_div_3_div_1_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44); const data_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r45.onClick(data_r39.uri); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("className", ctx_r41.searchClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r39.label, " ");
} }
function ContextBoxComponent_div_0_div_3_div_13_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ContextBoxComponent_div_0_div_3_div_13_div_3_div_1_Template, 3, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", data_r39.label != undefined);
} }
function ContextBoxComponent_div_0_div_3_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ContextBoxComponent_div_0_div_3_div_13_div_3_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r12.searchData);
} }
function ContextBoxComponent_div_0_div_3_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-divider", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("inset", true);
} }
function ContextBoxComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ContextBoxComponent_div_0_div_3_div_4_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ContextBoxComponent_div_0_div_3_div_5_Template, 3, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ContextBoxComponent_div_0_div_3_div_6_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ContextBoxComponent_div_0_div_3_div_7_Template, 4, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ContextBoxComponent_div_0_div_3_div_8_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ContextBoxComponent_div_0_div_3_div_9_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ContextBoxComponent_div_0_div_3_div_10_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ContextBoxComponent_div_0_div_3_div_12_Template, 14, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ContextBoxComponent_div_0_div_3_div_13_Template, 4, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ContextBoxComponent_div_0_div_3_div_14_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", data_r2.label != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r3 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", data_r2.description != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", data_r2.uri != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", data_r2.sourceTerminology != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", data_r2.synonyms != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", data_r2.commonNames != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", data_r2.internal != undefined && data_r2.internal == "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.searchData != undefined && ctx_r1.searchData.length > 0 && ctx_r1.showSearchInformation && !ctx_r1.loading && data_r2.uri == ctx_r1.searchUri);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r3 < ctx_r1.displayData.length - 1);
} }
function ContextBoxComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ContextBoxComponent_div_0_div_3_Template, 15, 10, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.displayData);
} }
class ContextBoxComponent {
    constructor(nodeService, communicationService) {
        this.nodeService = nodeService;
        this.communicationService = communicationService;
        this.term = "placeholder";
        this.termData = [];
        this.displayData = [];
        this.searchData = [];
        this.singleClick = true;
        this.loading = false;
        this.showSearchInformation = false;
        this.icon = "expand_less";
        this.searchClass = "linkWidgetBlue";
        this.infoText = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.textTSWidgetInfo;
    }
    ngOnInit() {
        this.filter(this.term);
        // Make the Term + the Data to Display UpperCase
        this.term = this.term[0].toUpperCase() + this.term.slice(1);
        if (this.displayData != undefined) {
            this.displayData.forEach(function (value) {
                value.label = value.label[0].toUpperCase() + value.label.slice(1);
            });
        }
    }
    /* We use the CommunicationService to forward the clicked
     * key to the search bar
     */
    onDoubleClick(label) {
        this.singleClick = false;
        var subject = this.communicationService.getSearchKey();
        subject.next(subject.getValue() + " " + label);
        this.searchClass = "linkWidgetBlue";
    }
    /* In onClick we check if the user only clicked once
     * this is done with a timeout set to 200ms
     * if the user presses again in that time frame we don't
     * open the window/link
     */
    onClick(url) {
        this.singleClick = true;
        this.searchClass = "linkWidgetBlue unselectable";
        setTimeout(() => {
            if (this.singleClick) {
                window.open(url, "_blank");
                // alternative: window.location.href = url;
                this.searchClass = "linkWidgetBlue";
            }
        }, 200);
    }
    narrow(source, uri) {
        this.showSearchInformation = false;
        this.searchData = undefined;
        this.searchUri = uri;
        this.loading = true;
        this.nodeService.narrow(source, uri).subscribe(value => {
            if (value !== undefined) {
                this.searchData = value.results;
                this.loading = false;
                this.showSearchInformation = true;
                this.icon = "expand_less";
            }
        });
    }
    broad(source, uri) {
        this.showSearchInformation = false;
        this.searchData = undefined;
        this.searchUri = uri;
        this.loading = true;
        this.nodeService.broad(source, uri).subscribe(value => {
            if (value !== undefined) {
                this.searchData = value.results;
                this.loading = false;
                this.showSearchInformation = true;
                this.icon = "expand_less";
            }
        });
    }
    filter(term) {
        for (var t in this.termData) {
            // First check the labels for our term
            if ((this.termData[t].label.toString().toLowerCase() + 's').includes(term.toLowerCase())) {
                this.displayData.push(this.termData[t]);
            }
            else 
            /* Now check the synonyms/commonNames for the term,
             * if found, add it to the list of displayed data
             */
            if (this.termData[t].synonyms != undefined) {
                for (var syn in this.termData[t].synonyms) {
                    if ((this.termData[t].synonyms[syn].toString().toLowerCase() + 's').includes(term.toLowerCase())) {
                        this.displayData.push(this.termData[t]);
                        break;
                    }
                }
            }
            else if (this.termData[t].commonNames != undefined) {
                for (var syn in this.termData[t].commonNames) {
                    if ((this.termData[t].commonNames[syn].toString().toLowerCase() + 's').includes(term.toLowerCase())) {
                        this.displayData.push(this.termData[t]);
                        break;
                    }
                }
            }
        }
    }
}
ContextBoxComponent.ɵfac = function ContextBoxComponent_Factory(t) { return new (t || ContextBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_remote_node_service__WEBPACK_IMPORTED_MODULE_1__.NodeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_local_communication_service__WEBPACK_IMPORTED_MODULE_2__.CommunicationService)); };
ContextBoxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ContextBoxComponent, selectors: [["app-context-box"]], viewQuery: function ContextBoxComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.ele = _t.first);
    } }, inputs: { term: "term", termData: "termData" }, decls: 1, vars: 1, consts: [["style", "position: absolute; color: grey;", 4, "ngIf"], [2, "position", "absolute", "color", "grey"], [1, "content-box"], [4, "ngFor", "ngForOf"], [1, "row"], [1, "col-6"], [4, "ngIf"], ["class", "col-2 offset-md-4", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "mb-2 mt-3", 4, "ngIf"], [1, "col-2", "offset-md-4"], ["matTooltipClass", "result-item-tooltip", "matTooltipPosition", "below", 1, "unselectable", 2, "color", "var(--darkgrey)", "font-size", "33px", 3, "matTooltip"], ["target", "_blank", 1, "linkWidgetBlue", 3, "href"], [1, "col-4"], ["mat-flat-button", "", 1, "btn-blue", 3, "click"], [1, "col-2", "offset-md-2"], ["diameter", "35", 4, "ngIf"], ["style", "font-size: 35px;", "class", "unselectable", 3, "click", 4, "ngIf"], ["diameter", "35"], [1, "unselectable", 2, "font-size", "35px", 3, "click"], [1, "inner-box", "ml-n1"], [3, "className", "dblclick", "click"], [1, "mb-2", "mt-3"], [3, "inset"]], template: function ContextBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ContextBoxComponent_div_0_Template, 4, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.displayData != undefined && ctx.displayData.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatSpinner, _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__.MatDivider], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250ZXh0LWJveC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 5411:
/*!************************************************************!*\
  !*** ./src/app/filters/filter-box/filter-box.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterBoxComponent": () => (/* binding */ FilterBoxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_local_communication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/local/communication.service */ 425);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);




const _c0 = function (a0) { return { "d-none": a0 }; };
function FilterBoxComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FilterBoxComponent_div_1_Template_input_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const filter_r2 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.sendFacet(filter_r2.getKey(), ctx_r4.filters.getId() + "Facet"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filter_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, !ctx_r0.showLess(i_r3)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("for", "id-", filter_r2.getKey(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "id-", filter_r2.getKey(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", filter_r2.getChecked());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", filter_r2.getKey(), " (", filter_r2.getDocCount(), ")");
} }
function FilterBoxComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FilterBoxComponent_div_2_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.showMore = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "... show more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FilterBoxComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FilterBoxComponent_div_2_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r10.showMore = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "... show less ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FilterBoxComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FilterBoxComponent_div_2_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FilterBoxComponent_div_2_div_2_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.showMore);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.showMore);
} }
class FilterBoxComponent {
    constructor(communicationService) {
        this.communicationService = communicationService;
        this.chosenFacet = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.showMore = false;
    }
    ngOnInit() {
        const filter = this.communicationService.getFilter();
        if (filter !== undefined) {
            filter.forEach(result => {
                this.filters.getFacets().forEach(item => {
                    this.checkFilter(item, result, this.filters.getId() + 'Facet');
                });
            });
        }
    }
    showLess(i) {
        if (this.showMore === true) {
            return true;
        }
        return i < 5;
    }
    checkFilter(item, value, facet) {
        if (value.hasOwnProperty('term')) {
            if (item.getKey() === value.term[facet]) {
                item.setChecked(true);
            }
        }
    }
    sendFacet(key, facet) {
        const keyAndFacet = [key, facet];
        this.chosenFacet.emit(keyAndFacet);
    }
}
FilterBoxComponent.ɵfac = function FilterBoxComponent_Factory(t) { return new (t || FilterBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_local_communication_service__WEBPACK_IMPORTED_MODULE_0__.CommunicationService)); };
FilterBoxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FilterBoxComponent, selectors: [["app-filter-box"]], inputs: { filters: "filters" }, outputs: { chosenFacet: "chosenFacet" }, decls: 3, vars: 2, consts: [[4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "ngClass"], [1, "pl-2", "linkBlue", "m-0", 3, "for"], ["type", "checkbox", 3, "id", "checked", "click"], ["class", "linkBlue", 3, "click", 4, "ngIf"], [1, "linkBlue", 3, "click"]], template: function FilterBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FilterBoxComponent_div_1_Template, 5, 8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FilterBoxComponent_div_2_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filters.getFacets());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.filters.getFacets()) == null ? null : tmp_1_0.length) > 5);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXItYm94LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 5035:
/*!****************************************************************************!*\
  !*** ./src/app/filters/filter-date-picker/filter-date-picker.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterDatePickerComponent": () => (/* binding */ FilterDatePickerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ 9910);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);











class FilterDatePickerComponent {
    constructor(breakpointObserver) {
        this.chosenDate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.openChart = true;
        breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.Breakpoints.HandsetLandscape,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.Breakpoints.HandsetPortrait
        ]).subscribe(result => {
            if (result.matches) {
                this.openChart = false;
            }
        });
    }
    ngOnInit() {
        // tslint:disable-next-line:forin
        for (const i in this.filterValues) {
            this.datePicker.inputs.forEach((input) => {
                if (this.filterValues[i] === input.name) {
                    const value = Object.values(Object.values(this.filters[i].range)[0])[0];
                    const key = Object.keys(Object.values(this.filters[i].range)[0])[0];
                    if (key === 'gte') {
                        this.start = new Date(value);
                        this.startFormat = new Date(value);
                    }
                    if (key === 'lte') {
                        this.end = new Date(value);
                        this.endFormat = new Date(value);
                    }
                }
            });
        }
    }
    setDate(dateValue, type) {
        let date = dateValue.value;
        const moment = moment__WEBPACK_IMPORTED_MODULE_0__;
        if (this.datePicker.type === 'collection') {
            const str = moment(date).format();
            const lastIndex = str.lastIndexOf('+');
            date = str.substring(0, lastIndex);
        }
        else {
            date = moment(date).format('YYYY');
        }
        if (type === 'start') {
            this.startFormat = date;
        }
        else {
            this.endFormat = date;
        }
    }
    applyDate() {
        const typeAndValues = [this.startFormat, this.endFormat];
        this.chosenDate.emit(typeAndValues);
    }
}
FilterDatePickerComponent.ɵfac = function FilterDatePickerComponent_Factory(t) { return new (t || FilterDatePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.BreakpointObserver)); };
FilterDatePickerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FilterDatePickerComponent, selectors: [["app-filter-date-picker"]], inputs: { datePicker: "datePicker", filters: "filters", filterValues: "filterValues" }, outputs: { chosenDate: "chosenDate" }, decls: 32, vars: 9, consts: [[1, "mt-3", 3, "expanded"], [1, "card-header", 2, "height", "40px"], [1, "row"], [1, "col-1", "col-md-1"], [1, "filterIcon"], [1, "col-auto", "col-xs-auto", "col-md-auto"], [1, "pt-2"], [1, "col-12", "col-xs-12", "col-md-12"], ["appearance", "fill"], ["matInput", "", 3, "matDatepicker", "ngModel", "ngModelChange", "dateChange"], ["matSuffix", "", 3, "for"], ["startDate", ""], [1, "col-12", "col-xs-12", "col-md-8"], ["EndDate", ""], [1, "col-12", "col-xs-12", "col-md-auto-apply"], ["type", "submit", 1, "btn", "btn-secondary", 3, "click"]], template: function FilterDatePickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-expansion-panel-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "MM/DD/YYYY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FilterDatePickerComponent_Template_input_ngModelChange_16_listener($event) { return ctx.start = $event; })("dateChange", function FilterDatePickerComponent_Template_input_dateChange_16_listener($event) { return ctx.setDate($event, "start"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "mat-datepicker-toggle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "mat-datepicker", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "MM/DD/YYYY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FilterDatePickerComponent_Template_input_ngModelChange_25_listener($event) { return ctx.end = $event; })("dateChange", function FilterDatePickerComponent_Template_input_dateChange_25_listener($event) { return ctx.setDate($event, "end"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "mat-datepicker-toggle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "mat-datepicker", null, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FilterDatePickerComponent_Template_button_click_30_listener() { return ctx.applyDate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("expanded", ctx.openChart);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.datePicker.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.datePicker.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r0)("ngModel", ctx.start);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r1)("ngModel", ctx.end);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r1);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__.MatExpansionPanelHeader, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepicker], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXItZGF0ZS1waWNrZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6079:
/*!**********************************************!*\
  !*** ./src/app/filters/filters.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltersComponent": () => (/* binding */ FiltersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ 9910);
/* harmony import */ var _services_local_communication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/local/communication.service */ 425);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ 1196);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _filter_box_filter_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-box/filter-box.component */ 5411);
/* harmony import */ var _other_filters_other_filters_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./other-filters/other-filters.component */ 7172);
/* harmony import */ var _filter_date_picker_filter_date_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-date-picker/filter-date-picker.component */ 5035);












function FiltersComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-chip", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("removed", function FiltersComponent_div_11_Template_mat_chip_removed_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const i_r5 = restoredCtx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.removeFilter(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selectable", false)("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r4, " ");
} }
function FiltersComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-expansion-panel", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-expansion-panel-header", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "app-filter-box", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("chosenFacet", function FiltersComponent_div_12_Template_app_filter_box_chosenFacet_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r10.sendFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("expanded", ctx_r1.openChart);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r8.getIcon());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r8.getTitle(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("filters", item_r8);
} }
function FiltersComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-expansion-panel", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-expansion-panel-header", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "app-other-filters", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("chosenFilter", function FiltersComponent_div_13_Template_app_other_filters_chosenFilter_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.sendFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("expanded", ctx_r2.openChart);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r12.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r12.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("filter", item_r12.parameters)("filterValues", ctx_r2.filterValues);
} }
function FiltersComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-filter-date-picker", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("chosenDate", function FiltersComponent_div_14_Template_app_filter_date_picker_chosenDate_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const datePicker_r15 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r16.applyDate($event, datePicker_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const datePicker_r15 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("datePicker", datePicker_r15)("filters", ctx_r3.chosenFilter)("filterValues", ctx_r3.filterValues);
} }
class FiltersComponent {
    constructor(breakpointObserver, communicationService) {
        this.communicationService = communicationService;
        this.chosenFilter = [];
        this.filterValues = [];
        this.filters = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.openChart = true;
        breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.Breakpoints.HandsetLandscape,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.Breakpoints.HandsetPortrait
        ]).subscribe(result => {
            if (result.matches) {
                this.openChart = false;
            }
        });
    }
    ngOnChanges(changes) {
        var _a, _b, _c;
        if (((_a = changes === null || changes === void 0 ? void 0 : changes.resetFilters) === null || _a === void 0 ? void 0 : _a.currentValue) === true) {
            this.clearAllFilters();
        }
        if (((_c = (_b = changes === null || changes === void 0 ? void 0 : changes.chosenFilter) === null || _b === void 0 ? void 0 : _b.currentValue) === null || _c === void 0 ? void 0 : _c.length) > 0) {
            this.setAllFilters(changes.chosenFilter.currentValue);
        }
    }
    sendFilter(keyAndFacet) {
        const key = keyAndFacet[0];
        const facet = keyAndFacet[1];
        const label = keyAndFacet[2];
        const facetObg = {};
        facetObg[facet] = key;
        let FilterExist = false;
        let index;
        this.chosenFilter.forEach((value, i) => {
            // @ts-ignore
            if ((value === null || value === void 0 ? void 0 : value.term[facet]) === key) {
                FilterExist = true;
                index = i;
            }
        });
        if (FilterExist) {
            this.chosenFilter.splice(Number(index), 1);
            this.filterValues.splice(Number(index), 1);
        }
        else {
            this.chosenFilter.push({ term: facetObg });
            if (label !== undefined) {
                this.filterValues.push(label);
            }
            else {
                this.filterValues.push(key);
            }
        }
        this.startSearching();
    }
    startSearching() {
        this.filters.emit(this.chosenFilter);
        // console.log(this.chosenFilter);
        // console.log(this.filterValues);
    }
    removeFilter(i) {
        this.communicationService.setRemovedFilter([this.filterValues[i]]);
        this.filterValues.splice(i, 1);
        this.chosenFilter.splice(i, 1);
        this.startSearching();
    }
    clearAllFilters() {
        this.communicationService.setRemovedFilter(this.filterValues);
        this.chosenFilter = [];
        this.filterValues = [];
        this.communicationService.setFilter(this.chosenFilter);
    }
    onClearAllFilters() {
        this.clearAllFilters();
        this.startSearching();
    }
    applyDate(dates, datePicker) {
        // console.log(dates);
        const start = dates[0];
        const end = dates[1];
        if (start !== undefined || end !== undefined) {
            // tslint:disable-next-line:forin
            for (const i in this.filterValues) {
                datePicker.inputs.forEach((input) => {
                    if (this.filterValues[i] === input.name) {
                        this.chosenFilter.splice(Number(i), 1);
                        this.filterValues.splice(Number(i), 1);
                    }
                });
            }
            if (datePicker.type === 'collection') {
                if (start !== undefined) {
                    const date = {
                        range: { maxDateTime: { gte: start } }
                    };
                    this.chosenFilter.push(date);
                    this.filterValues.push('Collection start date');
                }
                if (end !== undefined) {
                    const date = {
                        range: { minDateTime: { lte: end } }
                    };
                    this.chosenFilter.push(date);
                    this.filterValues.push('Collection end date');
                }
            }
            if (datePicker.type === 'publication') {
                if (start !== undefined) {
                    const date = {
                        range: { citation_yearFacet: { gte: start } }
                    };
                    this.chosenFilter.push(date);
                    this.filterValues.push('Publication start date');
                }
                if (end !== undefined) {
                    const date = {
                        range: { citation_yearFacet: { lte: end } }
                    };
                    this.chosenFilter.push(date);
                    this.filterValues.push('Publication end date');
                }
            }
            this.startSearching();
        }
    }
    setAllFilters(filterList) {
        this.communicationService.setFilter(filterList);
        this.filterValues = [];
        filterList.forEach(val => {
            if (val.term) {
                this.filterValues.push(val.term[Object.keys(val.term)[0]]);
            }
            else if (val.range) {
                let facetName = Object.keys(val.range)[0];
                let datePickerType, modifier;
                switch (facetName) {
                    case ("minDateTime"):
                        datePickerType = "Collection";
                        break;
                    case ("citation_yearFacet"):
                        datePickerType = "Publication";
                        break;
                }
                let modifierName = Object.keys(val.range[facetName])[0];
                switch (modifierName) {
                    case ("gte"):
                        modifier = "start";
                        break;
                    case ("lte"):
                        modifier = "end";
                        break;
                }
                this.filterValues.push(`${datePickerType} ${modifier} date`);
                this.result.getDatePickers().find(dp => dp.type == "collection")[modifier] = val.range[facetName][modifierName];
            }
        });
        this.chosenFilter = filterList;
    }
}
FiltersComponent.ɵfac = function FiltersComponent_Factory(t) { return new (t || FiltersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_local_communication_service__WEBPACK_IMPORTED_MODULE_0__.CommunicationService)); };
FiltersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: FiltersComponent, selectors: [["app-filters"]], inputs: { result: "result", chosenFilter: "chosenFilter", resetFilters: "resetFilters" }, outputs: { filters: "filters" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 15, vars: 5, consts: [[1, "mt-3", 3, "expanded"], [1, "card-header", 2, "height", "40px"], [1, "pt-2"], [1, "mb-3"], [1, "ml-2", "linkBlue", 3, "click"], [1, "my-3"], ["aria-label", "article selection", 1, "mat-chip-list-stacked"], [4, "ngFor", "ngForOf"], [1, "h-auto", 3, "selectable", "removable", "removed"], ["matChipRemove", ""], [1, "row"], [1, "col-1", "col-md-1"], [1, "filterIcon"], [1, "col-auto", "col-md-auto"], [3, "filters", "chosenFacet"], [3, "filter", "filterValues", "chosenFilter"], [3, "datePicker", "filters", "filterValues", "chosenDate"]], template: function FiltersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-expansion-panel-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " filters ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FiltersComponent_Template_span_click_7_listener() { return ctx.onClearAllFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Clear All Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-chip-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, FiltersComponent_div_11_Template, 5, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, FiltersComponent_div_12_Template, 12, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, FiltersComponent_div_13_Template, 12, 5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, FiltersComponent_div_14_Template, 2, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("expanded", ctx.openChart);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.filterValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.result == null ? null : ctx.result.getAggregations());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.result == null ? null : ctx.result.getOtherFilters());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.result == null ? null : ctx.result.getDatePickers());
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__.MatExpansionPanelHeader, _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChipList, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChipRemove, _filter_box_filter_box_component__WEBPACK_IMPORTED_MODULE_1__.FilterBoxComponent, _other_filters_other_filters_component__WEBPACK_IMPORTED_MODULE_2__.OtherFiltersComponent, _filter_date_picker_filter_date_picker_component__WEBPACK_IMPORTED_MODULE_3__.FilterDatePickerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXJzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 7172:
/*!******************************************************************!*\
  !*** ./src/app/filters/other-filters/other-filters.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtherFiltersComponent": () => (/* binding */ OtherFiltersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);



function OtherFiltersComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtherFiltersComponent_div_1_Template_input_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.sendFilter(item_r1.parameterValue, item_r1.parameterType, item_r1.label); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", item_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", item_r1.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.label, " ");
} }
class OtherFiltersComponent {
    constructor() {
        this.chosenFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
        this.filterValues.forEach((value) => {
            this.filter.forEach((item) => {
                if (value === item.label) {
                    // console.log(item.label);
                    item.checked = true;
                }
            });
        });
    }
    sendFilter(type, value, label) {
        const keyAndFilter = [type, value, label];
        this.chosenFilter.emit(keyAndFilter);
    }
}
OtherFiltersComponent.ɵfac = function OtherFiltersComponent_Factory(t) { return new (t || OtherFiltersComponent)(); };
OtherFiltersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OtherFiltersComponent, selectors: [["app-other-filters"]], inputs: { filter: "filter", filterValues: "filterValues" }, outputs: { chosenFilter: "chosenFilter" }, decls: 2, vars: 1, consts: [[4, "ngFor", "ngForOf"], [1, "pl-2", "linkBlue", "m-0", 3, "for"], ["type", "checkbox", 3, "id", "checked", "click"]], template: function OtherFiltersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OtherFiltersComponent_div_1_Template, 4, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filter);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdGhlci1maWx0ZXJzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 1194:
/*!******************************************!*\
  !*** ./src/app/gfbio/gfbio.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GfbioComponent": () => (/* binding */ GfbioComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_local_communication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/local/communication.service */ 425);
/* harmony import */ var _services_local_start_searching_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/local/start-searching.service */ 9932);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../map/map.component */ 2761);
/* harmony import */ var _filters_filters_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filters/filters.component */ 6079);
/* harmony import */ var _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search-input/search-input.component */ 9672);
/* harmony import */ var _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search-result/search-result.component */ 3424);









class GfbioComponent {
    constructor(communicationService, startSearchingService, route, location) {
        this.communicationService = communicationService;
        this.startSearchingService = startSearchingService;
        this.route = route;
        this.location = location;
        this.semantic = false;
        this.resetFilters = true;
        this.searchKey = [];
        this.from = 0;
        this.searchKeyFromQuery = "";
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        let filterFromUri = (_c = (_b = (_a = this.route.snapshot) === null || _a === void 0 ? void 0 : _a.queryParamMap) === null || _b === void 0 ? void 0 : _b.get("filter")) !== null && _c !== void 0 ? _c : "";
        if (filterFromUri != "") {
            this.filters = JSON.parse(decodeURIComponent(filterFromUri));
        }
        this.semantic = ((_e = (_d = this.route.snapshot) === null || _d === void 0 ? void 0 : _d.queryParamMap) === null || _e === void 0 ? void 0 : _e.get("s")) == "1";
        let queryFromUri = decodeURIComponent((_h = (_g = (_f = this.route.snapshot) === null || _f === void 0 ? void 0 : _f.queryParamMap) === null || _g === void 0 ? void 0 : _g.get("q")) !== null && _h !== void 0 ? _h : "");
        if (queryFromUri != "" && !queryFromUri.match(/(\<|\>)/)) {
            this.searchKeyFromQuery = queryFromUri;
            this.searchKey = [queryFromUri];
        }
        this.startSearching();
        this.communicationService.getResult().subscribe(value => {
            if (value !== undefined) {
                this.result = value;
            }
        });
    }
    mapItems(items) {
        this.markers = { items };
    }
    paginationClicked(from) {
        this.resetFilters = false;
        this.from = from;
        this.startSearching();
    }
    searchKeySubmitted(key) {
        this.resetFilters = true;
        this.searchKey = key[0];
        this.semantic = key[1];
        this.from = 0;
        this.filters = [];
        this.startSearching();
    }
    filterSubmitted(filters) {
        this.resetFilters = false;
        this.filters = filters;
        this.from = 0;
        this.startSearching();
    }
    startSearching() {
        this.setPageUrl();
        this.startSearchingService.startSearching(this.searchKey, this.semantic, this.from, this.filters);
    }
    setPageUrl() {
        var _a, _b;
        var parameters = [
            ((_a = this.searchKey) === null || _a === void 0 ? void 0 : _a.join("")) ? "q=" + this.searchKey.join("+") : null,
            this.semantic ? "s=1" : null,
            ((_b = this.filters) === null || _b === void 0 ? void 0 : _b.length) > 0 ? "filter=" + JSON.stringify(this.filters) : null,
        ].filter(p => p);
        this.location.go((parameters.length > 0) ? "?" + parameters.join("&") : "");
    }
}
GfbioComponent.ɵfac = function GfbioComponent_Factory(t) { return new (t || GfbioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_local_communication_service__WEBPACK_IMPORTED_MODULE_0__.CommunicationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_local_start_searching_service__WEBPACK_IMPORTED_MODULE_1__.StartSearchingService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.Location)); };
GfbioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: GfbioComponent, selectors: [["app-gfbio"]], decls: 10, vars: 7, consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-3"], [3, "markers"], [3, "result", "resetFilters", "chosenFilter", "filters"], [1, "col-md-9"], [3, "searchKey", "semanticValue", "searchKeyEmmit"], [1, "mt-3"], [3, "result", "from", "mapItem"]], template: function GfbioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-map", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "app-filters", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("filters", function GfbioComponent_Template_app_filters_filters_5_listener($event) { return ctx.filterSubmitted($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "app-search-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("searchKeyEmmit", function GfbioComponent_Template_app_search_input_searchKeyEmmit_7_listener($event) { return ctx.searchKeySubmitted($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "app-search-result", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("from", function GfbioComponent_Template_app_search_result_from_9_listener($event) { return ctx.paginationClicked($event); })("mapItem", function GfbioComponent_Template_app_search_result_mapItem_9_listener($event) { return ctx.mapItems($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("markers", ctx.markers);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("result", ctx.result)("resetFilters", ctx.resetFilters)("chosenFilter", ctx.filters);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("searchKey", ctx.searchKeyFromQuery)("semanticValue", ctx.semantic);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("result", ctx.result);
    } }, directives: [_map_map_component__WEBPACK_IMPORTED_MODULE_2__.MapComponent, _filters_filters_component__WEBPACK_IMPORTED_MODULE_3__.FiltersComponent, _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_4__.SearchInputComponent, _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_5__.SearchResultComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZmJpby5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 2761:
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapComponent": () => (/* binding */ MapComponent)
/* harmony export */ });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ 5836);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class MapComponent {
    constructor() {
    }
    initMap() {
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_0__.map('map', {
            center: [48.59378, 9.35982],
            zoom: 3
        });
        const tiles = leaflet__WEBPACK_IMPORTED_MODULE_0__.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            minZoom: 1,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        });
        tiles.addTo(this.map);
    }
    ngAfterViewInit() {
        this.initMap();
    }
    ngOnChanges(changes) {
        var _a, _b;
        let lastMarker;
        if (this.layerGroup !== undefined) {
            this.map.removeLayer(this.layerGroup);
        }
        if (this.markers && ((_b = (_a = this.markers) === null || _a === void 0 ? void 0 : _a.items) === null || _b === void 0 ? void 0 : _b.length) !== 0) {
            const coordinates = [];
            this.markers.items.forEach(item => {
                if (item.getLatitude() !== undefined && item.getLongitude() !== undefined) {
                    const coordinate = [item.getLatitude(), item.getLongitude(), item.getColor()];
                    coordinates.push(coordinate);
                }
            });
            const layerGroup = leaflet__WEBPACK_IMPORTED_MODULE_0__.layerGroup().addTo(this.map);
            coordinates.forEach((value, i) => {
                const circle = leaflet__WEBPACK_IMPORTED_MODULE_0__.circle([coordinates[i][0], coordinates[i][1]], {
                    color: coordinates[i][2],
                    fillColor: coordinates[i][2],
                    fillOpacity: 0.5,
                    radius: 500
                });
                layerGroup.addLayer(circle);
                lastMarker = [coordinates[i][0], coordinates[i][1]];
            });
            if (lastMarker !== undefined) {
                this.map.panTo(new leaflet__WEBPACK_IMPORTED_MODULE_0__.LatLng(lastMarker[0], lastMarker[1]));
            }
            this.layerGroup = layerGroup;
        }
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(); };
MapComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], inputs: { markers: "markers" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 0, consts: [[1, "map-container"], [1, "map-frame"], ["id", "map"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 8696:
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/autocomplete */ 3188);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ 1196);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 89);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
















class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_1__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatNativeDateModule], imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__.MatAutocompleteModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__.MatChipsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_1__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatNativeDateModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltipModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__.MatProgressSpinnerModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDividerModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__.MatAutocompleteModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__.MatChipsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_1__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatNativeDateModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltipModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__.MatProgressSpinnerModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDividerModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule] }); })();


/***/ }),

/***/ 4918:
/*!**********************************!*\
  !*** ./src/app/models/basket.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Basket": () => (/* binding */ Basket)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-transformer */ 1962);


// for saving the basket by the user
class Basket {
    static from(json) {
        return Object.assign(new Basket(), json);
    }
    getContent() {
        return this.content;
    }
    setContent(content) {
        this.content = content;
    }
    getUserId() {
        return this.userId;
    }
    setUserId(userId) {
        this.userId = userId;
    }
    getBasketId() {
        return this.basketId;
    }
    setBasketId(basketId) {
        this.basketId = basketId;
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,class_transformer__WEBPACK_IMPORTED_MODULE_1__.Expose)({ name: 'userid' })
], Basket.prototype, "userId", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,class_transformer__WEBPACK_IMPORTED_MODULE_1__.Expose)({ name: 'basketid' })
], Basket.prototype, "basketId", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,class_transformer__WEBPACK_IMPORTED_MODULE_1__.Expose)({ name: 'content' })
], Basket.prototype, "content", void 0);


/***/ }),

/***/ 9729:
/*!**********************************************!*\
  !*** ./src/app/models/result/aggregation.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Aggregation": () => (/* binding */ Aggregation)
/* harmony export */ });
// filter box on the left side
class Aggregation {
    getFacets() {
        return this.facets;
    }
    setFacets(facets) {
        this.facets = facets;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getTitle() {
        return this.title;
    }
    setTitle(title) {
        this.title = title;
    }
    getIcon() {
        return this.icon;
    }
    setIcon(icon) {
        this.icon = icon;
    }
}


/***/ }),

/***/ 9688:
/*!*******************************************!*\
  !*** ./src/app/models/result/citation.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Citation": () => (/* binding */ Citation)
/* harmony export */ });
// the citation for every dataset
class Citation {
    getTitle() {
        return this.title;
    }
    setTitle(title) {
        this.title = title;
    }
    getCreator() {
        return this.creator;
    }
    setCreator(creator) {
        this.creator = creator;
    }
    getDate() {
        return this.date;
    }
    setDate(date) {
        this.date = date;
    }
    getPubYear() {
        var _a;
        return (_a = this.date) === null || _a === void 0 ? void 0 : _a.substring(0, 4);
    }
    getSource() {
        return this.source;
    }
    setSource(source) {
        this.source = source;
    }
    getDOI() {
        return this.DOI;
    }
    setDOI(DOI) {
        this.DOI = DOI;
    }
    getDataCenter() {
        return this.dataCenter.toUpperCase();
    }
    setDataCenter(dataCenter) {
        this.dataCenter = dataCenter;
    }
}


/***/ }),

/***/ 8870:
/*!**********************************************!*\
  !*** ./src/app/models/result/description.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Description": () => (/* binding */ Description)
/* harmony export */ });
// the descriptions after the title of the dataset
class Description {
    getTitle() {
        return this.title;
    }
    setTitle(title) {
        this.title = title;
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
}


/***/ }),

/***/ 2813:
/*!****************************************!*\
  !*** ./src/app/models/result/facet.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Facet": () => (/* binding */ Facet)
/* harmony export */ });
// checkbox item in the filter box
class Facet {
    constructor() {
        // if the facet is activated (by default, it is false)
        this.checked = false;
    }
    getKey() {
        return this.key;
    }
    setKey(key) {
        this.key = key;
    }
    getChecked() {
        return this.checked;
    }
    setChecked(check) {
        this.checked = check;
    }
    getDocCount() {
        return this.docCount;
    }
    setDocCount(docCount) {
        this.docCount = docCount;
    }
}


/***/ }),

/***/ 1473:
/*!**************************************!*\
  !*** ./src/app/models/result/hit.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hit": () => (/* binding */ Hit)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _citation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./citation */ 9688);
/* harmony import */ var _description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./description */ 8870);
/* harmony import */ var _linkage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linkage */ 4931);
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! class-transformer */ 5383);
/* harmony import */ var _upperLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upperLabel */ 4309);






// every dataset
class Hit {
    getTitle() {
        return this.title;
    }
    setTitle(title) {
        this.title = title;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    getMetadatalink() {
        return this.metadatalink;
    }
    setMetadatalink(metadatalink) {
        if (metadatalink != "undefined" && metadatalink != null) {
            this.metadatalink = encodeURI(metadatalink);
        }
        else {
            this.metadatalink = null;
        }
        // this.metadatalink = metadatalink;
    }
    getIdentifier() {
        return this.dcIdentifier;
    }
    setIdentifier(dcIdentifier) {
        this.dcIdentifier = dcIdentifier;
    }
    getLinkage() {
        return this.linkage;
    }
    setLinkage(linkage) {
        this.linkage = linkage;
    }
    getXml() {
        return this.xml;
    }
    setXml(xml) {
        this.xml = xml;
    }
    getTitleUrl() {
        return this.titleUrl;
    }
    setTitleUrl(titleUrl) {
        if (titleUrl != "undefined" && titleUrl != null) {
            this.titleUrl = encodeURI(titleUrl);
        }
        else {
            this.titleUrl = null;
        }
        // this.titleUrl = titleUrl;
    }
    getDescription() {
        return this.description;
    }
    setDescription(description) {
        this.description = description;
    }
    getUpperLabels() {
        return this.upperLabels;
    }
    setUpperLabels(upperLabels) {
        this.upperLabels = upperLabels;
    }
    getLicence() {
        return this.licence;
    }
    setLicence(licence) {
        this.licence = licence;
    }
    getVat() {
        return this.vat;
    }
    setVat(vat) {
        this.vat = vat;
    }
    getVatTooltip() {
        return this.vatTooltip;
    }
    setVatTooltip(vatTooltip) {
        this.vatTooltip = vatTooltip;
    }
    getCitation() {
        return this.citation;
    }
    setCitation(citation) {
        this.citation = citation;
    }
    getMultimediaObjs() {
        return this.multimediaObjs;
    }
    setMultimediaObjs(multimediaObjs) {
        this.multimediaObjs = multimediaObjs;
    }
    getLatitude() {
        return this.latitude;
    }
    setLatitude(latitude) {
        this.latitude = latitude;
    }
    getLongitude() {
        return this.longitude;
    }
    setLongitude(longitude) {
        this.longitude = longitude;
    }
    getTitleTooltip() {
        return this.titleTooltip;
    }
    setTitleTooltip(titleTooltip) {
        this.titleTooltip = titleTooltip;
    }
    getCheckBox() {
        return this.checkbox;
    }
    setCheckbox(checkbox) {
        this.checkbox = checkbox;
    }
    getDatalink() {
        return this.datalink;
    }
    setDatalink(datalink) {
        if (datalink != "undefined" && datalink != null) {
            this.datalink = encodeURI(datalink);
        }
        else {
            this.datalink = null;
        }
        // this.datalink = datalink;
    }
    getParentIdentifier() {
        return this.parentIdentifier;
    }
    setParentIdentifier(parentIdentifier) {
        this.parentIdentifier = parentIdentifier;
    }
    getType() {
        return this.dcType;
    }
    setType(dcType) {
        this.dcType = dcType;
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,class_transformer__WEBPACK_IMPORTED_MODULE_5__.Type)(() => _description__WEBPACK_IMPORTED_MODULE_1__.Description)
], Hit.prototype, "description", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,class_transformer__WEBPACK_IMPORTED_MODULE_5__.Type)(() => _upperLabel__WEBPACK_IMPORTED_MODULE_3__.UpperLabel)
], Hit.prototype, "upperLabels", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,class_transformer__WEBPACK_IMPORTED_MODULE_5__.Type)(() => _citation__WEBPACK_IMPORTED_MODULE_0__.Citation)
], Hit.prototype, "citation", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,class_transformer__WEBPACK_IMPORTED_MODULE_5__.Type)(() => _linkage__WEBPACK_IMPORTED_MODULE_2__.Linkage)
], Hit.prototype, "linkage", void 0);


/***/ }),

/***/ 4931:
/*!******************************************!*\
  !*** ./src/app/models/result/linkage.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Linkage": () => (/* binding */ Linkage)
/* harmony export */ });
// it contains the information related to the download of the dataset
class Linkage {
    getData() {
        return this.data;
    }
    setData(data) {
        this.data = data;
    }
    getMetadata() {
        return this.metadata;
    }
    setMetadata(metadata) {
        if (metadata != "undefined" && metadata != null) {
            this.metadata = encodeURI(metadata);
        }
        else {
            this.metadata = null;
        }
        // this.metadata = metadata;
    }
    getMultimedia() {
        return this.multimedia;
    }
    setMultimedia(multimedia) {
        this.multimedia = multimedia;
    }
}


/***/ }),

/***/ 2071:
/*!*****************************************!*\
  !*** ./src/app/models/result/result.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Result": () => (/* binding */ Result)
/* harmony export */ });
// the response from server
class Result {
    getHits() {
        return this.hits;
    }
    setHits(hits) {
        this.hits = hits;
    }
    getOtherFilters() {
        return this.otherFilters;
    }
    setOtherFilters(otherFilters) {
        this.otherFilters = otherFilters;
    }
    getDatePickers() {
        return this.datePickers;
    }
    setDatePickers(datePickers) {
        this.datePickers = datePickers;
    }
    getSemanticKeys() {
        return this.semanticKeys;
    }
    setSemanticKeys(semanticKeys) {
        this.semanticKeys = semanticKeys;
    }
    getTermData() {
        return this.termData;
    }
    setTermData(termData) {
        this.termData = termData;
    }
    getAggregations() {
        return this.aggregations;
    }
    setAggregations(aggregations) {
        this.aggregations = aggregations;
    }
    getTotalNumber() {
        return this.totalNumber;
    }
    setTotalNumber(totalNumber) {
        this.totalNumber = totalNumber;
    }
}


/***/ }),

/***/ 4309:
/*!*********************************************!*\
  !*** ./src/app/models/result/upperLabel.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpperLabel": () => (/* binding */ UpperLabel)
/* harmony export */ });
// the colorful labels on the upper side of every dataset
class UpperLabel {
    getInnerInfo() {
        return this.innerInfo;
    }
    setInnerInfo(innerInfo) {
        this.innerInfo = innerInfo;
    }
    getTooltip() {
        return this.tooltip;
    }
    setTooltip(tooltip) {
        this.tooltip = tooltip;
    }
    getColorClass() {
        return this.colorClass;
    }
    setColorClass(colorClass) {
        this.colorClass = colorClass;
    }
}


/***/ }),

/***/ 3304:
/*!****************************************************!*\
  !*** ./src/app/pagination/pagination.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationComponent": () => (/* binding */ PaginationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ 9910);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jw-angular-pagination */ 1161);






function PaginationComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "jw-pagination", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changePage", function PaginationComponent_div_7_Template_jw_pagination_changePage_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onChangePage($event); })("click", function PaginationComponent_div_7_Template_jw_pagination_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.isSend = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.items)("maxPages", ctx_r0.maxPageNum);
} }
class PaginationComponent {
    constructor(breakpointObserver) {
        this.paginationClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.items = [];
        this.counter = 2;
        this.entries = 0;
        this.isSend = false;
        this.maxPageNum = 10;
        breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.Breakpoints.HandsetLandscape,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.Breakpoints.HandsetPortrait
        ]).subscribe(result => {
            if (result.matches) {
                this.maxPageNum = 3;
            }
        });
    }
    ngOnChanges(changes) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        if (((_b = (_a = changes === null || changes === void 0 ? void 0 : changes.result) === null || _a === void 0 ? void 0 : _a.currentValue) === null || _b === void 0 ? void 0 : _b.getTotalNumber()) !== ((_d = (_c = changes === null || changes === void 0 ? void 0 : changes.result) === null || _c === void 0 ? void 0 : _c.previousValue) === null || _d === void 0 ? void 0 : _d.getTotalNumber())) {
            if (!isNaN((_f = (_e = changes === null || changes === void 0 ? void 0 : changes.result) === null || _e === void 0 ? void 0 : _e.currentValue) === null || _f === void 0 ? void 0 : _f.getTotalNumber())) {
                this.items = Array((_h = (_g = changes === null || changes === void 0 ? void 0 : changes.result) === null || _g === void 0 ? void 0 : _g.currentValue) === null || _h === void 0 ? void 0 : _h.getTotalNumber()).fill(0);
                this.entries = (_k = (_j = changes === null || changes === void 0 ? void 0 : changes.result) === null || _j === void 0 ? void 0 : _j.currentValue) === null || _k === void 0 ? void 0 : _k.getTotalNumber();
            }
        }
    }
    onChangePage(pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
        if (this.isSend) {
            const elements = document.querySelector('.pagination .active');
            const index = Number(elements.innerText);
            const from = (index - 1) * 10;
            this.paginationClicked.emit(from);
            this.isSend = false;
        }
    }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.BreakpointObserver)); };
PaginationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginationComponent, selectors: [["app-pagination"]], inputs: { result: "result" }, outputs: { paginationClicked: "paginationClicked" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 8, vars: 2, consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-3"], [1, "col-md-9"], [4, "ngIf"], [3, "items", "maxPages", "changePage", "click"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PaginationComponent_div_7_Template, 2, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.entries, " entries found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items.length !== 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, jw_angular_pagination__WEBPACK_IMPORTED_MODULE_3__.JwPaginationComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 9672:
/*!********************************************************!*\
  !*** ./src/app/search-input/search-input.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchInputComponent": () => (/* binding */ SearchInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _services_remote_node_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/remote/node.service */ 2287);
/* harmony import */ var _services_local_start_searching_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/local/start-searching.service */ 9932);
/* harmony import */ var _services_local_communication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/local/communication.service */ 425);
/* harmony import */ var _services_local_input_analysis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/local/input-analysis.service */ 7485);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _suggestion_window_suggestion_window_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../suggestion-window/suggestion-window.component */ 3684);











function SearchInputComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "app-suggestion-window", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("windowSuggestKey", function SearchInputComponent_div_11_Template_app_suggestion_window_windowSuggestKey_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r3.onWindowSuggestKey($event); })("isClicked", function SearchInputComponent_div_11_Template_app_suggestion_window_isClicked_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r5.windowSuggestion = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SearchInputComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Please do not use these special characters in a search:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("!@#$%^&_+-=[];':\\|,<>/?", "{}", "");
} }
const _c0 = function () { return { standalone: true }; };
class SearchInputComponent {
    constructor(nodeService, startSearchingService, communicationService, inputAnalysis) {
        this.nodeService = nodeService;
        this.startSearchingService = startSearchingService;
        this.communicationService = communicationService;
        this.inputAnalysis = inputAnalysis;
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faSearch;
        this.searchKeyEmmit = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.windowSuggestion = false;
        this.formatSimpleSearch = /[!@#$%^&_\-=\[\]{};:\\,<>\/?]+/;
        this.formatSemanticSearch = /[!@#$%^&_\-=\[\]{};:\\,<>\/?]+/;
        this.alertSearch = false;
        this.alertSemanticSearch = false;
        this.semSearchImg = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.imagePath + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.semSearchImg;
    }
    ngOnInit() {
        // const str = 'fff (gg tt gg) hhh (jj vv + cc gg) lll + kkk + rrr bee*';
        // console.log(str);
        // this.inputAnalysis.getAnalysis(str).then((response) => console.log(response));
    }
    // by entering a letter on the form, a request will be sent to the node server and then it will be sent to suggestion-window
    onWindowSuggestKey(value) {
        if (value !== undefined) {
            const searchField = document.getElementById("searchField");
            if (searchField) {
                searchField.value = value;
            }
            this.searchKey = value;
            this.alertSearch = this.formatSimpleSearch.test(this.searchKey);
            this.alertSemanticSearch = false;
            this.startSearching(this.semanticValue);
            this.windowSuggestion = false;
        }
    }
    // by clicking on the search button, this method will be called
    onSearch() {
        this.semanticValue = false;
        this.alertSearch = this.formatSimpleSearch.test(this.searchKey);
        this.alertSemanticSearch = false;
        this.startSearching(this.semanticValue);
    }
    // by clicking on the semantic search button, this method will be called
    semantic() {
        this.semanticValue = true;
        this.alertSearch = false;
        this.alertSemanticSearch = this.formatSemanticSearch.test(this.searchKey);
        this.startSearching(this.semanticValue);
        const subject = this.communicationService.getSearchKey();
        subject.next(this.searchKey);
        subject.subscribe((value) => {
            this.searchKey = value;
        });
    }
    startSearching(semantic) {
        if (this.searchKey.endsWith("*") &&
            this.searchKey.length < 6 &&
            semantic === true) {
            alert(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.textAlertWordLength);
        }
        else {
            this.inputAnalysis
                .getAnalysis2(this.searchKey, semantic)
                .then((response) => {
                console.log(response);
                const keyAndSemantic = [response, semantic];
                // console.log(keyAndSemantic);
                this.searchKeyEmmit.emit(keyAndSemantic);
            });
            // const keyAndSemantic = [this.searchKey, semantic];
            // this.searchKeyEmmit.emit(keyAndSemantic);
        }
    }
    onSuggest() {
        this.nodeService.suggestSimple(this.searchKey).subscribe((data) => {
            this.communicationService.setSuggest(data.suggest[0].options);
            this.windowSuggestion = data.suggest[0].options.length !== 0;
        });
    }
}
SearchInputComponent.ɵfac = function SearchInputComponent_Factory(t) { return new (t || SearchInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_remote_node_service__WEBPACK_IMPORTED_MODULE_1__.NodeService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_local_start_searching_service__WEBPACK_IMPORTED_MODULE_2__.StartSearchingService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_local_communication_service__WEBPACK_IMPORTED_MODULE_3__.CommunicationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_local_input_analysis_service__WEBPACK_IMPORTED_MODULE_4__.InputAnalysisService)); };
SearchInputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SearchInputComponent, selectors: [["app-search-input"]], inputs: { searchKey: "searchKey", semanticValue: "semanticValue" }, outputs: { searchKeyEmmit: "searchKeyEmmit" }, decls: 13, vars: 5, consts: [["autocomplete", "off", 3, "ngSubmit"], [1, "input-group"], ["type", "text", "placeholder", "Search...", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["searchInput", ""], [1, "input-group-append"], ["type", "submit", "id", "button-search", 1, "btn", "btn-outline-primary", "fw-bold"], ["type", "button", 1, "btn", "btn-outline-primary", "fw-bold", 3, "click"], [1, "position-relative"], ["class", "suggestion-window", 4, "ngIf"], ["class", "text-danger ml-1", 4, "ngIf"], [1, "suggestion-window"], [3, "windowSuggestKey", "isClicked"], [1, "text-danger", "ml-1"]], template: function SearchInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function SearchInputComponent_Template_form_ngSubmit_1_listener() { return ctx.onSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function SearchInputComponent_Template_input_ngModelChange_3_listener($event) { return ctx.searchKey = $event; })("ngModelChange", function SearchInputComponent_Template_input_ngModelChange_3_listener() { return ctx.onSuggest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SearchInputComponent_Template_button_click_8_listener() { return ctx.semantic(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " Semantic Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, SearchInputComponent_div_11_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, SearchInputComponent_div_12_Template, 5, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.searchKey)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.windowSuggestion);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.alertSearch);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _suggestion_window_suggestion_window_component__WEBPACK_IMPORTED_MODULE_5__.SuggestionWindowComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtaW5wdXQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6246:
/*!********************************************************************!*\
  !*** ./src/app/search-result/description/description.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DescriptionComponent": () => (/* binding */ DescriptionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);


function DescriptionComponent_span_5_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DescriptionComponent_span_5_span_1_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.showMore = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " [+] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DescriptionComponent_span_5_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DescriptionComponent_span_5_span_2_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.showMore = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " [-] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DescriptionComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DescriptionComponent_span_5_span_1_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DescriptionComponent_span_5_span_2_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.showMore);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showMore);
} }
const _c0 = function (a0) { return { "showLess": a0 }; };
class DescriptionComponent {
    constructor() {
        this.showMore = false;
    }
    ngOnInit() {
        //console.log(this.des);
    }
    showLess(length) {
        if (this.showMore === true) {
            return true;
        }
        else {
            return length <= 400;
        }
    }
}
DescriptionComponent.ɵfac = function DescriptionComponent_Factory(t) { return new (t || DescriptionComponent)(); };
DescriptionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DescriptionComponent, selectors: [["app-description"]], inputs: { des: "des" }, decls: 6, vars: 6, consts: [[1, "d-flex"], [1, "mr-2"], [1, "d-inline-block", 3, "innerHTML", "ngClass"], ["style", "vertical-align: super", 4, "ngIf"], [2, "vertical-align", "super"], ["class", "linkBlue", 3, "click", 4, "ngIf"], [1, "linkBlue", 3, "click"]], template: function DescriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DescriptionComponent_span_5_Template, 3, 2, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_3_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.des.getTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.des.getValue(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, !ctx.showLess(ctx.des.getValue().length)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.des.getValue()) == null ? null : tmp_3_0.length) > 400);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXNjcmlwdGlvbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 7158:
/*!********************************************************************!*\
  !*** ./src/app/search-result/result-item/result-item.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultItemComponent": () => (/* binding */ ResultItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var _citation_citation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../citation/citation.component */ 4444);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _services_local_communication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/local/communication.service */ 425);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ 89);
/* harmony import */ var _description_description_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../description/description.component */ 6246);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 398);
















function ResultItemComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const label_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", label_r8.getColorClass())("matTooltip", label_r8.getTooltip());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](label_r8.getInnerInfo());
} }
function ResultItemComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 17);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.item.getTitle(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function ResultItemComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", ctx_r2.item.getTitleUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r2.item.getTitle(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function ResultItemComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-description", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const des_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("des", des_r9);
} }
function ResultItemComponent_div_13_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 24);
} if (rf & 2) {
    const licence_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate2"]("src", "", ctx_r12.imagePath, "", licence_r11 + ".png", "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("matTooltip", "License: ", licence_r11, "");
} }
function ResultItemComponent_div_13_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "path", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "path", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ResultItemComponent_div_13_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "All rights reserved");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ResultItemComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ResultItemComponent_div_13_img_1_Template, 1, 3, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ResultItemComponent_div_13_span_2_Template, 4, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ResultItemComponent_div_13_span_3_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const licence_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", licence_r11 !== "Other" && licence_r11 !== "All rights reserved");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", licence_r11 === "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", licence_r11 === "All rights reserved");
} }
function ResultItemComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ResultItemComponent_span_14_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r16.openDialog(ctx_r16.itemId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "fa-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Citation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r5.faQuoteLeft);
} }
function ResultItemComponent_span_15_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "fa-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Sound ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx_r19.sanitize(obj_r18.url), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r19.faVolumeUp);
} }
function ResultItemComponent_span_15_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "fa-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Video ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx_r20.sanitize(obj_r18.url), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r20.faVideo);
} }
function ResultItemComponent_span_15_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "fa-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx_r21.sanitize(obj_r18.url), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r21.faImage);
} }
function ResultItemComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ResultItemComponent_span_15_a_1_Template, 3, 2, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ResultItemComponent_span_15_a_2_Template, 3, 2, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ResultItemComponent_span_15_a_3_Template, 3, 2, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", obj_r18.type === "sound");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", obj_r18.type === "video");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", obj_r18.type === "picture");
} }
function ResultItemComponent_a_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "fa-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Dataset");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx_r7.item.getLinkage().getData(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r7.faDownload);
} }
const _c0 = function () { return []; };
class ResultItemComponent {
    constructor(communicationService, sanitizer, dialog) {
        this.communicationService = communicationService;
        this.sanitizer = sanitizer;
        this.dialog = dialog;
        this.faVolumeUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faVolumeUp;
        this.faDownload = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faDownload;
        this.faVideo = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faVideo;
        this.faImage = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faImage;
        this.faQuoteLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faQuoteLeft;
        this.vatImg = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.imagePath + _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.vatImg;
        this.imagePath = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.imagePath;
        this.checkBoxItem = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    }
    ngOnInit() { }
    openDialog(i) {
        this.communicationService.setCitation(i);
        const dialogRef = this.dialog.open(_citation_citation_component__WEBPACK_IMPORTED_MODULE_0__.CitationComponent, {
            data: this.item,
        });
    }
    sanitize(url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    }
    checkBox(key, value) {
        this.item.setCheckbox(value.checked);
        this.checkBoxItem.emit(this.item);
    }
}
ResultItemComponent.ɵfac = function ResultItemComponent_Factory(t) { return new (t || ResultItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_local_communication_service__WEBPACK_IMPORTED_MODULE_2__.CommunicationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog)); };
ResultItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ResultItemComponent, selectors: [["app-result-item"]], inputs: { item: "item", itemId: "itemId" }, outputs: { checkBoxItem: "checkBoxItem" }, decls: 21, vars: 13, consts: [[1, "my-2"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "line-bottom"], [1, "pl-0", "pb-3", "d-flex"], [1, "colorBox"], ["matTooltipClass", "result-item-tooltip", 3, "matTooltip"], [3, "innerHTML", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], [1, "mt-2"], [1, "d-inline-block"], ["class", "d-inline-block pr-2 result-item-grey", 4, "ngFor", "ngForOf"], ["class", "pr-2 result-item-blue", "matTooltip", "Show citation", "matTooltipClass", "result-item-tooltip", 3, "click", 4, "ngIf"], ["class", "pr-2 vertical-middle", 4, "ngFor", "ngForOf"], ["class", "btn btn-sm btn-primary", "download", "", 3, "href", 4, "ngIf"], [1, "form-group", "form-check"], ["type", "checkbox", 1, "regular-checkbox", "big-checkbox", 3, "checked", "change"], ["matTooltipClass", "result-item-tooltip", 1, "labeling", 3, "ngClass", "matTooltip"], [3, "innerHTML"], ["target", "_blank", 3, "href"], [3, "des"], [1, "d-inline-block", "pr-2", "result-item-grey"], ["class", "license-img", "matTooltipClass", "result-item-tooltip", 3, "src", "matTooltip", 4, "ngIf"], ["matTooltip", "Custom license", "matTooltipClass", "result-item-tooltip", 4, "ngIf"], ["matTooltip", "All rights reserved", "matTooltipClass", "result-item-tooltip", 4, "ngIf"], ["matTooltipClass", "result-item-tooltip", 1, "license-img", 3, "src", "matTooltip"], ["matTooltip", "Custom license", "matTooltipClass", "result-item-tooltip"], ["width", "2em", "height", "2em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-award"], ["fill-rule", "evenodd", "d", "M9.669.864L8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193l-1.51-.229L8 1.126l-1.355.702-1.51.229-.684 1.365-1.086 1.072L3.614 6l-.25 1.506 1.087 1.072.684 1.365 1.51.229L8 10.874l1.356-.702 1.509-.229.684-1.365 1.086-1.072L12.387 6l.248-1.506-1.086-1.072-.684-1.365z"], ["d", "M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"], ["matTooltip", "All rights reserved", "matTooltipClass", "result-item-tooltip"], ["matTooltip", "Show citation", "matTooltipClass", "result-item-tooltip", 1, "pr-2", "result-item-blue", 3, "click"], [1, "fa-sm", 3, "icon"], [1, "pr-2", "vertical-middle"], ["target", "_blank", "matTooltip", "This dataset provides a sound file.", "matTooltipClass", "result-item-tooltip", 3, "href", 4, "ngIf"], ["target", "_blank", "matTooltip", "This dataset provides a video.", "matTooltipClass", "result-item-tooltip", 3, "href", 4, "ngIf"], ["target", "_blank", "matTooltip", "This dataset provides an image.", "matTooltipClass", "result-item-tooltip", 3, "href", 4, "ngIf"], ["target", "_blank", "matTooltip", "This dataset provides a sound file.", "matTooltipClass", "result-item-tooltip", 3, "href"], [3, "icon"], ["target", "_blank", "matTooltip", "This dataset provides a video.", "matTooltipClass", "result-item-tooltip", 3, "href"], ["target", "_blank", "matTooltip", "This dataset provides an image.", "matTooltipClass", "result-item-tooltip", 3, "href"], ["download", "", 1, "btn", "btn-sm", "btn-primary", 3, "href"]], template: function ResultItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ResultItemComponent_span_2_Template, 3, 3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ResultItemComponent_div_8_Template, 1, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ResultItemComponent_a_9_Template, 2, 2, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ResultItemComponent_div_10_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ResultItemComponent_div_13_Template, 4, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ResultItemComponent_span_14_Template, 4, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, ResultItemComponent_span_15_Template, 4, 3, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, ResultItemComponent_a_17_Template, 3, 2, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function ResultItemComponent_Template_input_change_20_listener($event) { return ctx.checkBox(ctx.itemId, $event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.item.getUpperLabels());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-color", ctx.item.getColor());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matTooltip", ctx.item.getTitleTooltip());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.item.getTitleUrl() === "undefined");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.item.getTitleUrl() !== "undefined");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.item.getDescription());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.item.getLicence());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.item.getCitation().getSource() !== undefined && ctx.item.getCitation().getCreator() !== _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.item.getMultimediaObjs());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.item.getType().includes("ABCD_Dataset"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.item.getCheckBox());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _description_description_component__WEBPACK_IMPORTED_MODULE_3__.DescriptionComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FaIconComponent], styles: [".btn-sm {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 0.5rem;\n  border-radius: 0.2rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VsdC1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkIiLCJmaWxlIjoicmVzdWx0LWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tc20ge1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xufVxuIl19 */"], encapsulation: 2 });


/***/ }),

/***/ 3424:
/*!**********************************************************!*\
  !*** ./src/app/search-result/search-result.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchResultComponent": () => (/* binding */ SearchResultComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _models_result_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/result/result */ 2071);
/* harmony import */ var _basket_dialog_basket_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../basket-dialog/basket-dialog.component */ 378);
/* harmony import */ var _models_result_hit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/result/hit */ 1473);
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! class-transformer */ 4486);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _services_remote_node_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/remote/node.service */ 2287);
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! keycloak-angular */ 2715);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pagination/pagination.component */ 3304);
/* harmony import */ var _context_box_context_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context-box/context-box.component */ 1752);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 2777);
/* harmony import */ var _result_item_result_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./result-item/result-item.component */ 7158);














function SearchResultComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "app-pagination", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("paginationClicked", function SearchResultComponent_div_8_Template_app_pagination_paginationClicked_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r4.paginationClicked($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("result", ctx_r0.result);
} }
function SearchResultComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "No entries found");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function SearchResultComponent_div_10_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("mouseover", function SearchResultComponent_div_10_span_3_Template_div_mouseover_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9); const item_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r8.popoverVisible = item_r7; })("mouseleave", function SearchResultComponent_div_10_span_3_Template_div_mouseleave_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r10.popoverVisible = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "app-context-box", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r7, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r6.popoverVisible != item_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("term", item_r7)("termData", ctx_r6.result == null ? null : ctx_r6.result.getTermData());
} }
function SearchResultComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Expanded terms: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, SearchResultComponent_div_10_span_3_Template, 5, 4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.result == null ? null : ctx_r2.result.getSemanticKeys());
} }
function SearchResultComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "app-result-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkBoxItem", function SearchResultComponent_div_12_div_1_Template_app_result_item_checkBoxItem_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r14.checkBoxClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("item", item_r12)("itemId", i_r13);
} }
function SearchResultComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SearchResultComponent_div_12_div_1_Template, 2, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.result == null ? null : ctx_r3.result.getHits());
} }
class SearchResultComponent {
    constructor(dialog, nodeService, keycloakService) {
        this.dialog = dialog;
        this.nodeService = nodeService;
        this.keycloakService = keycloakService;
        this.result = new _models_result_result__WEBPACK_IMPORTED_MODULE_0__.Result();
        this.basketValues = [];
        this.from = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.mapItem = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.popoverVisible = '';
    }
    ngOnInit() {
        try {
            this.user = this.keycloakService.getUsername();
            if (this.user !== undefined) {
                this.nodeService.readFromBasket(this.user).subscribe(result => {
                    var _a, _b;
                    if (result.length !== 0) {
                        const basket = (_b = JSON.parse((_a = result[0]) === null || _a === void 0 ? void 0 : _a.basketcontent)) === null || _b === void 0 ? void 0 : _b.selected;
                        basket.forEach(item => {
                            const hit = (0,class_transformer__WEBPACK_IMPORTED_MODULE_8__.plainToClass)(_models_result_hit__WEBPACK_IMPORTED_MODULE_2__.Hit, item);
                            this.basketValues.push(hit);
                        });
                        this.mapItem.emit(this.basketValues);
                    }
                });
            }
            else {
                this.user = null;
            }
            // console.log('ngOnInit() search-result.components | this.user : ', this.user);
        }
        catch (_a) {
            this.user = null;
        }
        this.basketId = null;
    }
    ngOnChanges(changes) {
        var _a, _b;
        if (((_a = changes === null || changes === void 0 ? void 0 : changes.result) === null || _a === void 0 ? void 0 : _a.currentValue) !== ((_b = changes === null || changes === void 0 ? void 0 : changes.result) === null || _b === void 0 ? void 0 : _b.previousValue)) {
            this.controlCheckboxes(this.basketValues);
        }
    }
    checkBoxClick(item) {
        // console.log('checkBoxClick(item: Hit): void | ...');
        if (item.getCheckBox()) {
            this.basketValues.push(item);
        }
        else {
            const index = this.basketValues.indexOf(item);
            this.basketValues.splice(index, 1);
        }
        this.mapItem.emit(this.basketValues);
    }
    basketClick() {
        // console.log('basketClick(): void | ...');
        const dialogRef = this.dialog.open(_basket_dialog_basket_dialog_component__WEBPACK_IMPORTED_MODULE_1__.BasketDialogComponent, {
            data: this.basketValues,
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(basketValues => {
            this.basketValues = basketValues[0];
            this.result.getHits().forEach(resultValue => {
                resultValue.setCheckbox(false);
            });
            this.controlCheckboxes(this.basketValues);
            this.mapItem.emit(this.basketValues);
        });
    }
    controlCheckboxes(basketValues) {
        basketValues.forEach(basketValue => {
            const basketId = basketValue.getId();
            this.result.getHits().forEach(resultValue => {
                const resultId = resultValue.getId();
                if (resultId === basketId) {
                    resultValue.setCheckbox(true);
                }
            });
        });
    }
    paginationClicked(from) {
        this.from.emit(from);
    }
}
SearchResultComponent.ɵfac = function SearchResultComponent_Factory(t) { return new (t || SearchResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_remote_node_service__WEBPACK_IMPORTED_MODULE_3__.NodeService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](keycloak_angular__WEBPACK_IMPORTED_MODULE_10__.KeycloakService)); };
SearchResultComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: SearchResultComponent, selectors: [["app-search-result"]], inputs: { result: "result" }, outputs: { from: "from", mapItem: "mapItem" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]], decls: 13, vars: 5, consts: [[1, "basket", "mb-3", 3, "click"], [1, "basket-img"], ["src", "assets/img/basket.png", 1, "w-100"], [1, "basket-number", "Absolute-Center"], [1, "basket-text"], [4, "ngIf"], ["class", "text-danger", 4, "ngIf"], [3, "result", "paginationClicked"], [1, "text-danger"], ["class", "highlightedKey", 4, "ngFor", "ngForOf"], [1, "highlightedKey"], [3, "mouseover", "mouseleave"], [3, "hidden"], [3, "term", "termData"], ["class", "pt-1", 4, "ngFor", "ngForOf"], [1, "pt-1"], [3, "item", "itemId", "checkBoxItem"]], template: function SearchResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SearchResultComponent_Template_div_click_1_listener() { return ctx.basketClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Dataset Basket");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, SearchResultComponent_div_8_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, SearchResultComponent_div_9_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, SearchResultComponent_div_10_Template, 4, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, SearchResultComponent_div_12_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_4_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.basketValues.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.result == null ? null : (tmp_1_0 = ctx.result.getHits()) == null ? null : tmp_1_0.length) !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.result == null ? null : (tmp_2_0 = ctx.result.getHits()) == null ? null : tmp_2_0.length) === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.result == null ? null : ctx.result.getSemanticKeys()) !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.result == null ? null : (tmp_4_0 = ctx.result.getHits()) == null ? null : tmp_4_0.length) !== 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__.PaginationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _context_box_context_box_component__WEBPACK_IMPORTED_MODULE_5__.ContextBoxComponent, ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerComponent, _result_item_result_item_component__WEBPACK_IMPORTED_MODULE_6__.ResultItemComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtcmVzdWx0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 425:
/*!*********************************************************!*\
  !*** ./src/app/services/local/communication.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommunicationService": () => (/* binding */ CommunicationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class CommunicationService {
    constructor() {
        this.filter = [];
        this.urlIndex = '/gfbio';
        // @ts-ignore
        this.suggest = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject();
        // @ts-ignore
        this.searchKey = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject();
        // @ts-ignore
        this.result = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject();
        // @ts-ignore
        this.citation = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject();
        // @ts-ignore
        this.removedFilter = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject();
        // @ts-ignore
        this.IsSearchKey = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject();
    }
    setSuggest(suggest) {
        this.suggest.next(suggest);
    }
    getSuggest() {
        return this.suggest.asObservable();
    }
    setIsSearchKey(IsSearchKey) {
        this.IsSearchKey.next(IsSearchKey);
    }
    getIsSearchKey() {
        return this.IsSearchKey.asObservable();
    }
    setIsSemantic(IsSemantic) {
        this.IsSemantic = IsSemantic;
    }
    getIsSemantic() {
        return this.IsSemantic;
    }
    setPagination(key) {
        this.pagination = key;
    }
    getPagination() {
        return this.pagination;
    }
    setUrlIndex(key) {
        this.urlIndex = key;
    }
    getUrlIndex() {
        return this.urlIndex;
    }
    setSearchKey(key) {
        this.searchKey = key;
    }
    getSearchKey() {
        return this.searchKey;
    }
    setFilter(key) {
        this.filter = key;
    }
    getFilter() {
        return this.filter;
    }
    setResult(key) {
        this.result.next(key);
    }
    getResult() {
        return this.result;
    }
    setCitation(key) {
        this.citation.next(key);
    }
    getCitation() {
        return this.citation;
    }
    setRemovedFilter(key) {
        this.removedFilter.next(key);
    }
    getRemovedFilter() {
        return this.removedFilter;
    }
    xmltoJson(xmlStr) {
        // @ts-ignore
        const convert = __webpack_require__(/*! xml-js */ 8963);
        let xml = '<?xml version="1.0" encoding="utf-8"?>' +
            xmlStr;
        xml = convert.xml2json(xml, { compact: false, spaces: 4 });
        return JSON.parse(xml);
    }
}
CommunicationService.ɵfac = function CommunicationService_Factory(t) { return new (t || CommunicationService)(); };
CommunicationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CommunicationService, factory: CommunicationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 890:
/*!*****************************************************************!*\
  !*** ./src/app/services/local/gfbio-preprocess-data.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GfbioPreprocessDataService": () => (/* binding */ GfbioPreprocessDataService)
/* harmony export */ });
/* harmony import */ var _models_result_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/result/result */ 2071);
/* harmony import */ var _models_result_hit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/result/hit */ 1473);
/* harmony import */ var _models_result_citation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/result/citation */ 9688);
/* harmony import */ var _models_result_aggregation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/result/aggregation */ 9729);
/* harmony import */ var _models_result_facet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/result/facet */ 2813);
/* harmony import */ var _models_result_description__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/result/description */ 8870);
/* harmony import */ var _models_result_linkage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/result/linkage */ 4931);
/* harmony import */ var _models_result_upperLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/result/upperLabel */ 4309);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _communication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./communication.service */ 425);











class GfbioPreprocessDataService {
    constructor(communicationService) {
        this.communicationService = communicationService;
        this.colors = _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.colors;
        this.vatTooltip = _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.vatTooltip;
        this.noCoordinates = _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.noCoordinates;
    }
    /*maps the json which comes from the server to the Result class, it is the most important function in this service,
      other functions can be deleted according to the json response
      this method gets the json object and an array of parameters which are necessary for mapping*/
    getResult(jsonObject, parameters) {
        var _a;
        this.id = 10;
        const result = new _models_result_result__WEBPACK_IMPORTED_MODULE_0__.Result();
        result.setSemanticKeys(jsonObject === null || jsonObject === void 0 ? void 0 : jsonObject.lastItem);
        const hits = this.getHits(jsonObject, parameters[0]);
        result.setHits(hits);
        result.setAggregations(this.getAggregations(jsonObject));
        result.setTotalNumber((_a = jsonObject === null || jsonObject === void 0 ? void 0 : jsonObject.hits) === null || _a === void 0 ? void 0 : _a.total);
        result.setOtherFilters(this.getOtherFilters());
        result.setDatePickers(this.getDatePickers());
        result.setTermData(jsonObject === null || jsonObject === void 0 ? void 0 : jsonObject.termData);
        return result;
    }
    // maps the datasets
    getHits(jsonObject, semantic) {
        var _a;
        const hits = [];
        const hitsOfObject = (_a = jsonObject === null || jsonObject === void 0 ? void 0 : jsonObject.hits) === null || _a === void 0 ? void 0 : _a.hits;
        hitsOfObject.forEach((item) => {
            hits.push(this.getHit(item, semantic));
        });
        return hits;
    }
    // maps the citation data
    getCitation(item, titleURL) {
        var _a, _b, _c;
        const citation = new _models_result_citation__WEBPACK_IMPORTED_MODULE_2__.Citation();
        const xmlStr = item === null || item === void 0 ? void 0 : item.xml;
        const jsonResult = (_c = (_b = (_a = this.communicationService.xmltoJson(xmlStr)) === null || _a === void 0 ? void 0 : _a.elements) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.elements;
        const creator = [];
        jsonResult.forEach((value) => {
            var _a, _b, _c, _d, _e, _f;
            switch (value === null || value === void 0 ? void 0 : value.name) {
                case "dc:title": {
                    citation.setTitle((_b = (_a = value === null || value === void 0 ? void 0 : value.elements) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.text);
                    break;
                }
                case "dc:creator": {
                    creator.push((_d = (_c = value === null || value === void 0 ? void 0 : value.elements) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.text);
                    break;
                }
                case "dc:date": {
                    citation.setDate((_f = (_e = value === null || value === void 0 ? void 0 : value.elements) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.text);
                    break;
                }
            }
        });
        citation.setDOI(titleURL);
        let dataCenter = item === null || item === void 0 ? void 0 : item.dataCenter.split(" ").pop();
        if (dataCenter === "Science") {
            dataCenter = "PANGAEA";
        }
        citation.setDataCenter(dataCenter);
        citation.setSource(item === null || item === void 0 ? void 0 : item.citation_source);
        citation.setCreator(creator);
        return citation;
    }
    // maps the title
    getTopic(dataset, semantic) {
        var _a, _b, _c;
        const dom = document
            .createRange()
            .createContextualFragment((_a = dataset === null || dataset === void 0 ? void 0 : dataset._source) === null || _a === void 0 ? void 0 : _a["html-1"]);
        let topic = "";
        dom === null || dom === void 0 ? void 0 : dom.querySelectorAll(".citation span").forEach((spanValue) => {
            topic = topic + spanValue.innerHTML;
            if (spanValue.classList.contains("date")) {
                topic = topic + ": ";
            }
        });
        if (semantic) {
            const highLightTitle = (_c = (_b = dataset === null || dataset === void 0 ? void 0 : dataset.highlight) === null || _b === void 0 ? void 0 : _b.citation_title) === null || _c === void 0 ? void 0 : _c[0];
            let matchTitle = highLightTitle === null || highLightTitle === void 0 ? void 0 : highLightTitle.replace(/<em>/g, "");
            matchTitle = matchTitle === null || matchTitle === void 0 ? void 0 : matchTitle.replace(/<\/em>/g, "");
            topic = topic === null || topic === void 0 ? void 0 : topic.replace(matchTitle, highLightTitle);
        }
        return topic;
    }
    // maps the url title
    getTopicUrl(dom) {
        var _a;
        const titleURL = (_a = dom === null || dom === void 0 ? void 0 : dom.querySelector(".citation a")) === null || _a === void 0 ? void 0 : _a.getAttribute("href");
        if (titleURL === undefined || titleURL === "undefined") {
            return "undefined";
        }
        else {
            return titleURL;
        }
    }
    getTitleTooltip(hit) {
        if (hit.getLatitude !== undefined && hit.getLongitude() !== undefined) {
            return ("min latitude: " +
                hit.getLatitude() +
                ", max longitude: " +
                hit.getLongitude());
        }
        else {
            return this.noCoordinates;
        }
    }
    // maps the licenses
    getLicense(dataset) {
        var _a;
        let license = (_a = dataset === null || dataset === void 0 ? void 0 : dataset._source) === null || _a === void 0 ? void 0 : _a.licenseShort;
        if (!Array.isArray(license)) {
            license = [license];
        }
        license.forEach((l, i) => {
            const allLicences = [
                "CC BY",
                "CC BY-NC",
                "CC BY-NC-ND",
                "CC BY-NC-SA",
                "CC BY-ND",
                "CC BY-SA",
                "CC0",
                "GPL",
                "All rights reserved",
            ];
            if (!allLicences.includes(l)) {
                license[i] = "Other";
            }
        });
        return license;
    }
    // maps a dataset
    getHit(item, semantic) {
        var _a, _b, _c, _d;
        const source = item === null || item === void 0 ? void 0 : item._source;
        const hit = new _models_result_hit__WEBPACK_IMPORTED_MODULE_1__.Hit();
        hit.setId(item === null || item === void 0 ? void 0 : item._id);
        const dom = document
            .createRange()
            .createContextualFragment(source === null || source === void 0 ? void 0 : source["html-1"]);
        hit.setTitleUrl(this.getTopicUrl(dom));
        hit.setTitle(this.getTopic(item, semantic));
        hit.setUpperLabels(this.getLabels(source));
        hit.setCitation(this.getCitation(source, this.getTopicUrl(dom)));
        hit.setLicence(this.getLicense(item));
        hit.setVat(source === null || source === void 0 ? void 0 : source.vatVisualizable);
        hit.setVatTooltip(this.vatTooltip);
        hit.setXml(source === null || source === void 0 ? void 0 : source.xml);
        hit.setLongitude(source === null || source === void 0 ? void 0 : source.maxLongitude);
        hit.setLatitude(source === null || source === void 0 ? void 0 : source.minLatitude);
        hit.setTitleTooltip(this.getTitleTooltip(hit));
        hit.setMetadatalink(source === null || source === void 0 ? void 0 : source.metadatalink);
        hit.setDatalink(source === null || source === void 0 ? void 0 : source.datalink);
        // set array of descriptions
        const tr = dom === null || dom === void 0 ? void 0 : dom.querySelectorAll(".desc tr");
        const description = [];
        tr.forEach((row) => {
            var _a, _b, _c, _d;
            const title = (_b = (_a = row === null || row === void 0 ? void 0 : row.querySelectorAll("td")) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.innerHTML;
            const value = (_d = (_c = row === null || row === void 0 ? void 0 : row.querySelectorAll("td")) === null || _c === void 0 ? void 0 : _c[1]) === null || _d === void 0 ? void 0 : _d.innerHTML;
            if (title === "Parameters:" || title === "Summary:") {
                const descriptionItem = new _models_result_description__WEBPACK_IMPORTED_MODULE_5__.Description();
                descriptionItem.setTitle(title);
                descriptionItem.setValue(value);
                description.push(descriptionItem);
            }
        });
        // if the search is semantic, puts the highlighted words in <em></em> tag
        if (semantic) {
            const highLightDescription = (_a = item === null || item === void 0 ? void 0 : item.highlight) === null || _a === void 0 ? void 0 : _a.description;
            if (highLightDescription !== undefined &&
                highLightDescription.length > 0) {
                highLightDescription.forEach((entry) => {
                    const entryCopy = entry;
                    entry = entry === null || entry === void 0 ? void 0 : entry.replace(/<em>/g, "");
                    entry = entry === null || entry === void 0 ? void 0 : entry.replace(/<\/em>/g, "");
                    description.forEach((row) => {
                        var _a;
                        row.value = (_a = row.value) === null || _a === void 0 ? void 0 : _a.replace(entry, entryCopy);
                    });
                });
            }
        }
        // in order to extract some properties from xml, I converted it from string to xml format
        // the properties that are going to be extracted are: identifier, linkage and MultimediaObjs
        const xml = (_d = (_c = (_b = this.communicationService.xmltoJson(source === null || source === void 0 ? void 0 : source.xml)) === null || _b === void 0 ? void 0 : _b.elements) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.elements;
        const multimediaObjs = [];
        const types = [];
        const linkage = new _models_result_linkage__WEBPACK_IMPORTED_MODULE_6__.Linkage();
        let relation = "";
        xml.forEach((element) => {
            if ("elements" in element) {
                if (element.name === "dc:identifier") {
                    hit.setIdentifier(element.elements[0].text);
                }
                if (element.name === "dc:type") {
                    types.push(element.elements[0].text);
                }
                if (element.name === "parentIdentifier") {
                    hit.setParentIdentifier(element.elements[0].text);
                }
                if (element.name === "linkage") {
                    if (element.attributes.type === "multimedia") {
                        const text = element.elements[0].text;
                        const differentTypes = [
                            [".mp3", "sound"],
                            [".mp4", "video"],
                            [".jpg", "picture"],
                            [".tiff", "picture"],
                            [".png", "picture"],
                            [".wav", "sound"],
                        ];
                        differentTypes.forEach((types) => {
                            if (text.includes(types[0])) {
                                const multimediaObj = {
                                    type: types[1],
                                    url: text,
                                };
                                multimediaObjs.push(multimediaObj);
                            }
                        });
                        linkage.setMultimedia(multimediaObjs);
                    }
                    if (element.attributes.type === "metadata") {
                        linkage.setMetadata(element.elements[0].text);
                    }
                    if (element.attributes.type === "data") {
                        linkage.setData(element.elements[0].text);
                    }
                }
                // some information related to description (relation) should be extracted from xml
                if (element.name === "dc:relation") {
                    let value = element.elements[0].text;
                    if (value.startsWith("http")) {
                        value = "<a " + 'href = "' + value + '" >' + value + "</a>";
                    }
                    relation = relation + "<li>" + value + "</li>";
                }
            }
        });
        if (relation !== "") {
            const descriptionItem = new _models_result_description__WEBPACK_IMPORTED_MODULE_5__.Description();
            descriptionItem.setTitle("Relation:");
            descriptionItem.setValue("<ul>" + relation + "</ul>");
            description.push(descriptionItem);
        }
        hit.setType(types);
        hit.setLinkage(linkage);
        hit.setDescription(description);
        hit.setMultimediaObjs(multimediaObjs);
        if (hit.getLatitude() !== undefined) {
            this.id--;
            hit.setColor(this.colors[this.id]);
        }
        return hit;
    }
    // maps labels
    getLabels(item) {
        var _a;
        const upperLabels = [];
        // if the citation date exist, a blue label will be created
        if (item === null || item === void 0 ? void 0 : item.citation_date) {
            const year = new _models_result_upperLabel__WEBPACK_IMPORTED_MODULE_7__.UpperLabel();
            year.setInnerInfo((_a = item === null || item === void 0 ? void 0 : item.citation_date) === null || _a === void 0 ? void 0 : _a.substring(0, 4));
            year.setTooltip("Publication year");
            year.setColorClass("bg-label-blue");
            upperLabels.push(year);
        }
        // if the dataset is open access, a green label will be created
        if (!(item === null || item === void 0 ? void 0 : item.accessRestricted)) {
            const access = new _models_result_upperLabel__WEBPACK_IMPORTED_MODULE_7__.UpperLabel();
            access.setInnerInfo("Open Access");
            access.setTooltip("This dataset is open access. You can use primary data and metadata.");
            access.setColorClass("bg-label-green");
            upperLabels.push(access);
        }
        // the label related to the datacenter with the golden red color will be created
        // it contains the name of the datacenter
        const dataCenter = new _models_result_upperLabel__WEBPACK_IMPORTED_MODULE_7__.UpperLabel();
        /*as the name of the datacenter which is provided in the json result is a long string and no short version
            was provided, the short version was extracted by some if statements*/
        dataCenter.setInnerInfo(item === null || item === void 0 ? void 0 : item.dataCenter.split(" ").pop());
        if (dataCenter.getInnerInfo() === "Science") {
            dataCenter.setInnerInfo("PANGAEA");
        }
        if (dataCenter.getInnerInfo() === "Archive") {
            dataCenter.setInnerInfo("ENA");
        }
        switch (dataCenter.getInnerInfo()) {
            case "SNSB":
                dataCenter.setTooltip(GfbioPreprocessDataService.datacenterTooltips.SNSB);
                break;
            case "SGN":
                dataCenter.setTooltip(GfbioPreprocessDataService.datacenterTooltips.SGN);
                break;
            case "BGBM":
                dataCenter.setTooltip(GfbioPreprocessDataService.datacenterTooltips.BGBM);
                break;
            case "MfN":
                dataCenter.setTooltip(GfbioPreprocessDataService.datacenterTooltips.MfN);
                break;
            case "ZFMK":
                dataCenter.setTooltip(GfbioPreprocessDataService.datacenterTooltips.ZFMK);
                break;
            case "SMNS":
                dataCenter.setTooltip(GfbioPreprocessDataService.datacenterTooltips.SMNS);
                break;
            case "PANGAEA":
                dataCenter.setTooltip(GfbioPreprocessDataService.datacenterTooltips.PANGAEA);
                break;
            case "DSMZ":
                dataCenter.setTooltip(GfbioPreprocessDataService.datacenterTooltips.DSMZ);
                break;
            case "Gatersleben":
                dataCenter.setTooltip(GfbioPreprocessDataService.datacenterTooltips.Gatersleben);
                break;
            case "ENA":
                dataCenter.setTooltip(GfbioPreprocessDataService.datacenterTooltips.ENA);
                break;
            default:
                dataCenter.setTooltip("Publisher");
        }
        dataCenter.setColorClass("bg-goldenrod");
        upperLabels.push(dataCenter);
        return upperLabels;
    }
    // maps facets
    getAggregations(jsonObject) {
        const titles = [
            GfbioPreprocessDataService.dataCenter,
            GfbioPreprocessDataService.dataType,
            GfbioPreprocessDataService.parameter,
            GfbioPreprocessDataService.taxonomy,
            GfbioPreprocessDataService.type,
            GfbioPreprocessDataService.geographicRegion,
        ];
        const aggregationsJson = jsonObject === null || jsonObject === void 0 ? void 0 : jsonObject.aggregations;
        const values = Object.values(aggregationsJson);
        const keys = Object.keys(aggregationsJson);
        const aggregations = [];
        // tslint:disable-next-line:forin
        for (const i in values) {
            const aggregation = new _models_result_aggregation__WEBPACK_IMPORTED_MODULE_3__.Aggregation();
            aggregation.setId(String(keys[i]));
            aggregation.setTitle(titles[i]);
            aggregation.setIcon(this.selectIcon(aggregation.getTitle()));
            const buckets = [];
            // @ts-ignore
            values[i].buckets.forEach((item) => {
                const bucket = new _models_result_facet__WEBPACK_IMPORTED_MODULE_4__.Facet();
                bucket.setDocCount(item === null || item === void 0 ? void 0 : item.doc_count);
                bucket.setKey(item === null || item === void 0 ? void 0 : item.key);
                buckets.push(bucket);
            });
            aggregation.setFacets(buckets);
            aggregations.push(aggregation);
        }
        return aggregations;
    }
    // maps other filters
    getOtherFilters() {
        return [
            {
                icon: "map",
                title: "Visualizable in VAT",
                parameters: [
                    {
                        label: "Visualizable in VAT",
                        parameterType: "vatVisualizable",
                        parameterValue: true,
                        id: "vatVisualizable",
                    },
                ],
            },
            {
                icon: "lock_outline",
                title: "Access",
                parameters: [
                    {
                        label: "access is restricted",
                        parameterType: "accessRestricted",
                        parameterValue: true,
                        id: "accessRestricted",
                    },
                    {
                        label: "open access only",
                        parameterType: "accessRestricted",
                        parameterValue: false,
                        id: "accessOpen",
                    },
                ],
            },
            {
                icon: "image",
                title: "Multimedia Object",
                parameters: [
                    {
                        label: "images, videos, sound files",
                        parameterType: "parameterFacet",
                        parameterValue: "Multimedia Object",
                        id: "Multimedia",
                    },
                ],
            },
        ];
    }
    // maps datepicker filters
    getDatePickers() {
        return [
            {
                icon: "date_range",
                title: "Collection Date",
                type: "collection",
                inputs: [
                    {
                        id: "collectionStart",
                        name: "Collection start date",
                        type: "start date",
                    },
                    {
                        id: "collectionEnd",
                        name: "Collection end date",
                        type: "end date",
                    },
                ],
            },
            {
                icon: "date_range",
                title: "Publication Date",
                type: "publication",
                inputs: [
                    {
                        id: "publicationStart",
                        name: "Publication start date",
                        type: "start date",
                    },
                    {
                        id: "publicationEnd",
                        name: "Publication end date",
                        type: "end date",
                    },
                ],
            },
        ];
    }
    // available icons: https://jossef.github.io/material-design-icons-iconfont/
    selectIcon(filter) {
        // default icon
        let icon = "filter_list";
        switch (filter) {
            case GfbioPreprocessDataService.dataCenter: {
                icon = "storage";
                break;
            }
            case GfbioPreprocessDataService.dataType: {
                icon = "domain";
                break;
            }
            case GfbioPreprocessDataService.geographicRegion: {
                icon = "location_on";
                break;
            }
            case GfbioPreprocessDataService.taxonomy: {
                icon = "account_tree";
                break;
            }
            case GfbioPreprocessDataService.parameter: {
                icon = "table_view";
                break;
            }
            case GfbioPreprocessDataService.type: {
                icon = "auto_awesome_motion";
                break;
            }
        }
        return icon;
    }
}
GfbioPreprocessDataService.dataCenter = _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.dataCenter;
GfbioPreprocessDataService.dataType = _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.dataType;
GfbioPreprocessDataService.parameter = _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.parameter;
GfbioPreprocessDataService.taxonomy = _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.taxonomy;
GfbioPreprocessDataService.geographicRegion = _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.geographicRegion;
GfbioPreprocessDataService.type = _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.type;
GfbioPreprocessDataService.datacenterTooltips = _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.datacenterTooltips;
GfbioPreprocessDataService.ɵfac = function GfbioPreprocessDataService_Factory(t) { return new (t || GfbioPreprocessDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_communication_service__WEBPACK_IMPORTED_MODULE_9__.CommunicationService)); };
GfbioPreprocessDataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({ token: GfbioPreprocessDataService, factory: GfbioPreprocessDataService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 7485:
/*!**********************************************************!*\
  !*** ./src/app/services/local/input-analysis.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputAnalysisService": () => (/* binding */ InputAnalysisService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var fast_cartesian__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-cartesian */ 7056);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _remote_node_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../remote/node.service */ 2287);




class InputAnalysisService {
    constructor(nodeService) {
        this.nodeService = nodeService;
    }
    getAnalysis(str, semantic) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            // const lexer = new Tokenizr();
            // lexer.rule(/[a-zA-Z_][a-zA-Z0-9_]*/, (ctx, match) => {
            //     ctx.accept('string');
            // });
            // lexer.rule(/"((?:\\"|[^\r\n])*)"/, (ctx, match) => {
            //     ctx.accept('string', match[1].replace(/\\"/g, '"'));
            // });
            // lexer.rule(/((?:\\"|[^\r\n])*)/, (ctx, match) => {
            //     ctx.accept('string', match[1].replace(/\\"/g, '"'));
            // });
            // lexer.rule(/\/\/[^\r\n]*\r?\n/, (ctx, match) => {
            //     ctx.ignore();
            // });
            // lexer.rule(/[ \t\r\n]+/, (ctx, match) => {
            //     ctx.ignore();
            // });
            // lexer.rule(/[+-]+/, (ctx, match) => {
            //     ctx.accept('string');
            // });
            // // lexer.input('\" mooo ggg\" + sea sss');
            // lexer.input(' (mooo ggg) + sea sss');
            // lexer.tokens().forEach((token) => {
            //     console.log(token.toString());
            // });
            // str = str.replaceAll(' + ', '+');
            let numOpenParan = 0;
            const words = str.split(' ');
            let finalString = [];
            let insidePar = '';
            for (let i = 0; i < words.length; i += 1) {
                const word = words[i];
                if (word.indexOf('*') > -1) {
                    const star = yield this.starAnalysis(word, semantic);
                    if (star !== null) {
                        star.unshift(word + ',');
                        finalString = finalString.concat(star);
                    }
                }
                numOpenParan = this.getNumParentheses(words[i], numOpenParan);
                if (numOpenParan !== 0) {
                    // if (words[i + 1] !== '+' && words[i + 1] !== '|' && words[i] !== '+' && words[i] !== '|'
                    //     && i !== words.length - 1) {
                    //     words[i] = words[i] + ' ';
                    // }
                    insidePar = insidePar + ' ' + words[i];
                }
                else {
                    if (insidePar !== '') {
                        insidePar = insidePar + ' ' + words[i];
                        finalString = finalString.concat(insidePar.trim());
                        insidePar = '';
                    }
                    else {
                        finalString = finalString.concat(words[i]);
                    }
                }
            }
            for (let i = 0; i < finalString.length; i += 1) {
                finalString[i] = finalString[i].replaceAll('+', ' + ');
                finalString[i] = finalString[i].replaceAll('(', '');
                finalString[i] = finalString[i].replaceAll(')', '');
                finalString[i] = finalString[i].replaceAll('\"', '');
                finalString[i] = finalString[i].replaceAll('  ', ' ');
                if (finalString[i] === ' + ') {
                    finalString[i] = finalString[i - 1] + ' + ' + finalString[i + 1];
                    finalString.splice(i + 1, 1);
                    finalString.splice(i - 1, 1);
                }
            }
            return finalString;
        });
    }
    getAnalysis2(str, semantic) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            let words = str.split(' ');
            let isParOpen = 'no';
            let insidePar = '';
            const finalArray = [];
            for (let i = 0; i < words.length; i += 1) {
                const word = words[i];
                if (word.indexOf('*') > -1) {
                    const star = yield this.starAnalysis(word.slice(0, -1), semantic);
                    if (star !== null) {
                        star.unshift(word);
                        words[i] = star;
                    }
                }
            }
            for (let i = words.length - 1; i >= 0; i -= 1) {
                if (!Array.isArray(words[i])) {
                    isParOpen = this.getIsParOpen(words[i], isParOpen);
                    if (isParOpen === 'first' || isParOpen === 'last' || isParOpen === 'middle') {
                        insidePar = words[i] + ' ' + insidePar;
                    }
                    if (isParOpen === 'first' || isParOpen === 'middle') {
                        words[i + 1] = insidePar.trim();
                        words.splice(i, 1);
                    }
                    if (isParOpen === 'first') {
                        insidePar = '';
                    }
                }
            }
            for (let i = words.length - 1; i >= 0; i -= 1) {
                if (words[i] === '+') {
                    if (!Array.isArray(words[i - 1])) {
                        words[i - 1] = [words[i - 1]];
                    }
                    if (!Array.isArray(words[i + 1])) {
                        words[i + 1] = [words[i + 1]];
                    }
                    words[i + 1] = (0,fast_cartesian__WEBPACK_IMPORTED_MODULE_0__["default"])([
                        words[i - 1],
                        words[i + 1],
                    ]);
                    words.splice(i - 1, 2);
                }
            }
            words = words.flat();
            for (let i = 0; i < words.length; i += 1) {
                if (Array.isArray(words[i])) {
                    finalArray.push(words[i].join(' + '));
                }
                else {
                    finalArray.push(words[i]);
                }
            }
            return finalArray;
        });
    }
    getIsParOpen(word, isParOpen) {
        if ((word.startsWith('(') || word.startsWith('\'')) && (word.endsWith(')') || word.endsWith('\''))) {
            return 'no';
        }
        if (word.startsWith('(') || word.startsWith('\'')) {
            return 'first';
        }
        if (word.endsWith(')') || word.endsWith('\'')) {
            return 'last';
        }
        if (isParOpen === 'last') {
            return 'middle';
        }
        return 'no';
    }
    getNumParentheses(word, numOpenParentheses) {
        if (word.startsWith('(') || word.startsWith('\'')) {
            numOpenParentheses++;
        }
        if (word.endsWith(')') || word.endsWith('\'')) {
            numOpenParentheses--;
        }
        return numOpenParentheses;
    }
    starAnalysis(word, semantic) {
        return new Promise(resolve => {
            if (!semantic) {
                this.nodeService.suggestSimple(word.slice(0, -1)).subscribe(data => {
                    const keysText = [];
                    const keys = data.suggest[0].options;
                    keys.forEach((element) => {
                        const str = element.text;
                        keysText.push(str);
                    });
                    resolve(keysText);
                });
            }
            else {
                this.nodeService.suggestTerminology(word.slice(0, -1)).subscribe(data => {
                    const keysText = [];
                    const keys = data.results;
                    keys.forEach((element) => {
                        const str = element.label;
                        keysText.push(str);
                    });
                    resolve(keysText);
                });
            }
        });
    }
}
InputAnalysisService.ɵfac = function InputAnalysisService_Factory(t) { return new (t || InputAnalysisService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_remote_node_service__WEBPACK_IMPORTED_MODULE_1__.NodeService)); };
InputAnalysisService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: InputAnalysisService, factory: InputAnalysisService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9932:
/*!***********************************************************!*\
  !*** ./src/app/services/local/start-searching.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartSearchingService": () => (/* binding */ StartSearchingService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _remote_node_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../remote/node.service */ 2287);
/* harmony import */ var _communication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./communication.service */ 425);
/* harmony import */ var _gfbio_preprocess_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gfbio-preprocess-data.service */ 890);





class StartSearchingService {
    constructor(nodeService, communicationService, gfbioPreprocessData) {
        this.nodeService = nodeService;
        this.communicationService = communicationService;
        this.gfbioPreprocessData = gfbioPreprocessData;
    }
    startSearching(searchKey, semantic, from, filters) {
        let urlTerm;
        const urlIndex = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.context;
        let body;
        let key;
        if (semantic === true) {
            key = searchKey;
            urlTerm = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.semSearchUrl;
        }
        else {
            key = searchKey.join(' ');
            urlTerm = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.searchUrl;
        }
        // console.log(key);
        body = JSON.stringify({
            queryterm: key, from,
            size: 10, filter: filters
        });
        this.nodeService.search(urlIndex + urlTerm, body, this.gfbioPreprocessData, [semantic]);
    }
}
StartSearchingService.ɵfac = function StartSearchingService_Factory(t) { return new (t || StartSearchingService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_remote_node_service__WEBPACK_IMPORTED_MODULE_1__.NodeService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_communication_service__WEBPACK_IMPORTED_MODULE_2__.CommunicationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_gfbio_preprocess_data_service__WEBPACK_IMPORTED_MODULE_3__.GfbioPreprocessDataService)); };
StartSearchingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: StartSearchingService, factory: StartSearchingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2287:
/*!*************************************************!*\
  !*** ./src/app/services/remote/node.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NodeService": () => (/* binding */ NodeService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _environments_gfbio_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/gfbio.environment */ 9489);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ 2777);
/* harmony import */ var _local_communication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../local/communication.service */ 425);






class NodeService {
    constructor(http, spinner, communicationService) {
        this.http = http;
        this.spinner = spinner;
        this.communicationService = communicationService;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.suggestPanUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.context + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.suggestPanUrl;
        this.suggestTerUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.context + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.suggestTerUrl;
        this.basketURL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.context + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.basketUrl;
        this.addToBasketUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.context + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.addToBasketUrl;
        this.deleteFromBasketUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.context + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.deleteFromBasket;
        this.deleteAllBasketUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.context + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.deleteAllBasket;
        this.readFromBasketUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.context + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.readFromBasketUrl;
        this.semantic = false;
        this.headers = { 'Content-Type': 'application/json' };
    }
    search(urlTerm, body, serviceType, otherParameters) {
        // console.log(body);
        this.spinner.show();
        const headers = this.headers;
        this.http.post(this.url + urlTerm, body, { headers }).subscribe(data => {
            let results;
            results = serviceType.getResult(data, otherParameters);
            this.communicationService.setResult(results);
            // console.log(results);
            // console.log(data);
            this.spinner.hide();
        }, err => {
            alert(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.textAlertSemSearchError);
            this.spinner.hide();
        });
    }
    suggestSimple(key) {
        const body = {
            term: key
        };
        const headers = this.headers;
        return this.http.post(this.url + this.suggestPanUrl, body, { headers });
    }
    suggestTerminology(key) {
        const body = {
            term: key
        };
        const headers = this.headers;
        return this.http.post(this.url + this.suggestTerUrl, body, { headers });
    }
    addToBasket(itemInDatabase) {
        return this.http.post(this.url + this.addToBasketUrl, itemInDatabase);
    }
    readFromBasket(userId) {
        return this.http.get(this.url + this.readFromBasketUrl + userId);
    }
    deleteFromBasket(itemInDatabase) {
        return this.http.post(this.url + this.deleteFromBasketUrl, itemInDatabase);
    }
    deleteAllBasket(userId) {
        return this.http.post(this.url + this.deleteAllBasketUrl, { userId });
    }
    basketDownload(baskets) {
        // console.log('basketDownload | baskets');
        // console.log(baskets);
        // console.log('post to this.url ', this.url, ' | this.basketURL ', this.basketURL);
        return this.http.post(this.url + this.basketURL, baskets, { responseType: 'blob' });
    }
    postBasketToCollection(baskets, userId) {
        // console.log('postBasketToCollection | baskets');
        // console.log(baskets);
        const headers = {
            accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Token ${_environments_gfbio_environment__WEBPACK_IMPORTED_MODULE_1__.gfbioEnvironment.COLLECTIONS_API_TOKEN}`,
        };
        // console.log('Here a http post to collection service will take place');
        // TODO: I think it is exactly this payload but sended to collectionservice host
        return this.http.post(_environments_gfbio_environment__WEBPACK_IMPORTED_MODULE_1__.gfbioEnvironment.COLLECTIONS_API_URL, {
            set: baskets.basket,
            external_user_id: userId
        }, { headers });
    }
    narrow(id, uri) {
        const body = {
            id,
            uri
        };
        const headers = this.headers;
        return this.http.post(this.url + '/gfbio/narrow', body, { headers });
    }
    broad(id, uri) {
        const body = {
            id,
            uri
        };
        const headers = this.headers;
        return this.http.post(this.url + '/gfbio/broad', body, { headers });
    }
}
NodeService.ɵfac = function NodeService_Factory(t) { return new (t || NodeService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_local_communication_service__WEBPACK_IMPORTED_MODULE_2__.CommunicationService)); };
NodeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: NodeService, factory: NodeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3684:
/*!******************************************************************!*\
  !*** ./src/app/suggestion-window/suggestion-window.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuggestionWindowComponent": () => (/* binding */ SuggestionWindowComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_local_communication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/local/communication.service */ 425);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);




function SuggestionWindowComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SuggestionWindowComponent_div_3_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const item_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.chooseSuggestion(item_r1.text); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1.text, " ");
} }
class SuggestionWindowComponent {
    constructor(communicationService) {
        this.communicationService = communicationService;
        this.windowSuggestKey = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.isClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
        this.communicationService
            .getSuggest()
            .subscribe((suggest) => (this.suggest = suggest));
    }
    chooseSuggestion(suggestionKey) {
        this.windowSuggestKey.emit(suggestionKey);
    }
    documentClick(event) {
        this.isClicked.emit();
    }
}
SuggestionWindowComponent.ɵfac = function SuggestionWindowComponent_Factory(t) { return new (t || SuggestionWindowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_local_communication_service__WEBPACK_IMPORTED_MODULE_0__.CommunicationService)); };
SuggestionWindowComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SuggestionWindowComponent, selectors: [["app-suggestion-window"]], hostBindings: function SuggestionWindowComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SuggestionWindowComponent_click_HostBindingHandler($event) { return ctx.documentClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
    } }, outputs: { windowSuggestKey: "windowSuggestKey", isClicked: "isClicked" }, decls: 4, vars: 1, consts: [[1, "transparentWindow"], [1, "windowBox"], ["class", "option", 3, "click", 4, "ngFor", "ngForOf"], [1, "option", 3, "click"]], template: function SuggestionWindowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SuggestionWindowComponent_div_3_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.suggest);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWdnZXN0aW9uLXdpbmRvdy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 6858:
/*!***********************************!*\
  !*** ./src/app/utils/app.init.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeKeycloak": () => (/* binding */ initializeKeycloak)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);

function initializeKeycloak(keycloak) {
    return () => keycloak.init({
        config: {
            url: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.Keycloak_Url,
            realm: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.Keycloak_Realm,
            clientId: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.Keycloak_ClientId
        },
        initOptions: {
            //onLoad: 'check-sso',
            checkLoginIframe: true,
            checkLoginIframeInterval: 25
        },
        //loadUserProfileAtStartUp: true
    });
}


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    Keycloak_Url: 'https://keycloak.sso.gwdg.de/auth',
    Keycloak_RedirectUri: 'https://dev.gfbio.uni-jena.de/daisi',
    Keycloak_Realm: 'GFBio',
    Keycloak_ClientId: 'dev-gfbio-angular',
    apiUrl: 'http://localhost:3000',
    context: '/gfbio',
    searchUrl: '/search',
    semSearchUrl: '/semantic-search',
    suggestUrl: '/suggest',
    suggestPanUrl: '/suggest-pan',
    suggestTerUrl: '/suggest-ter',
    basketUrl: '/basketDownload',
    addToBasketUrl: '/addToBasket',
    deleteFromBasket: '/deleteFromBasket',
    deleteAllBasket: '/deleteAllBasket',
    readFromBasketUrl: '/api/baskets/user/',
    imagePath: 'assets/img/',
    vatImg: 'vat.png',
    semSearchImg: 'icon_semsearch3.png',
    textAlertSemSearchError: 'A connection error occured. Please reduce the amount of search terms or try the search again.',
    textAlertWordLength: 'please choose a word longer than 4 letters to use the * in semantic search',
    textAlertBasketErrorDownload: 'An error occured during the download.\nPlease contact the administrator for more information.',
    textTooltipBasketVATvisualizable: 'dataset can be visualized in VAT',
    textTooltipBasketVATnotVisualizable: 'dataset can not be visualized in VAT',
    textTooltipBasketDataAvailable: 'data are available for download',
    textTooltipBasketDataNotAvailable: 'data are not available for download',
    textTooltipBasketMetadataAvailable: 'metadata are available for download',
    textTooltipBasketMetadataNotAvailable: 'metadata are not available for download',
    textTooltipBasketMultimediaAvailable: 'multimedia are available for download',
    textTooltipBasketMultimediaNotAvailable: 'multimedia are not available for download',
    textTooltipBasketRemove: 'remove dataset from basket',
    textTooltipBasketRemoveSure: 'Are you sure that you want to empty the basket?',
    textTooltipBasketEmpty: 'Please select a dataset from the search result.',
    textTSWidgetInfo: 'Your search query is expanded with relational terms obtained from GFBio\'s ' +
        'Terminology Service. Some terms can be further expanded with more narrower or broader terms. ' +
        'Click on the buttons to obtain all descendants or an ancestor. With a double-click on the returned ' +
        'narrower or broader terms you can add them to the search field.',
    dataCenter: 'Data Center',
    dataType: 'Data Type',
    parameter: 'Parameter',
    taxonomy: 'Taxonomy',
    geographicRegion: 'Geographic Region',
    type: 'Type',
    colors: ['#94e851', '#f52f57', '#173b4e', '#ee82ee', '#ffff00', '#27408b', '#009acd', '#ff00ff', '#8b0000', '#00fa9a'],
    noCoordinates: 'This dataset has no coordinates and can not be located on the map.',
    vatTooltip: 'This dataset can be transfered to VAT.',
    datacenterTooltips: {
        SNSB: 'This dataset is provided by Staatliche Naturwissenschaftliche ' +
            'Sammlungen Bayerns; SNSB IT Center, M;nchen (SNSB).',
        SGN: 'This dataset is provided by Senckenberg Gesellschaft f;r Naturforschung; Leibniz Institute Frankfurt (SGN).',
        BGBM: 'This dataset is provided by Botanic Garden and Botanical Museum Berlin, Freie Universit;t Berlin (BGBM).',
        MfN: 'This dataset is provided by Leibniz Institute for Research on Evolution and Biodiversity, Berlin (MfN).',
        ZFMK: 'This dataset is provided by Zoological Research Museum Alexander Koenig; Leibniz ' +
            'Institute for Animal Biodiversity, Bonn (ZFMK).',
        SMNS: 'This dataset is provided by State Museum of Natural History Stuttgart (SMNS).',
        PANGAEA: 'This dataset is provided by Data Publisher for Earth; Environmental Science  (PANGAEA).',
        DSMZ: 'This dataset is provided by Leibniz Institute DSMZ; German Collection of Microorganisms ' +
            'and Cell Cultures, Braunschweig (DSMZ).',
        Gatersleben: 'e!DAL;PGP ; Plant Genomics and Phenomics Research Data Repository, ' +
            'Leibniz Institute of Plant Genetics and Crop Plant Research (IPK) Gatersleben',
        ENA: 'European Nucleotide Archive'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 9489:
/*!***********************************************!*\
  !*** ./src/environments/gfbio.environment.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gfbioEnvironment": () => (/* binding */ gfbioEnvironment)
/* harmony export */ });
const gfbioEnvironment = {
    production: true,
    COLLECTIONS_API_URL: 'https://collections.gfbio.dev/api/collections/',
    COLLECTIONS_API_TOKEN: 'API_TOKEN_HERE'
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 8685,
	"./af.js": 8685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 2614,
	"./ar-kw.js": 2614,
	"./ar-ly": 8630,
	"./ar-ly.js": 8630,
	"./ar-ma": 8674,
	"./ar-ma.js": 8674,
	"./ar-sa": 9032,
	"./ar-sa.js": 9032,
	"./ar-tn": 4730,
	"./ar-tn.js": 4730,
	"./ar.js": 254,
	"./az": 3052,
	"./az.js": 3052,
	"./be": 150,
	"./be.js": 150,
	"./bg": 3069,
	"./bg.js": 3069,
	"./bm": 3466,
	"./bm.js": 3466,
	"./bn": 8516,
	"./bn-bd": 557,
	"./bn-bd.js": 557,
	"./bn.js": 8516,
	"./bo": 6273,
	"./bo.js": 6273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 9815,
	"./bs.js": 9815,
	"./ca": 3331,
	"./ca.js": 3331,
	"./cs": 1320,
	"./cs.js": 1320,
	"./cv": 2219,
	"./cv.js": 2219,
	"./cy": 8266,
	"./cy.js": 8266,
	"./da": 6427,
	"./da.js": 6427,
	"./de": 7435,
	"./de-at": 2871,
	"./de-at.js": 2871,
	"./de-ch": 2994,
	"./de-ch.js": 2994,
	"./de.js": 7435,
	"./dv": 2357,
	"./dv.js": 2357,
	"./el": 5649,
	"./el.js": 5649,
	"./en-au": 9961,
	"./en-au.js": 9961,
	"./en-ca": 9878,
	"./en-ca.js": 9878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 864,
	"./en-ie.js": 864,
	"./en-il": 1579,
	"./en-il.js": 1579,
	"./en-in": 940,
	"./en-in.js": 940,
	"./en-nz": 6181,
	"./en-nz.js": 6181,
	"./en-sg": 4301,
	"./en-sg.js": 4301,
	"./eo": 5291,
	"./eo.js": 5291,
	"./es": 4529,
	"./es-do": 3764,
	"./es-do.js": 3764,
	"./es-mx": 2584,
	"./es-mx.js": 2584,
	"./es-us": 3425,
	"./es-us.js": 3425,
	"./es.js": 4529,
	"./et": 5203,
	"./et.js": 5203,
	"./eu": 678,
	"./eu.js": 678,
	"./fa": 3483,
	"./fa.js": 3483,
	"./fi": 6262,
	"./fi.js": 6262,
	"./fil": 2521,
	"./fil.js": 2521,
	"./fo": 4555,
	"./fo.js": 4555,
	"./fr": 3131,
	"./fr-ca": 8239,
	"./fr-ca.js": 8239,
	"./fr-ch": 1702,
	"./fr-ch.js": 1702,
	"./fr.js": 3131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 3821,
	"./ga.js": 3821,
	"./gd": 1753,
	"./gd.js": 1753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 2762,
	"./gom-deva.js": 2762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 2809,
	"./gu.js": 2809,
	"./he": 5402,
	"./he.js": 5402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 410,
	"./hr.js": 410,
	"./hu": 8288,
	"./hu.js": 8288,
	"./hy-am": 7928,
	"./hy-am.js": 7928,
	"./id": 1334,
	"./id.js": 1334,
	"./is": 6959,
	"./is.js": 6959,
	"./it": 4864,
	"./it-ch": 1124,
	"./it-ch.js": 1124,
	"./it.js": 4864,
	"./ja": 6141,
	"./ja.js": 6141,
	"./jv": 9187,
	"./jv.js": 9187,
	"./ka": 2136,
	"./ka.js": 2136,
	"./kk": 4332,
	"./kk.js": 4332,
	"./km": 8607,
	"./km.js": 8607,
	"./kn": 4305,
	"./kn.js": 4305,
	"./ko": 234,
	"./ko.js": 234,
	"./ku": 6003,
	"./ku.js": 6003,
	"./ky": 5061,
	"./ky.js": 5061,
	"./lb": 2786,
	"./lb.js": 2786,
	"./lo": 6183,
	"./lo.js": 6183,
	"./lt": 29,
	"./lt.js": 29,
	"./lv": 4169,
	"./lv.js": 4169,
	"./me": 8577,
	"./me.js": 8577,
	"./mi": 8177,
	"./mi.js": 8177,
	"./mk": 337,
	"./mk.js": 337,
	"./ml": 5260,
	"./ml.js": 5260,
	"./mn": 2325,
	"./mn.js": 2325,
	"./mr": 4695,
	"./mr.js": 4695,
	"./ms": 5334,
	"./ms-my": 7151,
	"./ms-my.js": 7151,
	"./ms.js": 5334,
	"./mt": 3570,
	"./mt.js": 3570,
	"./my": 7963,
	"./my.js": 7963,
	"./nb": 8028,
	"./nb.js": 8028,
	"./ne": 6638,
	"./ne.js": 6638,
	"./nl": 302,
	"./nl-be": 6782,
	"./nl-be.js": 6782,
	"./nl.js": 302,
	"./nn": 3501,
	"./nn.js": 3501,
	"./oc-lnc": 563,
	"./oc-lnc.js": 563,
	"./pa-in": 869,
	"./pa-in.js": 869,
	"./pl": 5302,
	"./pl.js": 5302,
	"./pt": 9687,
	"./pt-br": 4884,
	"./pt-br.js": 4884,
	"./pt.js": 9687,
	"./ro": 9107,
	"./ro.js": 9107,
	"./ru": 3627,
	"./ru.js": 3627,
	"./sd": 355,
	"./sd.js": 355,
	"./se": 3427,
	"./se.js": 3427,
	"./si": 1848,
	"./si.js": 1848,
	"./sk": 4590,
	"./sk.js": 4590,
	"./sl": 184,
	"./sl.js": 184,
	"./sq": 6361,
	"./sq.js": 6361,
	"./sr": 8965,
	"./sr-cyrl": 1287,
	"./sr-cyrl.js": 1287,
	"./sr.js": 8965,
	"./ss": 5456,
	"./ss.js": 5456,
	"./sv": 451,
	"./sv.js": 451,
	"./sw": 7558,
	"./sw.js": 7558,
	"./ta": 2702,
	"./ta.js": 2702,
	"./te": 3693,
	"./te.js": 3693,
	"./tet": 1243,
	"./tet.js": 1243,
	"./tg": 2500,
	"./tg.js": 2500,
	"./th": 5768,
	"./th.js": 5768,
	"./tk": 7761,
	"./tk.js": 7761,
	"./tl-ph": 5780,
	"./tl-ph.js": 5780,
	"./tlh": 9590,
	"./tlh.js": 9590,
	"./tr": 3807,
	"./tr.js": 3807,
	"./tzl": 3857,
	"./tzl.js": 3857,
	"./tzm": 654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 654,
	"./ug-cn": 845,
	"./ug-cn.js": 845,
	"./uk": 9232,
	"./uk.js": 9232,
	"./ur": 7052,
	"./ur.js": 7052,
	"./uz": 7967,
	"./uz-latn": 2233,
	"./uz-latn.js": 2233,
	"./uz.js": 7967,
	"./vi": 8615,
	"./vi.js": 8615,
	"./x-pseudo": 2320,
	"./x-pseudo.js": 2320,
	"./yo": 1313,
	"./yo.js": 1313,
	"./zh-cn": 4490,
	"./zh-cn.js": 4490,
	"./zh-hk": 5910,
	"./zh-hk.js": 5910,
	"./zh-mo": 8262,
	"./zh-mo.js": 8262,
	"./zh-tw": 4223,
	"./zh-tw.js": 4223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map