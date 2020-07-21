import React from 'react'

function TeamMemberForm(props) {
    const { values, update, submit } = props

    const onChange = event => {
        const { name, value } = event.target
        update(name,value)
    }

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    return (
        <form className='' onSubmit={onSubmit}>
            <div className=''>
                <h2>Add Team Member</h2>
                <button disabled={!values.name || !values.email || !values.role}>Submit</button>
            </div>
            <div className=''>
                <label htmlFor='nameInput'>Name:&nbsp;
                    <input 
                        id='nameInput'
                        name='name'
                        type='text'
                        placeholder='Team Member Name'
                        maxLength='50'
                        value={values.name}
                        onChange={onChange}
                    />
                </label>
                <label htmlFor='emailInput'>Email:&nbsp;
                    <input 
                        id='emailInput'
                        name='email'
                        type='email'
                        placeholder='Team Member Email'
                        maxLength='50'
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                <label htmlFor='roleInput'>Role:&nbsp;
                    <select 
                        name='role' 
                        value={values.role} 
                        onChange={onChange}>
                            <option disabled value=''>Select a Role</option>
                            <option value='unitOneDev'>Unit 1 Developer</option>
                            <option value='reactOneDev'>React 1 Developer</option>
                            <option value='reactTwoDev'>React 2 Developer</option>
                            <option value='reactThreeDev'>React 3 Developer</option>
                            <option value='backendDev'>Backend Developer</option>
                    </select>
                </label>
            </div>

        </form>
    )
}

export default TeamMemberForm