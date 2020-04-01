import { Injectable, EventEmitter} from '@angular/core';
import { Ingredient } from "../recettes/shared/ingredients.model";


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Pistache', 45),
    new Ingredient('sel', 16),
    new Ingredient('poivre', 99),
    new Ingredient('Vanille', 40),
  ];

  getIngredients(){
    return this.ingredients.slice();
  }
   addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient)
    this.ingredientChanged.emit(this.ingredients.slice())
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients)
    this.ingredientChanged.emit(this.ingredients.slice())
  }


  constructor() { }
}
