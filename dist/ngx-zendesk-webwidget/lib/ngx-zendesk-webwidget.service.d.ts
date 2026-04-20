import { NgxZendeskWebwidgetConfig } from './ngx-zendesk-webwidget.model';
import * as i0 from "@angular/core";
export declare class NgxZendeskWebwidgetService {
    private ngxZendeskWebwidgetConfig;
    private readonly isBrowser;
    private initialized;
    private _zE;
    constructor(ngxZendeskWebwidgetConfig: NgxZendeskWebwidgetConfig, platformId: object);
    initZendesk(): Promise<boolean>;
    private finishLoading;
    get isInitialized(): boolean;
    get zE(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxZendeskWebwidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxZendeskWebwidgetService>;
}
