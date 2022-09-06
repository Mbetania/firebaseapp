import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { GrClose, GrMenu } from 'react-icons/gr'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4" >
            <Link to='/' className='fs-3 ubuntu navbar-brand'>fire<span className='text-primary'>base</span></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <i className='fas fa-bars open fw-bold text-dark'></i>
                <i className='fas fa-times close fw-bold text-dark'></i>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav fs-5">
                    <NavLink activeclassname='active' to='/category/vasos' className="nav-link active" >vasos</NavLink>
                    <NavLink to='/category/Cuadros' className="nav-link" >cuadros</NavLink>
                    <NavLink to='/category/clothing' className="nav-link" >clothing</NavLink>
                </div>
            </div>
        </nav>
    )
}
