import { useState } from "react"
import './FormAdress.css'
import InputStates from "../../components/InputStates"
import InputCities from "../../components/InputCities"
import InputPostalCode from "../../components/InputPostalCode"
import InputStreet from "../../components/InputStreet/InputStreet"
import FormAdressContextProvider from "../../providers/FormAdressContext"

export default function () {
    return <>
        <FormAdressContextProvider>
            <form className="container">
                <InputStates />
                <InputCities />
                <InputStreet />
                <InputPostalCode />
                <button className="btn-send" onClick={(ev) => ev.preventDefault()}>Enviar</button>
            </form>
        </FormAdressContextProvider>
    </>
}