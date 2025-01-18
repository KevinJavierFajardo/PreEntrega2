const container = document.getElementById("container");
const lateralBar = document.getElementById("lateralBar");
let car;
let DataLocal = localStorage.getItem("car");

if(DataLocal){
    car = JSON.parse(DataLocal);
    showBarOfComponents(car);
}else{
    car = [];
}
function deleteCar(){
    Swal.fire({
        title: `Quieres Borrar el Carrito de Compras?`,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Si",
        denyButtonText: `No`
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Borraste el Carrito!", "", "success");
          localStorage.clear(car);
          location. reload();
        } else if (result.isDenied) {
          Swal.fire("No se borro nada", "", "success");
        }
      });
}
/**function deleteItemOfBar(el){
  
  car = JSON.parse(DataLocal);
  let valueDelete = el.name;
  console.log(valueDelete);
  delete car["0"];
  console.log(car);
  localStorage.setItem("car",JSON.stringify(car));
}*/
let buttonDelete = document.getElementById("delete");
buttonDelete.addEventListener("click", () => deleteCar());

function showBarOfComponents(car){
            
            let suma = 0;
            car.forEach((el)=>{
            const card = document.createElement("div");
            card.className = "card"
            
            const img = document.createElement("img");
            img.className = "img";
            img.src = el.img;
            
            const name = document.createElement("h2");
            name.innerText = el.name;

            const quantify = document.createElement("p");
            quantify.innerText = `Cantidad: ${el.quantify}`;
            
            const price = document.createElement("p");
            price.innerText= `$${el.price}`;

            /** const deleteItem = document.createElement("button");
            deleteItem.innerText = "Borrar Item";
            deleteItem.className = "buttonDeleteItem";
            deleteItem.addEventListener("click", () => deleteItemOfBar(el))*/
                
            const lateralBar = document.getElementById ("lateralBar");
            lateralBar.className = "col-6 col-md-2";
            
            const container = document.getElementById("container");
            container.className = "col-sm-6 col-md-10"
            
            lateralBar.appendChild(card);
            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(quantify);
            card.appendChild(price);
            //card.appendChild(deleteItem);

            suma += (el.price *el.quantify);
    });
            const totalOfPrice = document.createElement("p");
            totalOfPrice.innerText = `Total: $${suma}.00`;
            totalOfPrice.className = "total"
            lateralBar.appendChild(totalOfPrice);
           
}
function barOfComponents(component){

    if(car.some(el => el.name === component.name)){
        let indexcar = car.findIndex(el => el.name === component.name);
        car[indexcar].quantify += 1;
        location. reload();
    }else{
        car.push({
            ...component,
            quantify: 1,
        });
        location. reload();
    } 
    console.log(car);
}

function addToCar (component){
    Swal.fire({
        title: `Quieres comprar ${component.name}?`,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Lo quiero",
        denyButtonText: `No lo quiero`
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Agregado!", "", "success");
          barOfComponents(component);
          localStorage.setItem("car",JSON.stringify(car));
        } else if (result.isDenied) {
          Swal.fire("No se Agrego", "", "error");
        }
      });
}

