import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-combates',
  templateUrl: './combates.component.html',
  styleUrls: ['./combates.component.css']
})
export class CombatesComponent {
  tabs = ['1', '2', '3','4','5','6'];
  selected = new FormControl(0);

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}
