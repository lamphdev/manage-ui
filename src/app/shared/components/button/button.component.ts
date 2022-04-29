import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() size: 'small' | 'nomal' | 'large' = 'nomal';

  classObj = {
    'px-3 py-1': this.size === 'small',
    'px-5 py-2 ': this.size === 'nomal',
    'px-6 py-3 ': this.size === 'large',
    'rounded bg-primary text-content': true,
    'hover:border-primary hover:border hover:bg-background hover:text-primary': true,
    'active:bg-primary active:text-content': true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
