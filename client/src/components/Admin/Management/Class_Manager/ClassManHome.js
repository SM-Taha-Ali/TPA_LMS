import React, { useState, useEffect, useContext, useRef } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom'
import batchContext from '../../../../context/management/batches/batchContext';
import BatchCard from './BatchCard';
import "../../Stylesheets/batch.css"

const ClassManHome = () => {

    const contextBatch = useContext(batchContext);
    const { batch, getbatch, addbatch, updatebatch, deletebatch } = contextBatch

    useEffect(() => {
        getbatch()
    }, [])

    return (
        <div>
            <div className="d-flex flex-row justify-content-end">
                <div className="input-group mb-3 search_box">
                    <span className="input-group-text background_blue" id="basic-addon1"><i className="fas fa-search"></i></span>
                    <input type="text" className="form-control" placeholder="Search batches..." aria-label="Username" aria-describedby="basic-addon1" />
                </div>
            </div>
            <div className="row g-0 pt-4">
                {batch.map((bat) => {
                    return <BatchCard bat={bat} />
                })}
                <div className="col-xl-3 col-lg-4 col-md-6 py-2 d-flex flex-row justify-content-center">
                    <Link aria-current="page" to="/admin/management/adbatch/classmanage">
                        <div className="add_card">
                            <div className='icon_wrapper'>
                                <i className="fal fa-plus-circle add_icon"></i>
                            </div>
                            <div className='icon_wrapper pt-3'>
                                Add Batch
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ClassManHome