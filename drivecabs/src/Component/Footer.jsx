import {Outlet} from "react-router-dom"
function Footer(){
    return(
        <>
        <footer class=" bg-secondary"style={{textAlign:"center"}}>
            nanni namaskaram!
        </footer>
        <Outlet/>
        </>
    )
}
export default Footer