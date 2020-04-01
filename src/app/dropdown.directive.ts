import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{

 private isOpen = false;

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) { }

  @HostListener('click')
  onClick(){
    const dropdown = this.elementRef.nativeElement.querySelector('.dropdown-menu');
    if(!this.isOpen){
      this.renderer.addClass(dropdown, 'show')
    } else{
      this.renderer.removeClass(dropdown, 'show')
    }
    this.isOpen = !this.isOpen;
  }
  ngOnInit(){}

}
