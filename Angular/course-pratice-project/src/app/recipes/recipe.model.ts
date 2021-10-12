import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public id: number;
  public name: String;
  public description: String;
  public imagePath: String;
  public ingredients: Ingredient[];

  constructor(
    id: number,
    name: String,
    desc: String,
    imagePath: String,
    ingredients: Ingredient[]
  ) {
    this.id = id;
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
