import * as i0 from '@angular/core';
import { PLATFORM_ID, Injectable, Inject, makeEnvironmentProviders, NgModule } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

class NgxZendeskWebwidgetConfig {
}

class NgxZendeskWebwidgetService {
    constructor(ngxZendeskWebwidgetConfig, platformId) {
        this.ngxZendeskWebwidgetConfig = ngxZendeskWebwidgetConfig;
        this.initialized = false;
        if (!this.ngxZendeskWebwidgetConfig.accountUrl) {
            throw new Error('Missing accountUrl. Please set in app config via ZendeskWidgetProvider');
        }
        this.isBrowser = isPlatformBrowser(platformId);
        if (!this.ngxZendeskWebwidgetConfig.lazyLoad) {
            this.initZendesk();
        }
    }
    initZendesk() {
        if (!this.isBrowser) {
            return Promise.resolve(false);
        }
        const win = window;
        const config = this.ngxZendeskWebwidgetConfig;
        // tslint:disable
        win.zEmbed || function () {
            let n, o, d, i, s, a = [];
            let r = document.createElement("iframe");
            win.zEmbed = function () {
                a.push(arguments);
            };
            win.zE = win.zE || win.zEmbed;
            r.src = "javascript:false";
            r.title = "";
            r.style.cssText = "display: none";
            d = document.getElementsByTagName(config.injectionTag || "head");
            d = d[d.length - 1];
            d.parentNode.insertBefore(r, d);
            i = r.contentWindow;
            s = i.document;
            try {
                o = s;
            }
            catch (e) {
                n = document.domain;
                r.src = 'javascript:var d=document.open();d.domain="' + n + '";void(0);';
                o = s;
            }
            o.open()._l = function () {
                let e = this.createElement("script");
                n && (this.domain = n);
                e.id = "js-iframe-async";
                e.src = "https://static.zdassets.com/ekr/snippet.js";
                this.t += new Date;
                this.zendeskHost = config.accountUrl;
                this.zEQueue = a;
                this.body.appendChild(e);
            };
            o.write('<body onload="document._l();">');
            o.close();
        }();
        // tslint:enable
        return this.finishLoading();
    }
    finishLoading() {
        return new Promise((resolve, reject) => {
            const win = window;
            const timeout = setTimeout(() => {
                this.initialized = false;
                reject(Error('timeout'));
            }, this.ngxZendeskWebwidgetConfig.timeOut || 30000);
            win.zE(() => {
                this.ngxZendeskWebwidgetConfig.callback(win.zE);
                this.initialized = true;
                this._zE = win.zE;
                clearTimeout(timeout);
                resolve(true);
            });
        });
    }
    get isInitialized() {
        return this.initialized;
    }
    get zE() {
        return this._zE;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NgxZendeskWebwidgetService, deps: [{ token: NgxZendeskWebwidgetConfig }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NgxZendeskWebwidgetService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NgxZendeskWebwidgetService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: NgxZendeskWebwidgetConfig }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }] });

function provideNgxZendeskWebwidget(zendeskConfig) {
    return makeEnvironmentProviders([
        { provide: NgxZendeskWebwidgetConfig, useClass: zendeskConfig },
        { provide: NgxZendeskWebwidgetService, useClass: NgxZendeskWebwidgetService, deps: [NgxZendeskWebwidgetConfig] }
    ]);
}
class NgxZendeskWebwidgetModule {
    static forRoot(zendeskConfig) {
        return {
            ngModule: NgxZendeskWebwidgetModule,
            providers: [
                { provide: NgxZendeskWebwidgetConfig, useClass: zendeskConfig },
                { provide: NgxZendeskWebwidgetService, useClass: NgxZendeskWebwidgetService, deps: [NgxZendeskWebwidgetConfig] }
            ]
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NgxZendeskWebwidgetModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: NgxZendeskWebwidgetModule }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NgxZendeskWebwidgetModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NgxZendeskWebwidgetModule, decorators: [{
            type: NgModule,
            args: [{}]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { NgxZendeskWebwidgetConfig, NgxZendeskWebwidgetModule, NgxZendeskWebwidgetService, provideNgxZendeskWebwidget };
//# sourceMappingURL=ngx-zendesk-webwidget.mjs.map
