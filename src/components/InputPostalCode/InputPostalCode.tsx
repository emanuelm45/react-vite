import React, { useState } from "react"

export default function () {
    const [postalCode, setPostalCode] = useState("")

    const updatePostalCode = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if (ev.currentTarget.value.length === 5) 
            ev.currentTarget.value == "-"
        // if (ev.currentTarget.value.length === 8) {
        //     setPostalCode(ev.currentTarget.value)
        //     getPostalCode()
        // }
    }

    async function getPostalCode() {
        const requestCode = await fetch(`viacep.com.br/ws/88301080/json/`)
        const code = await requestCode.json()
        console.log(code)
    }

    return <>

        <div className="input-container">
            <label htmlFor="input-code">Insira seu CEP</label>
            <input maxLength={8} onKeyUp={updatePostalCode} type="text" />
        </div>

        <span style={{ color: "white" }}>
            {postalCode}
        </span>
    </>
}