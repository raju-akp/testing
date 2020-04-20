import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'
import { DashboardRouterModule } from './dashboard-routing.module'
import { WidgetsComponentsModule } from 'src/app/components/widgets/widgets-components.module'
import { NestableModule } from 'ngx-nestable'
import { FormsModule } from '@angular/forms'
import { ChartistModule } from 'ng-chartist'

// dashboard
import { DashboardAnalyticsComponent } from 'src/app/pages/dashboard/analytics/analytics.component'

const COMPONENTS = [
  DashboardAnalyticsComponent,
]

@NgModule({
  imports: [
    SharedModule,
    DashboardRouterModule,
    WidgetsComponentsModule,
    NestableModule,
    FormsModule,
    ChartistModule,
  ],
  declarations: [...COMPONENTS],
})
export class DashboardModule { }
