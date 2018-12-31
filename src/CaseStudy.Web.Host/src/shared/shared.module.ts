import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { AbpModule } from '@abp/abp.module';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppUrlService } from './nav/app-url.service';
import { AppAuthService } from './auth/app-auth.service';
import { MaterialInput } from 'shared/directives/material-input.directive';
import { AbpPaginationControlsComponent } from './pagination/abp-pagination-controls.component';
import { LocalizePipe } from '@shared/pipes/localize.pipe';
import { AppSessionService } from './session/app-session.service';

@NgModule({
    imports: [
        CommonModule,
        AbpModule,
        RouterModule,
        NgxPaginationModule
    ],
    declarations: [
        MaterialInput,
        AbpPaginationControlsComponent,
        LocalizePipe
    ],
    exports: [
        MaterialInput,
        AbpPaginationControlsComponent,
        LocalizePipe
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                AppSessionService,
                AppUrlService,
                AppAuthService
            ]
        }
    }
}
