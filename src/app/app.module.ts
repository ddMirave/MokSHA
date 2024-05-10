import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { RouterModule } from '@angular/router';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Theme1PageComponent } from './pages/Theme/theme1-page/theme1-page.component';
import { Theme2PageComponent } from './pages/Theme/theme2-page/theme2-page.component';
import { Theme3PageComponent } from './pages/Theme/theme3-page/theme3-page.component';
import { Theme4PageComponent } from './pages/Theme/theme4-page/theme4-page.component';
import { Theme5PageComponent } from './pages/Theme/theme5-page/theme5-page.component';
import { Theme6PageComponent } from './pages/Theme/theme6-page/theme6-page.component';

const routes = [
  {path: '', component: MainPageComponent},
  {path: 'registration', component: RegistrationPageComponent},
  {path: 'SignIn', component: SignInPageComponent},
  {path: 'Home', component: HomePageComponent},
  {path: 'theme1', component: Theme1PageComponent},
  {path: 'theme2', component: Theme2PageComponent},
  {path: 'theme3', component: Theme3PageComponent},
  {path: 'theme4', component: Theme4PageComponent},  
  {path: 'theme5', component: Theme5PageComponent},  
  {path: 'theme6', component: Theme6PageComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    RegistrationPageComponent,
    SignInPageComponent,
    HomePageComponent,
    Theme1PageComponent,
    Theme2PageComponent,
    Theme6PageComponent,
    Theme3PageComponent,
    Theme5PageComponent,
    Theme4PageComponent
    ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
