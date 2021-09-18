import React from 'react'
import { useSelector } from "react-redux";
import Avatar from '../../Photo/avatar.jpg'
import './personalarea.scss'

export const PersonalArea = () => {
    const testComponents = useSelector(state => state.personalArea)

    if(testComponents === false) {
        return null
    }
    else {
        return(
            <div className='personal_container'>
                <div className='header'>
                    <img className='avatar' src={Avatar} alt=""/>
                    <div className='info_peron'>
                        <h2>Расторгуев Влад</h2>
                        <p>Mail: rastorguevvlad67@gmail.com</p>
                        <p>ДД/ММ/ГГ: 02/12/1996</p>

                    </div>
                </div>
            </div>
        )
    }
}