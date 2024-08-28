import { NgModule } from '@angular/core';
import { NgxZendeskWebwidgetConfig } from './ngx-zendesk-webwidget.model';
import { NgxZendeskWebwidgetService } from './ngx-zendesk-webwidget.service';
import * as i0 from "@angular/core";
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
}
NgxZendeskWebwidgetModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgxZendeskWebwidgetModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxZendeskWebwidgetModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgxZendeskWebwidgetModule });
NgxZendeskWebwidgetModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgxZendeskWebwidgetModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgxZendeskWebwidgetModule, decorators: [{
            type: NgModule,
            args: [{}]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXplbmRlc2std2Vid2lkZ2V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbmd4LXplbmRlc2std2Vid2lkZ2V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUE2QixNQUFNLGVBQWUsQ0FBQTtBQUNuRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQTtBQUN6RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQTs7QUFHNUUsTUFBTSxPQUFPLHlCQUF5QjtJQUNwQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQThDO1FBQzNELE9BQU87WUFDTCxRQUFRLEVBQUUseUJBQXlCO1lBQ25DLFNBQVMsRUFBRTtnQkFDVCxFQUFDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFO2dCQUM5RCxFQUFDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxRQUFRLEVBQUUsMEJBQTBCLEVBQUUsSUFBSSxFQUFFLENBQUMseUJBQXlCLENBQUMsRUFBRTthQUNoSDtTQUNGLENBQUE7SUFDSCxDQUFDOztzSEFUVSx5QkFBeUI7dUhBQXpCLHlCQUF5Qjt1SEFBekIseUJBQXlCOzJGQUF6Qix5QkFBeUI7a0JBRHJDLFFBQVE7bUJBQUMsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHsgTmd4WmVuZGVza1dlYndpZGdldENvbmZpZyB9IGZyb20gJy4vbmd4LXplbmRlc2std2Vid2lkZ2V0Lm1vZGVsJ1xyXG5pbXBvcnQgeyBOZ3haZW5kZXNrV2Vid2lkZ2V0U2VydmljZSB9IGZyb20gJy4vbmd4LXplbmRlc2std2Vid2lkZ2V0LnNlcnZpY2UnXHJcblxyXG5ATmdNb2R1bGUoe30pXHJcbmV4cG9ydCBjbGFzcyBOZ3haZW5kZXNrV2Vid2lkZ2V0TW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCh6ZW5kZXNrQ29uZmlnOiBUeXBlPE5neFplbmRlc2tXZWJ3aWRnZXRDb25maWc+KTogTW9kdWxlV2l0aFByb3ZpZGVyczxOZ3haZW5kZXNrV2Vid2lkZ2V0TW9kdWxlPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogTmd4WmVuZGVza1dlYndpZGdldE1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge3Byb3ZpZGU6IE5neFplbmRlc2tXZWJ3aWRnZXRDb25maWcsIHVzZUNsYXNzOiB6ZW5kZXNrQ29uZmlnIH0sXHJcbiAgICAgICAge3Byb3ZpZGU6IE5neFplbmRlc2tXZWJ3aWRnZXRTZXJ2aWNlLCB1c2VDbGFzczogTmd4WmVuZGVza1dlYndpZGdldFNlcnZpY2UsIGRlcHM6IFtOZ3haZW5kZXNrV2Vid2lkZ2V0Q29uZmlnXSB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19