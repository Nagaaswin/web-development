import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class') class: string;

  constructor() {}

  @HostListener('click') onElementClick() {
    this.class === 'open' ? (this.class = '') : (this.class = 'open');
  }
}
