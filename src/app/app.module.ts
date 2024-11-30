import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component'; // Import AppComponent
import { SimpleListComponent } from './simple-list/simple-list.component'; // Import SimpleListComponent

@NgModule({
  declarations: [
    AppComponent,        // Declare AppComponent here
    SimpleListComponent  // Declare SimpleListComponent here
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]  // Bootstrap AppComponent
})
export class AppModule {}
