const invoiceCard = document.getElementById("containerOfCards");
const totalInvoice = document.getElementById("totalInvoice");
let DataLocal = localStorage.getItem("car");
let invoiceCar = [];

invoiceCar = JSON.parse(DataLocal);
suma = 0;

invoiceCar.forEach((el)=>{
      const card = document.createElement("div");
      card.className = "cardOFInvoice col"
      
      const img = document.createElement("img");
      img.className = "img";
      img.src = el.img;
      
      const name = document.createElement("h2");
      name.innerText = el.name;
  
      const quantify = document.createElement("p");
      quantify.innerText = `Cantidad: ${el.quantify}`;
      
      const price = document.createElement("p");
      price.innerText= `$${el.price}`;
      
      containerOfCards.appendChild(card);
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(quantify);
      card.appendChild(price);
  
      suma += (el.price *el.quantify);
    }
  );
  const  cardsInvoice= document.createElement("div");
  cardsInvoice.className = "styleCardsInvoice";

  let subTotal = document.createElement("p");
  subTotal.innerText= `Sub total: ${(suma/1.15).toFixed(2)}`;

  let ivaTotal = document.createElement("p");
  ivaTotal.innerText= `Iva: ${(suma-(suma/1.15)).toFixed(2)}`;

  let total = document.createElement("p");
  total.innerText= `Total: ${suma.toFixed(2)}`;

  totalInvoice.appendChild(cardsInvoice);
  cardsInvoice.appendChild(subTotal);
  cardsInvoice.appendChild(ivaTotal);
  cardsInvoice.appendChild(total);

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
          localStorage.clear(DataLocal);
          location. reload();
        } else if (result.isDenied) {
          Swal.fire("No se borro nada", "", "success");
        }
      });
}
let deleteInvoice = document.getElementById("deleteInvoice");
deleteInvoice.addEventListener("click", () => deleteCar());

console.log(invoiceCar);