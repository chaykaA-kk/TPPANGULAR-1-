import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-list',
  templateUrl: './simple-list.component.html',
  styleUrls: ['./simple-list.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],  // Import FormsModule for ngModel
})
export class SimpleListComponent {
  inputText: string = ''; // Default text the user will type
  items: { word: string, color: string }[] = [];  // Array to hold words and their colors

  // Function to generate random colors
  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Add item with random color to the list
  addItem() {
    if (this.inputText) {
      const randomColor = this.getRandomColor();  // Generate a random color
      this.items.push({ word: this.inputText, color: randomColor });  // Add word with its color
    }
  }

  // Delete the last item
  deleteItem() {
    this.items.pop();
  }
}
