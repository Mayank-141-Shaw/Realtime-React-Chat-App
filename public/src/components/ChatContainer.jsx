import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ChatInput from './ChatInput';
import Logout from './Logout';
import axios from 'axios';
import Messages from './Messages';
import { getAllMessageRoute, sendMessageRoute } from '../utils/APIRoutes';

export default function ChatContainer({ currentChat, currentUser }) {

  const [messages, setMessages] = useState([]);

  useEffect( async () => {
    const response = await axios.post( getAllMessageRoute, {
      from: currentUser._id,
      to: currentChat._id,
    } );

    setMessages(response.data);

  }, [currentChat] )

  const handleSendMsg = async (msg) => {
    await axios.post( sendMessageRoute, {
      from: currentUser._id,
      to: currentChat._id,
      message: msg,
    } );

  }

  return (
    <>
      {
        currentChat && (
          <Container>
            <div className="chat-header">
              <div className="user-details">
                <div className="avatar">
                  <img 
                      src={`data:image/svg+xml;base64,${currentChat.avatarImage}`} 
                      alt='avatar'
                  />
                </div>
      
                <div className="username">
                  <h3>{currentChat.username}</h3>
                </div>
              </div>

              <Logout />
            </div>
      
            <div className="chat-messages">
              {
                messages.map( message => {
                  return (
                    <div>
                      <div className={`message ${message.fromSelf ? "sended":"received"}`}>
                        <div className="content">
                          <p>
                            {message.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
      
            <ChatInput handleSendMsg={handleSendMsg} />
          </Container>
        )
      }
    </>
    
  )
}

const Container = styled.div`

  padding-top: 1rem;
  display: grid;
  grid-template-rows: 10% 78% 12%;
  gap: 0.1rem;
  overflow: hidden;
  
  .chat-header{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;

    .user-details{
      display: flex;
      align-items: center;
      gap: 1rem;

      .avatar{
        img{
          height: 3rem;
        }
      }

      .username{
        h3{
          color: white;
        }
      }
    }
  }

  .chat-messages{
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;

    .message{
      display: flex;
      align-items: center;

      .content{
        max-width: 40%;
        overflow-wrap: break-word;
        padding: 1rem;
        font-size: 1.1rem;
        border-radius: 1rem;
        color: #d1d1d1;
      }
    }
  }

  .sended{
    justify-content: flex-end;
    
    .content{
      background-color: #4f04ff21;
    }
  }

  .received{
    justify-content: flex-start;

    .content{
      background-color: #9900ff20;
    }
  }
`;