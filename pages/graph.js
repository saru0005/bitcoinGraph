
import { BitcoinMonitor } from '../components/BitcoinMonitor/BitcoinMonitor';
import 'isomorphic-fetch'
import { Header } from '../components/Header';
import axios from 'axios';
var dateFormat = require('dateformat');
class graph extends React.Component {
  testcc(){
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      const persons = res.data;
      this.setState({ persons });
    })
  }
  render() {
    return (
     this.testcc()
      )
  }
}

export default graph