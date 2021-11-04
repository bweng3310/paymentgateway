import React from 'react'

const Taiwanpay = ({choosepayment,setchoosepayment}) => {
    function taiwanpay(){
        setchoosepayment('台灣PAY')
    }
    return (
        <div>
            <input type="radio" name="pay" onClick={taiwanpay}/>
            <label>台灣PAY</label>
        </div>
    )
}

export default Taiwanpay
