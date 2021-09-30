import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Mango', 10),
  ];
  constructor() {}

  ngOnInit(): void {}

  onItemAdded(ingredient: Ingredient) {
    console.log(ingredient.name);
    this.ingredients.push(ingredient);
  }
}
