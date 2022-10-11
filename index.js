function Producto(nombre, precio, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.restarStock = function(cantidad){
        this.stock -= cantidad
    }
}

let productoA = new Producto("Hamburguesas", 180, 64)
let productoB = new Producto("Panchos", 120, 79)
let productoC = new Producto("Gaseosas", 150, 42)

let productoCompra = prompt("Escriba que producto quisiera comprar: \n1 - Hamburguesas $180 c/u \n2 - Panchos $120 c/u \n3 - Gaseosas $150 c/u \n4 - FIN");
let precioSubtotal = 0;

//Todavia me falta conseguir que la consola te vuelva a pedir que ingreses la cantidad de productos que queres por 2da o 3era vez

while(productoCompra.toLowerCase() != "fin"){

    if(productoCompra.toLowerCase() == 'hamburguesas'){
        let cantidadProductoHamburguesas = prompt("Ingrese que cantidad de " + nombreProductoA + " desea comprar por favor.")

        if(cantidadProductoHamburguesas <= stockProductoA && cantidadProductoHamburguesas >= 0){
            precioSubtotal = precioSubtotal + (cantidadProductoHamburguesas * precioProductoA)
            alert("Seria un total de " + precioSubtotal + " pesos.")
        }
        else{
            alert("Disculpe, pero actualmente tenemos " + stockProductoA + " unidades de este producto.")
        }
    }
    else if(productoCompra.toLowerCase() == 'panchos'){
        let cantidadProductoPanchos = prompt("Ingrese que cantidad de " + nombreProductoB + " desea comprar por favor.")

        if(cantidadProductoPanchos <= stockProductoB && cantidadProductoPanchos >= 0){
            precioSubtotal = precioSubtotal + (cantidadProductoPanchos * precioProductoB)
            alert("Seria un total de " + precioSubtotal + " pesos.")
        }
        else{
            alert("Disculpe, pero actualmente tenemos " + stockProductoB + " unidades de este producto.")
        }
    }
    else if(productoCompra.toLowerCase() == 'gaseosa'){
        let cantidadProductoGaseosas = prompt("Ingrese que cantidad de " + nombreProductoC + " desea comprar por favor.")

        if(cantidadProductoGaseosas <= stockProductoC && cantidadProductoGaseosas >= 0){
            precioSubtotal = precioSubtotal + (cantidadProductoGaseosas * precioProductoC)
        alert("Seria un total de " + precioSubtotal + " pesos.")
        }
        else{
            alert("Disculpe, pero actualmente tenemos " + stockProductoC + " unidades de este producto.")
        }
    }
    else{
        alert("Disculpe, pero no tenemos ese producto a la venta.")
    }

    productoCompra = prompt("Escriba que producto quisiera comprar: \n1 - Hamburguesas $180 c/u \n2 - Panchos $120 c/u \n3 - Gaseosas $150 c/u \n4 - FIN");
}

const suma = (a,b) => a + b;
const iva = x => x * 0.21;

//Todavia tengo que aprender a como declarar bien el iva, aunque sea funcional no se hacerlo por mi propia cuenta :(

if(precioSubtotal != 0){
    let precioTotal = suma(precioSubtotal, iva(precioSubtotal))
    alert("Este seria el total de su compra: " + precioTotal)
}