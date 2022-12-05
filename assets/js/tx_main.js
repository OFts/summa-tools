// Generador de inputs
var tabla = document.getElementById("table");
var nuevo = document.getElementById("nuevo");
var titles = document.getElementById("table-titles");

// Global variables
var excelData = [columns.map(row =>(row.nombre))]; // Variable de documento de texto hecho array
var excelImport = []; // Variable con datos importados de hoja de excel
// Sortable table
Sortable.create(tabla, {
  handle: ".my-handle",
  animation: 150
});

// Guardar archivo ANSI
function BlobDownload(Filename, Bytes, Mimetype) {
  var filData = new Blob(Bytes, { type: Mimetype });
  if (window.navigator && window.navigator.msSaveOrOpenBlob) { // for IE
      window.navigator.msSaveOrOpenBlob(filData, Filename);
  } else { // for Non-IE (chrome, firefox etc.)
      var a = document.createElement("a");
      a.href = URL.createObjectURL(filData);
      a.download = Filename;
      a.click();
  }
};

function download() {
  var collection = 0 ;
  var txtcontent = '';
  collection = document.getElementsByClassName("list-group");
  let iterations = collection[0].children.length;
  for (const line of collection[0].children) {
    let cont = 0;
    for (const linput of line.children) {
      if (linput.nodeName == "INPUT") {
        txtcontent = txtcontent.concat(linput.value.toUpperCase());
        if (linput.value.length<columns[cont].longitud) {
          txtcontent=txtcontent.concat(Array(columns[cont].longitud-linput.value.length).fill(' ').join(''));
        }
        cont++;
      }
    }
    txtcontent = txtcontent.concat('>');
    if (--iterations) {
      txtcontent = txtcontent.concat('\r\n'); // CRLF
    }
  }
  let date = new Date();
  let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  var bytes = new TextEncoder("windows-1252", { NONSTANDARD_allowLegacyEncoding: true }).encode(txtcontent);
  BlobDownload("UR"+("0" + lastDay.getFullYear()).slice(-2)+("0" + (lastDay.getMonth()+1)).slice(-2) +("0" + lastDay.getDate()).slice(-2), [bytes]);
}

// Constructor de filas
function rowNode(info) {
  let rownode = document.createElement('div');
  let handle = document.createElement('span');
  let trashCan = document.createElement('div');

  let deletex = '<svg class="inline-block p-1 fill-gray-800 hover:fill-gray-900 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 307.252 307.252" style="enable-background:new 0 0 307.252 307.252" xml:space="preserve"><path d="m184.581 230.833 9.521-100.238c.575-6.048 5.931-10.48 11.991-9.911 6.048.575 10.485 5.943 9.911 11.991l-9.521 100.238c-.541 5.694-5.332 9.961-10.938 9.961-.348 0-.699-.017-1.053-.05-6.048-.575-10.485-5.943-9.911-11.991zM45.306 37.023H261.95c6.075 0 11-4.925 11-11s-4.925-11-11-11h-61.998c.49-1.246.759-2.604.759-4.023 0-6.075-4.925-11-11-11h-72.165c-6.075 0-11 4.925-11 11 0 1.42.269 2.777.759 4.023H45.306c-6.075 0-11 4.925-11 11s4.924 11 11 11zm108.318 223.621c6.075 0 11-4.925 11-11v-135.78c0-6.075-4.925-11-11-11s-11 4.925-11 11v135.779c0 6.076 4.925 11.001 11 11.001zM273.279 68.477l-25.58 228.996a11 11 0 0 1-10.932 9.779H70.484a11 11 0 0 1-10.932-9.779L33.973 68.477a10.998 10.998 0 0 1 10.931-12.221h217.443a10.997 10.997 0 0 1 10.932 12.221zm-23.228 9.779H57.201l23.123 206.996h146.604l23.123-206.996zM100.772 232.913c.54 5.694 5.33 9.961 10.938 9.961.348 0 .699-.017 1.053-.05 6.048-.575 10.485-5.943 9.911-11.991l-9.52-100.238c-.575-6.048-5.938-10.484-11.991-9.911-6.048.575-10.485 5.943-9.911 11.991l9.52 100.238z"/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>';
  let movesvg = '<svg class="inline-block m-2" viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-6h24v24H-3z"/><path class="fill-gray-800 hover:fill-gray-900" d="M1 12h16c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1Zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1ZM0 1c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1Z"/></g></svg>';
  handle.insertAdjacentHTML('afterbegin',movesvg);
  handle.classList.add('my-handle','inline-block','w-8','cursor-grab','active:cursor-grabbing');
  rownode.appendChild(handle);

  trashCan.insertAdjacentHTML('beforeend',deletex);
  trashCan.classList.add('inline-block','w-6');
  // Función para eliminar elementos
  trashCan.addEventListener('click',()=>{
    if(confirm('¿Desea eliminar este elemento?')==true){
      trashCan.parentElement.remove();
    };
  });
  rownode.appendChild(trashCan);
  rownode.classList.add('border-gray-600','bg-gray-200','list-group-item','whitespace-nowrap','w-fit','focus-within:bg-red-200','active:bg-red-200','focus-within:border-red-400');
  let pos = 0;

  for (const param of columns){
    let node = document.createElement("input");
    node.type = "text";
    node.maxLength = param.longitud;
    node.style.width = (param.longitud * 0.7) + "rem";
    node.style.minWidth = "10rem";
    node.style.maxWidth = "20rem";
    node.classList.add('border','align-middle','border-gray-600','px-2','mx-0.5','focus:border-red-500','focus:border-2','focus:outline-none','uppercase');
    if (info) {
      var valSlice = info.slice(pos, pos+param.longitud).trim();
      node.value = valSlice;
      excelData[excelData.length-1].push(valSlice);
    }
    rownode.appendChild(node);
    pos+=param.longitud;
  }
 return rownode;
}

