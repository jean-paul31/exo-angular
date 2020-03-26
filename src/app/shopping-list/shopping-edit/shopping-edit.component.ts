import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from "../../recettes/shared/ingredients.model";


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false})nameInputRef: ElementRef;
  @ViewChild('qteInput', {static: false})qteInputRef: ElementRef;
  @Output()ingredientAdded=new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingQte = this.qteInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingQte);
    this.ingredientAdded.emit(newIngredient);
  }

}
