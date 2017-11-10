import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Item } from '../../model';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class StatusComponent implements OnInit {
  @Input() items: Item[];

  private _current: number;
  constructor(private router: Router) {
    this.items = [];
  }

  ngOnInit() {
  }

  /**
   * Add item
   * @param item
   */
  public addItem(item: Item) {
    const found = this.items.find(added => added.title === item.title);
    if (!found) {
      this.items.push(item);
    }
  }

  public set current(item: Item) {
    this._current = this.items.findIndex(added => added.title === item.title);
  }

  private onClick(item: Item) {
    this.router.navigate([item.to]);
    this.current = item;
  }
}
