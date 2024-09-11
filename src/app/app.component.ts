import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MainHeroComponent } from './components/main-hero/main-hero.component';
import { MainContextComponent } from './components/main-context/main-context.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeService } from './services/theme/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    MainHeroComponent,
    MainContextComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularStyleShowcase';
  constructor(public themeService: ThemeService){}
}
