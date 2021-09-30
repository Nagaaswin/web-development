import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() itemAdded = new EventEmitter<Ingredient>();
  constructor() {}

  ngOnInit(): void {}

  onAdd(nameInput: string, amountInput: number) {
    this.itemAdded.emit(new Ingredient(nameInput, amountInput));
  }
}
