
import { Routes } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';

export const routerConfig: Routes = [
  { path: '', component: LayoutComponent, pathMatch: 'full' }
];
