import { Component, OnInit } from '@angular/core';
import { Recette } from '../recette.model';
import { RecetteService } from '../recette.service';
import { Ingredient } from '../shared/ingredients.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recette-detail',
  templateUrl: './recette-detail.component.html',
  styleUrls: ['./recette-detail.component.css']
})
export class RecetteDetailComponent implements OnInit {
  recette: Recette;
  id: number;

  constructor(private recetteService: RecetteService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id = +params['id']
      this.recette = this.recetteService.getRecette(this.id)
    })
  }

  onAddToShoppingList(){
    this.recetteService.addIngredientsToShoppingList(this.recette.ingredients)
  }

}
