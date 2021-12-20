import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {}
  collapsed: boolean = true;

  constructor(
    private dataStorageService: DataStorageService,
    private recipeService: RecipeService
  ) {}

  storeRecipes() {
    this.dataStorageService.storeRecipe(this.recipeService.getRecipes());
  }

  fetchRecipes() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
