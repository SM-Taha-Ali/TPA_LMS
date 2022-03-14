import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import "../../Stylesheets/Profile.css"

const ProfileCard = (props) => {
    const { user } = props
    return (
        <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12 py-3 d-flex flex-row justify-content-center px-4
        '>
            <Link
                to='/admin/management/adprofile/profiledesc'
                state={{ user: user }}
            >
                <div className="profile_card shadow position-relative">
                    <div className="profile_img_container text-center">
                        <img src='/images/profile_avatar.png' alt="" className="profile_img" />
                    </div>
                    <div className="profile_card_body text-center">
                        <h5 className='text-center'>{user.name}</h5>
                        <span className='card_info_block my-2 d-block'>GR No: TSN011</span>
                        <span className='card_info_block_2 my-2 d-block'>
                            <span>XI -</span>
                            PRE ENG
                            <span>- A</span>
                        </span>                  
                    </div>
                    <div class="overlay">
                        <RemoveRedEyeIcon className='eye_icon'></RemoveRedEyeIcon>
                    </div>
                </div>
            </Link>
        </div >
    )
}

export default ProfileCard