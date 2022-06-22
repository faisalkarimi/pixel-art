import './App.css';
import ColorMenu from './components/ColorMenu';
import PixelGrid from './components/PixelGrid';
import { ColorPickerProvider } from './context/GlobalState';

function App() {
  return (
    <ColorPickerProvider>
      <div className='container'>
        <ColorMenu />
        <PixelGrid />
      </div>
    </ColorPickerProvider>
  );
}

export default App;
