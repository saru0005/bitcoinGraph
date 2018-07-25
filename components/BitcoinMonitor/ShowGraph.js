import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Label
} from 'recharts'
import 'isomorphic-fetch'
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
        const testget = this.props.prices2.SELECTED.code;
        const getname = this.props.prices.SELECTED.code;
        const url2 = "https://api.coindesk.com/v1/bpi/currentprice/" + testget + ".json"
        const url3 = "https://api.coindesk.com/v1/bpi/currentprice/" + getname + ".json"
        console.log("Link is hereeeeeeeeeeee" + url2)
        const url = "https://api.coindesk.com/v1/bpi/currentprice.json"
        const res = await fetch(url)
        const json = await res.json()
        const resse = await fetch(url2)
        const jsonne = await resse.json()
        const resse2 = await fetch(url3)
        const jsonne2 = await resse2.json()
        const result = {
            key: dateFormat(new Date(), "h:MM:ss TT")
        }
        Object.keys(json.bpi).map((item) => {
            result[item] = json.bpi[item].rate_float
        })
        Object.keys(jsonne.bpi).map((item) => {
            result[item] = jsonne.bpi[item].rate_float
        })
        Object.keys(jsonne2.bpi).map((item) => {
            result[item] = jsonne2.bpi[item].rate_float
        })

        let { data } = this.state
        data.push(result)
        this.setState({
            data: data,
            testget: testget,
            getname: getname
        })
    }

    renderGrapgh() {

        var { data, testget, getname } = this.state
        var coin4 = 'Value.' + testget
        var coin5 = 'Value.' + getname

        console.log("render", data)
        console.log("มันออกมาเเล้วโว้ย" + testget)
        const Value = data.map((item) => {
            return { Value: item }
        }
        );
        console.log("Map", Value)
        return (
            <div>
                <LineChart width={1024} height={480} data={Value}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Value.key" padding={{ left: 30, right: 30 }} >
                    </XAxis>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Value.USD" stroke="#8884d8" activeDot={{ r: 5 }} />
                    <Line type="monotone" dataKey="Value.GBP" stroke="#82ca9d" activeDot={{ r: 5 }} />
                    <Line type="monotone" dataKey="Value.EUR" stroke="#d82d36" activeDot={{ r: 5 }} />
                    <Line type="monotone" dataKey={coin4} stroke="#ffff00" activeDot={{ r: 5 }} />
                    <Line type="monotone" dataKey={coin5} stroke="#ff00ff" activeDot={{ r: 5 }} />
                </LineChart>
            </div>
        )
    }
    render() {
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
        return (
            <div>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link><br />
                <div class="w3-cell-row">

                    <div class="w3-container  w3-cell">


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