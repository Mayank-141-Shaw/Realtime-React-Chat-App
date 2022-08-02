import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import loader from '../assets/loader.gif'
import styled from 'styled-components';
import axios from 'axios';

import { Buffer } from 'buffer'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { setAvatarRoute } from '../utils/APIRoutes';

export default function SetAvatar() {

    const api = "https://api.multiavatar.com/45678945";
    const navigate = useNavigate();

    const [avatars, setAvatars] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedAvatar, setSelectedAvatar] = useState(undefined);

    // toast options
    const toastOptions = {
        position: 'bottom-right',
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark'
    }
    
    const setProfilePicture = async () => {}

    useEffect( ()=>{
        const data = [];
        for(let i=0; i<4; i++){
            // gets a different random image out of 1 - 1000 images id
            // we need 4 of them so looping 4 times
            const image = await axios.get(`${api}/${Math.round(Math.random() * 1000)}`);

            const buffer = new Buffer(image.data);
            data.push(buffer.toString("base64"));
        }
        setAvatars(data)
        setIsLoading(false)
    }, [])

    return (
        <>
            <Container>
                <div className="title-container">
                    <h1>Pick an avatar as your profile picture</h1>
                </div>

                <div className='avatars'>
                    {

                    }
                </div>
            </Container>
            <ToastContainer />
        </>
    )
}

const Container = styled.div``;