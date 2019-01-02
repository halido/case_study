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
    groups: IRowGroup[] = [];
    sorting: string;


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
    exportedUrl: string;
    rowGroupKey: IRowGroup;
    fileOnSelect(event: any) {
        this.fileId = null;
        this.exportedUrl = null;
        this.rowGroupKey = this.groups[0];
        this.hotels = null;
    }
    myUploader(event: any) {

        for (let file of event.files) {

            let fileData: FileParameter = {
                data: file,
                fileName: file.name
            };
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

        this._hotelService.export(this.sorting, this.rowGroupKey.value, event, this.fileId).subscribe(result => {
            this.exportedUrl = result.downloadUrl;            

        });
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


        this.sorting = "";
        if (event.sortField) {
            this.sorting = `${event.sortField} ${(event.sortOrder == -1) ? "desc" : "asc"}`;
        }

        this._hotelService.getAll(this.fileId, this.sorting, event.first, event.rows).subscribe(data => {

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
            { value: "", label: 'Select a Group' },
            { value: 'name', label: 'Name' },
            { value: 'contact', label: 'Contact' },
            { value: 'stars', label: 'Stars' },
        ];

    }
    ngAfterViewInit(): void {

    }
}
export interface IRowGroup {
    value: string, label: string
}
