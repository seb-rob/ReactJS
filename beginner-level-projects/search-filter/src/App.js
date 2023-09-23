import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import JSONData from "./MOCK_DATA.json"
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("")

  return (
    <div className="container-fluid bg-dark text-light p-5">
      <div className="d-flex justify-content-center align-items-center w-50 h-100">
        <input type="text" className="form-control" placeholder="Search..." value={search} onChange={(e)=> setSearch(e.target.value)}/>
      </div>
      <table className="table table-dark table-bordered my-3">
        <thead>
          <tr>
            <th className="scope">Id</th>
            <th className="scope">First Name</th>
            <th className="scope">Last Name</th>
            <th className="scope">Email</th>
            <th className="scope">Gender</th>
          </tr>
        </thead>
        <tbody>
          {
            JSONData.filter((val)=> {
              if(search == ""){
                return val
              } 
              else if(
                  val.first_name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || 
                  val.last_name.includes(search.toLocaleLowerCase()) || 
                  val.email.includes(search.toLocaleLowerCase()) ||
                  val.gender.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
                  val.id.toString().includes(search)){
                    return val
                  }
            }).map((val, key) => {
              return(
                <tr id={val.id}>
                  <td>{val.id}</td>
                  <td>{val.first_name}</td>
                  <td>{val.last_name}</td>
                  <td>{val.email}</td>
                  <td>{val.gender}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
