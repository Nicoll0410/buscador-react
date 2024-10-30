import { Routes, Route } from "react-router"
import { Inicio } from './Screens/Inicio'
import { Buscador } from './Screens/Buscador'

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/buscador" element={<Buscador/>}/>
        </Routes>
    )
}
