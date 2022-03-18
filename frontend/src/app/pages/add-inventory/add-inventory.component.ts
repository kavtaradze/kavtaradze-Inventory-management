import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/inventory.service';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.scss'],
})
export class AddInventoryComponent implements OnInit {
  defMessage =
    'ნივთის დამატებისას, დაფიქსირდა შეცდომა.\nგთხოვთ, მონაცემები შეიყვანეთ სწორად!\n\nშეცდომის ტიპი:\n';
  errMessage = this.defMessage;

  options = [
    { name: 'მთავარი ოფისი', value: 1 },
    { name: 'კავეა გალერია', value: 2 },
    { name: 'კავეა თბილისი მოლი', value: 3 },
    { name: 'კავეა ისთ ფოინთი', value: 4 },
    { name: 'კავეა სითი მოლი', value: 5 },
  ];

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {}

  checkInputs(title: string, location: string, price: string) {
    if (title.length < 1) this.errMessage += '  -შეიყვანეთ ნივთის სახელი\n';

    if (!Number(price))
      this.errMessage += '  -შეიყვანეთ ნივთის ფასი (ლარებში)\n';

    if (location == 'აირჩიეთ ადგილმდებარეობა')
      this.errMessage += '  -აირჩიეთ ადგილმდებარეობა\n';

    return this.errMessage;
  }
  createNewInventory(title: string, location: string, price: string) {
    if (this.checkInputs(title, location, price) === this.defMessage) {
      this.inventoryService
        .createInventory(title, location, price)
        .subscribe((res) => {
          this.inventoryService.reloadComponent();
        });
    } else {
      alert(this.errMessage);
      this.errMessage = this.defMessage;
    }
  }
}
