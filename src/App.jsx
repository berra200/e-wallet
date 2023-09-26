import {Routes, Route} from "react-router-dom"
import Home from './routes/Home'
import New from "./routes/New"

function App() {


  return (
    <>
      <header className="flex flex-col my-2">
        <h1 className="self-center font-medium text-2xl">E-PLÅNBOKEN</h1>
      </header>
      <main className="flex flex-col items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
        </Routes>
      </main>
    </>
  )
}

export default App
