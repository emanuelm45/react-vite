import React, { useContext, useEffect, useState } from 'react'
import './ToDoList.css'
import { ToDoListContext } from "../../providers/ToDoListContext"

export default function (props: {title: string}) {
    const {list, setList} =  useContext(ToDoListContext)

    const store = () => {
        localStorage.setItem("localData", JSON.stringify(list))
    }

    useEffect(store, [list])

    const addItem: React.KeyboardEventHandler<HTMLInputElement> = ev => {
        // if(ev.code != "Enter" && ev.code != "NumpadEnter") return
        if(!["Enter", "NumpadEnter"].includes(ev.code)) return
        if(ev.currentTarget.value == "") return 
        ev.preventDefault()
        const newList = [...list, ev.currentTarget.value]
        setList(newList)
        ev.currentTarget.value = ""
    }

    const deleteItem = (removeIdx: number) => {
       setList(list.filter((_, idx) => idx != removeIdx))
    }

    return <>
        <div className="container">
            <input id='input-add-to-do' onKeyDown= {ev => addItem(ev)} placeholder={props.title}/>
            <ul className='list-names'>
                {list.map((el, idx) =>
                    <li key={idx}>
                        {el}
                        <button className='button-remove-to-do' onClick={() => deleteItem(idx)}>X</button>
                    </li>
                )}
            </ul>
        </div>
    </>
}