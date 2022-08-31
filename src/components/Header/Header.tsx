import { useContext } from "react"
import { ToDoListContext } from "../../providers/ToDoListContext"

export default function () {
  const {list} = useContext(ToDoListContext)

    let numberOfToDo: string = ""

    if(!list.length) {
        numberOfToDo =  "Não há nenhum afazer"
    } else if (list.length == 1) {
        numberOfToDo = "Há 1 afazer"
    } else {
        numberOfToDo = `Há ${list.length} afazeres`
    }

    return <>
        <h1>{numberOfToDo}</h1>
    </>
}