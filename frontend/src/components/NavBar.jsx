import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FcCloseUpMode } from 'react-icons/fc'
import { firebaseContext } from '../hooks/firebaseContext'
import { CartWidget } from './cart/CartWidget'

export const NavBar = () => {
    const { productsCart } = useContext(firebaseContext)
    return (
        <nav className=" navbar navbar-expand-lg mb-4" >
            <Link to='/' className='fs-3 ubuntu navbar-brand'>fire<span className='text-primary'>base</span></Link>
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" /> */}
            <div className=" collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className=" navbar-nav fs-5">
                    <NavLink to='/category/Romance' className="nav-link" >Romance</NavLink>
                    <NavLink to='/category/Drama' className="nav-link" >Drama</NavLink>
                    <NavLink to='/category/Action' className="nav-link" >Action</NavLink>
                    <NavLink to='/category/Comedy' className="nav-link" >Comedy</NavLink>
                    <NavLink to='/cart' className="nav-link" >{productsCart.length > 0 && <CartWidget/>}</NavLink>
                </div>
            </div>
        </nav>
    )
}
