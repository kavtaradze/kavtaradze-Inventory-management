import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from 'src/app/inventory.service';

@Component({
  selector: 'app-inventory-view',
  templateUrl: './inventory-view.component.html',
  styleUrls: ['./inventory-view.component.scss'],
})
export class InventoryViewComponent implements OnInit {
  inventories: any[] = [];
  location = 'select';
  show = false;

  options = [
    { name: 'მთავარი ოფისი', value: 1 },
    { name: 'კავეა გალერია', value: 2 },
    { name: 'კავეა თბილისი მოლი', value: 3 },
    { name: 'კავეა ისთ ფოინთი', value: 4 },
    { name: 'კავეა სითი მოლი', value: 5 },
  ];

  constructor(
    private inventoryService: InventoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.showLocalInventories();
  }

  showLocalInventories() {
    this.inventoryService.getInventories().subscribe((inventories) => {
      let localInventories: any[] = [];

      Object.values(inventories).forEach((inventory) => {
        if (inventory.location == this.location || this.location == 'select')
          localInventories.push(inventory);
      });

      this.inventories = localInventories;
      this.show = Object.keys(localInventories).length > 0;
    });
  }
  inventoryLocation(location: string) {
    this.location = location;
    this.showLocalInventories();
  }
  deleteInventory(id: string) {
    this.inventoryService.deleteCurrentInventory(id).subscribe((res) => {
      this.inventoryService.reloadComponent();
    });
  }
}
