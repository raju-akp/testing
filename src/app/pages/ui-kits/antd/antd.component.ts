import { Component, OnInit } from '@angular/core'
declare var require: any
const data: any = require('./data.json')

@Component({
  selector: 'air-ui-kit-antd',
  templateUrl: './antd.component.html',
})
export class UiKitAntdComponent implements OnInit {
  kit = data
  constructor() {}
  ngOnInit() {}
}
