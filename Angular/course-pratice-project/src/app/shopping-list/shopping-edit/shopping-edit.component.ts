import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  public shoppingListForm: FormGroup;

  editSubscription: Subscription;
  edittedItem: Ingredient;
  editMode: boolean = false;
  edittedItemIndex: number;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.shoppingListForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[A-Za-z0-9]*$'),
      ]),
      amount: new FormControl(null, [
        Validators.pattern('^[0-9]*$'),
        Validators.required,
      ]),
    });
    this.editSubscription = this.shoppingListService.stratedEditing.subscribe(
      (index: number) => {
        this.edittedItemIndex = index;
        this.editMode = true;
        this.edittedItem = this.shoppingListService.getIngredients(index);
        this.shoppingListForm.setValue({
          name: this.edittedItem.name,
          amount: this.edittedItem.amount,
        });
      }
    );
  }

  onIngredientSubmit() {
    const ingredient = new Ingredient(
      this.shoppingListForm.get('name').value,
      this.shoppingListForm.get('amount').value
    );
    if (this.editMode) {
      this.shoppingListService.updateIngredient(
        this.edittedItemIndex,
        ingredient
      );
    } else {
      this.shoppingListService.onItemAdded(ingredient);
    }
    this.onClear();
  }

  onClear() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.edittedItemIndex);
    this.onClear();
  }

  ngOnDestroy(): void {
    this.editSubscription.unsubscribe();
  }
}
