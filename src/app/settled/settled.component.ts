import { Component, OnInit } from '@angular/core'
import { DataService } from '../data.service'

@Component({
    selector: 'settled',
    templateUrl: './settled.component.html',
    styleUrls: ['./settled.component.css']
})
export class SettledComponent implements OnInit {
    data

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getSettledCustomers()
            .subscribe(data => {
                console.log(data)
                this.data = data
            })
    }

}
