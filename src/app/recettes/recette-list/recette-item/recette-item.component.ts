import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import { Recette } from '../../recette.model';
import { RecetteService } from "../../recette.service";



@Component({
  selector: 'app-recette-item',
  templateUrl: './recette-item.component.html',
  styleUrls: ['./recette-item.component.css']
})


export class RecetteItemComponent implements OnInit {


  @Input() recette: Recette;
  // @Output() recetteSelected = new EventEmitter<void>();

  constructor(private recetteService: RecetteService) { }

  ngOnInit() {
  }

  onRecetteSelected(){
    this.recetteService.recetteSelected.emit(this.recette);
  }

}
