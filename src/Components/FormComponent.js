import { number } from 'prop-types'
import './Styles/FormComponent.css'
import { useState,useEffect } from 'react'
import {v4 as uuidV4} from 'uuid'

const FormComponent = (props) =>{
    console.log("render form")
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState('')
    const [formValid,setFormValid] = useState(false)
    const inputTitle = (ev) => {
        setTitle(ev.target.value)
    }

    const inputAmount = (ev) => {
        setAmount(ev.target.value)
    }

    const saveItem = (event) => {
        event.preventDefault()
        const itemData = {
            id : uuidV4(),
            title : title,
            amount : Number(amount)
        }
        props.onAddItem(itemData);
        setTitle('')
        setAmount('')
    }

    useEffect(()=>{
        console.log("call useEffect")
        title === "" || Number(amount) === 0 ? setFormValid(false) : setFormValid(true)
    },[title,amount]);

    return (
        <form onSubmit={saveItem}>
            <div className="form-control">
                <label>ชื่อรายการ  : </label>
                <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle} value={title} />
            </div>
            <div className="form-control">
                <label>จำนวนเงิน : </label> 
                <input type="number" placeholder="(+ รายรับ / - รายจ่าย)" onChange={inputAmount} value={amount}/>
            </div>
            <div>
                <button type="submit" className={`${formValid ? "valid" : ""} btn`} disabled={!formValid}>เพิ่มข้อมูล</button>
            </div>
        </form>
    );
}

export default FormComponent;