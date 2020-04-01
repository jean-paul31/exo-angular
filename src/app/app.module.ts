import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { RecettesComponent } from './recettes/recettes.component';
import { RecetteListComponent } from './recettes/recette-list/recette-list.component';
import { RecetteDetailComponent } from './recettes/recette-detail/recette-detail.component';
import { RecetteItemComponent } from './recettes/recette-list/recette-item/recette-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RecetteStartComponent } from './recettes/recette-start/recette-start.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecettesComponent,
    RecetteListComponent,
    RecetteDetailComponent,
    RecetteItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecetteStartComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
