import React, { useState } from "react";

interface TFOrmAdress {
  uf: string,
  setUf: React.Dispatch<React.SetStateAction<string>>,
  city: string,
  setCity: React.Dispatch<React.SetStateAction<string>>,
  postalCode: string,
  setPostalCode: React.Dispatch<React.SetStateAction<string>>,
  street: string,
  setStreet: React.Dispatch<React.SetStateAction<string>>
}

export const FormAdressContext = React.createContext({} as TFOrmAdress)

export default function FormAdressContextProvider(props: React.PropsWithChildren) {

  const [uf, setUf] = useState("")
  const [city, setCity] = useState("")
  const [street, setStreet] = useState("")

  const [postalCode, setPostalCode] = useState("")

  return (
    <FormAdressContext.Provider value={
      { uf, setUf, city, setCity, postalCode, setPostalCode, street, setStreet }}>
      {props.children}
    </FormAdressContext.Provider>
  )
}