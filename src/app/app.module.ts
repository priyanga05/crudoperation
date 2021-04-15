import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ SharedModule} from './shared/shared.module';
import{ LeaveManagementModule} from './leave-management/leave-management.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ AuthmoduleModule } from './authmodule/authmodule.module';
@NgModule({
  declarations: [
    AppComponent,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeaveManagementModule,
    SharedModule,
    BrowserAnimationsModule,
    AuthmoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
