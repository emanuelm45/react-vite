import React, { KeyboardEvent } from "react"
import "../styles/pages/FormAdress.css"
import InputStates from "../components/InputStates"
import InputCities from "../components/InputCities"
import InputPostalCode from "../components/InputPostalCode"
import InputStreet from "../components/InputStreet"
import InputDistrict from "../components/InputDiscrict"
import { FormAdressContext } from "../providers/FormAdressContext"

export default function () {
  return (
    <>
      <form className="container">
        <InputPostalCode />
        <InputStates />
        <InputCities />
        <InputDistrict />
        <InputStreet />
        <button className="btn-send" onClick={(ev) => ev.preventDefault()}>
          Enviar
        </button>
      </form>
    </>
  )
}
