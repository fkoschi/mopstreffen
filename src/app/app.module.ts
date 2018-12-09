import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routerConfig } from './app.routing';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { UiModule } from './ui/ui.module';
import { LayoutComponent } from './ui/layout/layout.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatTabsModule,
  MatInputModule
} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import { LayoutModule } from '@angular/cdk/layout';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MasonryGalleryModule } from 'ngx-masonry-gallery';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { YearComponent } from './home/year/year.component';
import { SponsorsComponent } from './home/sponsors/sponsors.component';
import { HelpComponent } from './home/help/help.component';
import { AboutMeComponent } from './home/about-me/about-me.component';
import { CountUpModule } from 'countup.js-angular2';
import { YearDetailComponent } from './home/year/year-detail/year-detail.component';
import { YearDetailPipe } from './home/year/year-detail/year-detail.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    GalleryComponent,
    HomeComponent,
    ContactComponent,
    YearComponent,
    SponsorsComponent,
    HelpComponent,
    AboutMeComponent,
    YearDetailComponent,
    YearDetailPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    UiModule,
    RouterModule.forRoot(routerConfig),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC4-HONc6hNy5rG0EbdK6B0s2FIjUqXAUc'
    }),
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatTabsModule,
    MatInputModule,
    ReactiveFormsModule,
    MasonryGalleryModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    CountUpModule,
    MatExpansionModule,
    NgxGalleryModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {}
