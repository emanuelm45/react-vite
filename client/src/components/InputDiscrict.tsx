import { KeyboardEvent, useContext } from "react"
import { FormAdressContext } from "../providers/FormAdressContext"

export default function () {
  const { district, setDistrict } = useContext(FormAdressContext)

  const selectDistrict = (ev: KeyboardEvent<HTMLInputElement>) => {
    setDistrict(ev.currentTarget.value)
  }
  return (
    <>
      <div className="input-container">
        <label htmlFor="input-district">Bairro</label>
        <input
          type="text"
          id="input-district"
          value={district}
          onKeyUp={(ev) => selectDistrict(ev)}
        />
      </div>
    </>
  )
}
