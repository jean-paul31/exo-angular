import { Ingredient } from './shared/ingredients.model';


export class Recette{

 public name: string;
 public description: string;
 public UrlImage: string;
 public ingredients: Ingredient[];

  constructor(name: string,
              desc: string,
              UrlImage: string,
              ingredients: Ingredient[]){
    this.name = name;
    this.description = desc;
    this.UrlImage = UrlImage;
    this.ingredients = ingredients;
  }
}
