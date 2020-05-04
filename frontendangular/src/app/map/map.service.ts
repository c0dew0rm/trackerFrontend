import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Utils } from '../../shared/utils';

@Injectable({
    providedIn: 'root'
})

export class MapService {

    constructor( private http: HttpClient) {}

    getStockholders() {
        console.log(Utils.getDefaultUrl());
        return this.http.get(Utils.getDefaultUrl()+'stockholders')
    }
}
