import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/core/services/usuarios/user.service';
import { RoleI } from 'src/app/models/authorization/usr_roles';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

  public form: FormGroup=this.formBuilder.group({});
  public mostrar:boolean =false;
  displayMaximizable:boolean=true
  // public form2:FormGroup=this.formBuilder.group({
  //   username:['', [Validators.required]],
  //   password:['', [Validators.required]],
  //  });
  selectedCities3: any[]=[];
  cities: RoleI[]=[];
  public image :string='assets/demo.png'
blockSpecial: RegExp = /^[^<>*!@.,]+$/

public Roles1:any[] =[]
public bandera:boolean=false

  constructor(
    private formBuilder: FormBuilder,
    private router: Router, 
    private messageService: MessageService,
    private userService: UserService,

  ) { 
  }

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
        this.router.navigateByUrl('/welcome'); 
    }else{
 
    }
    this.buildForm();
    // this.getAllgenders()
    // this.getAlldocumentTypes()
  }
  public verificar(){
    // e.preventDefault();
    let email = this.form;

let dominios = new Array('uniguajira.edu.co'); //creo un arreglo con los dominios aceptados

// email.addEventListener('blur', function() {


if(email.value.email1 == '' || email.value.email1 == 'undefined'){
    console.log('El campo es obligatorio');
    return false;

}else{
  let value = email.value.email1.split('@'); //split() funciona para dividir una cadena en un array pasando un caracter como delimitador
    
 
    if(value[1] == undefined){
    //  console.log('aqui'); 
     return false;
    }else{
      console.log(value[1]);
      if(dominios.indexOf(value[1]) == -1){ //.indexOf() sirve para encontrar un elemento en un array
      
        console.log('dominio no encontrado'); 
        dominios.forEach(function(dominio){ //utilizamos forEach para recorrer el arreglo.
           
             console.log(`Los dominios aceptados son: ${dominio}`);
        
        })
        this.messageService.add({severity:'warn', summary: 'Warn', detail: `El dominio aceptado es: ${dominios[0]}`,life: 1000});

         return false;
       }else{
         
           console.log('dominio aceptado');
           return true;
       
       }
    }
    
   
}

  }

  private buildForm(){
    this.form = this.formBuilder.group({
    name:['', [Validators.required]],
    surname:['', [Validators.required]],
    DocumentTypeId:[1],
    identification:['', [Validators.required]],
    // GenderId:['', [Validators.required]],
    // address:['', [Validators.required]],
    // phone:['', [Validators.required]],
    email1:['', [Validators.required]],
    // nationality: ['', [Validators.required]],
    // date_of_birth: ['', [Validators.required]],
    password: ['', [Validators.required]],
    password2: ['', [Validators.required]],
    // documentTypeId: [1]
    });
  }

  onSubmit(){
  //  let bandera= this.verificar()

  //  if(bandera == true){
    let value = this.form.value.email1.split('@');
  //  let result = this.form.value.email1.substring(1, this.form.value.email1.split('@'));
    // value=value.slice(1)
    // console.log(value[0])
    let formValue={
      name: this.form.value.name,
      surname: this.form.value.surname,
      DocumentTypeId: this.form.value.DocumentTypeId,
      identification: this.form.value.identification,
      // GenderId: this.form.value.GenderId.id,
      // address: this.form.value.address,
      // phone: this.form.value.phone,
      email:`${value[0]}@uniguajira.edu.co`,
      password:this.form.value.password,
      // nationality: this.form.value.nationality,
      // date_of_birth: this.form.value.date_of_birth,
    };

    if(this.form.value.password !== this.form.value.password2){
      this.messageService.add({severity:'warn', summary: 'Warn', detail: 'Contraseñas No Coinciden'});

    }else{

      if(formValue.name != ""&&
                formValue.surname != ""&&
                formValue.DocumentTypeId != ( 0 || undefined)&&
                formValue.identification != ""&&
                // formValue.GenderId != ( 0 || undefined)&&
                // formValue.address != ""&&
                // formValue.phone != ""&&
                formValue.email != "" && 
                formValue.password != "" 
                // && 
                // formValue.nationality != "" && 
                // formValue. date_of_birth!= ""
                ){
                  this.bandera=true
                  // console.log(formValue)
  
              this.userService.createUser(formValue).subscribe(
                (algo) => {
                    var date = new Date('2020-01-01 00:00:03');
                    function padLeft(n:any){ 
                      return n ="00".substring(0, "00".length - n.length) + n;
                    }
                    var interval = setInterval(() => {
                    var minutes = padLeft(date.getMinutes() + "");
                    var seconds = padLeft(date.getSeconds() + "");
                    if( seconds == '03') {
                    this.messageService.add({severity:'success', summary: 'Success', 
                    detail: 'Registro de Usuario Creado con exito'});
                    }
                    if( seconds == '01') {
                      this.bandera=false
                      }
                    date = new Date(date.getTime() - 1000);
                    if( minutes == '00' && seconds == '01' ) {
                      this.bandera=false
                      this.router.navigateByUrl('/login');
                      clearInterval(interval); 
                    }
              }, 1000);
   
                },async error => {
                  if(error != undefined) {
                    
              if(error != undefined) {
                if(error.error.dataErros){
                  this.messageService.add({severity:'error', summary: 'Error', detail: `Error. ${error.error.dataErros[0].message}`});
                }
                if(error.error.message){
                  this.messageService.add({severity:'error', summary: 'Error', detail: `Error. ${error.error.message}`});
                }
                console.log(error);
                }
                this.bandera=false

                  }
                });
            }else{
              this.messageService.add({severity:'warn', summary: 'Warn', detail: 'Faltan datos'});
              this.bandera=false
            }
    }
 
    

    
  }




  


}
