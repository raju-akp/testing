import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar'
import { SharedModule } from 'src/app/shared.module'
import { WidgetsComponentsModule } from 'src/app/components/widgets/widgets-components.module'

import { TopbarComponent } from './Topbar/topbar.component'
import { TopbarActionsComponent } from './Topbar/Actions/actions.component'
import { TopbarIssuesHistoryComponent } from './Topbar/IssuesHistory/issues-history.component'
import { TopbarLanguageSwitcherComponent } from './Topbar/LanguageSwitcher/language-switcher.component'
import { TopbarSearchComponent } from './Topbar/Search/search.component'
import { TopbarStatusComponent } from './Topbar/Status/status.component'
import { TopbarUserMenuComponent } from './Topbar/UserMenu/user-menu.component'
import { SubbarComponent } from './SubBar/subbar.component'
import { MenuLeftComponent } from './MenuLeft/menu-left.component'
import { MenuTopComponent } from './MenuTop/menu-top.component'
import { FooterComponent } from './Footer/footer.component'
import { SupportChatComponent } from './SupportChat/support-chat.component'
import { SidebarComponent } from './Sidebar/sidebar.component'

const COMPONENTS = [
  TopbarComponent,
  TopbarActionsComponent,
  TopbarIssuesHistoryComponent,
  TopbarLanguageSwitcherComponent,
  TopbarSearchComponent,
  TopbarStatusComponent,
  TopbarUserMenuComponent,
  SubbarComponent,
  MenuLeftComponent,
  MenuTopComponent,
  FooterComponent,
  SupportChatComponent,
  SidebarComponent,
]

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    WidgetsComponentsModule,
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class LayoutModule {}
