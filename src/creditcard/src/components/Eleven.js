import React from 'react'

const Eleven = ({choosepayment,setchoosepayment}) => {
    function convinence(){
        setchoosepayment('超商付款')
    }
    return (
        <div>
            <input type="radio" name="pay" onClick={convinence}/>
            <label>超商繳費</label>
        </div>
    )
}

export default Eleven
