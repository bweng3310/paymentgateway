import React from 'react'

function Creditcard({choosepayment,setchoosepayment}) {
    function creditcard1(){
        setchoosepayment('信用卡')
    }
    return (
        <div>
            <input type="radio" name="pay" onClick={creditcard1}/>
            <label>信用卡</label>
        </div>
    )
}

export default Creditcard
