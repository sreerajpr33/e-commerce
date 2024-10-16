import {Link,Outlet} from "react-router-dom"
function Navbar(){
    return(
        <>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link to="/" className="text-black ms-3">Home</Link>
        </li>
        <li class="nav-item">
        <Link to="/" className="text-black ms-3">about</Link>
        </li>
        <li class="nav-item">
        <Link to="/" className="text-black ms-3">contact</Link>
        </li>
        <li class="nav-item">
        <Link to="/" className="text-black ms-3">products</Link>
        </li>   
      </ul>
    </div>
  </div>
</nav>
        <Outlet/>
        </>
    )
}
export default Navbar