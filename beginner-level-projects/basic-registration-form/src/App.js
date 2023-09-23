import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"

function App() {
  const [values, setValues] = useState({first_name: "", last_name: "", email: ""})
  const [submitted, setSubmitted] = useState(false)
  const [valid, setValid] = useState(false)

  const handleFirstName = (e) => {
    setValues({...values, first_name: e.target.value})
  }
  const handleLastName = (e) => {
    setValues({...values, last_name: e.target.value})
  }
  const handleEmail = (e) => {
    setValues({...values, email: e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(values.first_name && values.last_name && values.email){
      setValid(true)
    }
    setSubmitted(true);
  }

  return (
    <form className='d-flex flex-column w-100 h-50 p-2 bg-light' onSubmit={handleSubmit}>
      {submitted && valid ? <div className='bg-success mt-4 rounded p-2 text-light'>Registration successful!</div> : null}
      <div className='form-group mt-4'>
        <input
          type='text'
          placeholder='first name'
          value={values.first_name}
          className='form-control'
          onChange={handleFirstName}/>
        {submitted && !values.first_name ? <small className="form-text text-danger fort-weight-bold">first name is required.</small> : null }
      </div>
      <div className='form-group mt-4'>
        <input 
          type='text' 
          placeholder='last name' 
          value={values.last_name} 
          className='form-control'
          onChange={handleLastName}/>
          { submitted && !values.last_name ? <small className="form-text text-danger fort-weight-bold">last name is required.</small> : null }
      </div>
      <div className='form-group mt-4'>
        <input 
          type='text' 
          placeholder='email' 
          value={values.email} 
          className='form-control'
          onChange={handleEmail}/>
          { submitted && !values.email ? <small className="form-text text-danger fort-weight-bold">email is required.</small> : null }
      </div>
      <div className='form-group my-4'>
        <button type='submit' className='btn btn-danger w-100'>submit</button>
      </div>
    </form>
  );
}

export default App;