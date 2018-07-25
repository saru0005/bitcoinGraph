
import { BitcoinMonitor } from '../components/BitcoinMonitor/BitcoinMonitor';
import 'isomorphic-fetch'
import { Header } from '../components/Header';
var dateFormat = require('dateformat');
class graph extends React.Component {
  render() {
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>

    return (
      <div>
               <Header title='Monitor' />
               <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link><br/>

      <div class="w3-cell-row">
      
         <div class="w3-container  w3-cell">
 
        <BitcoinMonitor />
      </div>
      <div class="w3-container w3-cell">

      </div>
  </div>
  </div>
      )
  }
}

export default graph