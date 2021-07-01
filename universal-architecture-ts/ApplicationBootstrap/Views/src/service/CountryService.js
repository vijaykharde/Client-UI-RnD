import axios from 'axios'

export class CountryService {

    getCountries() {
        return axios.get('countries.json')
            .then(res => res.data.data);
    }
}