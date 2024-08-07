
export const getProductos = async () => {
   const respuesta = await fetch("http://localhost:9292/api/productos");
   const productos = await respuesta.json();
    return productos;
}

export const calcularTotal = (item) =>{
    return item.reduce((acomulador,item) => acomulador + item.cantidad * item.producto.precio ,0);
}
