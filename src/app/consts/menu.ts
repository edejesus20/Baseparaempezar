import { menuI, listaMenuI, opcMenu, hijosI } from '../models/menu'

export let listMenu:listaMenuI[] = [
  {"id":1,"id_padre":0,"icono":"pi pi-home","link":"/dashboard","titulo":"Escritorio"},
  {"id":2,"id_padre":1,"icono":"icon","link":"/dashboard","titulo":"General"},
  {"id":3,"id_padre":2,"icono":"icon","link":"/dashboard/aspecto_general","titulo":"Aspectos Generales"},
  {"id":4,"id_padre":2,"icono":"icon","link":"/dashboard/mision","titulo":"Misión"},
  {"id":5,"id_padre":2,"icono":"icon","link":"/dashboard/vision","titulo":"Visión"},
  {"id":9,"id_padre":1,"icono":"icon","link":"/dashboard","titulo":"Detalles"},
  {"id":10,"id_padre":9,"icono":"icon","link":"/dashboard/acercadenosotros","titulo":"Acerca de Nosotros"},
  {"id":11,"id_padre":9,"icono":"icon","link":"/dashboard/organigrama","titulo":"Organigrama"},
  {"id":12,"id_padre":1,"icono":"icon","link":"/dashboard","titulo":"Contacto"},
  {"id":13,"id_padre":12,"icono":"icon","link":"/dashboard/contactos","titulo":"Enviar Mensaje"},
  {"id":101,"id_padre":0,"icono":"pi pi-building","link":"/institution","titulo":"Institución"},
{"id":102,"id_padre":101,"icono":"icon","link":"/institution","titulo":"Universidad"},
{"id":103,"id_padre":102,"icono":"icon","link":"/institution/mostrar_universitys","titulo":"Mostrar"},
{"id":104,"id_padre":102,"icono":"icon","link":"/institution/mostrar_university/:id","titulo":"Detalles"},
{"id":105,"id_padre":102,"icono":"source","link":"/institution/create_university","titulo":"Crear Universidad"},
{"id":106,"id_padre":102,"icono":"icon","link":"/institution/edit_university/:id","titulo":"Editar Universidad"},
{"id":107,"id_padre":102,"icono":"icon","link":"/institution/delete_university/:id","titulo":"Eliminar Universidad"},
{"id":108,"id_padre":101,"icono":"icon","link":"/institution","titulo":"Sedes"},
{"id":109,"id_padre":108,"icono":"icon","link":"/institution/mostrar_headquarters","titulo":"Mostrar"},
{"id":110,"id_padre":108,"icono":"icon","link":"/institution/mostrar_headquarter/:id","titulo":"Detalles"},
{"id":111,"id_padre":108,"icono":"source","link":"/institution/create_headquarter","titulo":"Crear Sede"},
{"id":112,"id_padre":108,"icono":"icon","link":"/institution/edit_headquarter/:id","titulo":"Editar Sede"},
{"id":113,"id_padre":108,"icono":"icon","link":"/institution/delete_headquarter/:id","titulo":"Eliminar Sede"},
{"id":114,"id_padre":101,"icono":"icon","link":"/institution","titulo":"Facultad"},
{"id":115,"id_padre":114,"icono":"icon","link":"/institution/mostrar_facultys","titulo":"Mostrar"},
{"id":116,"id_padre":114,"icono":"icon","link":"/institution/mostrar_faculty/:id","titulo":"Detalles"},
{"id":117,"id_padre":114,"icono":"source","link":"/institution/create_faculty","titulo":"Crear Facultad"},
{"id":118,"id_padre":114,"icono":"icon","link":"/institution/edit_faculty/:id","titulo":"Editar Facultad"},
{"id":119,"id_padre":114,"icono":"icon","link":"/institution/delete_faculty/:id","titulo":"Eliminar Facultad"},
{"id":120,"id_padre":101,"icono":"icon","link":"/institution","titulo":"Programas"},
{"id":121,"id_padre":120,"icono":"icon","link":"/institution/mostrar_programs","titulo":"Mostrar"},
{"id":122,"id_padre":120,"icono":"icon","link":"/institution/mostrar_program/:id","titulo":"Detalles"},
{"id":123,"id_padre":120,"icono":"source","link":"/institution/create_program","titulo":"Crear Programa"},
{"id":124,"id_padre":120,"icono":"icon","link":"/institution/edit_program/:id","titulo":"Editar Programa"},
{"id":125,"id_padre":120,"icono":"icon","link":"/institution/delete_program/:id","titulo":"Eliminar Programa"},

]


