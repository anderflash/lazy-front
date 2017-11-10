import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Item, User } from './model';
import { StatusComponent } from './view';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  screen = '';
  users: User[];
  curUser: User;
  @ViewChild(StatusComponent) status: StatusComponent;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.screen = this.router.url;
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.screen = this.router.url;
      }
    });
    route.queryParams.subscribe(params => {
      if ('user' in params) {
        this.curUser = this.users[params.user];
      }
    });
    this.users = [{ name: 'Fulano' }, { name: 'Beltrano' }];
    this.curUser = null;
  }
  ngOnInit() {
    this.status.addItem({ title: 'Home', to: '' });
  }

  onProductSelected(item: Item) {
    this.status.addItem(item);
    this.status.current = item;
    this.router.navigate([item.to], { queryParams: { user: this.users.indexOf(this.curUser) } });
  }
  onUserSelected(user: User) {
    this.curUser = user;
    if (this.status.current) {
      this.router.navigate([this.status.current.to], { queryParams: { user: this.users.indexOf(this.curUser) } });
    } else {
      this.router.navigate(['local'], { queryParams: { user: this.users.indexOf(this.curUser) } });
    }
  }
}
