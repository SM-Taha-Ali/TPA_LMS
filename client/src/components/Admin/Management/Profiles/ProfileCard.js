import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import "../../Stylesheets/Profile.css"

const ProfileCard = (props) => {

    const { user } = props

    return (
        <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12 py-3 px-4 d-flex flex-row justify-content-center '>
            <Link
                to='/admin/management/adprofile/profiledescstd'
                state={{ user: user }}>
                <div className="profile_card shadow position-relative">
                    <div className="profile_img_container text-center">
                        <img src='/images/student_avatar.png' alt="" className="profile_img" />
                    </div>
                    <div className="profile_card_body text-center">
                        <h5 className='text-center'>{user.name}</h5>
                        Science <br />
                        XI - PRE ENG - A
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