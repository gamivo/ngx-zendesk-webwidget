import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { NgxZendeskWebwidgetConfig } from './ngx-zendesk-webwidget.model';

@Injectable({
  providedIn: 'root'
})
export class NgxZendeskWebwidgetService {

  private readonly isBrowser: boolean;
  private initialized = false;
  private _zE: any;

  constructor(
    private ngxZendeskWebwidgetConfig: NgxZendeskWebwidgetConfig,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    if (!this.ngxZendeskWebwidgetConfig.accountUrl) {
      throw new Error('Missing accountUrl. Please set in app config via ZendeskWidgetProvider');
    }

    this.isBrowser = isPlatformBrowser(platformId);

    if (!this.ngxZendeskWebwidgetConfig.lazyLoad) {
      this.initZendesk();
    }
  }

  public initZendesk(): Promise<boolean> {
    if (!this.isBrowser) {
      return Promise.resolve(false);
    }

    const win = window as any;
    const config = this.ngxZendeskWebwidgetConfig;

    // tslint:disable
    win.zEmbed || function() {
      let n: any, o: any, d: any, i: any, s: any, a: any[] = []
      let r = document.createElement("iframe")
      win.zEmbed = function() {
        a.push(arguments)
      }
      win.zE = win.zE || win.zEmbed
      r.src = "javascript:false"
      r.title = ""
      r.style.cssText = "display: none"
      d = document.getElementsByTagName(config.injectionTag || "head")
      d = d[d.length - 1]
      d.parentNode.insertBefore(r, d)
      i = r.contentWindow
      s = i.document
      try {
        o = s
      } catch (e) {
        n = document.domain
        r.src = 'javascript:var d=document.open();d.domain="' + n + '";void(0);'
        o = s
      }
      o.open()._l = function() {
        let e = this.createElement("script")
        n && (this.domain = n)
        e.id = "js-iframe-async"
        e.src = "https://static.zdassets.com/ekr/snippet.js"
        this.t += new Date
        this.zendeskHost = config.accountUrl
        this.zEQueue = a
        this.body.appendChild(e)
      }
      o.write('<body onload="document._l();">')
      o.close()
    }();
    // tslint:enable

    return this.finishLoading();
  }

  private finishLoading(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const win = window as any;

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

  get isInitialized(): boolean {
    return this.initialized;
  }

  get zE(): any {
    return this._zE;
  }
}
