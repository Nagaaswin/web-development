import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);
    if (this.editMode) {
      const recipe = this.recipeService.getRecipeById(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name),
              amount: new FormControl(ingredient.amount),
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, [
        Validators.required,
        Validators.pattern('^[A-Za-z0-9 ]*$'),
      ]),
      imagePath: new FormControl(recipeImagePath, [Validators.required]),
      description: new FormControl(recipeDescription, [
        Validators.required,
        Validators.pattern('^[A-Za-z0-9 ]*$'),
      ]),
      ingredients: new FormArray(
        recipeIngredients.controls,
        new FormGroup({
          name: new FormControl(null, [
            Validators.required,
            Validators.pattern('^[A-Za-z0-9 ]*$'),
          ]),
          amount: new FormControl(null, [
            Validators.pattern('^[0-9]*$'),
            Validators.required,
          ]),
        })
      ),
    });
  }

  get recipeControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onRecipeFormSubmit() {
    const recipe = new Recipe(
      this.id,
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients']
    );
    if (this.editMode) {
      this.recipeService.editRecipeById(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onEditCancel();
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, [
          Validators.required,
          Validators.pattern('^[A-Za-z0-9 ]*$'),
        ]),
        amount: new FormControl(null, [
          Validators.pattern('^[0-9]*$'),
          Validators.required,
        ]),
      })
    );
  }

  onEditCancel() {
    this.router.navigate(['..'], { relativeTo: this.route });
  }

  OnDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
}
