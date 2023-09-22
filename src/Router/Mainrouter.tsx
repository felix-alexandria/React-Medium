import {createBrowserRouter} from "react-router-dom"
import Layout from "../Static/Layout"
import HomeScreen from "../Pages/HomeScreen"

export const mainrouter = createBrowserRouter ([
    {
        path: "/",
        element: <Layout/>,
        children:[
            {
                index: true,
                element: <HomeScreen/>
            }
        ]
    }
])