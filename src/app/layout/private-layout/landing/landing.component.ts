import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserService } from 'src/app/core/services/usuarios/user.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [ConfirmationService,MessageService]
})
export class LandingComponent implements OnInit {
  // public image:string='assets/images/institution/fondeba1.jpg'
  // public image2:string='assets/demo1.png'
  public image3:string='assets/demo1.png'
  public bandera:boolean=false
  public nombre:string = '';
  private API_URI:string=environment.API_URI


  constructor(
    private userService:UserService,
    private router: Router,

    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    var token :string | null= localStorage.getItem('token');
    var user :string | null= localStorage.getItem('user');
    // var menu :string | null= localStorage.getItem('menu');
    if(token!=null && user!=null){
        this.showSuccess()
        this.bandera=true
        let userObjeto:any = JSON.parse(user); 
      // console.log(menuObjeto)

      }else{
        this.router.navigateByUrl('/login'); 

        this.bandera=false
      }
  //   var token :string | null= localStorage.getItem('token');
  //   var user :string | null= localStorage.getItem('user');
  //  console.log(user)

  //   if(token!=null && user !=null){
  //     let userObjeto:any = JSON.parse(user); 
  //     console.log(userObjeto)
  //     this.messageService.add({severity:'success', summary: 'Success',
  //      detail: 'Bienvenido '+userObjeto?.username+''});
  //     }else{
  //       this.messageService.add({severity:'success', summary: 'Success', detail: 'Bienvenido '});

  //     }
  }

 public showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Ingreso exitoso'});
}
}
