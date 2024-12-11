const container = document.getElementById("container");
let car = [];
const cpu = [
    {
        id: 1,
        name: "Ryzen 9 7950X3D",
        img: "https://www.cclonline.com/images/avante/231804950-A_Ryzen9_7900X3D_3DPIB_FRONT_PL.jpg?width=1176&height=884&scale=canvas&trim.threshold=80",
        price: 470
    },
    {
        id: 2,
        name: "Ryzen 7 7700X",
        img: "https://www.cclonline.com/images/avante/231804950-A_Ryzen9_7900X3D_3DPIB_FRONT_PL.jpg?width=1176&height=884&scale=canvas&trim.threshold=80",
        price: 500
    },
    {
        id: 3,
        name: "Ryzen 5 7600X",
        img: "https://www.cclonline.com/images/avante/231804950-A_Ryzen9_7900X3D_3DPIB_FRONT_PL.jpg?width=1176&height=884&scale=canvas&trim.threshold=80",
        price: 300
    }
]
const cardGraphic = [
    {
        id: 1,
        name: "4080 SUPER",
        img : "https://asset.msi.com/resize/image/global/product/product_17059896263e3ce8ea54d6cbbb94bc2c3395e01319.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
        price: 1500
    },
    {
        id: 2,
        name: "4070 TI SUPER",
        img : "https://asset.msi.com/resize/image/global/product/product_17059896263e3ce8ea54d6cbbb94bc2c3395e01319.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
        price: 1150
    },
    {
        id: 3,
        name: "4060 TI",
        img : "https://asset.msi.com/resize/image/global/product/product_17059896263e3ce8ea54d6cbbb94bc2c3395e01319.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
        price: 600
    }
]
const ram = [
    {
        id: 1,
        name: "32GB DDR5 6000Mhz",
        img: "https://c1.neweggimages.com/ProductImageCompressAll1280/20-982-097-05.png",
        price: 150
    },
    {
        id: 2,
        name: "24GB DDR5 6000Mhz",
        img: "https://c1.neweggimages.com/ProductImageCompressAll1280/20-982-097-05.png",
        price: 120
    },
    {
        id: 3,
        name: "16GB DDR5 6000Mhz",
        img: "https://c1.neweggimages.com/ProductImageCompressAll1280/20-982-097-05.png",
        price: 70
    }
]
const storage = [
    {
        id: 1,
        name: "4TB SSD NVME",
        img: "https://c1.neweggimages.com/ProductImageCompressAll1280/20-982-097-05.png",
        price: 200
    },
    {
        id: 2,
        name: "2TB SSD NVME",
        img: "https://c1.neweggimages.com/ProductImageCompressAll1280/20-982-097-05.png",
        price: 150
    },
    {
        id: 3,
        name: "1TB SSD NVME",
        img: "https://c1.neweggimages.com/ProductImageCompressAll1280/20-982-097-05.png",
        price: 80
    }
]
const motherboard = [
    {
        id: 1,
        name: "X670",
        img: "https://c1.neweggimages.com/ProductImageCompressAll1280/20-982-097-05.png",
        price: 300
    },
    {
        id: 2,
        name: "B650",
        img: "https://c1.neweggimages.com/ProductImageCompressAll1280/20-982-097-05.png",
        price: 200
    },
    {
        id: 3,
        name: "A620",
        img: "https://c1.neweggimages.com/ProductImageCompressAll1280/20-982-097-05.png",
        price: 100
    }
]

function addToCar (cpu){
    car.push(cpu);
    localStorage.setItem("car",JSON.stringify(car));
    alert(`Compraste ${cpu.name}`);


}

function createCpu(cpu) {
    const card = document.createElement("div");
    card.className = "card"

    const img = document.createElement("img");
    img.className = "img";
    img.src = cpu.img;

    const name = document.createElement("h2");
    name.innerText = cpu.name;

    const price = document.createElement("p");
    price.innerText= `$${cpu.price}`;

    const button = document.createElement("button");
    button.innerText ="Comprar";
    button.addEventListener("click", () => addToCar(cpu));

    sectionContentCpu.appendChild(card);
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(button);
}

function createCardGraphic(cardGraphic) {
    const card = document.createElement("div");
    card.className = "card"

    const img = document.createElement("img");
    img.className = "img";
    img.src = cardGraphic.img;

    const name = document.createElement("h2");
    name.innerText = cardGraphic.name;

    const price = document.createElement("p");
    price.innerText= `$${cardGraphic.price}`;

    const button = document.createElement("button");
    button.innerText ="Comprar";

    sectionContentGraphic.appendChild(card);
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(button);
}
function createRam(ram) {
    const card = document.createElement("div");
    card.className = "card"

    const img = document.createElement("img");
    img.className = "img";
    img.src = ram.img;

    const name = document.createElement("h2");
    name.innerText = ram.name;

    const price = document.createElement("p");
    price.innerText= `$${ram.price}`;

    const button = document.createElement("button");
    button.innerText ="Comprar";

    sectionContentRam.appendChild(card);
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(button);
}

function createStorage(storage) {
    const card = document.createElement("div");
    card.className = "card"

    const img = document.createElement("img");
    img.className = "img";
    img.src = storage.img;

    const name = document.createElement("h2");
    name.innerText = storage.name;

    const price = document.createElement("p");
    price.innerText= `$${storage.price}`;

    const button = document.createElement("button");
    button.innerText ="Comprar";

    sectionContentStorage.appendChild(card);
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(button);
}

function createMotherBoard(board) {
    const card = document.createElement("div");
    card.className = "card"

    const img = document.createElement("img");
    img.className = "img";
    img.src = board.img;

    const name = document.createElement("h2");
    name.innerText = board.name;

    const price = document.createElement("p");
    price.innerText= `$${board.price}`;

    const button = document.createElement("button");
    button.innerText ="Comprar";

    sectionContentBoard.appendChild(card);
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(button);
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


cpu.forEach(el => {
    createCpu(el);
});

cardGraphic.forEach(el => {
    createCardGraphic(el);
});

ram.forEach(el => {
    createRam(el);
});

storage.forEach(el => {
    createStorage(el);
});
motherboard.forEach(el => {
    createMotherBoard(el);
});


document.getElementById('openModal').onclick = function() {
    document.getElementById('modal').style.display = "block";
}

document.getElementById('closeModal').onclick = function() {
    document.getElementById('modal').style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = "none";
    }
}
