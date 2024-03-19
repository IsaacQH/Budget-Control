
//Componente que se encarga de tener el bill completo

//Import de libreria swipe
import {LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions} from "react-swipeable-list"
import "react-swipeable-list/dist/styles.css"


//importando íconos
import IconSaves from "../img/icono_ahorro.svg"  //icono ahorro
import IconHome from "../img/icono_casa.svg"  //icono ahorro
import IconFood from "../img/icono_comida.svg"  //icono ahorro
import IconPerson from "../img/icono_ocio.svg"  //icono ahorro
import IconHealth from "../img/icono_salud.svg"  //icono ahorro
import IconSub from "../img/icono_suscripciones.svg"  //icono ahorro
import IconServices from "../img/icono_gastos.svg"  //icono ahorro



export const Bill = ({gasto, setGastoEdit, deleteGasto}) => {

    const categoryDiccionary = {   //De esta forma podemos colocar el objeto directamente en el HTML, solo llamando a category.VALUE Mejor que muchos ifs
        saving : IconSaves ,
        food : IconFood,
        home : IconHome, 
        personal : IconPerson,
        health : IconHealth,
        subscriptions : IconSub,
        services : IconServices,
    }

    const {name, amount, category, date, id} = gasto   //Destructuración de objeto

    const format = (value) => {        //Convierte el formato de el dinero en $x,xxx.xx
        return value.toLocaleString('en-US', {
            style: 'currency',
            currency:'USD'
        })
    }

    const leadingActions = () => (  //Esto deslizara a editar - NOTAR QUE ES () PARA HACER RETURN
        <LeadingActions>
            <SwipeAction onClick={() => setGastoEdit(gasto)}>
                Edit
            </SwipeAction>
        </LeadingActions>
    ) //Tenemos leadingActions y el swipe es lo que funciona

    const trailingActions = () => (    //Esto deslizara a borrar
        <TrailingActions>
            <SwipeAction onClick={() => deleteGasto(id)} destructive={true}>
                Delete
            </SwipeAction>
        </TrailingActions>
    ) //Tenemos leadingActions y el swipe es lo que funciona

    

  return (
    <SwipeableList>
        <SwipeableListItem
            leadingActions = {leadingActions() /*maneja el swipe de izq-derecha */}
            trailingActions = {trailingActions() /*maneja el swipe de derecha-izq */}
        >
            <div className="gasto sombra">
                <div className="contenido-gasto">
                    <img 
                        src = {categoryDiccionary[category]  /*category = gastos.category*/}
                        alt = "Icon Bill"
                    />
                    <div className="descripcion-gasto">
                        <p className="categoria">{category}</p>
                        <p className="nombre-gasto">{name}</p>
                        <p className="fecha-gasto">
                            Created on {''}
                            <span>{date}</span>
                        </p>
                    </div>
                    <p className="cantidad-gasto">{format(amount)}</p>
                </div>
            </div>
        </SwipeableListItem>
    </SwipeableList>
  )
}
