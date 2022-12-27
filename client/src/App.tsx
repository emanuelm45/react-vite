import "./App.css"
import FormAdress from "./pages/FormAdress"
import FormAdressContextProvider from "./providers/FormAdressContext"

export default function App() {
  return (
    <>
      <div className="App">
        <FormAdressContextProvider>
          <FormAdress />
        </FormAdressContextProvider>
      </div>
    </>
  )
}
