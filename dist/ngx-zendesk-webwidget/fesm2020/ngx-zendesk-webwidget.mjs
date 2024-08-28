import * as i0 from '@angular/core';
import { Injectable, NgModule } from '@angular/core';

class NgxZendeskWebwidgetConfig {
}

function getWindow() {
    return window;
}
class NgxZendeskWebwidgetService {
    constructor(ngxZendeskWebwidgetConfig) {
        this.ngxZendeskWebwidgetConfig = ngxZendeskWebwidgetConfig;
        this.initialized = false;
        if (!this.ngxZendeskWebwidgetConfig.accountUrl) {
            throw new Error('Missing accountUrl. Please set in app config via ZendeskWidgetProvider');
        }
        this.window = getWindow();
        if (!this.ngxZendeskWebwidgetConfig.lazyLoad) {
            this.initZendesk();
        }
    }
    initZendesk() {
        const window = this.window;
        const config = this.ngxZendeskWebwidgetConfig;
        // tslint:disable
        window.zEmbed || function (e, t) {
            let n, o, d, i, s, a = [];
            let r = document.createElement("iframe");
            window.zEmbed = function () {
                a.push(arguments);
            };
            window.zE = window.zE || window.zEmbed;
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
            const timeout = setTimeout(() => {
                this.initialized = false;
                reject(Error('timeout'));
            }, this.ngxZendeskWebwidgetConfig.timeOut || 30000); // 30 seconds
            this.window.zE(() => {
                this.ngxZendeskWebwidgetConfig.callback(this.window.zE);
                this.initialized = true;
                this._zE = this.window.zE;
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
}
NgxZendeskWebwidgetService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgxZendeskWebwidgetService, deps: [{ token: NgxZendeskWebwidgetConfig }], target: i0.ɵɵFactoryTarget.Injectable });
NgxZendeskWebwidgetService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgxZendeskWebwidgetService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgxZendeskWebwidgetService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: NgxZendeskWebwidgetConfig }]; } });

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
}
NgxZendeskWebwidgetModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgxZendeskWebwidgetModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxZendeskWebwidgetModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgxZendeskWebwidgetModule });
NgxZendeskWebwidgetModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgxZendeskWebwidgetModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgxZendeskWebwidgetModule, decorators: [{
            type: NgModule,
            args: [{}]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { NgxZendeskWebwidgetConfig, NgxZendeskWebwidgetModule, NgxZendeskWebwidgetService };
//# sourceMappingURL=ngx-zendesk-webwidget.mjs.map
