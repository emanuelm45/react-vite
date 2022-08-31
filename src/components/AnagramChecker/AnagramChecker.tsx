import React, { MouseEventHandler, useState } from "react";
import './AnagramChecker.css'

export default function () {
    let [examplePhrase, setExamplePhrase] = useState("")
    let [comparedPhrase, setComparedPhrase] = useState("")

    const checkAnagram = () => {
        if(examplePhrase == "" || comparedPhrase == "") {
            return "Insira duas palavras"
        }

        examplePhrase = examplePhrase.replace(/\s*/igm, "")
        comparedPhrase = comparedPhrase.replace(/\s*/igm, "")

        if(examplePhrase.length != comparedPhrase.length)
            return "A quantidade de letras é diferente, não pode ser um anagrama"

        examplePhrase = examplePhrase.toLowerCase().split('').sort().join('')
        comparedPhrase = comparedPhrase.toLowerCase().split('').sort().join('')

        return comparedPhrase == examplePhrase
            ? "É um anagrama"
            : "Não é um anagrama"
    }
    
    return <>
        <div className="container">
            <div className="input-container">
                <input id="input-phrase-example" placeholder="Insira a primeira palavra" type="text" onKeyUp={(ev) => setExamplePhrase(ev.currentTarget.value)} />
                <input id="input-phrase-compared" placeholder="Insira a segunda palavra" type="text" onKeyUp={(ev) => setComparedPhrase(ev.currentTarget.value)} />
            </div>

                <span className="comparation-result">
                    {checkAnagram()}
                </span>
        </div>
    </>
}