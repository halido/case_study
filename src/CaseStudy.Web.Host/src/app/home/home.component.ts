import { Component, Injector, AfterViewInit, ViewChild } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { HotelServiceProxy, CsvUploadResultDto, FileParameter, HotelDto } from '@shared/service-proxies/service-proxies';
import { LazyLoadEvent } from 'primeng/api';
import { DataTable } from 'primeng/datatable'
@Component({
    templateUrl: './home.component.html',
    animations: [appModuleAnimation()]
})

export class HomeComponent extends AppComponentBase implements AfterViewInit {
    groups: { value: string; label: string; }[];


    constructor(
        injector: Injector, private _hotelService: HotelServiceProxy,
    ) {
        super(injector);
    }
    @ViewChild(DataTable) dt: DataTable
    loading: boolean;
    totalRecords: number;
    uploadedFiles: any[] = [];
    fileId: string = "";
    hotels: HotelDto[];
    cols: any[];

    rowGroupKey: any = {};

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
    exportClick(event) {
        if (!this.fileId) {
            abp.message.error("Csv File must be Uploaded");
            return;
        }
    }
    ViewData(result: CsvUploadResultDto): void {
        this.fileId = result.fileName;

        let eventData: LazyLoadEvent = {
            first: 0,
            rows: 10,
        };
        this.loadHotelsLazy(eventData);


    }
    loadHotelsLazy(event: LazyLoadEvent) {

        if (!this.fileId)
            return;

        this.loading = true;


        let sortingVal = "";
        if (event.sortField) {
            sortingVal = `${event.sortField} ${(event.sortOrder == -1) ? "desc" : "asc"}`;
        }

        this._hotelService.getAll(this.fileId, sortingVal, event.first, event.rows).subscribe(data => {

            this.hotels = data.items;
            this.totalRecords = data.totalCount;
            this.loading = false;

            abp.notify.success(`${data.totalCount} hotels found, ${data.items.length} hotels retrieved`);

        }, (err) => {
            abp.message.error(err);
            this.loading = false;
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
        this.groups = [
            { value: null, label: 'Select a Group' },
            { value: 'name', label: 'Name' },
            { value: 'contact', label: 'Contact' },
            { value: 'stars', label: 'Stars' },
        ];

    }
    ngAfterViewInit(): void {

    }
}
class FileParameterRequestDto implements FileParameter {
    data: any; fileName: string;


}
