import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Item } from './model';
import { StatusComponent } from './view';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  screen = '';
  @ViewChild(StatusComponent) status: StatusComponent;
  constructor(private router: Router) {
    this.screen = this.router.url;
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.screen = this.router.url;
      }
    });
  }
  ngOnInit() {
    this.status.addItem({title: 'Home', to: ''});
  }

  onClick(item: Item) {
    this.status.addItem(item);
    this.status.current = item;
    this.router.navigate([item.to]);
  }
}
