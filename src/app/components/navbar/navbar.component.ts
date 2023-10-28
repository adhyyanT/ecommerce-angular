import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    // this.isLoggedIn = this.userService.getStatus();
    this.userService.getStatus().subscribe((status) => {
      this.isLoggedIn = status;
    });
  }
  searchForm = new FormGroup({
    search: new FormControl(null, Validators.required),
  });

  handleLogout() {
    this.userService.logout();
  }

  handleSubmit() {
    console.log(this.searchForm.controls['search'].value);
  }
}
