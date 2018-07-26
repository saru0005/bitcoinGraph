import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from 'recharts'
import 'isomorphic-fetch'
import axios from 'axios';

const BASE_URL = 'https://api.coindesk.com/v1/bpi';
var dateFormat = require('dateformat');

class Index extends React.Component {




    static async getInitialProps() {
        //     axios.get(${BASE_URL}/currentprice.json)
        //   .then(response => {
        //     console.log("kkk",response.data.bpi)
        //   });
        const result = {
            key: dateFormat(new Date(), "h:MM:ss TT")
        }
        axios.get(`${BASE_URL}/currentprice.json`)
            .then(response => {
                console.log("kkk", response.data)
                Object.keys(response.data.bpi).map((item) => {
                    result[item] = response.data.bpi[item].rate_float
                })
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
        }, 3000)
    }




    fetch() {
        const result = {
            key: dateFormat(new Date(), "h:MM:ss TT")
        }
        axios.get(`${BASE_URL}/currentprice.json`)
            .then(response => {
                console.log("kkk", response.data)
                Object.keys(response.data.bpi).map((item) => {
                    result[item] = response.data.bpi[item].rate_float
                })
            })
        const gettname = this.props.getnameprice
        axios.get(`${BASE_URL}/currentprice/${gettname}.json`)
        .then(response2 => {
            console.log("FFFF", response2.data)
            Object.keys(response2.data.bpi).map((item) => {
                result[item] = response2.data.bpi[item].rate_float
            })
        })
        const gettname2 = this.props.getnameprice2
        axios.get(`${BASE_URL}/currentprice/${gettname2}.json`)
        .then(response3 => {
            console.log("FFFF", response3.data)
            Object.keys(response3.data.bpi).map((item) => {
                result[item] = response3.data.bpi[item].rate_float
            })
        })

        let { data } = this.state
        if (data.length > 10) {
            data.shift();
        }


        data.push(result)
        this.setState({
            data: data
        })
        console.log(data)
    }

    render() {
        var { data } = this.state
        console.log("render", data)
        const coin4 = "Value."+this.props.getnameprice
        const coin5 = "Value."+this.props.getnameprice2
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
                    <Line type="monotone" dataKey={coin4} stroke="#ffff00" activeDot={{ r: 5 }} />
                    <Line type="monotone" dataKey={coin5} stroke="#80ff00" activeDot={{ r: 5 }} />
                </LineChart>
            </div>
        )
    }
}
export default Index