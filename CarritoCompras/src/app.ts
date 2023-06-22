 /**
  * Archivo principal del programa
  * 
  */

 //creamos un conjunto de objetos donde exportamos como un modulo
import express, { Application, NextFunction, Request, Response } from 'express'
import cartRoutes from './routes/CartRoutes'

const app:Application = express()
app.use(express.json())//procese un json cuando se haga las peticiones

/**
 * Agregar al stack un conjunto de rutas
 */

app.use('/', cartRoutes)


/**
 * Mennsaje respuesta cuando la ruta no existe
 */

app.use(
    //peticion y respuesta del cliente
    (req:Request, res:Response, next:NextFunction )=>{
        res.status(404)
        res.json({message:"Upss. El recurso no existe"})
    }
)


/**
 * 
 * Respuesta cuando existe un error del servidor
 */

app.use(
    (error:Error, req:Request, res:Response, next:NextFunction )=>{
        res.status(500)
        console.log(error);
        res.json({message:"Houston tenemos un problema"})
    }
)

export default app
