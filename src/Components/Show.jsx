import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import abc from './style.module.css'

let Show = () => {
    let [data, changeData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3000/Vamsi`)
            .then((e) => {
                changeData(e.data)
            })
    })

    let del = (e) => {
        axios.delete(`http://localhost:3000/Vamsi/${e}`)
        window.location.assign("/b")
    }
    return (
        <div className={abc.disdiv}>
            {
                data.map((e) => {
                    return (
                        <div className={abc.disdiv1}>
                            <table>
                                <tr>
                                    <td>id :</td>
                                    <td>{e.id} </td>
                                </tr>
                                <tr>
                                    <td>Name :</td>
                                    <td>{e.name} </td>
                                </tr>
                                <tr>
                                    <td>Maths :</td>
                                    <td>{e.maths} </td>
                                </tr>
                                <tr>
                                    <td>Phy :</td>
                                    <td>{e.phy} </td>
                                </tr>
                                <tr>
                                    <td>Che :</td>
                                    <td>{e.che} </td>
                                </tr>
                                <div className={abc.divbtn}>
                                    <Link className={abc.edit} to={`/c/${e.id}`} >Edit</Link>
                                    <button className={abc.xx} onClick={() => { del(e.id) }}>Delete</button>
                                </div>
                            </table>

                        </div>
                    )
                })
            }
        </div>
    )
}
export default Show