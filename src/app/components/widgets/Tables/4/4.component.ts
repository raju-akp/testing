import { Component, OnInit } from '@angular/core'
declare var require: any
const data: any = require('./data.json')

@Component({
  selector: 'air-table-4',
  templateUrl: './4.component.html',
  styleUrls: ['./4.component.scss'],
})
export class AirTable4Component implements OnInit {
  tableData = data
  constructor() {}
  ngOnInit() {}
}
