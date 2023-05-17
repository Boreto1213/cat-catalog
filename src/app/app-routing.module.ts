import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CatCatalogComponent } from './cat-catalog/cat-catalog.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DetailsPopUpComponent } from './about-us/details-pop-up/details-pop-up.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {path: '', component: HomePageComponent, children: [
    // {path: 'contact-us', component: ContactUsPopUpComponent}
  ]},
  {path: 'catalog', component: CatCatalogComponent, children: [
    {path: 'details/:id', component: DetailsPopUpComponent},
    // {path: 'contact-us', component: ContactUsPopUpComponent}
  ]},
  {path: 'about-us', component: AboutUsComponent, children: [
    // {path: 'contact-us', component: ContactUsPopUpComponent}
  ]},
  {path: 'contact-us', component: ContactUsComponent, children: [
    // {path: 'contact-us', component: ContactUsPopUpComponent}
  ]},
  {path: 'login', component: LoginComponent, children: [
    // {path: 'contact-us', component: ContactUsPopUpComponent}
  ]},
  {path: 'admin', component: AdminComponent, children: [
    // {path: 'contact-us', component: ContactUsPopUpComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
