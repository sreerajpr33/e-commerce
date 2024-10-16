import {Outlet} from "react-router-dom"
function Footer(){
    return(
        <>
        <footer class=" bg-secondary">
            THE END!
        </footer>
        <Outlet/>
        </>
    )
}
export default Footer