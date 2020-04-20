import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'
import { UIKitsRouterModule } from './ui-kits-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

// UI Kits
import { UiKitAntdComponent } from 'src/app/pages/ui-kits/antd/antd.component'
import { UiKitBootstrapComponent } from 'src/app/pages/ui-kits/bootstrap/bootstrap.component'

const COMPONENTS = [UiKitAntdComponent, UiKitBootstrapComponent]

@NgModule({
  imports: [SharedModule, UIKitsRouterModule, FormsModule, ReactiveFormsModule],
  declarations: [...COMPONENTS],
})
export class UIKitsModule {}
