import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { RecettesComponent } from '../recettes/recettes.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { RecetteDetailComponent } from '../recettes/recette-detail/recette-detail.component';
import { RecetteStartComponent } from '../recettes/recette-start/recette-start.component';

const appRoutes: Routes = [
  {path:'',redirectTo:'/recettes', pathMatch:'full'},
  {path:'recettes', component: RecettesComponent, children: [
                                                              {path:'', component: RecetteStartComponent},
                                                              {path:':id', component: RecetteDetailComponent}
                                                            ]},
  {path:'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
