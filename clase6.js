//EJEMPLO 1
// let form = document.querySelector("form");
// form.addEventListener("submit", e => {
//     e.preventDefault();
//     console.log(form[0].value);
//     console.log(form[1].value);
//     console.log(form[2].files[0].name);
// });

//EJEMPLO 2
// let form = document.forms.namedItem("formu");
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let datos = new FormData();//interfaz clave:valor
//     datos.append("nombre", form.nombre.value);
//     datos.append("edad", form.edad.value);
//     datos.append("archivo", form.archivo.files[0].name);
//     for (var x of datos.entries()) {
//         console.log(x[0] + ' : ' + x[1]);
//     }
// });

/*
Eventos a partir de peticiones ajax
 - loadstart
 - progress
 - load
 - loadend
 - dragenter
 - dragleave
 - dragover
 - drop
 - drag and drop: arrastrar y soltar
  xhr.addEventListener("evento",manejarevento)
*/
//EJEMPLO 3
// let video = document.getElementById("myVideo");
// video.addEventListener("progress", () => {
//     console.log("Descargando el vídeo");
// })

//EJEMPLO 4
// let progreso = document.querySelector("progress");
// let xhr = new XMLHttpRequest
// xhr.responseType = "blob";
// xhr.open("get", "caja2.png");//get post put patch delete
// xhr.addEventListener("load", () => {
//     if (xhr.status == 200) {
//         let imagen = xhr.response;
//         let url = URL.createObjectURL(imagen);//método
//         let img = document.createElement("img");
//         img.src = url;
//         img.width = 200;
//         document.body.appendChild(img);

//     }
// });
// xhr.addEventListener("progress", (e) => {
//     console.log(e);
//     if (e.lengthComputable) {
//         console.log("descargando");
//         let valor = e.loaded * 100 / e.total;
//         progreso.value = valor;
//         console.log(valor);
//     }
// });
// xhr.send();

//EJEMPLO 5
// var input = document.querySelector("input[type=file]");
// var previa = document.querySelector("#previa");
// input.addEventListener("change", (e) => {
//     console.log(e.target.files[0]);
//     var url = URL.createObjectURL(e.target.files[0]);
//     previa.setAttribute("src", url);
// });

//EJEMPLO 6
// let cajita = document.getElementById("cajita");
// cajita.addEventListener("dragover", permitirDrop);
// cajita.addEventListener("drop", drop);
// function drop(e) {
//     e.preventDefault();
//     var archivo = new FileReader();//permite leer ficheros
//     archivo.readAsDataURL(e.dataTransfer.files[0]);//leer
//     archivo.addEventListener("load", leer);

//     console.log(e.dataTransfer.files[0].name);
// }
// function permitirDrop(e) {
//     e.preventDefault();
// }
// function leer(e) {
//     let cajita = document.getElementById("cajita");
//     console.log(e);
//     cajita.style.backgroundImage = "url('" + e.target.result + "')";
// }

//EJEMPLO 7
function permitirDrop(e) {
    e.preventDefault();
}
function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
}
function drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
}