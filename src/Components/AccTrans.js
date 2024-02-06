import './Styles/AccTrans.css'
import Item from './Item.js'

const AccTrans = ({items}) =>{
    return(
       <>
            <ul className="ulList">
                {items.map((item,i)=>{
                    return (
                        <Item
                            key={item.id}
                            title={item.title} 
                            amt= {item.amount}
                        />
                    );
                })}
            </ul>
       </>
    );
}

export default AccTrans;