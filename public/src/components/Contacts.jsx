import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.svg'

function Contacts({contacts, currentUser}) {
  
    const [currentUserName, setCurrentUserName] = useState(currentUser)

    useEffect( ()=>{}, [currentUser] )
  
    return (
    <div>Contacts</div>
  )
}

export default Contacts