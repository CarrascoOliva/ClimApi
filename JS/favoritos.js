import * as indexDBFav from "./indexDBFav.js";

indexDBFav.openDB().then(()=>{

  indexDBFav.getAllDB().then(e=>{
    let favoritos = document.getElementById(`favoritos`);
    favoritos.classList.add("d-flex", "flex-wrap", "justify-content-around"); // Añade estas clases aquí

    e.forEach((el) => {
      let elemento = el.value;
      let div = document.createElement("div");
      div.id = elemento.IDMun;
      div.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3", "bg-white", "text-dark", "card", "mb-3"); // Añade la clase mb-3 aquí
      div.style.overflow = 'hidden';
      div.innerHTML = `<div class="card-body text-center" id="municipiosCarta">
        <h5 class="card-title">${elemento.nombreMun}</h5>
        <button id="detalles" type="button" class="btn btn-info">Detalles</button>
        <button id="eliminar" type="button" class="btn btn-danger">Eliminar</button>
      </div>`;
      favoritos.appendChild(div);
      generarEventoLink(div.querySelector("button#detalles"), elemento.IDMun);
      generarEliminarEvento(div, elemento.IDMun, div.querySelector("button#eliminar"))
    })
  })
})
function generarEventoLink(divElement, IDMun) {
    divElement.addEventListener("click", () => {
      window.location.href = `../PAGES/municipioDetalles.html?id=${IDMun}`;
    });
  }
  function generarEliminarEvento(element, IDMun, boton){
    boton.addEventListener("click", () =>{
        element.remove()
        indexDBFav.deleteTownDB(IDMun);

    })
  }