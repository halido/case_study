import { Component, OnInit, Injector, ViewEncapsulation } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { ConfigurationServiceProxy } from '@shared/service-proxies/service-proxies';

@Component({
    templateUrl: './sidebar-user-area.component.html',
    selector: 'sidebar-user-area',
    encapsulation: ViewEncapsulation.None
})
export class SideBarUserAreaComponent extends AppComponentBase implements OnInit {

    shownLoginName: string = "";

    constructor(
        injector: Injector,private _configurationService: ConfigurationServiceProxy
    ) {
        super(injector);
    }

    ngOnInit() {
        this.shownLoginName =this.appSession.getShownLoginName();
    }

    logout(): void {
     
    }
}