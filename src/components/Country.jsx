import React, { Component } from 'react';


class Country extends Component {
   
    

    renderNumber(gold) {
        return (gold ===undefined || gold ===null || gold === '' ? '0' : gold)
    }
    

    render() {
        const {goldIncrement, goldDecrement, silverIncrement, silverDecrement, bronzeIncrement, bronzeDecrement, word } = this.props;
        return ( 
            <>
                <div>
                    {word.name}
                </div><div>
                    Gold Medals Earned: {word.gold}  <button onClick={() => goldIncrement(word.id)}>+</button><button disabled={word.gold <= 0} onClick={() => goldDecrement(word.id)}>-</button>
                    </div>
                    <div>
                    Silver Medals Earned: {word.silver}  <button onClick={() => silverIncrement(word.id)}>+</button><button disabled={word.silver <= 0} onClick={() => silverDecrement(word.id)}>-</button>
                    </div>
                    <div>
                    Bronze Medals Earned: {word.bronze}  <button onClick={() => bronzeIncrement(word.id)}>+</button><button disabled={word.bronze <= 0} onClick={() => bronzeDecrement(word.id)}>-</button>
                </div>
                <div>
                Total Medals: {word.gold + word.silver + word.bronze}
                </div>
               
                </>
        );   
    }
}

export default Country