// let listMenu:listaMenuI[] = [
//             {
//               "id": 1,
//               "id_padre": 0,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Administrador"
//           },
//           {
//               "id": 2,
//               "id_padre": 1,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Usuario"
//           },
//           {
//               "id": 3,
//               "id_padre": 2,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar usuarios"
//           },
//           {
//               "id": 4,
//               "id_padre": 2,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar un Usuario"
//           },
//           {
//               "id": 5,
//               "id_padre": 2,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Crear usuario"
//           },
//           {
//               "id": 6,
//               "id_padre": 2,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Editar Usuario"
//           },
//           {
//               "id": 7,
//               "id_padre": 2,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Eliminar Usuario"
//           },
//           {
//               "id": 8,
//               "id_padre": 1,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Rol"
//           },
//           {
//               "id": 9,
//               "id_padre": 8,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar Roles"
//           },
//           {
//               "id": 10,
//               "id_padre": 8,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar un Rol"
//           },
//           {
//               "id": 11,
//               "id_padre": 8,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Crear Rol"
//           },
//           {
//               "id": 12,
//               "id_padre": 8,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Editar Rol"
//           },
//           {
//               "id": 13,
//               "id_padre": 8,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Eliminar Rol"
//           },
//           {
//               "id": 14,
//               "id_padre": 1,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Recursos"
//           },
//           {
//               "id": 15,
//               "id_padre": 14,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar Rosources"
//           },
//           {
//               "id": 16,
//               "id_padre": 14,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar un Rosource"
//           },
//           {
//               "id": 17,
//               "id_padre": 14,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Crear Rosource"
//           },
//           {
//               "id": 18,
//               "id_padre": 14,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Editar Rosource"
//           },
//           {
//               "id": 19,
//               "id_padre": 14,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Eliminar Rosource"
//           },
//           {
//               "id": 20,
//               "id_padre": 2,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Cambio de Contraseña"
//           },
//           {
//               "id": 21,
//               "id_padre": 0,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Empleado"
//           },
//           {
//               "id": 22,
//               "id_padre": 21,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar Empleados"
//           },
//           {
//               "id": 23,
//               "id_padre": 21,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar un Empleado"
//           },
//           {
//               "id": 24,
//               "id_padre": 21,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Crear Empleados"
//           },
//           {
//               "id": 25,
//               "id_padre": 21,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Editar Empleados"
//           },
//           {
//               "id": 26,
//               "id_padre": 21,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Eliminar Empleados"
//           },
//           {
//               "id": 27,
//               "id_padre": 0,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Proveedor"
//           },
//           {
//               "id": 28,
//               "id_padre": 27,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar Proveedores"
//           },
//           {
//               "id": 29,
//               "id_padre": 27,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar un Proveedor"
//           },
//           {
//               "id": 30,
//               "id_padre": 27,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Crear Proveedor"
//           },
//           {
//               "id": 31,
//               "id_padre": 27,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Editar Proveedor"
//           },
//           {
//               "id": 32,
//               "id_padre": 27,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Eliminar Proveedor"
//           },
//           {
//               "id": 33,
//               "id_padre": 0,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Modulo Cliente"
//           },
//           {
//               "id": 34,
//               "id_padre": 33,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Cliente"
//           },
//           {
//               "id": 35,
//               "id_padre": 34,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar Clientes"
//           },
//           {
//               "id": 36,
//               "id_padre": 34,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar un Cliente"
//           },
//           {
//               "id": 37,
//               "id_padre": 34,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Crear Cliente"
//           },
//           {
//               "id": 38,
//               "id_padre": 34,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Editar Cliente"
//           },
//           {
//               "id": 39,
//               "id_padre": 34,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Eliminar Cliente"
//           },
//           {
//               "id": 40,
//               "id_padre": 33,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Responsabilidad Fiscal"
//           },
//           {
//               "id": 41,
//               "id_padre": 40,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar Responsabilidades Fiscales"
//           },
//           {
//               "id": 42,
//               "id_padre": 40,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar una Responsabilidad Fiscal"
//           },
//           {
//               "id": 43,
//               "id_padre": 40,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Crear Responsabilidad Fiscal"
//           },
//           {
//               "id": 44,
//               "id_padre": 40,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Editar Responsabilidad Fiscal"
//           },
//           {
//               "id": 45,
//               "id_padre": 40,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Eliminar Responsabilidad Fiscal"
//           },
//           {
//               "id": 46,
//               "id_padre": 33,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Tipo de Cliente"
//           },
//           {
//               "id": 47,
//               "id_padre": 46,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar Tipos de Clientes"
//           },
//           {
//               "id": 48,
//               "id_padre": 46,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar un Tipo de Cliente"
//           },
//           {
//               "id": 49,
//               "id_padre": 46,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Crear Tipo de Cliente"
//           },
//           {
//               "id": 50,
//               "id_padre": 46,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Editar Tipo de Cliente"
//           },
//           {
//               "id": 51,
//               "id_padre": 46,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Eliminar Tipo de Cliente"
//           },
//           {
//               "id": 52,
//               "id_padre": 33,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Tipo de Regimen"
//           },
//           {
//               "id": 53,
//               "id_padre": 52,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar Tipos de Regimenes"
//           },
//           {
//               "id": 54,
//               "id_padre": 52,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar un Tipo de Regimen"
//           },
//           {
//               "id": 55,
//               "id_padre": 52,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Crear Tipo de Regimen"
//           },
//           {
//               "id": 56,
//               "id_padre": 52,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Editar Tipo de Regimen"
//           },
//           {
//               "id": 57,
//               "id_padre": 52,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Eliminar Tipo de Regimen"
//           },
//           {
//               "id": 58,
//               "id_padre": 33,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Persona natural"
//           },
//           {
//               "id": 59,
//               "id_padre": 58,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar Personas naturales"
//           },
//           {
//               "id": 60,
//               "id_padre": 58,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar una Persona natural"
//           },
//           {
//               "id": 61,
//               "id_padre": 58,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Crear Persona natural"
//           },
//           {
//               "id": 62,
//               "id_padre": 58,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Editar Persona natural"
//           },
//           {
//               "id": 63,
//               "id_padre": 58,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Eliminar Persona natural"
//           },
//           {
//               "id": 64,
//               "id_padre": 33,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Tipo Documento"
//           },
//           {
//               "id": 65,
//               "id_padre": 64,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar Tipos de Documentos"
//           },
//           {
//               "id": 66,
//               "id_padre": 64,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar un Tipo Documento"
//           },
//           {
//               "id": 67,
//               "id_padre": 64,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Crear Tipo Documento"
//           },
//           {
//               "id": 68,
//               "id_padre": 64,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Editar Tipo Documento"
//           },
//           {
//               "id": 69,
//               "id_padre": 64,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Eliminar Tipo Documento"
//           },
//           {
//               "id": 70,
//               "id_padre": 33,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Persona legal"
//           },
//           {
//               "id": 71,
//               "id_padre": 70,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar Personas legales"
//           },
//           {
//               "id": 72,
//               "id_padre": 70,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar una Persona legal"
//           },
//           {
//               "id": 73,
//               "id_padre": 70,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Crear Persona legal"
//           },
//           {
//               "id": 74,
//               "id_padre": 70,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Editar Persona legal"
//           },
//           {
//               "id": 75,
//               "id_padre": 70,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Eliminar Persona legal"
//           },
//           {
//               "id": 76,
//               "id_padre": 33,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Contacto"
//           },
//           {
//               "id": 77,
//               "id_padre": 76,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar Contactos"
//           },
//           {
//               "id": 78,
//               "id_padre": 76,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar un Contacto"
//           },
//           {
//               "id": 79,
//               "id_padre": 76,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Crear Contacto"
//           },
//           {
//               "id": 80,
//               "id_padre": 76,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Editar Contacto"
//           },
//           {
//               "id": 81,
//               "id_padre": 76,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Eliminar Contacto"
//           },
//           {
//               "id": 82,
//               "id_padre": 0,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Modulo Cartera"
//           },
//           {
//               "id": 83,
//               "id_padre": 82,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Solicitud"
//           },
//           {
//               "id": 84,
//               "id_padre": 83,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar Solicitudes"
//           },
//           {
//               "id": 85,
//               "id_padre": 83,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar una Solicitud"
//           },
//           {
//               "id": 86,
//               "id_padre": 83,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Crear Solicitud"
//           },
//           {
//               "id": 87,
//               "id_padre": 83,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Editar Solicitud"
//           },
//           {
//               "id": 88,
//               "id_padre": 83,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Eliminar Solicitud"
//           },
//           {
//               "id": 89,
//               "id_padre": 82,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Lineas"
//           },
//           {
//               "id": 90,
//               "id_padre": 89,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar Lineas"
//           },
//           {
//               "id": 91,
//               "id_padre": 89,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar una Linea"
//           },
//           {
//               "id": 92,
//               "id_padre": 89,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Crear Linea"
//           },
//           {
//               "id": 93,
//               "id_padre": 89,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Editar Linea"
//           },
//           {
//               "id": 94,
//               "id_padre": 89,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Eliminar Linea"
//           },
//           {
//               "id": 95,
//               "id_padre": 82,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Cuentas bancarias"
//           },
//           {
//               "id": 96,
//               "id_padre": 95,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar Cuentas Bancarias"
//           },
//           {
//               "id": 97,
//               "id_padre": 95,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar una Cuenta Bancaria"
//           },
//           {
//               "id": 98,
//               "id_padre": 95,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Crear Cuenta Bancaria"
//           },
//           {
//               "id": 99,
//               "id_padre": 95,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Editar Cuenta Bancaria"
//           },
//           {
//               "id": 100,
//               "id_padre": 95,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Eliminar Cuenta Bancaria"
//           },
//           {
//               "id": 101,
//               "id_padre": 82,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Bancos"
//           },
//           {
//               "id": 102,
//               "id_padre": 101,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar Bancos"
//           },
//           {
//               "id": 103,
//               "id_padre": 101,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar un Banco"
//           },
//           {
//               "id": 104,
//               "id_padre": 101,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Crear Banco"
//           },
//           {
//               "id": 105,
//               "id_padre": 101,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Editar Banco"
//           },
//           {
//               "id": 106,
//               "id_padre": 101,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Eliminar Banco"
//           },
//           {
//               "id": 107,
//               "id_padre": 82,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Garantias"
//           },
//           {
//               "id": 108,
//               "id_padre": 107,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar Garantias"
//           },
//           {
//               "id": 109,
//               "id_padre": 107,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar una Garantia"
//           },
//           {
//               "id": 110,
//               "id_padre": 107,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Crear Garantia"
//           },
//           {
//               "id": 111,
//               "id_padre": 107,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Editar Garantia"
//           },
//           {
//               "id": 112,
//               "id_padre": 107,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Eliminar Garantia"
//           },
//           {
//               "id": 113,
//               "id_padre": 82,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Prestamos"
//           },
//           {
//               "id": 114,
//               "id_padre": 113,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar Prestamos"
//           },
//           {
//               "id": 115,
//               "id_padre": 113,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar un Prestamo"
//           },
//           {
//               "id": 116,
//               "id_padre": 113,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Crear Prestamo"
//           },
//           {
//               "id": 117,
//               "id_padre": 113,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Editar Prestamo"
//           },
//           {
//               "id": 118,
//               "id_padre": 113,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Eliminar Prestamo"
//           },
//           {
//               "id": 119,
//               "id_padre": 82,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Respuesta del Prestamo"
//           },
//           {
//               "id": 120,
//               "id_padre": 119,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar Respuestas de los Prestamos"
//           },
//           {
//               "id": 121,
//               "id_padre": 119,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar una Respuesta del Prestamo"
//           },
//           {
//               "id": 122,
//               "id_padre": 119,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Crear Respuesta del Prestamo"
//           },
//           {
//               "id": 123,
//               "id_padre": 119,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Editar Respuesta del Prestamo"
//           },
//           {
//               "id": 124,
//               "id_padre": 119,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Eliminar Respuesta del Prestamo"
//           },
//           {
//               "id": 125,
//               "id_padre": 82,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Descuentos"
//           },
//           {
//               "id": 126,
//               "id_padre": 125,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar Descuentos"
//           },
//           {
//               "id": 127,
//               "id_padre": 125,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar un Descuento"
//           },
//           {
//               "id": 128,
//               "id_padre": 125,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Crear Descuento"
//           },
//           {
//               "id": 129,
//               "id_padre": 125,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Editar Descuento"
//           },
//           {
//               "id": 130,
//               "id_padre": 125,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Eliminar Descuento"
//           },
//           {
//               "id": 131,
//               "id_padre": 82,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Amortización"
//           },
//           {
//               "id": 132,
//               "id_padre": 131,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar Amortizaciones"
//           },
//           {
//               "id": 133,
//               "id_padre": 131,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar una Amortización"
//           },
//           {
//               "id": 134,
//               "id_padre": 131,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Crear Amortización"
//           },
//           {
//               "id": 135,
//               "id_padre": 131,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Editar Amortización"
//           },
//           {
//               "id": 136,
//               "id_padre": 131,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Eliminar Amortización"
//           },
//           {
//               "id": 137,
//               "id_padre": 82,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Pago del Prestamo"
//           },
//           {
//               "id": 138,
//               "id_padre": 137,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar Pagos de los Prestamos"
//           },
//           {
//               "id": 139,
//               "id_padre": 137,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar un Pago del Prestamo"
//           },
//           {
//               "id": 140,
//               "id_padre": 137,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Crear Pago del Prestamo"
//           },
//           {
//               "id": 141,
//               "id_padre": 137,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Editar Pago del Prestamo"
//           },
//           {
//               "id": 142,
//               "id_padre": 137,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Eliminar Pago del Prestamo"
//           },
//           {
//               "id": 143,
//               "id_padre": 0,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Modulo Contabilidad"
//           },
//           {
//               "id": 144,
//               "id_padre": 143,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Cuenta"
//           },
//           {
//               "id": 145,
//               "id_padre": 144,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar Cuentas"
//           },
//           {
//               "id": 146,
//               "id_padre": 144,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar una Cuenta"
//           },
//           {
//               "id": 147,
//               "id_padre": 144,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Crear Cuenta"
//           },
//           {
//               "id": 148,
//               "id_padre": 144,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Editar Cuenta"
//           },
//           {
//               "id": 149,
//               "id_padre": 144,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Eliminar Cuenta"
//           },
//           {
//               "id": 150,
//               "id_padre": 143,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Grupo"
//           },
//           {
//               "id": 151,
//               "id_padre": 150,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar Grupos"
//           },
//           {
//               "id": 152,
//               "id_padre": 150,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar un Grupo"
//           },
//           {
//               "id": 153,
//               "id_padre": 150,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Crear Grupo"
//           },
//           {
//               "id": 154,
//               "id_padre": 150,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Editar Grupo"
//           },
//           {
//               "id": 155,
//               "id_padre": 150,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Eliminar Grupo"
//           },
//           {
//               "id": 156,
//               "id_padre": 143,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Clase"
//           },
//           {
//               "id": 157,
//               "id_padre": 156,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar Clases"
//           },
//           {
//               "id": 158,
//               "id_padre": 156,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar una Clase"
//           },
//           {
//               "id": 159,
//               "id_padre": 156,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Crear Clase"
//           },
//           {
//               "id": 160,
//               "id_padre": 156,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Editar Clase"
//           },
//           {
//               "id": 161,
//               "id_padre": 156,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Eliminar Clase"
//           },
//           {
//               "id": 162,
//               "id_padre": 143,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Tipo de Cuenta"
//           },
//           {
//               "id": 163,
//               "id_padre": 162,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar Tipos de Cuentas"
//           },
//           {
//               "id": 164,
//               "id_padre": 162,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar un Tipo de Cuenta"
//           },
//           {
//               "id": 165,
//               "id_padre": 162,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Crear Tipo de Cuenta"
//           },
//           {
//               "id": 166,
//               "id_padre": 162,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Editar Tipo de Cuenta"
//           },
//           {
//               "id": 167,
//               "id_padre": 162,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Eliminar Tipo de Cuenta"
//           },
//           {
//               "id": 168,
//               "id_padre": 143,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Subcuenta"
//           },
//           {
//               "id": 169,
//               "id_padre": 168,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar Subcuentas"
//           },
//           {
//               "id": 170,
//               "id_padre": 168,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar una Subcuenta"
//           },
//           {
//               "id": 171,
//               "id_padre": 168,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Crear Subcuenta"
//           },
//           {
//               "id": 172,
//               "id_padre": 168,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Editar Subcuenta"
//           },
//           {
//               "id": 173,
//               "id_padre": 168,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Eliminar Subcuenta"
//           },
//           {
//               "id": 174,
//               "id_padre": 143,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Auxiliar"
//           },
//           {
//               "id": 175,
//               "id_padre": 174,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar Auxiliares"
//           },
//           {
//               "id": 176,
//               "id_padre": 174,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar un Auxiliar"
//           },
//           {
//               "id": 177,
//               "id_padre": 174,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Crear Auxiliar"
//           },
//           {
//               "id": 178,
//               "id_padre": 174,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Editar Auxiliar"
//           },
//           {
//               "id": 179,
//               "id_padre": 174,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Eliminar Auxiliar"
//           },
//           {
//               "id": 180,
//               "id_padre": 143,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Movimientos"
//           },
//           {
//               "id": 181,
//               "id_padre": 180,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar Movimientos"
//           },
//           {
//               "id": 182,
//               "id_padre": 180,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Mostrar un Movimiento"
//           },
//           {
//               "id": 183,
//               "id_padre": 180,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Crear Movimiento"
//           },
//           {
//               "id": 184,
//               "id_padre": 180,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Editar Movimiento"
//           },
//           {
//               "id": 185,
//               "id_padre": 180,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Eliminar Movimiento"
//           },
//           {
//               "id": 1000,
//               "id_padre": 1,
//               "icono": "icon",
//               "link": "#",
//               "titulo": "Menu"
//           }
//   ]
// Menu Dinamico

