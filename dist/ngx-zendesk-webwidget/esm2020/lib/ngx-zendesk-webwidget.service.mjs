import { Injectable } from '@angular/core';
import { NgxZendeskWebwidgetConfig } from './ngx-zendesk-webwidget.model';
import * as i0 from "@angular/core";
import * as i1 from "./ngx-zendesk-webwidget.model";
function getWindow() {
    return window;
}
export class NgxZendeskWebwidgetService {
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
NgxZendeskWebwidgetService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgxZendeskWebwidgetService, deps: [{ token: i1.NgxZendeskWebwidgetConfig }], target: i0.ɵɵFactoryTarget.Injectable });
NgxZendeskWebwidgetService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgxZendeskWebwidgetService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgxZendeskWebwidgetService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.NgxZendeskWebwidgetConfig }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXplbmRlc2std2Vid2lkZ2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL25neC16ZW5kZXNrLXdlYndpZGdldC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7OztBQUUxRSxTQUFTLFNBQVM7SUFDaEIsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUtELE1BQU0sT0FBTywwQkFBMEI7SUFNckMsWUFBb0IseUJBQW9EO1FBQXBELDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFIaEUsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFJMUIsSUFBSSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLEVBQUU7WUFDOUMsTUFBTSxJQUFJLEtBQUssQ0FBQyx3RUFBd0UsQ0FBQyxDQUFDO1NBQzNGO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLEVBQUUsQ0FBQztRQUUxQixJQUFJLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFFBQVEsRUFBRTtZQUM1QyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBRU0sV0FBVztRQUNoQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztRQUU5QyxpQkFBaUI7UUFDakIsTUFBTSxDQUFDLE1BQU0sSUFBSSxVQUFTLENBQUMsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFBO1lBQ3pCLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDeEMsTUFBTSxDQUFDLE1BQU0sR0FBRztnQkFDZCxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQ25CLENBQUMsQ0FBQTtZQUNELE1BQU0sQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFBO1lBQ3RDLENBQUMsQ0FBQyxHQUFHLEdBQUcsa0JBQWtCLENBQUE7WUFDMUIsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUE7WUFDWixDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUE7WUFDakMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsWUFBWSxJQUFJLE1BQU0sQ0FBQyxDQUFBO1lBQ2hFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQTtZQUNuQixDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7WUFDL0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUE7WUFDbkIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUE7WUFDZCxJQUFJO2dCQUNGLENBQUMsR0FBRyxDQUFDLENBQUE7YUFDTjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFBO2dCQUNuQixDQUFDLENBQUMsR0FBRyxHQUFHLDZDQUE2QyxHQUFHLENBQUMsR0FBRyxZQUFZLENBQUE7Z0JBQ3hFLENBQUMsR0FBRyxDQUFDLENBQUE7YUFDTjtZQUNELENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEdBQUc7Z0JBQ1osSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtnQkFDcEMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQTtnQkFDdEIsQ0FBQyxDQUFDLEVBQUUsR0FBRyxpQkFBaUIsQ0FBQTtnQkFDeEIsQ0FBQyxDQUFDLEdBQUcsR0FBRyw0Q0FBNEMsQ0FBQTtnQkFDcEQsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQTtnQkFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFBO2dCQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQTtnQkFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDMUIsQ0FBQyxDQUFBO1lBQ0QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFBO1lBQ3pDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNYLENBQUMsRUFBRSxDQUFDO1FBQ0osZ0JBQWdCO1FBRWhCLE9BQU8sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTyxhQUFhO1FBQ25CLE9BQU8sSUFBSSxPQUFPLENBQVUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFFOUMsTUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMzQixDQUFDLEVBQUUsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLGFBQWE7WUFFbEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFO2dCQUNsQixJQUFJLENBQUMseUJBQXlCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3hELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUMxQixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFBO0lBQ2pCLENBQUM7O3VIQXZGVSwwQkFBMEI7MkhBQTFCLDBCQUEwQixjQUZ6QixNQUFNOzJGQUVQLDBCQUEwQjtrQkFIdEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOZ3haZW5kZXNrV2Vid2lkZ2V0Q29uZmlnIH0gZnJvbSAnLi9uZ3gtemVuZGVzay13ZWJ3aWRnZXQubW9kZWwnO1xyXG5cclxuZnVuY3Rpb24gZ2V0V2luZG93KCk6IGFueSB7XHJcbiAgcmV0dXJuIHdpbmRvdztcclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4WmVuZGVza1dlYndpZGdldFNlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IHdpbmRvdzogYW55O1xyXG4gIHByaXZhdGUgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICBwcml2YXRlIF96RTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5neFplbmRlc2tXZWJ3aWRnZXRDb25maWc6IE5neFplbmRlc2tXZWJ3aWRnZXRDb25maWcpIHtcclxuICAgIGlmICghdGhpcy5uZ3haZW5kZXNrV2Vid2lkZ2V0Q29uZmlnLmFjY291bnRVcmwpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGFjY291bnRVcmwuIFBsZWFzZSBzZXQgaW4gYXBwIGNvbmZpZyB2aWEgWmVuZGVza1dpZGdldFByb3ZpZGVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy53aW5kb3cgPSBnZXRXaW5kb3coKTtcclxuXHJcbiAgICBpZiAoIXRoaXMubmd4WmVuZGVza1dlYndpZGdldENvbmZpZy5sYXp5TG9hZCkge1xyXG4gICAgICB0aGlzLmluaXRaZW5kZXNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdFplbmRlc2soKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICBjb25zdCB3aW5kb3cgPSB0aGlzLndpbmRvdztcclxuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMubmd4WmVuZGVza1dlYndpZGdldENvbmZpZztcclxuXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZVxyXG4gICAgd2luZG93LnpFbWJlZCB8fCBmdW5jdGlvbihlLCB0KSB7XHJcbiAgICAgIGxldCBuLCBvLCBkLCBpLCBzLCBhID0gW11cclxuICAgICAgbGV0IHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpXHJcbiAgICAgIHdpbmRvdy56RW1iZWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBhLnB1c2goYXJndW1lbnRzKVxyXG4gICAgICB9XHJcbiAgICAgIHdpbmRvdy56RSA9IHdpbmRvdy56RSB8fCB3aW5kb3cuekVtYmVkXHJcbiAgICAgIHIuc3JjID0gXCJqYXZhc2NyaXB0OmZhbHNlXCJcclxuICAgICAgci50aXRsZSA9IFwiXCJcclxuICAgICAgci5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OiBub25lXCJcclxuICAgICAgZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKGNvbmZpZy5pbmplY3Rpb25UYWcgfHwgXCJoZWFkXCIpXHJcbiAgICAgIGQgPSBkW2QubGVuZ3RoIC0gMV1cclxuICAgICAgZC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShyLCBkKVxyXG4gICAgICBpID0gci5jb250ZW50V2luZG93XHJcbiAgICAgIHMgPSBpLmRvY3VtZW50XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgbyA9IHNcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIG4gPSBkb2N1bWVudC5kb21haW5cclxuICAgICAgICByLnNyYyA9ICdqYXZhc2NyaXB0OnZhciBkPWRvY3VtZW50Lm9wZW4oKTtkLmRvbWFpbj1cIicgKyBuICsgJ1wiO3ZvaWQoMCk7J1xyXG4gICAgICAgIG8gPSBzXHJcbiAgICAgIH1cclxuICAgICAgby5vcGVuKCkuX2wgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgZSA9IHRoaXMuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKVxyXG4gICAgICAgIG4gJiYgKHRoaXMuZG9tYWluID0gbilcclxuICAgICAgICBlLmlkID0gXCJqcy1pZnJhbWUtYXN5bmNcIlxyXG4gICAgICAgIGUuc3JjID0gXCJodHRwczovL3N0YXRpYy56ZGFzc2V0cy5jb20vZWtyL3NuaXBwZXQuanNcIlxyXG4gICAgICAgIHRoaXMudCArPSBuZXcgRGF0ZVxyXG4gICAgICAgIHRoaXMuemVuZGVza0hvc3QgPSBjb25maWcuYWNjb3VudFVybFxyXG4gICAgICAgIHRoaXMuekVRdWV1ZSA9IGFcclxuICAgICAgICB0aGlzLmJvZHkuYXBwZW5kQ2hpbGQoZSlcclxuICAgICAgfVxyXG4gICAgICBvLndyaXRlKCc8Ym9keSBvbmxvYWQ9XCJkb2N1bWVudC5fbCgpO1wiPicpXHJcbiAgICAgIG8uY2xvc2UoKVxyXG4gICAgfSgpO1xyXG4gICAgLy8gdHNsaW50OmVuYWJsZVxyXG5cclxuICAgIHJldHVybiB0aGlzLmZpbmlzaExvYWRpbmcoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmluaXNoTG9hZGluZygpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgICAgIHJlamVjdChFcnJvcigndGltZW91dCcpKTtcclxuICAgICAgfSwgdGhpcy5uZ3haZW5kZXNrV2Vid2lkZ2V0Q29uZmlnLnRpbWVPdXQgfHwgMzAwMDApOyAvLyAzMCBzZWNvbmRzXHJcblxyXG4gICAgICB0aGlzLndpbmRvdy56RSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5uZ3haZW5kZXNrV2Vid2lkZ2V0Q29uZmlnLmNhbGxiYWNrKHRoaXMud2luZG93LnpFKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl96RSA9IHRoaXMud2luZG93LnpFO1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzSW5pdGlhbGl6ZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pbml0aWFsaXplZDtcclxuICB9XHJcblxyXG4gIGdldCB6RSgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3pFXHJcbiAgfVxyXG59XHJcbiJdfQ==