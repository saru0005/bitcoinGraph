import React from 'react';
import DocumentInput from './DocumentInput';
class DocumentsFieldSet extends React.Component{
    constructor(props){
      super(props);
  
      this.state = { 
        documents: []
      }
      
      this.add = this.add.bind(this);
    }
  
    add() {
      const documents = this.state.documents.concat(DocumentInput);
      this.setState({ documents });
    }
    



    
    render () {
      const documents = this.state.documents.map((Element, index) => {
        return <Element key={ index } index={ index } />
      });
  
      return <div>
       
      
        <div className="inputs">
          { documents }<br/>
        </div>
        <button onClick={ this.add }>Add</button>
      </div>
    }
  }
  
  export default DocumentsFieldSet;