import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInventoryComponent } from './pages/add-inventory/add-inventory.component';
import { InventoryViewComponent } from './pages/inventory-view/inventory-view.component';

const routes: Routes = [
  { path: 'inventories', component: InventoryViewComponent },
  { path: 'add', component: AddInventoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
