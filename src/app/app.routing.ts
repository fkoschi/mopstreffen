
import { Routes } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

export const routerConfig: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'images', component: GalleryComponent },
  { path: 'contact', component: ContactComponent }
];
