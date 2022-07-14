const cartIcon = document.querySelector('.fa-shopping-cart')
const wholeCartWindow = document.querySelector('.whole-cart-window')
wholeCartWindow.inWindow = 0
const entradas = document.getElementById('entradas')
const sanguches = document.getElementById('sanguches')
const anticuchos = document.getElementById('anticuchos')
const cocina_criolla = document.getElementById('cocina_criolla')
const cervezas = document.getElementById('cervezas')
const aguas = document.getElementById('aguas')
const gaseosas = document.getElementById('gaseosas')
const vinos = document.getElementById('vinos')
const items = document.getElementById('items')
const footer = document.getElementById('cart-footer')
const templateCard = document.getElementById('template-card').content
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const fragment = document.createDocumentFragment()
let carrito = {}

cartIcon.addEventListener('mouseover', () => {
    if (wholeCartWindow.classList.contains('hide'))
        wholeCartWindow.classList.remove('hide')
})

cartIcon.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (wholeCartWindow.inWindow === 0) {
            wholeCartWindow.classList.add('hide')
        }
    }, 500)

})

wholeCartWindow.addEventListener('mouseover', () => {
    wholeCartWindow.inWindow = 1
})

wholeCartWindow.addEventListener('mouseleave', () => {
    wholeCartWindow.inWindow = 0
    wholeCartWindow.classList.add('hide')
})


document.addEventListener('DOMContentLoaded', () => {
    fetchData()
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        imprimirCarrito()
    }
})

entradas.addEventListener('click', e => {
    addCarrito(e)
})

sanguches.addEventListener('click', e => {
    addCarrito(e)
})

anticuchos.addEventListener('click', e => {
    addCarrito(e)
})

cocina_criolla.addEventListener('click', e => {
    addCarrito(e)
})

cervezas.addEventListener('click', e => {
    addCarrito(e)
})

aguas.addEventListener('click', e => {
    addCarrito(e)
})

gaseosas.addEventListener('click', e => {
    addCarrito(e)
})

vinos.addEventListener('click', e => {
    addCarrito(e)
})

items.addEventListener('click', e => {
    btnAccion(e)
})

const fetchData = async () => {
    try {
        const res = await fetch('../carrito/api.json')
        const data = await res.json()
        // console.log(data)
        imprimirEntradas(data)
        imprimirSanguches(data)
        imprimirAnticuchos(data)
        imprimirCocinaCriolla(data)
        imprimirCervezas(data)
        imprimirAguas(data)
        imprimirGaseosas(data)
        imprimirVinos(data)
    } catch (error) {
        console.log(error)
    }
}


//Imprimir Entradas
const imprimirEntradas = data => {
    data.forEach(producto => {
        if (producto.id <= 10) {
            templateCard.querySelector('h3').textContent = producto.title
            templateCard.querySelector('.precio').textContent = producto.precio
            templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl)
            templateCard.querySelector('button').dataset.id = producto.id
            const clone = templateCard.cloneNode(true)
            fragment.appendChild(clone)
        }
    })
    entradas.appendChild(fragment)
}

//Imprimir Sanguches
const imprimirSanguches = data => {
    data.forEach(producto => {
        if (producto.id > 10 && producto.id <= 13) {
            templateCard.querySelector('h3').textContent = producto.title
            templateCard.querySelector('.precio').textContent = producto.precio
            templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl)
            templateCard.querySelector('button').dataset.id = producto.id
            const clone = templateCard.cloneNode(true)
            fragment.appendChild(clone)
        }
    })
    sanguches.appendChild(fragment)
}

//Imprimir Anticuchos
const imprimirAnticuchos = data => {
    data.forEach(producto => {
        if (producto.id > 13 && producto.id <= 19) {
            templateCard.querySelector('h3').textContent = producto.title
            templateCard.querySelector('.precio').textContent = producto.precio
            templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl)
            templateCard.querySelector('button').dataset.id = producto.id
            const clone = templateCard.cloneNode(true)
            fragment.appendChild(clone)
        }
    })
    anticuchos.appendChild(fragment)
}

