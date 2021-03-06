
import React, { Component } from 'react';
import Total from './Total';


const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export default class Cart extends Component{
 
  render(){
      const selectedOptions = Object.keys(this.props.state).map((item,idx) => {
      const featureHash = item + '-' + idx;
      const itemOption = this.props.state[item];
      
      return(<div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{item} </div>
        <div className="summary__option__value">{itemOption.name}</div>
        <div className="summary__option__cost">
            {USCurrencyFormat.format(itemOption.cost)}
          </div>
        </div>);

    });
    return(
      <section className="main__summary">     
        <h3>Your Cart</h3>
        {selectedOptions}
        <Total cartContents={this.props.state} />
        </section>

    );
  }
  
}

