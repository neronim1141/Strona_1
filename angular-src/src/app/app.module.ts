//Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { SharedModule } from './shared/shared.module'; 

// FalseDatabase
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { FrameModule } from './frame/frame.module';


import { PublicModule } from './public/public.module';
import { AppRoutingModule } from './app-routing.module';
import { LoadDataService } from 'app/shared/services/connect/load-data.service';
import { SnackbarService } from 'app/shared/services/messages/snackbar.service';
import { ErrorService } from 'app/shared/services/connect/error.service';
import { EditionsService } from 'app/shared/services/connect/data/editions/editions.service';
import { SchoolModule } from 'app/school/school.module';
import { InvalidRouteComponent } from './invalid-route/invalid-route.component';
import { MainProgressBarService } from './shared/services/progressbars/main-progress-bar.service';

@NgModule({
  declarations: [
    AppComponent,
    InvalidRouteComponent,


  ],
  imports: [
    FrameModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    SharedModule,
    PublicModule,
    SchoolModule, 
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [
    EditionsService,
    LoadDataService,
     SnackbarService,
      ErrorService,
      MainProgressBarService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
