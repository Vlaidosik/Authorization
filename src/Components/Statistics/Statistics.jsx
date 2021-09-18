import React from 'react'
import { useSelector } from "react-redux";
import './statistics.scss'

export const Statistics = () => {
    const testsContainer = useSelector(state => state.statistics)

    if( testsContainer === false){
        return null
    }
    else {
        return (
            <div className='main_statistics'>
                <div className='stats'>
                    <table>
                        <tbody>
                        <tr>
                            <td>№ сессии</td>
                            <td>Время последней активности</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2021-09-18 10:00:00</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>2021-09-17 24:23:03</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>2021-09-17 21:23:40</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>2021-09-17 12:02:00</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>2021-09-16 23:55:30</td>
                        </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        )
    }
}