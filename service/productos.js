import config from '../config.js'

import ProductoModel from '../model/productos.js'
//import ProductoModelMongoDB from '../model/productosMongoDB.js' // para implementar una sóla persistencia

const model = ProductoModel.get(config.TIPO_DE_PERSISTENCIA_PRODUCTOS)
//const model = new ProductoModelMongoDB() // para implementar una sóla persistencia

const obtenerProducto = async id => {
    let producto = await model.readProducto(id)
    return producto
}

const obtenerProductos = async () => {
    let productos = await model.readProductos()
    return productos
}

const guardarProducto = async producto => {
    let productoGuardado = await model.createProducto(producto)
    return productoGuardado
}

const actualizarProducto = async (id, producto) => {
    let productoActualizado = await model.updateProducto(id,producto)
    return productoActualizado
}

const borrarProducto = async id => {
    let productoEliminado = await model.deleteProducto(id)
    return productoEliminado
}

export default {
    obtenerProducto,
    obtenerProductos,
    guardarProducto,
    actualizarProducto,
    borrarProducto
}