//Imprimir Cocina Criolla
const imprimirCocinaCriolla = data => {
    data.forEach(producto => {
        if (producto.id > 19 && producto.id <= 25) {
            templateCard.querySelector('h3').textContent = producto.title
            templateCard.querySelector('.precio').textContent = producto.precio
            templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl)
            templateCard.querySelector('button').dataset.id = producto.id
            const clone = templateCard.cloneNode(true)
            fragment.appendChild(clone)
        }
    })
    cocina_criolla.appendChild(fragment)
}

//Imprimir Cervezas
const imprimirCervezas = data => {
    data.forEach(producto => {
        if (producto.id > 25 && producto.id <= 31) {
            templateCard.querySelector('h3').textContent = producto.title
            templateCard.querySelector('.precio').textContent = producto.precio
            templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl)
            templateCard.querySelector('button').dataset.id = producto.id
            const clone = templateCard.cloneNode(true)
            fragment.appendChild(clone)
        }
    })
    cervezas.appendChild(fragment)
}

//Imprimir Aguas
const imprimirAguas = data => {
    data.forEach(producto => {
        if (producto.id > 31 && producto.id <= 37) {
            templateCard.querySelector('h3').textContent = producto.title
            templateCard.querySelector('.precio').textContent = producto.precio
            templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl)
            templateCard.querySelector('button').dataset.id = producto.id
            const clone = templateCard.cloneNode(true)
            fragment.appendChild(clone)
        }
    })
    aguas.appendChild(fragment)
}

//Imprimir Gaseosas
const imprimirGaseosas = data => {
    data.forEach(producto => {
        if (producto.id > 37 && producto.id <= 43) {
            templateCard.querySelector('h3').textContent = producto.title
            templateCard.querySelector('.precio').textContent = producto.precio
            templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl)
            templateCard.querySelector('button').dataset.id = producto.id
            const clone = templateCard.cloneNode(true)
            fragment.appendChild(clone)
        }
    })
    gaseosas.appendChild(fragment)
}

//Imprimir Vinos
const imprimirVinos = data => {
    data.forEach(producto => {
        if (producto.id > 43 && producto.id <= 50) {
            templateCard.querySelector('h3').textContent = producto.title
            templateCard.querySelector('.precio').textContent = producto.precio
            templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl)
            templateCard.querySelector('button').dataset.id = producto.id
            const clone = templateCard.cloneNode(true)
            fragment.appendChild(clone)
        }
    })
    vinos.appendChild(fragment)
}

//Añadir al Carrito
const addCarrito = e => {
    if (e.target.classList.contains('btn')) {
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = objeto => {
    const producto = {
        id: objeto.querySelector('.btn').dataset.id,
        title: objeto.querySelector('h3').textContent,
        precio: objeto.querySelector('.precio').textContent,
        thumbnailUrl: objeto.querySelector('img').getAttribute("src"),
        cantidad: 1
    }

    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }

    carrito[producto.id] = { ...producto }
    imprimirCarrito()
}

const imprimirCarrito = () => {
    items.innerHTML = ''
    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector('img').setAttribute("src", producto.thumbnailUrl)
        templateCarrito.querySelector('h3').textContent = producto.title
        templateCarrito.querySelector('.quantity').textContent = producto.cantidad
        templateCarrito.querySelector('.add').dataset.id = producto.id
        templateCarrito.querySelector('.delete').dataset.id = producto.id
        templateCarrito.querySelector('.price').textContent = producto.cantidad * producto.precio

        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
    imprimirFooter()

    localStorage.setItem('carrito', JSON.stringify(carrito))
}

const imprimirFooter = () => {
    footer.innerHTML = ''
    if (Object.keys(carrito).length === 0) {
        footer.innerHTML = '¡Carrito Vacío - Comience a Comprar!'
        return
    }

    const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, { cantidad, precio }) => acc + cantidad * precio, 0)

    templateFooter.querySelector('.ncantidad').textContent = nCantidad
    templateFooter.querySelector('.nprecio').textContent = nPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)

    const btnVaciar = document.getElementById('vaciar-carrito')
    btnVaciar.addEventListener('click', () => {
        carrito = {}
        imprimirCarrito()
    })
}

const btnAccion = e => {
    if (e.target.classList.contains('add')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad++
        carrito[e.target.dataset.id] = { ...producto }
        imprimirCarrito()
    }

    if (e.target.classList.contains('delete')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if (producto.cantidad === 0) {
            delete carrito[e.target.dataset.id]
        }
        imprimirCarrito()
    }

    e.stopPropagation()
}