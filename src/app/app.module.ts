import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CatCatalogComponent } from './cat-catalog/cat-catalog.component';

import { HttpClientModule } from '@angular/common/http';
import { ItemCardComponent } from './cat-catalog/item-card/item-card.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ReviewComponent } from './about-us/review/review.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsPopUpComponent } from './about-us/details-pop-up/details-pop-up.component';

import { MatIconModule } from '@angular/material/icon';
import { ContactUsPopUpComponent } from './contact-us-pop-up/contact-us-pop-up.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactUsService } from './shared/services/contact-us-pop-up.service';
import { LoginComponent } from './login/login.component';
import { UserService } from './shared/services/user.service';
import { AdminComponent } from './admin/admin.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { NavBarMobileComponent } from './shared/components/nav-bar-mobile/nav-bar-mobile.component';
import { CatService } from './shared/services/cat.service';

import { NgToastModule } from 'ng-angular-popup';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    CatCatalogComponent,
    ItemCardComponent,
    AboutUsComponent,
    ReviewComponent,
    DetailsPopUpComponent,
    ContactUsPopUpComponent,
    LoginComponent,
    AdminComponent,
    NavBarMobileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    NgToastModule,
    NgxSkeletonLoaderModule.forRoot(),
  ],
  providers: [ContactUsService, UserService, CatService],
  bootstrap: [AppComponent],
})
export class AppModule {}
