import React, { useState, useEffect, useContext, useRef } from 'react';
import subBindContext from '../../../../context/domain/student/subBindContext';
import subjectContext from '../../../../context/domain/student/subjectContext';
import classContext from '../../../../context/domain/student/classContext';
import sectionContext from '../../../../context/domain/student/sectionContext';
import empregContext from '../../../../context/registration/empregContext';
import groupContext from '../../../../context/domain/student/groupContext';
import subgroupContext from '../../../../context/domain/student/subgroupContext';
import batchContext from '../../../../context/management/batches/batchContext';
import ClassManageTr from "./ClassManageTr"
import Select from 'react-select';
import { Link } from 'react-router-dom'
import "../../Stylesheets/batch.css"

const ClassManage = () => {

  const [batchCreate, setbatchCreate] = useState([])

  const [result, setResult] = useState({ batchname: "", start_date: "", end_date: "", fees_input_batch: "" });

  const onChangeResult = (e) => {
    setResult({ ...result, [e.target.name]: e.target.value })
    console.log(result.batchname)
  }

  const context = useContext(subBindContext);
  const { subBind, getsubBind, getsubOnlyBind, addsubBind, updatesubBind, deletesubBind } = context

  useEffect(() => {
    getsubOnlyBind(subBinds.class, subBinds.group, subBinds.subgroup)
  }, [])

  const contextBatch = useContext(batchContext);
  const { batch, getbatch, addbatch, updatebatch, deletebatch } = contextBatch

  const contextEmp = useContext(empregContext)
  const { getSubjectEmployee } = contextEmp

  const [subBinds, setsubBinds] = useState({ subject: "", group: "", subgroup: "", class: "", section: "" })
  const [subJECTS, setsubJECTS] = useState([])

  const ref = useRef(null)

  const contextSubject = useContext(subjectContext);
  const { subject, getsubject } = contextSubject

  useEffect(() => {
    getsubject()
  }, [])

  const contextClass = useContext(classContext);
  const { clas, getclas } = contextClass

  useEffect(() => {
    getclas()
  }, [])

  const contextGroup = useContext(groupContext);
  const { group, getgroup } = contextGroup

  useEffect(() => {
    getgroup()
  }, [])

  const contextSubgroup = useContext(subgroupContext);
  const { subgroup, getsubgroup } = contextSubgroup

  useEffect(() => {
    getsubgroup()
  }, [])

  const contextSection = useContext(sectionContext);
  const { section, getsection } = contextSection

  useEffect(() => {
    getsection()
  }, [])

  const subJects = []
  subject.map((i) => {
    subJects.push({ value: i.value, label: i.label, name: i.name })
  });

  const clAss = []
  clas.map((i) => {
    clAss.push({ value: i.value, label: i.label, name: i.name })
  });

  const gRoup = []
  group.map((i) => {
    gRoup.push({ value: i.value, label: i.label, name: i.name })
  });

  const subgRoup = []
  subgroup.map((i) => {
    subgRoup.push({ value: i.value, label: i.label, name: i.name })
  });

  const secTion = []
  section.map((i) => {
    secTion.push({ value: i.value, label: i.label, name: i.name })
  });

  const onChange = (e) => {
    setsubBinds({ ...subBinds, [e.name]: e.value })
  }

  const createBatch = () => {
    addbatch(result.batchname, batchCreate, [], result.start_date, result.end_date)
  }

  const [done, setdone] = useState(true)

  const findSubBinds = async (e) => {
    e.preventDefault()
    let subs = await getsubOnlyBind(subBinds.class, subBinds.group, subBinds.subgroup)
    setsubJECTS(subs)
  }


  return (
    <div className='position-relative'>
      <div>
        <div className='d-flex flex-row justify-content-between align-items-center pt-5 pb-3' >
          <h1>Add a Batch</h1>
          <div className="text-end back_btn">
            <Link aria-current="page" to="/admin/management/adbatch/classmanhome">
              <button className="btn btn_dark_blue text-white"> <i className="fas fa-arrow-alt-circle-left me-2"></i> Back</button>
            </Link>
          </div>
        </div>
        <hr />
        <form action="">
          <div className="text-center">
            <h4 className='my-5 py-3 px-4 color_heading'>Session Period</h4>
          </div>
          <div className='row mb-3'>
            <div className="col-md-6 py-2 ">
              <label htmlFor="" className="form-label">Start Date</label>
              <input type="date" className="form-control" id="sectio2n" name='start_date' placeholder='' onChange={onChangeResult} />
            </div>
            <div className="col-md-6 py-2 ">
              <label htmlFor="" className="form-label">End Date</label>
              <input type="date" className="form-control" id="sect23ion" name='end_date' placeholder='' onChange={onChangeResult} />
            </div>
          </div>
          <br />
          <div className="text-center">
            <h4 className='my-5 py-3 px-4 color_heading'>Batch Credentials</h4>
          </div>
          <div className="row">
            <div className="col-md-3 py-2">
              <Select
                defaultValue={null}
                onChange={onChange}
                options={gRoup}
                width={100}
                placeholder="Select group"
                name='group'
              />
            </div>
            <div className="col-md-3 py-2">
              <Select
                defaultValue={null}
                onChange={onChange}
                options={subgRoup}
                width={100}
                placeholder="Select sub-group"
                name='subgroup'
              />
            </div>
            <div className="col-md-3 py-2">
              <Select
                defaultValue={null}
                onChange={onChange}
                options={clAss}
                width={100}
                placeholder="Select class"
                name='class'
              />
            </div>
            <div className="col-md-3 py-2">
              <Select
                defaultValue={null}
                onChange={onChange}
                options={secTion}
                width={100}
                placeholder="Select section"
                name='section'
              />
            </div>
          </div>
          <div className="text-end py-3">
            <button className="btn btn_dark_blue text-white" onClick={findSubBinds}>Done</button>
          </div>
        </form>
      </div>
      <div className='mt-5'>
        <table className="table overflow_control">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Subject</th>
              <th scope="col">Teacher</th>
              <th scope="col">Fee</th>
              {/* <th scope="col">Ratio</th> */}
              <th scope="col" className='text-center'>Confirm</th>
            </tr>
          </thead>
          <tbody>
            {subJECTS.map((countr, i) => {
              return <ClassManageTr key={i} countr={countr} index={i} setdone={setdone} getsubOnlyBind={getsubOnlyBind} batchCreate={batchCreate} result={result} setResult={setResult} setbatchCreate={setbatchCreate} getSubjectEmployee={getSubjectEmployee} subBinds={subBinds} />
            })}
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <div className="text-center">
            <h4 className='my-5 py-3 px-4 color_heading'>Fee Structure</h4>
          </div>
      <div className='mt-5'>
        <table className="table overflow_control">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Fee Name</th>
              <th scope="col">Fee Type</th>
              <th scope="col">Fee Amount</th>
              <th scope="col" className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {subJECTS.map((countr, i) => {
              return <ClassManageTr key={i} countr={countr} index={i} setdone={setdone} getsubOnlyBind={getsubOnlyBind} batchCreate={batchCreate} result={result} setResult={setResult} setbatchCreate={setbatchCreate} getSubjectEmployee={getSubjectEmployee} subBinds={subBinds} />
            })}
          </tbody>
        </table>
      </div>
      {/* <div className="text-end py-3">
        <button className="btn btn_dark_blue text-white" onClick={findSubBinds}>Done</button>
      </div> */}
      <br />

      <div className="my-5 text-end">
        <button className="btn btn_dark_blue text-white" onClick={createBatch} disabled={done}><i className="fas fa-plus me-1"></i> Create Batch</button>
      </div>
    </div>
  )
}

export default ClassManage