import React from 'react'
import "./style.css"
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

function Footer() {
    return (
        <div className='footer'>
            <i>Edited by YUNUS EMRE MERMER</i>
            <div className='buttons'>
                <a href='https://www.linkedin.com/in/yunusemremermer/'>
                    <button> <BsLinkedin/> Linkedin</button>
                </a>
                <a href='https://github.com/YUNUSEMREMERMER'>
                    <button> <BsGithub /> Github</button>
                </a>
                
                
            </div>

        </div>
    )
}

export default Footer