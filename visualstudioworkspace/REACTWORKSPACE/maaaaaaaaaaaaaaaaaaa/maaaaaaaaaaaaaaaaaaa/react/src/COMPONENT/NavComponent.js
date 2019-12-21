import React from 'react'
import { Link } from 'react-router-dom';
function NavComponent() {
    return (
        <div>
            <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link " href=''><Link to='/Add' class="nav-link navbar-dark">Add</Link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href='' ><Link to='/Listofstudent' class="nav-link navbar-dark">ListOfData</Link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href='' ><Link to='/Signup' class="nav-link navbar-dark">SIGNUP</Link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href='' ><Link to='/Login' class="nav-link navbar-dark">LOGIN</Link></a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavComponent
