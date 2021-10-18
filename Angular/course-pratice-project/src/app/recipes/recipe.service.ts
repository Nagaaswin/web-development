import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private shoppingListService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Chicken Briyani',
      'A best North indian dish',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/chicken-biryani-recipe-500x500.jpg',
      [
        new Ingredient('chicken', 1),
        new Ingredient('Rice', 1),
        new Ingredient('masala', 1),
      ]
    ),
    new Recipe(
      2,
      'Mutton Briyani',
      'A best South indian dish',
      'https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg',
      [
        new Ingredient('mutton', 1),
        new Ingredient('Rice', 1),
        new Ingredient('masala', 1),
      ]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  toShoppingList(recipe: Recipe) {
    this.shoppingListService.onIngredientsAdd(recipe.ingredients);
  }

  getRecipeById(id: number) {
    return this.recipes[id - 1];
  }
}
