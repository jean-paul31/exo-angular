import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from "../../recettes/shared/ingredients.model";
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false})nameInputRef: ElementRef;
  @ViewChild('qteInput', {static: false})qteInputRef: ElementRef;
  // @Output()ingredientAdded=new EventEmitter<Ingredient>();

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingQte = this.qteInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingQte);
    // this.ingredientAdded.emit(newIngredient);
    this.slService.addIngredient(newIngredient);
  }

}
