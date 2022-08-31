import React, { useState } from "react";
import { ToDoListContext } from "../../providers/ToDoListContext";
import './Fibonacci.css'

export default function() {
    let [result, setResult] = useState([] as number[])
    const fibonacciConsole = (times:number) => {
        let [prev, curr, sum] = [0, 1, 0]  
        let numbers = [0, 1]

        if (times == 1) return setResult([0])
        
        times -= 2
        
        while (times--) {
            sum = prev + curr
            prev = curr
            curr = sum
            numbers.push(sum)
            // setResult([result.push(sum)])
        }

        // setResult([0, 1, ...result])
        setResult([0, 1, ...numbers])
                        
        return result
    }
    
    const updateResult: React.KeyboardEventHandler<HTMLInputElement> = ev => {
        if(ev.currentTarget.value == "") return 
        if(!["Enter", "NumpadEnter"].includes(ev.code)) return
        ev.preventDefault()
        fibonacciConsole(ev.currentTarget.valueAsNumber)
        ev.currentTarget.value = ""
    }
    
        return <>
            <div className="container">
                <div className="input-box">
                    <label htmlFor="input-fibonacci">Insira o tamanho da sequência Fibonacci</label>
                    <input onKeyDown={ev => updateResult(ev)} type="text" id="input-fibonacci" placeholder="Ex: 10"/>
                </div>
                <ul className="list-fibonacci">
                {
                    result.map((result, idx) => 
                        <li key={idx}>
                            {result}
                        </li>
                    )
                }
                </ul>
            </div>

    </>
}