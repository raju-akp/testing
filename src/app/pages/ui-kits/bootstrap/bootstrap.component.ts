import { Component, OnInit } from '@angular/core'
declare var require: any
const data: any = require('./data.json')

@Component({
  selector: 'air-ui-kit-bootstrap',
  templateUrl: './bootstrap.component.html',
})
export class UiKitBootstrapComponent implements OnInit {
  kit = data
  constructor() {}
  ngOnInit() {}
}
