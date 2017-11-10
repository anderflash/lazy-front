import { Component } from '@angular/core';

interface User {
  name: string;
}

@Component({
  selector: 'app-user-selector',
  templateUrl: 'user-selector.component.html',
  styleUrls: ['user-selector.component.scss']
})
export class UserSelectorComponent {
  private users: User[];
  constructor() {
    this.users = [];
  }
  addUser(user: User) {
    this.users.push(user);
  }
}
