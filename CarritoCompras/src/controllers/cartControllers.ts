/**
 * Su tarea es controlar
 * todo el trabajo q se hace en el backend
 * logica de negocio para el microservicio carrito de compras
  */

import { PrismaClient, Prisma } from '@prisma/client'
import { Request, Response } from "express"


//Creo un nuevo objeto de la clase prosma
const prisma = new PrismaClient()

export const getCartProducts = async(req:Request, res:Response) => {
    //To do retornar el listado de productos del carrito //obtengo los elemenot //To do: Filtrar los elementos
        try{//recomendable q siempre q se este consultando a una bd q tok esperar colocar el try-catch
            //para q no se afecte la aplicación y se pueda gestionar
            const cartProduct = await prisma.cart.findMany()
            //en la respuesta nos genere un json
            res.json(cartProduct)
        }catch(error){//q no pare el error si no q lo capture
            //Hga esta sección y continue
            console.error("Ocurrio un error", error)
            res.status(503) //codigos de errores http
            res.json({error:'Service Unavailable'})
        }
}

export const addProductToCart= async(req:Request, res:Response) => {
    //To do agregar un producto al carrito //enviar unos elementos
    //desestructure el json q le llega en la petición //Todo Verificar integridad del json
    const{productId, quantity} = req.body
    try{
        const cartProduct = await prisma.cart.create(
            //pasar los datos del registro lo q quiero guardar 
            {
                data:{
                    productId,
                    quantity
                }
            }
        )//voy a devolver el cart product q se acabo de crear
        res.json(cartProduct)
    }catch(error){
        console.error("No se pudo ingresar el producto al carrito", error)
        res.status(503) //codigos de errores http
        res.json({error:'Service Unavailable'})
    }
}

