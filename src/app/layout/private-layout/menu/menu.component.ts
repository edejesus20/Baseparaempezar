import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnChanges {

  @Input() menu: any[] = [];
  @Output() funcion = new EventEmitter<boolean>();
  @Output() optionSelected = new EventEmitter<any>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {

    this.setCollapse(changes['menu'].currentValue);
  }

  public clickHandler(event: Event, item: any): void {
    event.stopPropagation();
    
    if (item.menu) {
      this.toggleItem(item);
    } else {
      this.selectOption();
    }
  }

  private setCollapse(menu: any[]) {
    for (let i = 0; i < menu.length; i++) {
      menu[i].collapsed = true;
      if (menu[i].menu) {
        this.setCollapse(menu[i].menu);
      }
    }
  }

  private selectOption(): void {
    this.optionSelected.emit();
    this.funcion.emit(false)
  }

  private toggleItem(item: any): void {
    item.collapsed = !item.collapsed;
  }

}
