export class Recette{

 public name: string;
 public description: string;
 public UrlImage: string;

  constructor(name: string, desc: string, UrlImage: string){
    this.name = name;
    this.description = desc;
    this.UrlImage = UrlImage;
  }
}
