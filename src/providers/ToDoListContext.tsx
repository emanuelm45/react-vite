import React, { useState } from "react";

interface TTodoList {
  list: string[]
  setList: React.Dispatch<React.SetStateAction<string[]>>
}

export const ToDoListContext = React.createContext({} as TTodoList)

export default function TodoListContextProvider(props: React.PropsWithChildren) {
  const [list, setList] = useState(() => {
    const localData = localStorage.getItem("localData")
    if (localData)
      return JSON.parse(localData) as string[]
    return ["Dunha", "Dirce"]
  })

  return (
    <ToDoListContext.Provider value={{list, setList}}>
      {props.children}
    </ToDoListContext.Provider>
  )
}