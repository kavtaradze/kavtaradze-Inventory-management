import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  constructor(private webReqService: WebRequestService) {}

  createInventory(title: string, location: string, price: string) {
    return this.webReqService.post('inventories', { title, location, price });
  }
  getInventories() {
    return this.webReqService.get('inventories');
  }
  deleteCurrentInventory(id: string) {
    return this.webReqService.delete(`inventories/${id}`);
  }
}
