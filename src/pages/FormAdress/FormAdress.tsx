import React from 'react'
import './FormAdress.css'
import InputStates from "../../components/InputStates"
import InputCities from "../../components/InputCities"
import InputPostalCode from "../../components/InputPostalCode"
import InputStreet from "../../components/InputStreet"
import FormAdressContextProvider, { FormAdressContext } from "../../providers/FormAdressContext"

export default function () {

    const { district, setDistrict } = React.useContext(FormAdressContext)

    const selectDistrict = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        setDistrict(ev.currentTarget.value)
    }

    return <>
            <form className="container">
                <InputPostalCode />
                <InputStates />
                <InputCities />
                <div className="input-container">
                    <label htmlFor="input-district">Insira seu bairro</label>
                    <input type="text" id="input-district" value={district} onChange={(ev) => selectDistrict(ev)}/>
                </div>
                <InputStreet />
                <button className="btn-send" onClick={(ev) => ev.preventDefault()}>Enviar</button>
            </form>
    </>
}