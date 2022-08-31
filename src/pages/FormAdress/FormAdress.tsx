import { useState } from "react"
import './FormAdress.css'
import InputStates from "../../components/InputStates/InputStates"
import InputCities from "../../components/InputCities/InputCities"
import InputPostalCode from "../../components/InputPostalCode/InputPostalCode"

export default function () {
    const [uf, setUf] = useState("")

    return <>
        <form className="container">
            <InputStates setUf={setUf} />
            <InputCities uf={uf} />

            <span> ou </span>

            <InputPostalCode />
            <button className="btn-send" onClick={(ev) => ev.preventDefault()}>Enviar</button>
        </form>
    </>
}