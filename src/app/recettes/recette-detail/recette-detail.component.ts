import { Component, OnInit, Input } from '@angular/core';
import { Recette } from '../recette.model';
import { RecetteService } from '../recette.service';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-recette-detail',
  templateUrl: './recette-detail.component.html',
  styleUrls: ['./recette-detail.component.css']
})
export class RecetteDetailComponent implements OnInit {
  @Input() recette: Recette;

  constructor(private recetteService: RecetteService) { }

  ngOnInit(): void {
  }

  onAddToShoppingList(){
    this.recetteService.addIngredientsToShoppingList(this.recette.ingredients)
  }

}
