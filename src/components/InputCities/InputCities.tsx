import { useEffect, useState } from "react"

type props = {
    uf: string
}

export default function ({ uf }: props) {
    const [cities, setCities] = useState([])
    const [loading, setLoading] = useState(true)

    async function getCities() {
        setLoading(true)
        if (!uf) return
        const requestCitites = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
        const cities = await requestCitites.json()
        setLoading(false)
        setCities(cities)
    }

    useEffect(() => {
        getCities()
    }, [uf])

    return <>
        {loading
            ? <span>* aguardando estado</span>
            : <div className="input-container">
                <label htmlFor="select-cities">Selecione sua cidade</label>
                <select name="" id="">
                    {cities.map(({ nome }) => <option value="">{nome}</option>)}
                </select>
            </div>
        }
    </>
}