import express, {Request, Response, Router} from 'express'
import {addProductToCart, getCartProducts} from '../controllers/cartControllers'


/**
 * Rutas del microservicio carrito de compras
 * @autor Milena Prieto
 * @descripcion 
 * 
 * Redireccionar las peticiones q haga el usuario a 
 * a mi backend
 * verifico quien tiene q procesar esa solicitud 
 * en el Backent
 * 
 */
const myRouter:Router= Router()

myRouter.get('/', getCartProducts) //devuelva ese contenido
myRouter.post('/', addProductToCart) //si mandan algo la guarde

export default myRouter