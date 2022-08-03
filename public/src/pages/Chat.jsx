import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Chat() {

  const navigate = useNavigate();

  const [contacts, setContacts] = useState([])
  const [curUser, setCurUser] = useState(undefined)

  // to get logged user info
  useEffect( () => {
    // if not logged in first login
    if(!localStorage.getItem('chat-app-user')){
        navigate("/login");
    }
  })

  // to get list of all contacts
  useEffect( async () => {

  }, [] )

  return (
    <Container>
      <div className="container">

      </div>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;

  .container{
    height: 85vh;
    width: 85vw;
    background-color; #00000076;
    display: grid;
    grid-template-columns: 25% 75%;

    @media screen and (min-width: 720px) and (max-width: 1080px){
      grid-template-columns: 35% 65%;
    }
  }
`;

export default Chat