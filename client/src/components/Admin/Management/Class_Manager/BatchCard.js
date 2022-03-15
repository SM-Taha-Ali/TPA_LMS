import React, { useState, useEffect, useContext, useRef } from 'react';
import { Link } from 'react-router-dom'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import "../../Stylesheets/batch.css"

const BatchCard = (props) => {

    const { bat } = props

    return (
        <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12 py-2 d-flex flex-row justify-content-center'>
            <Link
                to='/admin/management/adbatch/batchdesc'
                state={{ batch: bat }}
            >
                <div className="batch_card position-relative">
                    <img src="/images/batch_banner.png" alt="" width="100%" />
                    <div className="profile_card_body text-center pt-3">
                        <span className='card_info_block my-2 d-block fs-3'>{bat.group}</span>
                        <span className='card_info_block_2 my-2 d-block'>
                            <span>{bat.class} -</span>
                            {bat.subgroup}
                            <span>- {bat.section}</span>
                        </span>                  
                    </div>
                    <div class="overlay">
                        <RemoveRedEyeIcon className='eye_icon'></RemoveRedEyeIcon>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default BatchCard