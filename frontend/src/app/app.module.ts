import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InventoryViewComponent } from './pages/inventory-view/inventory-view.component';
import { HttpClientModule } from '@angular/common/http';
import { AddInventoryComponent } from './pages/add-inventory/add-inventory.component';

@NgModule({
  declarations: [AppComponent, InventoryViewComponent, AddInventoryComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
