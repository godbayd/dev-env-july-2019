console.clear();
import '../styles/main.scss'
import '../index.pug'
import axios from 'axios'
import 'regenerator-runtime' // for async

const ptJSON = 'https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json';

const fetcher = async () => {
    const res = await axios.get(ptJSON)
    console.log(res.data.elements)
}
fetcher()
