import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    CommonModule, RouterOutlet],
  standalone: true
})
export class AppComponent {
  title = 'angularv16';
  router = inject(Router);




  navigate(route: string) {
    this.router.navigate([route]);
  }

}
