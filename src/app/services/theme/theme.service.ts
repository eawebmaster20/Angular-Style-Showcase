import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  darkTheme:boolean = false
  constructor() { }
  toggleTheme(){
    this.darkTheme = !this.darkTheme;
    console.log('theme toggled to :', this.darkTheme);
  }
}
