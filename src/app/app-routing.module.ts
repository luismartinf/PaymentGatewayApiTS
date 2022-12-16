import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './shared/services/authguard.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'logIn', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,canActivate: [AuthGuard] },  
  { path: 'signUp', component: RegisterComponent },  
  { path: 'logIn', component: LogInComponent },  
  { path: 'noAccess', component: NoAccessComponent }, 
  { path: 'paymethods', component: NoAccessComponent,canActivate: [AuthGuard]  }, 
  { path: 'roles', component: NoAccessComponent,canActivate: [AuthGuard]  }, 
  { path: 'transactions', component: NoAccessComponent,canActivate: [AuthGuard]  }, 
  { path: 'transfers', component: NoAccessComponent,canActivate: [AuthGuard]  }, 
  { path: 'users', component: NoAccessComponent,canActivate: [AuthGuard]  } 

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
