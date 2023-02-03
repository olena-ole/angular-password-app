import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pass-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  class: string = 'password-indicator';

  strongPassword: RegExp = new RegExp('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])');
  mediumPassword: RegExp = new RegExp('(?=.*[A-Za-z])(?=.*[^A-Za-z0-9])|(?=.*[A-Za-z])(?=.*[0-9])|(?=.*[0-9])(?=.*[^A-Za-z0-9])');
  easyPassword: RegExp = new RegExp('(?=.*[A-Za-z])|(?=.*[0-9])|(?=.*[^A-Za-z0-9])');

  checkPassword(event : Event) : void {
    const enteredPassword: string = (event.target as HTMLInputElement).value;
    const isEnoughLength: boolean = enteredPassword.length > 7;
    const isEmpty: boolean = enteredPassword.length === 0;

    if (isEmpty) {
      this.class = 'password-indicator';
    } else if (!isEnoughLength) {
      this.class = 'password-indicator weak';
    } else {
      if (this.strongPassword.test(enteredPassword)) {
        this.class = 'password-indicator strong';
      } else if (this.mediumPassword.test(enteredPassword)) {
        this.class = 'password-indicator medium';
      } else if (this.easyPassword.test(enteredPassword)) {
        this.class = 'password-indicator easy';
      }
    } 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
