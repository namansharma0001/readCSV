import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, URLSearchParams } from '@angular/http'
import 'rxjs/Rx'

import { environment } from '../environments/environment'

@Injectable()
export class DataService {
    url: string
    timeout: number = 15000
    constructor(private http: Http) {
        if (environment.production) {
            this.url = `api/`
        } else {
            this.url = `http://localhost:3000/api/`
        }
    }

    getSettledCustomers() {
        return this.http.get(this.url + 'settledCustomers')
            .timeout(this.timeout)
            .map((res) => res.json())
    }

    getUnsettledCustomers() {
        return this.http.get(this.url + 'unsettledCustomers')
            .timeout(this.timeout)
            .map((res) => res.json())
    }
}
