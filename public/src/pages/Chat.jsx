import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { allUsersRoute, host } from '../utils/APIRoutes';
import Contacts from '../components/Contacts';
import ChatContainer from '../components/ChatContainer';
import Welcome from '../components/Welcome';
import { io } from 'socket.io-client'

function Chat() {

  const socket = useRef();

  const navigate = useNavigate();

  const [contacts, setContacts] = useState([])
  const [curUser, setCurUser] = useState(undefined)
  const [currentChat, setCurrentChat] = useState(undefined)
  const [isLoaded, setIsLoaded] = useState(false)

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  }

  // to get logged user info
  useEffect( () => {
    // if not logged in first login
    if(!localStorage.getItem('chat-app-user')){
        navigate("/login");
    }else{
      setCurUser(JSON.parse(localStorage.getItem('chat-app-user')))
      setIsLoaded(true)
    }
  }, [])


  // establishing a connection with the host
  // if current user exists and is logged in
  useEffect( () => {
    if(curUser){
      socket.current = io(host);
      socket.current.emit("add-user", curUser._id);
    }
  }, [curUser] )



  // to get list of all contacts
  useEffect(async () => {
    if(curUser) {
      if(curUser.isAvatarImageSet){
        const data = await axios.get(`${allUsersRoute}/${curUser._id}`);
        setContacts(data.data);
      }else{
        navigate('/setAvatar');
      }
    }
  }, [] )

  return (
    <Container>
      <div className="container">
        <Contacts contacts={contacts} currentUser={curUser} changeChat={handleChatChange}/>
        {
          isLoaded && currentChat === undefined ? 
          <Welcome currentUser={curUser} /> 
          :
          <ChatContainer currentChat={currentChat} currentUser={curUser} socket={socket} />
        }
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