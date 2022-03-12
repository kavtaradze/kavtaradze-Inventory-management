import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/inventory.service';

@Component({
  selector: 'app-inventory-view',
  templateUrl: './inventory-view.component.html',
  styleUrls: ['./inventory-view.component.scss'],
})
export class InventoryViewComponent implements OnInit {
  inventories: any;
  options = [
    { name: 'მთავარი ოფისი', value: 1 },
    { name: 'კავეა გალერია', value: 2 },
    { name: 'კავეა თბილისი მოლი', value: 3 },
    { name: 'კავეა ისთ ფოინთი', value: 4 },
    { name: 'კავეა სითი მოლი', value: 5 },
  ];

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.inventoryService.getInventories().subscribe((inventories) => {
      this.inventories = inventories;
    });
  }

  createNewInventory(title: string, location: string, price: string) {
    this.inventoryService
      .createInventory(title, location, price)
      .subscribe((response: any) => console.log(response));
  }
  deleteInventory(id: string) {
    this.inventoryService
      .deleteCurrentInventory(id)
      .subscribe((response: any) => console.log('deleted'));
  }
}
