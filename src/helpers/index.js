
//Función helper para crear ID
export function generateID(){
    const random = Math.random().toString(36).substr(2)
    const date = Date.now().toString(36)

    return random + date
}

//Función helper para generar fecha
export function generateDate(){
    const date = new Date()
    const format = {
        year:'numeric',   //Año de forma numerica
        month: 'long',    //Mes en texto completo
        day:'2-digit'     //día numerico con 2 digitos
    }
                                 //type region,  format
    return date.toLocaleDateString('en-US', format)
}