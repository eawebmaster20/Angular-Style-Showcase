import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./components/main-hero/main-hero.component').then(m => m.MainHeroComponent) },
    { path: 'context', loadComponent: () => import('./components/main-context/main-context.component').then(m => m.MainContextComponent) },
    { path: '**', redirectTo: 'home' }
];