async function createComponets() {
        try {
            const valueCpu = await fetch('json/componentes.json');
            const componets = await valueCpu.json();
            console.log(componets);
            componets.cpu.forEach((el)=>{
                const card = document.createElement("div");
                card.className = "card";
                const img = document.createElement("img");
                img.className = "img";
                img.src = el.img;
            
                const name = document.createElement("h2");
                name.innerText = el.name;
            
                const price = document.createElement("p");
                price.innerText= `$${el.price}`;
            
                const button = document.createElement("button");
                button.innerText ="Añadir";
                button.addEventListener("click", () => addToCar(el));
            
                sectionContentCpu.appendChild(card);
                card.appendChild(img);
                card.appendChild(name);
                card.appendChild(price);
                card.appendChild(button);
            });
            componets.cardGraphic.forEach((el) =>{
                const card = document.createElement("div");
                card.className = "card"
            
                const img = document.createElement("img");
                img.className = "img";
                img.src = el.img;
            
                const name = document.createElement("h2");
                name.innerText = el.name;
            
                const price = document.createElement("p");
                price.innerText= `$${el.price}`;
            
                const button = document.createElement("button");
                button.innerText ="Añadir";
                button.addEventListener("click", () => addToCar(el));
            
                sectionContentGraphic.appendChild(card);
                card.appendChild(img);
                card.appendChild(name);
                card.appendChild(price);
                card.appendChild(button);
            });
            componets.ram.forEach((el)=>{
                const card = document.createElement("div");
                card.className = "card"

                const img = document.createElement("img");
                img.className = "img";
                img.src = el.img;

                const name = document.createElement("h2");
                name.innerText = el.name;

                const price = document.createElement("p");
                price.innerText= `$${el.price}`;

                const button = document.createElement("button");
                button.innerText ="Añadir";
                button.addEventListener("click", () => addToCar(el));

                sectionContentRam.appendChild(card);
                card.appendChild(img);
                card.appendChild(name);
                card.appendChild(price);
                card.appendChild(button);
            });
            componets.storage.forEach((el)=>{
                const card = document.createElement("div");
                card.className = "card"
            
                const img = document.createElement("img");
                img.className = "img";
                img.src = el.img;
            
                const name = document.createElement("h2");
                name.innerText = el.name;
            
                const price = document.createElement("p");
                price.innerText= `$${el.price}`;
            
                const button = document.createElement("button");
                button.innerText ="Añadir";
                button.addEventListener("click", () => addToCar(el));
            
                sectionContentStorage.appendChild(card);
                card.appendChild(img);
                card.appendChild(name);
                card.appendChild(price);
                card.appendChild(button);

            });
            componets.motherboard.forEach((el)=>{
                const card = document.createElement("div");
                card.className = "card"
            
                const img = document.createElement("img");
                img.className = "img";
                img.src = el.img;
            
                const name = document.createElement("h2");
                name.innerText = el.name;
            
                const price = document.createElement("p");
                price.innerText= `$${el.price}`;
            
                const button = document.createElement("button");
                button.innerText ="Añadir";
                button.addEventListener("click", () => addToCar(el));
            
                sectionContentBoard.appendChild(card);
                card.appendChild(img);
                card.appendChild(name);
                card.appendChild(price);
                card.appendChild(button);

            });

        } catch (error) {
            console.log(error)
    }
        
 }


const sectionCpu = document.createElement("section");
sectionCpu.id = "cpu";
sectionCpu.className = "";
container.appendChild(sectionCpu);
const titleSectionCpu = document.createElement("h1");
titleSectionCpu.className = "titleSection";
titleSectionCpu.innerText = "Procesadores";
sectionCpu.appendChild(titleSectionCpu);
const sectionContentCpu = document.createElement("div");
sectionContentCpu.className = "d-flex justify-content-around";
sectionCpu.appendChild(sectionContentCpu);



const sectionCardGraphic = document.createElement("section");
sectionCardGraphic.id = "cardGraphic";
sectionCardGraphic.className = "";
container.appendChild(sectionCardGraphic);
const titleSectionGraphic = document.createElement("h1");
titleSectionGraphic.className = "titleSection";
titleSectionGraphic.innerText = "Tarjetas Graficas";
sectionCardGraphic.appendChild(titleSectionGraphic);
const sectionContentGraphic = document.createElement("div");
sectionContentGraphic.className = "d-flex justify-content-around";
sectionCardGraphic.appendChild(sectionContentGraphic);

const sectionRam = document.createElement("section");
sectionRam.id = "ram";
sectionRam.className = "";
container.appendChild(sectionRam);
const titleSectionRam = document.createElement("h1");
titleSectionRam.className = "titleSection";
titleSectionRam.innerText = "Memorias Ram";
sectionRam.appendChild(titleSectionRam);
const sectionContentRam = document.createElement("div");
sectionContentRam.className = "d-flex justify-content-around";
sectionRam.appendChild(sectionContentRam);

const sectionStorage = document.createElement("section");
sectionStorage.id = "storage";
sectionStorage.className = "";
container.appendChild(sectionStorage);
const titleSectionStorage = document.createElement("h1");
titleSectionStorage.className = "titleSection";
titleSectionStorage.innerText = "Almacenamiento";
sectionStorage.appendChild(titleSectionStorage);
const sectionContentStorage = document.createElement("div");
sectionContentStorage.className = "d-flex justify-content-around";
sectionStorage.appendChild(sectionContentStorage);

const sectionmotherboard = document.createElement("section");
sectionmotherboard.id = "motherboard";
sectionmotherboard.className = "";
container.appendChild(sectionmotherboard);
const titleSectionBoard = document.createElement("h1");
titleSectionBoard.className = "titleSection";
titleSectionBoard.innerText = "Tarjetas Madre";
sectionmotherboard.appendChild(titleSectionBoard);
const sectionContentBoard = document.createElement("div");
sectionContentBoard.className = "d-flex justify-content-around";
sectionmotherboard.appendChild(sectionContentBoard);


createComponets();
