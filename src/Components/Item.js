import './Styles/AccTrans.css'
import PropTypes from 'prop-types'

const Item = ({title,amt}) =>{
    //const {title,amt :amount} = props; // destructuring การแยกองค์ประกอบ
    const status = amt < 0 ? "expense" : "income";
    const symbol = amt < 0 ? "-" : "+";

    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return(
        <li className={`${status} item`}>{title}<span>{symbol} {formatNumber(Math.abs(amt).toFixed(2))}</span></li>
    ); 
}

Item.propTypes = {
    title : PropTypes.string,
    amt : PropTypes.number
}

export default Item;