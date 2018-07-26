
import { BitcoinMonitor } from '../components/BitcoinMonitor/BitcoinMonitor';
import 'isomorphic-fetch'
import { Header } from '../components/Header';
var dateFormat = require('dateformat');
class graph extends React.Component {
  render() {
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>

    return (
      <div>
               <Header title="BitCoin"/>
        <BitcoinMonitor />
  </div>
      )
  }
}

export default graph