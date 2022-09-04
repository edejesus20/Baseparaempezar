import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})
export class MantenimientoComponent implements OnInit {
  mantenimiento:boolean = true;
public construccion:string='assets/en-construccion.jpg'

  video: string='assets/video/manteni.mp4';
  constructor() { }

  ngOnInit() {
  }

}
