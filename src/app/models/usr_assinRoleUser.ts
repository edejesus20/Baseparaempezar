export interface assinRoleUserI{
    id?:number;
   UsersRoles:[
      {
        UserId: string; 
        RoleId:string;
      }
    ]

  }