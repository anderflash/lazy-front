import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-ct-card',
  templateUrl: 'card.component.html'
})
export class CardComponent implements OnInit {
  checked: boolean;
  constructor() {
    this.checked = false;
    console.log('Construtor', this.checked);
  }

  public ngOnInit(): void {
    console.log(this.checked);
  }
}
