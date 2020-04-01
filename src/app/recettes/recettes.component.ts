import { Component, OnInit } from '@angular/core';
import { Recette } from './recette.model';
import { RecetteService } from './recette.service';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css'],
  providers: [RecetteService]
})
export class RecettesComponent implements OnInit {

  selectedRecette: Recette;

  constructor(private recetteService: RecetteService) { }

  ngOnInit() {
    this.recetteService.recetteSelected.subscribe(
      (recette: Recette) => {
      this.selectedRecette = recette;
    });
  }

}
