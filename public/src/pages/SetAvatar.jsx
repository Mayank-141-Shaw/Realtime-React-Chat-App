import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import loader from '../assets/loader.gif'
import styled from 'styled-components';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { setAvatarRoute } from '../utils/APIRoutes';

export default function SetAvatar() {

    const api = "https://api.multiavatar.com/45678945";
    const navigate = useNavigate();

    return (
        <div>SetAvatar</div>
    )
}

