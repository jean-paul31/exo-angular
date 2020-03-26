import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Recette } from '../recette.model';

@Component({
  selector: 'app-recette-list',
  templateUrl: './recette-list.component.html',
  styleUrls: ['./recette-list.component.css']
})
export class RecetteListComponent implements OnInit {

  @Output() recetteWasSelected = new EventEmitter<Recette>();

  recettes: Recette[] = [
    new Recette('SO6',
                'Blablabla',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIC853_giUjSLRNrrzxUFCaHObn4CPwZwMshoBXSE-l3pEwQ1D'
                ),
              new Recette(
                'SUPER',
                'blabla2',
                'https://www.ebike-generation.com/img/catalogue/moto/harley-davidson-livewire.jpg'
              )];


  constructor() { }

  ngOnInit(): void {
  }

  onRecetteSelected(recette: Recette){
    this.recetteWasSelected.emit(recette)
  }

}
