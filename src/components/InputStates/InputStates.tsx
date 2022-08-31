import React, { useEffect, useState } from "react"

type props = {
    setUf: React.Dispatch<React.SetStateAction<string>>
}

export default function ({ setUf }: props) {
    const [states, setStates] = useState([])

    async function getStates() {
        const requestStates = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        const states = await requestStates.json()
        setStates(states)
    }

    getStates()

    const [listed, setListed] = useState(false)

    const selectState = (ev: React.ChangeEvent<HTMLSelectElement>) => {
        setUf(ev.currentTarget.value)
        setListed(true)
    }

    return <>
        <div className="input-container">
            <label htmlFor="select-states">Selecione seu estado</label>
            <select onChange={selectState} id="select-states">
                {listed ? "" : <option>Selecione...</option>}
                {states.map(({ sigla, nome }, idx) => <option key={idx} value={sigla}>{sigla} - {nome}</option>)}
            </select>
        </div>
    </>
}