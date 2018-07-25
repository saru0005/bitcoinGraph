import React from 'react';
class DocumentInput extends React.Component {
    render() {
      return <input 
        type="file" 
        name={ `document-${ this.props.index }-document` } 
      />;
       <select
       name="currency"
       id="currency"
       className="currency form-control mx-auto"
       onChange={props.onCurrencyChanged}>
       {
           props.currencies && props.currencies.map(currency => (
               <option key={currency.currency} value={currency.currency}>
                   {currency.currency}
               </option>
           ))
       }
   </select>
    }
  }
  export default DocumentInput;