import React from 'react'

function Bank({choosepayment, setchoosepayment}) {
    function bank(){
        setchoosepayment('轉帳')
    }
    return (
        <div>
            <input type="radio" name="pay" onClick={bank}/>
            <label>轉帳</label>
        </div>
    )
}

export default Bank
