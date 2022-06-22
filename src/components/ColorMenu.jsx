import { useContext } from "react"
import ColorPickerContext from "../context/GlobalState"
import Pixel from "./Pixel"

const ColorMenu = () => {
    const colorMenu = [
        "#CD5C5C",
        "#FFC0CB",
        "#FFA07A",
        "#FFD700",
        "#DDA0DD",
        "#ADFF2F",
        "#008080"
    ]
    const {setPickColor} = useContext(ColorPickerContext)
    const handleClick = (e) => {
        setPickColor(e.target.style.backgroundColor)
    }
  return (
    <div className="color-menu" onClick={handleClick}>
        { colorMenu.map((color) => {
            return <Pixel key={color} 
            bgColor={color}/>
        }) }
    </div>
  )
}

export default ColorMenu