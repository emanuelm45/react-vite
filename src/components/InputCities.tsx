import React, { useEffect, useLayoutEffect, useState } from "react"
import { FormAdressContext } from "../providers/FormAdressContext"

export default function () {
    const [cities, setCities] = useState([])
    const {uf, setUf, city, setCity} = React.useContext(FormAdressContext)        

    async function getCities() {
        if (!uf) return
        const requestCitites = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
        const cities = await requestCitites.json()
        setCities(cities)
    }

    useEffect(() => {
        getCities()
    }, [uf])

    const selectCity = (ev: React.ChangeEvent<HTMLSelectElement>) => {
        setCity(ev.currentTarget.value)
    }

    return <>
        {!uf
            ? <div className="input-container">
                <label htmlFor="">Selecione sua cidade</label>
                <select>
                    <option></option>
                </select>
            </div>
            : <div className="input-container">
                <label htmlFor="select-cities">Selecione sua cidade</label>
                <select id="select-cities" onChange={selectCity} value={city}>
                    {cities.map(({ nome }, idx) => <option key={idx} value={nome}>{nome}</option>)}
                </select>
            </div>
        }
    </>
}