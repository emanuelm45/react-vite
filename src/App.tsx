import './App.css'
import ToDoList from './components/ToDoList/ToDoList'
import Header from './components/Header/Header'
import TodoListContextProvider from './providers/ToDoListContext'
import Fibonacci from './components/Fibonacci/Fibonacci'
import AnagramChecker from './components/AnagramChecker/AnagramChecker'
import FormAdress from './pages/FormAdress/FormAdress'

export default function App() {

  return <>
    <div className='App'>
      {/* <TodoListContextProvider>
        <div className="ToDoList">
          <Header />
          <ToDoList title="Insira um afazer" />
        </div>
        <Fibonacci /> */}
        {/* <AnagramChecker /> */}
      {/* </TodoListContextProvider> */}
      <FormAdress />
    </div>
  </>
}


