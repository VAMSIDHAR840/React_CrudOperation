import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import abc from './style.module.css'

let Student = () => {
  let [name, changeName] = useState("")
  let [maths, changeMaths] = useState("")
  let [phy, changePhy] = useState("")
  let [che, changeChe] = useState("")

  let nameChange = (e) => { changeName(e.target.value) }
  let mathsChange = (e) => { changeMaths(e.target.value) }
  let phyChange = (e) => { changePhy(e.target.value) }
  let cheChange = (e) => { changeChe(e.target.value) }
  let navi = useNavigate()

  let click = () => {
    let data = { name, maths, phy, che };
    axios.post("http://localhost:3000/Vamsi", data)
      .then(() => {
        console.log("inserted");
      })
    navi("/b")
  }

  return (
    <div className={abc.studiv}>


      <form action="">
        <table>
          <tr>
            <td>
              Name :
            </td>
            <td>
              <input type="text" name="" id="" value={name} onChange={nameChange} /><br />
            </td>
          </tr>
          <tr>
            <td>
              Maths :
            </td>
            <td>
              <input type="number" name="" id="" value={maths} onChange={mathsChange} /> <br />

            </td>
          </tr>
          <tr>
            <td>
              Chemistry :
            </td>
            <td>
              <input type="number" name="" id="" value={che} onChange={cheChange} /> <br />
            </td>
          </tr>
          <tr>
            <td>
              Physics :
            </td>
            <td>
              <input type="number" name="" id="" value={phy} onChange={phyChange} /> <br />
            </td>
          </tr>
        </table>

      </form>

      <button className={abc.bx} onClick={click}>Submit</button>

    </div>
  )
}
export default Student