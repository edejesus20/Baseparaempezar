export interface menuGen {
    mainSesion: listaMenuI[]
}


export interface listaMenuI {
    id: number;
    id_padre: number;
    icono: string;
    link: string;
    titulo: string;
}


export interface hijosI {
        id: number;
        id_padre:number;
        icono: string;
        link: string;
        titulo: string;
        menu?:listaMenuI[]
}

export interface menuI {

    menu:opcMenu[];

  } 

export interface opcMenu {
          id: number;
          id_padre:number;
          icono: string;
          link: string;
          titulo: string;
          
          menu?:[
              {
              id: number;
              id_padre:number;
              icono: string;
              link: string;
              titulo: string;
              
              menu?:[
                  {
                  id: number;
                  id_padre:number;
                  icono: string;
                  link: string;
                  titulo: string;
                  }
              ]
              }
          ]
    
}
