import React from 'react'
import searchStyle from '../../styles/search/search.module.scss'

export const Search = () => {

    return (
        <form className='d-flex justify-content-center gap-4 mb-5'>
            <input 
            className={searchStyle.inputSearch}
            placeholder='Search category' 
            type="text"
            />
            <button className={`${searchStyle.btn} btn btn-primary fs-5`}> Search</button>
        </form>
    )
}
