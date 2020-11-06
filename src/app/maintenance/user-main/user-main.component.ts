import { Component, OnInit } from '@angular/core';

import { ForList } from '../../model/user.model';
import { UserService } from '../../core/services/user/user.service';

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.scss']
})
export class UserMainComponent implements OnInit {
  users: ForList[];
  filter = 'null';

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.listwithfilters();
  }

  btnFilter(event: Event): void {
    event.preventDefault();
    this.listwithfilters();
  }

  private listwithfilters(): void {
    this.userService.listwithfilters(this.filter).subscribe(result => {
      if (result.code === 200) {
        this.users = result.response;
      }
    });
  }
}
