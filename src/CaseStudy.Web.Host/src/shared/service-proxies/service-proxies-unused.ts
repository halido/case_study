/* import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

import * as moment from 'moment';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

export class TenantLoginInfoDto implements ITenantLoginInfoDto {
    tenancyName: string | undefined;
    name: string | undefined;
    id: number | undefined;

    constructor(data?: ITenantLoginInfoDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.tenancyName = data["tenancyName"];
            this.name = data["name"];
            this.id = data["id"];
        }
    }

    static fromJS(data: any): TenantLoginInfoDto {
        data = typeof data === 'object' ? data : {};
        let result = new TenantLoginInfoDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["tenancyName"] = this.tenancyName;
        data["name"] = this.name;
        data["id"] = this.id;
        return data; 
    }

    clone(): TenantLoginInfoDto {
        const json = this.toJSON();
        let result = new TenantLoginInfoDto();
        result.init(json);
        return result;
    }
}

export interface ITenantLoginInfoDto {
    tenancyName: string | undefined;
    name: string | undefined;
    id: number | undefined;
}
export class UserLoginInfoDto implements IUserLoginInfoDto {
    name: string | undefined;
    surname: string | undefined;
    userName: string | undefined;
    emailAddress: string | undefined;
    id: number | undefined;

    constructor(data?: IUserLoginInfoDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
            this.surname = data["surname"];
            this.userName = data["userName"];
            this.emailAddress = data["emailAddress"];
            this.id = data["id"];
        }
    }

    static fromJS(data: any): UserLoginInfoDto {
        data = typeof data === 'object' ? data : {};
        let result = new UserLoginInfoDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["surname"] = this.surname;
        data["userName"] = this.userName;
        data["emailAddress"] = this.emailAddress;
        data["id"] = this.id;
        return data; 
    }

    clone(): UserLoginInfoDto {
        const json = this.toJSON();
        let result = new UserLoginInfoDto();
        result.init(json);
        return result;
    }
}

export interface IUserLoginInfoDto {
    name: string | undefined;
    surname: string | undefined;
    userName: string | undefined;
    emailAddress: string | undefined;
    id: number | undefined;
}
 */