import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CatCatalogComponent } from './cat-catalog/cat-catalog.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DetailsPopUpComponent } from './about-us/details-pop-up/details-pop-up.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'catalog', component: CatCatalogComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'details/:id', component: DetailsPopUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
