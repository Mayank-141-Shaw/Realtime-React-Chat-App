import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.svg'
import styled from 'styled-components';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { registerRoute } from '../utils/APIRoutes';

function SetAvatar() {
  return (
    <div>SetAvatar</div>
  )
}

export default SetAvatar