import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  constructor(
    private webReqService: WebRequestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  createInventory(title: string, location: string, price: string) {
    return this.webReqService.post('inventories', { title, location, price });
  }
  getInventories() {
    return this.webReqService.get('inventories');
  }
  deleteCurrentInventory(id: string) {
    return this.webReqService.delete(`inventories/${id}`);
  }
  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['inventories']);
  }
}
