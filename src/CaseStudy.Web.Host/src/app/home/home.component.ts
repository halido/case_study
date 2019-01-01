import { Component, Injector, AfterViewInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { HotelServiceProxy, CsvUploadResultDto, FileParameter, HotelDto } from '@shared/service-proxies/service-proxies';
import { SortEvent } from 'primeng/api';
@Component({
    templateUrl: './home.component.html',
    animations: [appModuleAnimation()]
})

export class HomeComponent extends AppComponentBase implements AfterViewInit {


    constructor(
        injector: Injector, private _hotelService: HotelServiceProxy,
    ) {
        super(injector);
    }

    uploadedFiles: any[] = [];
    fileName: string = "";
    hotels: HotelDto[];
    cols: any[];

    myUploader(event: any) {

        for (let file of event.files) {

            let fileData = new FileParameterRequestDto();
            fileData.data = file;
            fileData.fileName = file.name;
            this._hotelService.uploadCsv(fileData)
                .subscribe((result: CsvUploadResultDto) => {
                    this.ViewData(result);
                    
                });;
        }
    }
    ViewData(result: CsvUploadResultDto): void {
        this.fileName = result.fileName;
        this._hotelService.getAll(this.fileName, "", 0, 100).subscribe(data =>{ 
            this.hotels = data.items
            abp.notify.success(`${data.totalCount} hotels retrieved`);
        });
    }
    onSort(event: SortEvent) {
        abp.ui.setBusy();
        this._hotelService.getAll(this.fileName, `${event.field} ${(event.order == -1) ? "desc" : "asc"}`  , 0, 100).subscribe(data => {
           
          this.hotels  =  data.items;
            abp.ui.clearBusy();
            abp.notify.success(`${data.totalCount} hotels retrieved`);

        }, (err) => {
            abp.ui.clearBusy();
            abp.message.error(err) ;         
        });

    }
    ngOnInit() {
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'address', header: 'Address' },
            { field: 'stars', header: 'Stars' },
            { field: 'contact', header: 'Contact' },
            { field: 'phone', header: 'Phone' },
            { field: 'url', header: 'Url' }
        ];
    }
    ngAfterViewInit(): void {


    }
}
class FileParameterRequestDto implements FileParameter {
    data: any; fileName: string;


}
