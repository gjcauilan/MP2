import { createBrowserRouter } from "react-router-dom"
import Home from "./views/Home"
import About from "./views/About"

const routes = [
    {
        path: "/",
        element: <Home />    
    },
    {
        path: "/about",
        element: <About />
    }
]

export default routes