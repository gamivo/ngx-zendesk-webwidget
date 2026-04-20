import { NgModule, makeEnvironmentProviders } from '@angular/core';
import { NgxZendeskWebwidgetConfig } from './ngx-zendesk-webwidget.model';
import { NgxZendeskWebwidgetService } from './ngx-zendesk-webwidget.service';
import * as i0 from "@angular/core";
export function provideNgxZendeskWebwidget(zendeskConfig) {
    return makeEnvironmentProviders([
        { provide: NgxZendeskWebwidgetConfig, useClass: zendeskConfig },
        { provide: NgxZendeskWebwidgetService, useClass: NgxZendeskWebwidgetService, deps: [NgxZendeskWebwidgetConfig] }
    ]);
}
export class NgxZendeskWebwidgetModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXplbmRlc2std2Vid2lkZ2V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbmd4LXplbmRlc2std2Vid2lkZ2V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFtRCx3QkFBd0IsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUNuSCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQTtBQUN6RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQTs7QUFFNUUsTUFBTSxVQUFVLDBCQUEwQixDQUFDLGFBQThDO0lBQ3ZGLE9BQU8sd0JBQXdCLENBQUM7UUFDOUIsRUFBRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRTtRQUMvRCxFQUFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxRQUFRLEVBQUUsMEJBQTBCLEVBQUUsSUFBSSxFQUFFLENBQUMseUJBQXlCLENBQUMsRUFBRTtLQUNqSCxDQUFDLENBQUM7QUFDTCxDQUFDO0FBR0QsTUFBTSxPQUFPLHlCQUF5QjtJQUNwQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQThDO1FBQzNELE9BQU87WUFDTCxRQUFRLEVBQUUseUJBQXlCO1lBQ25DLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFO2dCQUMvRCxFQUFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxRQUFRLEVBQUUsMEJBQTBCLEVBQUUsSUFBSSxFQUFFLENBQUMseUJBQXlCLENBQUMsRUFBRTthQUNqSDtTQUNGLENBQUE7SUFDSCxDQUFDOytHQVRVLHlCQUF5QjtnSEFBekIseUJBQXlCO2dIQUF6Qix5QkFBeUI7OzRGQUF6Qix5QkFBeUI7a0JBRHJDLFFBQVE7bUJBQUMsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBUeXBlLCBFbnZpcm9ubWVudFByb3ZpZGVycywgbWFrZUVudmlyb25tZW50UHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHsgTmd4WmVuZGVza1dlYndpZGdldENvbmZpZyB9IGZyb20gJy4vbmd4LXplbmRlc2std2Vid2lkZ2V0Lm1vZGVsJ1xyXG5pbXBvcnQgeyBOZ3haZW5kZXNrV2Vid2lkZ2V0U2VydmljZSB9IGZyb20gJy4vbmd4LXplbmRlc2std2Vid2lkZ2V0LnNlcnZpY2UnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZU5neFplbmRlc2tXZWJ3aWRnZXQoemVuZGVza0NvbmZpZzogVHlwZTxOZ3haZW5kZXNrV2Vid2lkZ2V0Q29uZmlnPik6IEVudmlyb25tZW50UHJvdmlkZXJzIHtcclxuICByZXR1cm4gbWFrZUVudmlyb25tZW50UHJvdmlkZXJzKFtcclxuICAgIHsgcHJvdmlkZTogTmd4WmVuZGVza1dlYndpZGdldENvbmZpZywgdXNlQ2xhc3M6IHplbmRlc2tDb25maWcgfSxcclxuICAgIHsgcHJvdmlkZTogTmd4WmVuZGVza1dlYndpZGdldFNlcnZpY2UsIHVzZUNsYXNzOiBOZ3haZW5kZXNrV2Vid2lkZ2V0U2VydmljZSwgZGVwczogW05neFplbmRlc2tXZWJ3aWRnZXRDb25maWddIH1cclxuICBdKTtcclxufVxyXG5cclxuQE5nTW9kdWxlKHt9KVxyXG5leHBvcnQgY2xhc3MgTmd4WmVuZGVza1dlYndpZGdldE1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoemVuZGVza0NvbmZpZzogVHlwZTxOZ3haZW5kZXNrV2Vid2lkZ2V0Q29uZmlnPik6IE1vZHVsZVdpdGhQcm92aWRlcnM8Tmd4WmVuZGVza1dlYndpZGdldE1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE5neFplbmRlc2tXZWJ3aWRnZXRNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHsgcHJvdmlkZTogTmd4WmVuZGVza1dlYndpZGdldENvbmZpZywgdXNlQ2xhc3M6IHplbmRlc2tDb25maWcgfSxcclxuICAgICAgICB7IHByb3ZpZGU6IE5neFplbmRlc2tXZWJ3aWRnZXRTZXJ2aWNlLCB1c2VDbGFzczogTmd4WmVuZGVza1dlYndpZGdldFNlcnZpY2UsIGRlcHM6IFtOZ3haZW5kZXNrV2Vid2lkZ2V0Q29uZmlnXSB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19