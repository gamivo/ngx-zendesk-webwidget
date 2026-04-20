import { NgModule, ModuleWithProviders, Type, EnvironmentProviders, makeEnvironmentProviders } from '@angular/core'
import { NgxZendeskWebwidgetConfig } from './ngx-zendesk-webwidget.model'
import { NgxZendeskWebwidgetService } from './ngx-zendesk-webwidget.service'

export function provideNgxZendeskWebwidget(zendeskConfig: Type<NgxZendeskWebwidgetConfig>): EnvironmentProviders {
  return makeEnvironmentProviders([
    { provide: NgxZendeskWebwidgetConfig, useClass: zendeskConfig },
    { provide: NgxZendeskWebwidgetService, useClass: NgxZendeskWebwidgetService, deps: [NgxZendeskWebwidgetConfig] }
  ]);
}

@NgModule({})
export class NgxZendeskWebwidgetModule {
  static forRoot(zendeskConfig: Type<NgxZendeskWebwidgetConfig>): ModuleWithProviders<NgxZendeskWebwidgetModule> {
    return {
      ngModule: NgxZendeskWebwidgetModule,
      providers: [
        { provide: NgxZendeskWebwidgetConfig, useClass: zendeskConfig },
        { provide: NgxZendeskWebwidgetService, useClass: NgxZendeskWebwidgetService, deps: [NgxZendeskWebwidgetConfig] }
      ]
    }
  }
}
