import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import { Recette } from '../../recette.model';



@Component({
  selector: 'app-recette-item',
  templateUrl: './recette-item.component.html',
  styleUrls: ['./recette-item.component.css']
})


export class RecetteItemComponent implements OnInit {


  @Input() recette: Recette;
  @Output() recetteSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onRecetteSelected(){
    this.recetteSelected.emit();
  }

}
