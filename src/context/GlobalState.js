import { createContext, useState } from "react";

const ColorPickerContext = createContext()

export const ColorPickerProvider = ({children}) => {
    const [pickColor, setPickColor] = useState('')

    return (
        <ColorPickerContext.Provider
            value={{pickColor, setPickColor}}
        >{children}</ColorPickerContext.Provider>
    )
}

export default ColorPickerContext