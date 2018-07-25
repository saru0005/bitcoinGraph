import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts'
import { BitcoinMonitor } from '../components/BitcoinMonitor/BitcoinMonitor';
import 'isomorphic-fetch'
import { Header } from '../components/Header';
var dateFormat = require('dateformat');
class Index extends React.Component {
  
    static async getInitialProps() {
      const url = "https://api.coindesk.com/v1/bpi/currentprice.json"
      const res = await fetch(url)
      const json = await res.json()
      const result = {
        key: dateFormat(new Date(), "h:MM:ss TT")
      }
      Object.keys(json.bpi).map((item) => {
        result[item] = json.bpi[item].rate_float
      })
      return { bitcoin: result }
    }
  
    constructor(props) {
      super(props)
  
      this.state = {
        data: [this.props.bitcoin]
      }
      this.fetch = this.fetch.bind(this)
    }
  
    componentDidMount() {
      setInterval(() => {
        this.fetch()
      }, 5000)
    }
  
  
  
  
    async fetch() {
  
      const url = "https://api.coindesk.com/v1/bpi/currentprice.json"
      const res = await fetch(url)
      const json = await res.json()
      const result = {
        key: dateFormat(new Date(), "h:MM:ss TT")
      }
      Object.keys(json.bpi).map((item) => {
        result[item] = json.bpi[item].rate_float
      })
  
      let { data } = this.state
      data.push(result)
      this.setState({
        data: data
      })
    }
  
  renderGrapgh() {
    var { data } = this.state
    console.log("render", data)
    const Value = data.map((item) => {
      return { Value: item }
    }
    );
    console.log("Map", Value)
    return (
      <div>
        <LineChart width={1024} height={480} data={Value}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Value.key" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Value.USD" stroke="#8884d8" activeDot={{ r: 5 }} />
          <Line type="monotone" dataKey="Value.GBP" stroke="#82ca9d" activeDot={{ r: 5 }} />
          <Line type="monotone" dataKey="Value.EUR" stroke="#d82d36" activeDot={{ r: 5 }} />
        </LineChart>
      </div>
    )
  }
  render() {
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
    // console.log('render', data)
    return (
      <div>
               <Header title='Monitor' />
               <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link><br/>

      <div class="w3-cell-row">
      
         <div class="w3-container  w3-cell">
 
        <BitcoinMonitor />
      </div>
      <div class="w3-container w3-cell">
        {this.renderGrapgh()}
      </div>
  </div>
  </div>
      )
  }
}

export default Index