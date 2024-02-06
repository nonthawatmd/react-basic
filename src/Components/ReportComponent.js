import { useContext } from "react"
import DataContext from "../Data/DataContext"
import './Styles/ReportComponent.css'


export default function ReportComponent(){
    const {income,expense} = useContext(DataContext)

    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return (
        <div>
            <h4>ยอดคงเหลือ (บาท)</h4>
            <h1>฿{formatNumber((income + expense).toFixed(2))}</h1>
            <div className="report-container">
                <div>
                    <h4>รายรับ</h4>
                    <p className="report plus">฿{formatNumber(income.toFixed(2))}</p>
                </div>
                <div>
                    <h4>รายจ่าย</h4>
                    <p className="report minus">฿{formatNumber(expense.toFixed(2))}</p>
                </div>
            </div>
            
        </div>
    )
}