export const createMenu = (list: listaMenuI[]) => {
  const menuNuevo: menuI = { 
    'menu':[ ]
  }
  const nuevopadres: any=[]
  const nuevoHijos: any=[]
  try {

    list.forEach((ops1:hijosI) => {

      if(ops1.id_padre==0){
        nuevopadres.push(ops1)
        
      }else{
        nuevoHijos.push(ops1)
      }
  
      nuevopadres.forEach((newP:hijosI) => {
  
        if(ops1.id_padre == newP.id){
  
          if(!newP.menu){
  
            Object.defineProperty(newP, 'menu', {
  
              value:[ops1]
  
              });
            
          }else{
  
            newP.menu.push(ops1)
          }
        }
          
        });
  
        nuevoHijos.forEach((newH:hijosI) => {
  
          if(ops1.id_padre == newH.id){
  
            if( !newH.menu ) {
              
              Object.defineProperty( newH, 'menu', {
  
                value:[ops1]
  
                });
  
            } else {
  
              newH.menu.push(ops1)
            }
          }
          
        });
      
    });
    //asigno el menu al padre y el registro  y a a los hijos el menu y el registro
  
  //asignar los valores al array menu
  
  nuevopadres.forEach((main: any) => {
  
    menuNuevo.menu.push(main)  
    
  });

  return menuNuevo.menu;
    
  } catch (error) {

    console.log(error)
    return [];
  }

  

}

// createMenu(listMenu);

