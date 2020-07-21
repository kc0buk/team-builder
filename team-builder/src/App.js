import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid'
import './App.css';

const initialTeamList = [
  {
    id: uuid(),
    name: 'Jeremiah',
    email: 'person@someone.com',
    role: 'React 1 Developer',
  },
]

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data: initialTeamList })
}
const fakeAxiosPost = (url, { name, email, role }) => {
  const newTeamMember = { id: uuid(), name, email, role }
  return Promise.resolve({ status: 200, success: true, data: newTeamMember })
}

function App() {
  const [teamMembers, setTeamMembers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue })
  }

  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
    }

    // Prevent form submission if required fields are blank
    if (!newTeamMember.name) return

    fakeAxiosPost('https://reqres.in/api/users', newTeamMember)
      .then(res => {
        const teamMemberFromAPI = res.data
        setTeamMembers([teamMemberFromAPI, ...teamMembers])
        setFormValues(initialFormValues)
      })

      .catch(err => {
        console.log(`There was an error. The error is ${err}`)
      })
  }

  useEffect(() => {
    fakeAxiosGet('fakeapi.com')
      .then(res => {
        setTeamMembers(res.data)
      })

      .catch(err => {
        console.log(`There was an error. The error is ${err}`)
      })
  }, [])

  return (
    <div className="container">
     
    </div>
  );
}

export default App;
