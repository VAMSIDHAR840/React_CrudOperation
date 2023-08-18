import { BrowserRouter, Route, Routes } from "react-router-dom"
import Child from "./Components/Child"
import Student from "./Components/Student"
import Show from "./Components/Show"
import Edit from "./Components/Edit"

let App = () => {
    return (
        <div>
            <BrowserRouter>
                <Child />
                <Routes>
                    <Route element={<Student />} path="/a" />
                    <Route element={<Show />} path="/b" />
                    <Route element={<Edit />} path="/c/:index" />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App