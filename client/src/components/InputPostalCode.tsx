import React, { useState } from "react"
import { FormAdressContext } from "../providers/FormAdressContext"

export default function () {
  const { setUf, setCity, setStreet, setPostalCode, setDistrict } =
    React.useContext(FormAdressContext)
  const [error, setError] = useState(false)

  const updatePostalCode = async (
    ev: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (ev.currentTarget.value.length < 9) return
    setPostalCode(ev.currentTarget.value)
    getAdress(ev.currentTarget.value)
  }

  const getAdress = async (cep: string) => {
    const requestCode = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const responseCode = await requestCode.json()
    if (responseCode.erro) {
      setError(responseCode.erro)
      return
    }

    setError(false)
    setUf(responseCode.uf)
    setCity(responseCode.localidade)
    setStreet(responseCode.logradouro)
    setDistrict(responseCode.bairro)
  }

  const codeMask = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    ev.currentTarget.value = ev.currentTarget.value.replace(/\D/g, "")
    ev.currentTarget.value = ev.currentTarget.value.replace(
      /^(\d{5})(\d{3})/,
      "$1-$2"
    )
  }

  return (
    <>
      <div className="input-container">
        <label htmlFor="input-code">Insira seu CEP</label>
        <input
          type="text"
          placeholder="88888-888"
          maxLength={9}
          onKeyUp={(ev) => {
            codeMask(ev)
            updatePostalCode(ev)
          }}
        />
      </div>
      <span className="error">
        {error ? "Nenhum endereço encontrado" : " "}
      </span>
    </>
  )
}
