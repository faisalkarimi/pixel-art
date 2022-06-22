import { useContext } from "react"
import ColorPickerContext from "../context/GlobalState"
import Pixel from "./Pixel"

const PixelGrid = () => {
    const {pickColor} = useContext(ColorPickerContext)
    const handleClick = (e) => {
        e.target.style.backgroundColor = pickColor
    }
  return (
    <div className="pixel-grid" onClick={handleClick}>
        { Array(70).fill().map((_, index) => <Pixel key={index} />) }
    </div>
  )
}

export default PixelGrid