
export function getBase64ImageFromURL(url:any) {
    return new Promise((resolve, reject) => {
    var img = new Image();
    img.setAttribute("crossOrigin", "anonymous");
    
          img.onload = () => {
              var canvas = document.createElement("canvas");
              canvas.width = img.width;
              canvas.height = img.height;
    
              var ctx = canvas.getContext("2d");
              if(ctx)
              ctx.drawImage(img, 0, 0);
    
              var dataURL = canvas.toDataURL("image/png");
    
              resolve(dataURL);
          };
    
          img.onerror = error => {
              reject(error);
          };
    
          img.src = url;
      });
    }

export function separrador(number: number){
    if(typeof number != 'number'){
      alert("Invalid letras")
      return false
    }
    return formatNumber(number)
  }

   function formatNumber(floatValue = 0, decimals = 0, multiplier = 1) {
    let floatMultiplied = floatValue * multiplier;
    let stringFloat = floatMultiplied + "";
    let arraySplitFloat = stringFloat.split(".");
    let decimalsValue = "0";
    if (arraySplitFloat.length > 1) {
        decimalsValue = arraySplitFloat[1].slice(0, decimals);
    }
    let integerValue = arraySplitFloat[0];
    let arrayFullStringValue = [integerValue, decimalsValue];
    let FullStringValue = arrayFullStringValue.join(".")
    let floatFullValue = parseFloat(FullStringValue);
    let formatFloatFullValue = new Intl.NumberFormat(undefined, { minimumFractionDigits: decimals }).format(floatFullValue);
    return formatFloatFullValue;
}

function Unidades(num:number){

    switch(num)
    {
        case 1: return "UN";
        case 2: return "DOS";
        case 3: return "TRES";
        case 4: return "CUATRO";
        case 5: return "CINCO";
        case 6: return "SEIS";
        case 7: return "SIETE";
        case 8: return "OCHO";
        case 9: return "NUEVE";
    }

    return "";
}//Unidades()

function Decenas(num:number){

  var  decena = Math.floor(num/10);
  var  unidad = num - (decena * 10);

    switch(decena)
    {
        case 1:
            switch(unidad)
            {
                case 0: return "DIEZ";
                case 1: return "ONCE";
                case 2: return "DOCE";
                case 3: return "TRECE";
                case 4: return "CATORCE";
                case 5: return "QUINCE";
                default: return "DIECI" + Unidades(unidad);
            }
        case 2:
            switch(unidad)
            {
                case 0: return "VEINTE";
                default: return "VEINTI" + Unidades(unidad);
            }
        case 3: return DecenasY("TREINTA", unidad);
        case 4: return DecenasY("CUARENTA", unidad);
        case 5: return DecenasY("CINCUENTA", unidad);
        case 6: return DecenasY("SESENTA", unidad);
        case 7: return DecenasY("SETENTA", unidad);
        case 8: return DecenasY("OCHENTA", unidad);
        case 9: return DecenasY("NOVENTA", unidad);
        case 0: return Unidades(unidad);
    }
    return Unidades(unidad);
}//Unidades()

function DecenasY(strSin:string, numUnidades:number) {
    if (numUnidades > 0)
    return strSin + " Y " + Unidades(numUnidades)

    return strSin;
}//DecenasY()

function Centenas(num:number) {
  var  centenas = Math.floor(num / 100);
   var decenas = num - (centenas * 100);

    switch(centenas)
    {
        case 1:
            if (decenas > 0)
                return "CIENTO " + Decenas(decenas);
            return "CIEN";
        case 2: return "DOSCIENTOS " + Decenas(decenas);
        case 3: return "TRESCIENTOS " + Decenas(decenas);
        case 4: return "CUATROCIENTOS " + Decenas(decenas);
        case 5: return "QUINIENTOS " + Decenas(decenas);
        case 6: return "SEISCIENTOS " + Decenas(decenas);
        case 7: return "SETECIENTOS " + Decenas(decenas);
        case 8: return "OCHOCIENTOS " + Decenas(decenas);
        case 9: return "NOVECIENTOS " + Decenas(decenas);
    }

    return Decenas(decenas);
}//Centenas()

function Seccion(num:number, divisor:number, strSingular:string, strPlural:string) {
  var  cientos = Math.floor(num / divisor)
  var  resto = num - (cientos * divisor)

 var   letras = "";

    if (cientos > 0)
        if (cientos > 1)
            letras = Centenas(cientos) + " " + strPlural;
        else
            letras = strSingular;

    if (resto > 0)
        letras += "";

    return letras;
}//Seccion()

function Miles(num:number) {
   var divisor = 1000;
  var  cientos = Math.floor(num / divisor)
  var  resto = num - (cientos * divisor)

  var  strMiles = Seccion(num, divisor, "UN MIL", "MIL");
  var  strCentenas = Centenas(resto);

    if(strMiles == "")
        return strCentenas;

    return strMiles + " " + strCentenas;
}//Miles()

function Millones(num:number) {
  var  divisor = 1000000;
  var  cientos = Math.floor(num / divisor)
  var  resto = num - (cientos * divisor)

  var strMillones = Seccion(num, divisor, "UN MILLON ", "MILLONES ");
  var  strMiles = Miles(resto);

    if(strMillones == "")
        return strMiles;

    return strMillones + " " + strMiles;
}//Millones()

export function NumeroALetras(num:number) {
    var data = {
        numero: num,
        enteros: Math.floor(num),
        centavos: (((Math.round(num * 100)) - (Math.floor(num) * 100))),
        letrasCentavos: "",
        letrasMonedaPlural: '',//"PESOS", 'Dólares', 'Bolívares', 'etcs'
        letrasMonedaSingular: '', //"PESO", 'Dólar', 'Bolivar', 'etc'

        letrasMonedaCentavoPlural: "CENTAVOS",
        letrasMonedaCentavoSingular: "CENTAVO"
    };

    if (data.centavos > 0) {
        data.letrasCentavos = "CON " + (function (){
            if (data.centavos == 1)
                return Millones(data.centavos) + " " + data.letrasMonedaCentavoSingular;
            else
                return Millones(data.centavos) + " " + data.letrasMonedaCentavoPlural;
            })();
    };

    if(data.enteros == 0)
        return "CERO " + data.letrasMonedaPlural + " " + data.letrasCentavos;
    if (data.enteros == 1)
        return Millones(data.enteros) + " " + data.letrasMonedaSingular + " " + data.letrasCentavos;
    else
        return Millones(data.enteros) + " " + data.letrasMonedaPlural + " " + data.letrasCentavos;
}//NumeroALetras()