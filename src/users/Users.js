import React, { useState } from 'react'

const Users = () => {
    const [name, setName] = useState("")
    function toggleName() {
        name ? setName("") : setName("Lalit")
    }
    return (
        <>
            <div>Hello {name == "" ? "User" : name} </div>
            <button className='btn btn-primary' onClick={() => { toggleName() }}>Click Me</button>
        </>
    )
}

export default Users