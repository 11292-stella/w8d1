import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import ButtonComponent from "./ButtonComponent"
import ImageComponent from "./ImageComponent"

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <ButtonComponent nomeButton="primoBottone" />
      <ButtonComponent nomeButton="secondoBottone" />
      <ImageComponent nomeImmagine="https://placecats.com/300/200" />
      <ImageComponent nomeImmagine="https://placecats.com/100/200" />
    </>
  )
}

export default App
