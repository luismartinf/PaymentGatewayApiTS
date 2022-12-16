import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AuthGuard } from './shared/services/authguard.service';
import { JwtModule } from "@auth0/angular-jwt";
import { UsersService } from './shared/services/users.service';
import { RolesService } from './shared/services/roles.service';
import { TransactionsService } from './shared/services/transactions.service';
import { TransfersService } from './shared/services/transfers.service';
import { PaymethodsService } from './shared/services/paymethods.service';
import { AuthserviceService } from './shared/services/authservice.service';
import { PaymethodsDetailsComponent } from './paymentDetails/paymethods-details/paymethods-details.component';
import { TransactionsDetailsComponent } from './paymentDetails/transactions-details/transactions-details.component';
import { TransfersDetailsComponent } from './paymentDetails/transfers-details/transfers-details.component';
import { UsersDetailsComponent } from './paymentDetails/users-details/users-details.component';
import { RolesDetailsComponent } from './paymentDetails/roles-details/roles-details.component';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { RouterModule} from '@angular/router';
import { PaymethodsFormComponent } from './paymentDetails/paymethods-details/paymethods-form/paymethods-form.component';
import { RolesFormComponent } from './paymentDetails/roles-details/roles-form/roles-form.component';
import { TransactionsFormComponent } from './paymentDetails/transactions-details/transactions-form/transactions-form.component';
import { TransfersFormComponent } from './paymentDetails/transfers-details/transfers-form/transfers-form.component';



@NgModule({
  declarations: [
    AppComponent,
    PaymethodsDetailsComponent,
    TransactionsDetailsComponent,
    TransfersDetailsComponent,
    UsersDetailsComponent,
    RolesDetailsComponent,
    PaymethodsFormComponent,
    RolesFormComponent,
    TransactionsFormComponent,
    TransfersFormComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    JwtModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [ AuthserviceService, AuthGuard,PaymethodsService, TransfersService, TransactionsService, RolesService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
