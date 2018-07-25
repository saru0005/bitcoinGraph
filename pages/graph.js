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
      key: dateFormat(new Date(), "isoDateTime")
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

    this.fetch()

  }

  async fetch() {
    const url = "https://api.coindesk.com/v1/bpi/currentprice.json"
    const res = await fetch(url)
    const json = await res.json()
    const result = {
      key: dateFormat(new Date(), "isoDateTime")
    }
    Object.keys(json.bpi, json.time).map((item) => {
      result[item] = json.bpi[item].rate_float + 1
      result[item] = json.time.updatedISO
      console.log(result[item])
    })

    let { data } = this.state
    data.push(result)
    this.setState({
      data: data
    })
    console.log(data)
    setTimeout(function () {
      this.fetch()
    }, 5000);


  }
  renderGrapgh() {
    const { data } = this.state
    // let creatGraph = this.state.data.map()




    return (
      <div>

        <LineChart width={1100} height={800} data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="key" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="USD" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="GBP" stroke="#82ca9d" />
          <Line type="monotone" dataKey="EUR" stroke="#82ca9d" />
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
               <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
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