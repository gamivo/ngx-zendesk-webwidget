import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgxZendeskWebwidgetConfig } from './ngx-zendesk-webwidget.model';
import * as i0 from "@angular/core";
import * as i1 from "./ngx-zendesk-webwidget.model";
export class NgxZendeskWebwidgetService {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NgxZendeskWebwidgetService, deps: [{ token: i1.NgxZendeskWebwidgetConfig }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NgxZendeskWebwidgetService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NgxZendeskWebwidgetService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: i1.NgxZendeskWebwidgetConfig }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXplbmRlc2std2Vid2lkZ2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL25neC16ZW5kZXNrLXdlYndpZGdldC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7O0FBSzFFLE1BQU0sT0FBTywwQkFBMEI7SUFNckMsWUFDVSx5QkFBb0QsRUFDdkMsVUFBa0I7UUFEL0IsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQUp0RCxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQU8xQixJQUFJLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQy9DLE1BQU0sSUFBSSxLQUFLLENBQUMsd0VBQXdFLENBQUMsQ0FBQztRQUM1RixDQUFDO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUUvQyxJQUFJLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzdDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixDQUFDO0lBQ0gsQ0FBQztJQUVNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNwQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUVELE1BQU0sR0FBRyxHQUFHLE1BQWEsQ0FBQztRQUMxQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUM7UUFFOUMsaUJBQWlCO1FBQ2pCLEdBQUcsQ0FBQyxN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LHlCQUF5QixDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQ2xCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQzsrR0EvRlUsMEJBQTBCLDJEQVEzQixXQUFXO21IQVJWLDBCQUEwQixjQUZ6QixNQUFNOzs0RkFFUCwwQkFBMEI7a0JBSHRDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFTSSxNQUFNOzJCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBQTEFURk9STV9JRCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IE5neFplbmRlc2tXZWJ3aWRnZXRDb25maWcgfSBmcm9tICcuL25neC16ZW5kZXNrLXdlYndpZGdldC5tb2RlbCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3haZW5kZXNrV2Vid2lkZ2V0U2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgaXNCcm93c2VyOiBib29sZWFuO1xyXG4gIHByaXZhdGUgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICBwcml2YXRlIF96RTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbmd4WmVuZGVza1dlYndpZGdldENvbmZpZzogTmd4WmVuZGVza1dlYndpZGdldENvbmZpZyxcclxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IG9iamVjdFxyXG4gICkge1xyXG4gICAgaWYgKCF0aGlzLm5neFplbmRlc2tXZWJ3aWRnZXRDb25maWcuYWNjb3VudFVybCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgYWNjb3VudFVybC4gUGxlYXNlIHNldCBpbiBhcHAgY29uZmlnIHZpYSBaZW5kZXNrV2lkZ2V0UHJvdmlkZXInKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xyXG5cclxuICAgIGlmICghdGhpcy5uZ3haZW5kZXNrV2Vid2lkZ2V0Q29uZmlnLmxhenlMb2FkKSB7XHJcbiAgICAgIHRoaXMuaW5pdFplbmRlc2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0WmVuZGVzaygpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGlmICghdGhpcy5pc0Jyb3dzZXIpIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgd2luID0gd2luZG93IGFzIGFueTtcclxuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMubmd4WmVuZGVza1dlYndpZGdldENvbmZpZztcclxuXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZVxyXG4gICAgd2luLnpFbWJlZCB8fCBmdW5jdGlvbigpIHtcclxuICAgICAgbGV0IG46IGFueSwgbzogYW55LCBkOiBhbnksIGk6IGFueSwgczogYW55LCBhOiBhbnlbXSA9IFtdXHJcbiAgICAgIGxldCByID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKVxyXG4gICAgICB3aW4uekVtYmVkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgYS5wdXNoKGFyZ3VtZW50cylcclxuICAgICAgfVxyXG4gICAgICB3aW4uekUgPSB3aW4uekUgfHwgd2luLnpFbWJlZFxyXG4gICAgICByLnNyYyA9IFwiamF2YXNjcmlwdDpmYWxzZVwiXHJcbiAgICAgIHIudGl0bGUgPSBcIlwiXHJcbiAgICAgIHIuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTogbm9uZVwiXHJcbiAgICAgIGQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShjb25maWcuaW5qZWN0aW9uVGFnIHx8IFwiaGVhZFwiKVxyXG4gICAgICBkID0gZFtkLmxlbmd0aCAtIDFdXHJcbiAgICAgIGQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUociwgZClcclxuICAgICAgaSA9IHIuY29udGVudFdpbmRvd1xyXG4gICAgICBzID0gaS5kb2N1bWVudFxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIG8gPSBzXHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBuID0gZG9jdW1lbnQuZG9tYWluXHJcbiAgICAgICAgci5zcmMgPSAnamF2YXNjcmlwdDp2YXIgZD1kb2N1bWVudC5vcGVuKCk7ZC5kb21haW49XCInICsgbiArICdcIjt2b2lkKDApOydcclxuICAgICAgICBvID0gc1xyXG4gICAgICB9XHJcbiAgICAgIG8ub3BlbigpLl9sID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIilcclxuICAgICAgICBuICYmICh0aGlzLmRvbWFpbiA9IG4pXHJcbiAgICAgICAgZS5pZCA9IFwianMtaWZyYW1lLWFzeW5jXCJcclxuICAgICAgICBlLnNyYyA9IFwiaHR0cHM6Ly9zdGF0aWMuemRhc3NldHMuY29tL2Vrci9zbmlwcGV0LmpzXCJcclxuICAgICAgICB0aGlzLnQgKz0gbmV3IERhdGVcclxuICAgICAgICB0aGlzLnplbmRlc2tIb3N0ID0gY29uZmlnLmFjY291bnRVcmxcclxuICAgICAgICB0aGlzLnpFUXVldWUgPSBhXHJcbiAgICAgICAgdGhpcy5ib2R5LmFwcGVuZENoaWxkKGUpXHJcbiAgICAgIH1cclxuICAgICAgby53cml0ZSgnPGJvZHkgb25sb2FkPVwiZG9jdW1lbnQuX2woKTtcIj4nKVxyXG4gICAgICBvLmNsb3NlKClcclxuICAgIH0oKTtcclxuICAgIC8vIHRzbGludDplbmFibGVcclxuXHJcbiAgICByZXR1cm4gdGhpcy5maW5pc2hMb2FkaW5nKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZpbmlzaExvYWRpbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCB3aW4gPSB3aW5kb3cgYXMgYW55O1xyXG5cclxuICAgICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICAgICAgICByZWplY3QoRXJyb3IoJ3RpbWVvdXQnKSk7XHJcbiAgICAgIH0sIHRoaXMubmd4WmVuZGVza1dlYndpZGdldENvbmZpZy50aW1lT3V0IHx8IDMwMDAwKTtcclxuXHJcbiAgICAgIHdpbi56RSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5uZ3haZW5kZXNrV2Vid2lkZ2V0Q29uZmlnLmNhbGxiYWNrKHdpbi56RSk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fekUgPSB3aW4uekU7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNJbml0aWFsaXplZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmluaXRpYWxpemVkO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHpFKCk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5fekU7XHJcbiAgfVxyXG59XHJcbiJdfQ==