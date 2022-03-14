import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/inventory.service';
import { InventoryViewComponent } from '../inventory-view/inventory-view.component';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.scss'],
})
export class AddInventoryComponent implements OnInit {
  options = [
    { name: 'მთავარი ოფისი', value: 1 },
    { name: 'კავეა გალერია', value: 2 },
    { name: 'კავეა თბილისი მოლი', value: 3 },
    { name: 'კავეა ისთ ფოინთი', value: 4 },
    { name: 'კავეა სითი მოლი', value: 5 },
  ];
  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {}

  createNewInventory(title: string, location: string, price: string) {
    this.inventoryService
      .createInventory(title, location, price)
      .subscribe((res) => {
        this.inventoryService.reloadComponent();
      });
  }
}
