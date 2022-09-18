import React, { useCallback, useState } from "react"
import { FormAdressContext } from "../providers/FormAdressContext"

export default function () {
    const {uf, setUf, setCity, city, street, setStreet} = React.useContext(FormAdressContext)

    const getStreets = async (ev: React.KeyboardEvent<HTMLInputElement>) => {
        const requestStreet = await fetch(`https://viacep.com.br/ws/${uf}/${city}/${ev.currentTarget.value}/json/`)
        const responseStreet = await requestStreet.json()
        setStreet(responseStreet[1])
        // for(let street in streets) {
        //     console.log(street)
        // }
        // setUf(responseStreet.uf)    
        // console.log(responseStreet.localidade)    
    }

    const selectStreet = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setStreet(ev.currentTarget.value)
    }

    return <>
        <div className="input-container">
            <label htmlFor="input-street">Insira sua rua</label>
            <input value={street} onChange={(ev) => selectStreet(ev)} onKeyUp={getStreets} id="input-street" type="text" />
            {/* <select> 
                {streets.map(street => console.log(street))}
            </select> */}
        </div>
    </>
}