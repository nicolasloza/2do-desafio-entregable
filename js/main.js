const productos = [
    {
        id: 1,
        nombre: '2020',
        'img': './images/products/2020.jpg',
        'precio': 1800,
        'cantidad': 1        
    },

    {
        id : 2,
        nombre: 'Vivo de Pastillas: Locura y Realidad',
        'img': './images/products/locura-y-realidad.jpg',
        'precio': 2000,
        'cantidad': 1        
    },

    {
        id : 3,
        nombre: 'Paradojas',
        'img': './images/products/paradojas.jpg',
        'precio': 1300,
        'cantidad': 1        
    },

    {
        id: 4,
        nombre: 'El Barrio en sus Puños',
        'img': './images/products/elbarrio.jpg',
        'precio': 1100,
        'cantidad': 1        
    },

    {
        id: 5,
        nombre: '10 años',
        'img': './images/products/10.jpg',
        'precio': 900,
        'cantidad': 1        
    },

    {
        id: 6,
        nombre: 'Kermesse',
        'img': './images/products/Kermesse.jpg',
        'precio':1000,
        'cantidad': 1        
    },

    {
        id: 7,
        nombre: 'Desafios',
        'img': './images/products/desafios.jpg',
        'precio': 1400,
        'cantidad': 1        
    },

    {
        id: 8,
        nombre: 'Versiones',
        'img': './images/products/versiones.jpg',
        'precio': 2500,
        'cantidad': 1        
    },

    {
        id : 9,
        nombre: 'Crisis',
        'img': './images/products/crisis.jpg',
        'precio': 1200,
        'cantidad': 1        
    },

    {
        id: 10,
        nombre: 'Las Pastillas del Abuelo',
        'img': './images/products/discorojo.jpg',
        'precio': 1200,
        'cantidad': 1        
    },

    {
        id: 11,
        nombre: 'Por Colectora',
        'img': './images/products/por-colectora.jpg',
        'precio': 1700,
        'cantidad': 1        
    },
]

const nombre = prompt('Ingrese su nombre')

// Declaro función saludar
function saludar() {
    alert('Bienvenido, ' + nombre + ' a la tienda OFICIAL de Las Pastillas del Abuielo.')
}
saludar()

let producto = Number(prompt(`Indique el número de CD que desea comprar: \n 1: 2020 \n 2: Locura y realidad \n 3: Paradojas \n 4: El Barrio en sus Puños \n 5: 10 años \n 6: Kermesse \n 7: Desafios \n 8: Versiones \n 9: Crisis \n 10: Las Pastillas del Abuelo \n 11: Por Colectora `))

const resultado = productos.find(prod => {
    return prod.id === producto
})


// Declaro función comprarProducto
function comprarProducto() {

    alert(`Elegiste el CD ${resultado.nombre} para tu compra`) 
      
    while (producto < 1 || producto > 11) {
        producto = Number(prompt(`Indique el número de CD que desea comprar: \n 1: 2020 \n 2: Locura y realidad \n 3: Paradojas \n 4: El Barrio en sus Puños \n 5: 10 años \n 6: Kermesse \n 7: Desafios \n 8: Versiones \n 9: Crisis \n 10: Las Pastillas del Abuelo \n 11: Por Colectora `))
    }

    envioDireccion = prompt('Indique calle, numeración y localidad donde desea recibir el producto seleccionado:');

    envioLocalidad = prompt('Ingrese la localidad que corresponda a la dirección ingresada anterioremente (CABA / GRAN BUENOS AIRES):');

    confirmacion = prompt(`${nombre}, su dirección es: ${envioDireccion}, ${envioLocalidad}. Es correcto? : \n (indique respuesta con númer segun corresponta) \n 1: SI \n 2: NO \n 3: CANCELAR COMPRA`)
}
comprarProducto()
     

function finalizarCompra() {

    if (producto !== resultado) {
        alert(`Elegiste el CD ${resultado.nombre} para tu compra, por un monto final de  $${resultado.precio} + $${envio} de envío. Dentro de las 72hs. habiles te llegará el producto a la siguiente dirección: ${envioDireccion}, ${envioLocalidad}.`)
    }

    alert('GRACIAS POR SU COMPRA, PASTILLERO!');
} 

// Declaro variables
let envio = 300


while (confirmacion !== '') {
    if (confirmacion == '1') {
        finalizarCompra()
        break
    } else if (confirmacion == '2') {
        comprarProducto()
    } else if (confirmacion == '3'){
        alert(`VUELVA PRONTO, ${nombre}!`)
        break   
    }
}

