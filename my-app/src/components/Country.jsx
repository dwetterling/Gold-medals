import React, { Component } from 'react';


class Country extends Component {
   
    state = {
        word: 'United States',
        gold: 0,
        
    }
    renderNumber(gold) {
        return (gold ===undefined || gold ===null || gold === '' ? '0' : gold)
    }
    handleClick = () => {
        
       
        //the following will fail - we cannot access 'this' object
        //this.state is undefined
        console.log(this.state.gold);

        this.setState({gold: this.state.gold + 1 })
    }

    
    render() {
        return ( 
      
            <>
                
                <div>
                    {this.state.word}
                </div><div>
                    Gold Medals Earned: {this.state.gold}  <button onClick={this.handleClick}>+</button>
                </div>
               
                </>
        );   
    }
}

export default Country