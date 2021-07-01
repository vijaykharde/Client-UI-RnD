import React, { useState, useEffect } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import { CountryService } from './service/CountryService';
import './RefinancingRates.css';
import { connect } from 'react-redux';

interface Props {
    name: string;
}


const RefinancingRates: React.FC<Props> = (props) => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry1, setSelectedCountry1] = useState(null);
    const [selectedCountry2, setSelectedCountry2] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedCountries, setSelectedCountries] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState(null);
    const [filteredCities, setFilteredCities] = useState(null);
    const countryservice = new CountryService();

    const groupedCities = [
        {
            label: 'Germany', code: 'DE',
            items: [
                { label: 'Berlin', value: 'Berlin' },
                { label: 'Frankfurt', value: 'Frankfurt' },
                { label: 'Hamburg', value: 'Hamburg' },
                { label: 'Munich', value: 'Munich' }
            ]
        },
        {
            label: 'USA', code: 'US',
            items: [
                { label: 'Chicago', value: 'Chicago' },
                { label: 'Los Angeles', value: 'Los Angeles' },
                { label: 'New York', value: 'New York' },
                { label: 'San Francisco', value: 'San Francisco' }
            ]
        },
        {
            label: 'Japan', code: 'JP',
            items: [
                { label: 'Kyoto', value: 'Kyoto' },
                { label: 'Osaka', value: 'Osaka' },
                { label: 'Tokyo', value: 'Tokyo' },
                { label: 'Yokohama', value: 'Yokohama' }
            ]
        }
    ];

    useEffect(() => {
        countryservice.getCountries().then(data => setCountries(data));
    }, []);
    /*
    const searchCountry = (event) => {
        setTimeout(() => {
            let _filteredCountries;
            if (!event.query.trim().length) {
                _filteredCountries = [...countries];
            }
            else {
                _filteredCountries = countries.filter((country) => {
                    return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            setFilteredCountries(_filteredCountries);
        }, 250);
    }

    const searchCity = (event) => {
        let query = event.query;
        let _filteredCities = [];

        for (let country of groupedCities) {
            let filteredItems = country.items.filter((item) => item.label.toLowerCase().indexOf(query.toLowerCase()) !== -1);
            if (filteredItems && filteredItems.length) {
                _filteredCities.push({ ...country, ...{ items: filteredItems } });
            }
        }

        setFilteredCities(_filteredCities);
    }

    const itemTemplate = (item) => {
        return (
            <div className="country-item">
                <img alt={item.name} className={`flag flag-${item.code.toLowerCase()}`} />
                <div>{item.name}</div>
            </div>
        );
    }

    const groupedItemTemplate = (item) => {
        return (
            <div className="p-d-flex p-ai-center country-item">
                <img alt={item.name} className={`flag flag-${item.code.toLowerCase()}`} />
                <div>{item.label}</div>
            </div>
        );
    }*/

    return (
        <div className="card">
            <h5>Basic</h5>
            //<AutoComplete value={selectedCountry1} suggestions={filteredCountries} completeMethod={searchCountry} field="name" onChange={(e) => setSelectedCountry1(e.value)} />

            //<h5>Grouped</h5>
            //<AutoComplete value={selectedCity} suggestions={filteredCities} completeMethod={searchCity} field="label" optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={groupedItemTemplate} onChange={(e) => setSelectedCity(e.value)} />

            //<h5>Dropdown, Templating and Force Selection</h5>
            //<AutoComplete value={selectedCountry2} suggestions={filteredCountries} completeMethod={searchCountry} field="name" dropdown forceSelection itemTemplate={itemTemplate} onChange={(e) => setSelectedCountry2(e.value)} />

            //<h5>Multiple</h5>
            //<span className="p-fluid">
            //    <AutoComplete value={selectedCountries} suggestions={filteredCountries} completeMethod={searchCountry} field="name" multiple onChange={(e) => setSelectedCountries(e.value)} />
            //</span>
        </div>
    )
}

export default connect(null)(RefinancingRates);