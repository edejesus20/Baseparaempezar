import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserLoginI } from 'src/app/models/authorization/usr_User';
export interface datos{
  dato?:number;  
}
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  displayMaximizable:boolean=true
  public form:FormGroup=this.formBuilder.group({
    username:['', [Validators.required]],
    password:['', [Validators.required]],
   });
   public motrar:boolean = false

   public image3:string='assets/demo.png'

  constructor(
    private formBuilder: FormBuilder,
    private authService:AuthService,
    private router: Router,
    private messageService: MessageService,
    ) { }

   

    ngOnInit(): void {
      var token :string | null= localStorage.getItem('token');
      var user :string | null= localStorage.getItem('user');
      // var menu :string | null= localStorage.getItem('menu');
      if(token!=null && user!=null){
          // this.showSuccess()
        let userObjeto:any = JSON.parse(user); 
        // let menuObjeto:any = JSON.parse(menu); 
        let userLoginResponse={
          user:userObjeto,
          token:token,
        }
          this.router.navigateByUrl('/landing'); 
      }else{
        // this.isLoggedIn=false
        // this.router.navigateByUrl('/login');
      }
    }

  onSubmit() {
    let form :UserLoginI= this.form.value
    this.authService.login(form).subscribe(
      (result) => {
        console.log(result,'result');
        this.motrar=true

        var date = new Date('2020-01-01 00:00:04');
        function padLeft(n:any){ 
          return n ="00".substring(0, "00".length - n.length) + n;
        }
        var interval = setInterval(() => {
        var minutes = padLeft(date.getMinutes() + "");
        var seconds = padLeft(date.getSeconds() + "");
        // console.log(minutes, seconds);
 
        if( seconds == '02') {
          this.messageService.add({severity:'success', summary: 'Bienvenido', detail: `${result.user?.username}`});

        }
        date = new Date(date.getTime() - 1000);
        if(minutes == '00' && seconds == '01'){
          // console.log('aqui',seconds);
        // }
        // if( minutes == '00' && seconds == '03' ) {
          this.router.navigateByUrl('/landing');
          clearInterval(interval); 
        }
  }, 1000)
        
    },async error => {
      this.motrar=false

      if(error != undefined) {
        if(error.error.dataErros){
          this.messageService.add({severity:'error', summary: 'Error', detail: `Error. ${error.error.dataErros[0].message}`});
        }
        if(error.error.message){
          this.messageService.add({severity:'error', summary: 'Error', detail: `Error. ${error.error.message}`});
        }
        console.log(error);
        
      }
    })

  }

}
