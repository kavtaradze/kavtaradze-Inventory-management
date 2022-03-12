import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryViewComponent } from './pages/inventory-view/inventory-view.component';

const routes: Routes = [
  { path: 'inventory', component: InventoryViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
