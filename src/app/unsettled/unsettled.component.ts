import { Component, OnInit } from '@angular/core'
import { DataService } from '../data.service'

@Component({
    selector: 'unsettled',
    templateUrl: './unsettled.component.html',
    styleUrls: ['./unsettled.component.css']
})
export class UnsettledComponent implements OnInit {
    data

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getUnsettledCustomers()
            .subscribe(data => {
                console.log(data)
                this.data = data
            })
    }

}
