import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule for ngModel
import { SimpleListComponent } from './simple-list/simple-list.component';  // Import SimpleListComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [SimpleListComponent, FormsModule],  // Import SimpleListComponent and FormsModule here
})
export class AppComponent {}
