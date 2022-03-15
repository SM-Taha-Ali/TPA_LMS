import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import "../../Stylesheets/batch.css"


const ClassManageTr = (props) => {
    const { countr, index, getsubOnlyBind, getSubjectEmployee, subBinds, batchCreate, setbatchCreate, setdone, result } = props

    const [teachers, setTeachers] = useState([])

    const [tempBatch, settempBatch] = useState({ subject: countr.subject, fee:null, teacher:"", ratio:"", fee_ratio:null })

    useEffect(async () => {
        getsubOnlyBind(subBinds.class, subBinds.group, subBinds.subgroup)
        var teacher = await getSubjectEmployee(countr.subject)
        setTeachers(teacher)
    }, [])

    var teachers_select = []

    teachers.forEach(teacher => {
        teachers_select.push({ value: teacher.name, label: teacher.name, name: "teacher" })
    });


    const onChange = (e) => {
        try {
            settempBatch({ ...tempBatch, [e.target.name]: e.target.value })
        } catch (error) {
            settempBatch({ ...tempBatch, [e.name]: e.value })
        }
    }

    const confirm = (e) => {
        setbatchCreate(batchCreate => batchCreate.concat(tempBatch))
        console.log(result.fees_input_batch)
        if (result.fees_input_batch != ""){
            settempBatch({ ...tempBatch, fee_ratio:(result.fees_input_batch*tempBatch.ratio)})
            console.log("chala")
        }

        console.log(tempBatch.fee_ratio)
        const dropdown = document.getElementById(`select${tempBatch.subject}`)
        const fee = document.getElementById(`fee${tempBatch.subject}`)
        // const ratio = document.getElementById(`ratio${tempBatch.subject}`)
        const btn_confirm = document.getElementById(`${tempBatch.subject}`)
        dropdown.disabled = true
        fee.disabled = true 
        // ratio.disabled = true 
        btn_confirm.disabled = true 
        setdone(false)
    }


    return (
        <tr>
            <th width="5%" scope="row">{index + 1}</th>
            <td width="18%" >{countr.subject}</td>
            <td width="32%" className='pe-5' id={`select${tempBatch.subject}`}>
            <Select
                defaultValue={null}
                onChange={onChange}
                options={teachers_select}
                placeholder="Select teacher"
                name='teacher'
            />
            </td>
            <td className='pe-5'><input type="text" className="form-control" name="fee" aria-describedby="emailHelp" placeholder="Enter subject fee (optional)" id={`fee${tempBatch.subject}`} onChange={onChange} /></td>
            <td className='text-center'><button className="btn btn_dark_blue confirm_btn text-white" onClick={confirm} id={countr.subject} ><i className="fad fa-check-circle"></i></button></td>
        </tr>
    )
}

export default ClassManageTr