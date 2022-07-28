import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CatCatalogComponent } from './cat-catalog/cat-catalog.component';

import { HttpClientModule } from '@angular/common/http'
import { CatService } from './shared/services/cat.service';
import { ItemCardComponent } from './cat-catalog/item-card/item-card.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ReviewComponent } from './about-us/review/review.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule} from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsPopUpComponent } from './about-us/details-pop-up/details-pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    CatCatalogComponent,
    ItemCardComponent,
    AboutUsComponent,
    ReviewComponent,
    DetailsPopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatCardModule
    
  ],
  providers: [CatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
