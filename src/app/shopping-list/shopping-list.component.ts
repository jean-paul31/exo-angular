import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../recettes/shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

        ingredients: Ingredient[] = [
          new Ingredient('Pistache', 45),
          new Ingredient('sel', 16),
          new Ingredient('poivre', 99),
          new Ingredient('Vanille', 40)
        ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

}
