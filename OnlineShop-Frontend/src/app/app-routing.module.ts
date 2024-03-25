import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// My Components
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'shopping-card', component: ShoppingCardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
