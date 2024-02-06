import "./App.css"
import AccTrans from "./Components/AccTrans"
import FormComponent from "./Components/FormComponent"
import { useEffect, useState } from "react";
import DataContext from "./Data/DataContext";
import ReportComponent from "./Components/ReportComponent";
// import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

const Title = () => <h1 style={{color:"orangered",textAlign:"center",fontSize: "1.7rem"}}>โปรแกรมรายรับ-รายจ่าย</h1>; // inline CSS

function App() {
    
  // const initItems = [
  //   {id:4,title:"ขายของออนไลน์",amount:2000},
  //   {id:3,title:"ค่าผ่อนรถยนต์",amount:-9000},
  //   {id:2,title:"ค่าเช่าห้อง",amount:-3500},
  //   {id:1,title:"เงินเดือน",amount:25000},
  // ]

  const [Items,setTrans] = useState([]);
  const [reportIncome, setReportImcome] = useState(0)
  const [reportExpense, setReportExpense] = useState(0)

  const onAddNewItem = (newItem)=>{
    // console.log("onAddNewItem", newItem);
    setTrans((prevItems)=>{
      return [newItem,...prevItems]; // เอา Item ใหม่มาเพิ่มด้านหน้า [0]
    })
  }

  useEffect(()=>{
    const amounts = Items.map((item)=> item.amount)
    const income = amounts.filter((amt)=> amt > 0).reduce((total,el)=> total + el,0)
    const expense = amounts.filter((amt)=> amt < 0).reduce((total,el)=> total + el,0)
    setReportImcome(income)
    setReportExpense(expense)
  },[Items]);

  // const [showReport,setShowReport] = useState(true)
  // const reducer = (state,action) => {
  //   switch (action.type){
  //     case "SHOW" :
  //       return true
  //     case "HIDE" :
  //       return false
  //     default:
  //       return true
  //   }
  // }
  // const [rdShowReport,dispatchShowReport] = useReducer(reducer,showReport)

  return (
    <>

      <DataContext.Provider value={
        {
          income : reportIncome,
          expense : reportExpense
        }
      }> 
        <div className="container">
          <Title />
          <ReportComponent/>
          <FormComponent onAddItem={onAddNewItem}/>
          <AccTrans items={Items}/>
        </div>
      </DataContext.Provider>
    </>
  );
}

export default App;