// Lectura de txt linea por linea
document.getElementById('fl').onchange = function(){
  tabla.innerHTML = '';
  titles.innerHTML = '';
  var fl = this.files[0];
  var reader = new FileReader();
  // Crear títulos en la carga del documento
  for (const param of columns){
    let node = document.createElement("div");
    node.appendChild(document.createTextNode(param.nombre));
    node.style.width = (param.longitud * 0.7) + "rem";
    node.style.minWidth = "10rem";
    node.style.maxWidth = "20rem";
    node.classList.add('flex','px-2','m-0.5','break-words','h-auto','items-center','leading-none','text-center','justify-center','text-xs');
    titles.appendChild(node);
  }
  reader.onload = function(progressEvent){
    // Entire file
    // By allrows
    var allrows = this.result.split('\r\n');
    for(var row = 0; row < allrows.length; row++){
      excelData.push([]);
      tabla.appendChild(rowNode(allrows[row]));
    }
    console.log(excelData);
  };
  reader.readAsText(fl,"cp1252"); // Lee archivo ANSI
  document.getElementById('table-package').classList.remove('hidden');
};

// Agregar una nueva fila en blanco
nuevo.addEventListener('click',()=>{
  tabla.appendChild(rowNode());
  let scroll_to_bottom = document.getElementById('table-container');

  function scrollBottom(element) {
    element.scroll({
      top: element.scrollHeight,
      behavior: "smooth"
    })
  }

  scrollBottom(scroll_to_bottom);
});


// Generador de archivo excel

function saveXLSX() {
  var wb = XLSX.utils.book_new();
  wb.Props = {
    Title: "Unidades de riesgo",
    Subject: "Test file",
    Author: "Oscar Fuentes"
  };
  wb.SheetNames.push("Unidades");
  // var ws_data = [{ name: "George Washington", birthday: "1732-02-22" },{ name: "John Adams", birthday: "1735-10-19" },];
  var ws = XLSX.utils.aoa_to_sheet(excelData);
  wb.Sheets["Unidades"] = ws;
  XLSX.writeFile(wb, "UR.xlsx", { compression: true });
}

// Lector de archivo excel
var workbook = XLSX.utils.book_new();
function handleFile(e) {
  var file = e.target.files[0];
  var reader = new FileReader();
  reader.onload = function(e) {
    /* DO SOMETHING WITH workbook HERE */
    workbook = XLSX.read(e.target.result);
    var worksheet = workbook.Sheets['Unidades de Riesgo'];
    // worksheet data to multidimensional array
    excelImport = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    downloadXL2TXT();
  };
  reader.readAsArrayBuffer(file);
}
document.getElementById("xlsx").addEventListener("change", handleFile, false);

// Descarga de excel a texto

function downloadXL2TXT() {
  // var collection = 0 ;
  var txtcontent = '';
  // collection = document.getElementsByClassName("list-group");
  let iterations = excelImport.length-1;
  console.log("Filas " + iterations);
  // for (const line of collection[0].children) {
  let lineCont = 0;
  for (const line of excelImport){
    let cont = 0;
    // for (const linput of line.children) {
    // console.log(line[0].length);
    if (lineCont != 0 && line.length>0){ // Excludes title line and empty excel rows
      for (var linput of line){
        if (cont != 0){ // Excludes firt column
          if (!isNaN(linput) && [26,27].indexOf(cont)>=0){ // Columnas donde existen números
            linput = Math.trunc(linput).toString();
          }
          txtcontent = txtcontent.concat(linput);
          if (linput.length<columns[cont-1].longitud) {
            txtcontent=txtcontent.concat(Array(columns[cont-1].longitud-linput.length).fill(' ').join(''));
          }
        }
        cont++;
      }
      txtcontent = txtcontent.concat('>');  
      if (--iterations) {
        txtcontent = txtcontent.concat('\r\n'); // CRLF
      }
    }
    lineCont++;
  }
  console.log(txtcontent);
  let date = new Date();
  let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  var bytes = new TextEncoder("windows-1252", { NONSTANDARD_allowLegacyEncoding: true }).encode(txtcontent);
  BlobDownload("UR"+("0" + lastDay.getFullYear()).slice(-2)+("0" + (lastDay.getMonth()+1)).slice(-2) +("0" + lastDay.getDate()).slice(-2), [bytes]);
}