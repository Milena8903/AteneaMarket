/**
 * Iniciar el servidor 
 * 
 */

import { log } from 'console'
import app from './app'

const puerto=3000

app.listen(
    puerto,
    ()=>{
        console.log(`El servidor está ejecutandose en el puerto ${puerto}`);
        
    }
)