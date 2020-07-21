import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid'
import TeamMemberForm from './components/TeamMemberForm'
import TeamMemberList from './components/TeamMemberList'
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
      email: formValues.email.trim(),
      role: formValues.role,
    }

    // Prevent form submission if required fields are blank
    if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role) return

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
     <TeamMemberForm
        values={formValues}
        update={updateForm}
        submit={submitForm}
     />

      {
        teamMembers.map(person => {
          return (
            <TeamMemberList key={person.id} details={person} />
          )
        })
      }

    </div>
  );
}

export default App;
