import { Injectable, EventEmitter } from '@angular/core';
import { Recette } from './recette.model';
import { Ingredient } from './shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecetteService {

  recetteSelected = new EventEmitter<Recette>();

  private recettes: Recette[] = [
                                  new Recette('SO6',
                                              'Recette numéro 1',
                                              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIC853_giUjSLRNrrzxUFCaHObn4CPwZwMshoBXSE-l3pEwQ1D',
                                              [new Ingredient(
                                                'poissons', 2),
                                                new Ingredient(
                                                  'carottes', 5
                                                )
                                              ]
                                              ),
                                            new Recette(
                                              'SUPER',
                                              'Recette numéro 2',
                                              'https://www.ebike-generation.com/img/catalogue/moto/harley-davidson-livewire.jpg',
                                              [new Ingredient(
                                                'poulets', 2),
                                                new Ingredient(
                                                  'navets', 5
                                                )
                                              ]
                                            )
                                ];
  getRecettes(){
    return this.recettes.slice();
  }

  constructor(private slService: ShoppingListService) { }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
