import React,{ useEffect, useState } from 'react'
import Card from './Card';
import Dropdown from './Dropdown';
import { Chart as ChartJs } from 'chart.js/auto';
import {Bar} from "react-chartjs-2"

// States Data
const statesData = [
  { code: 'AP', name: 'Andhra Pradesh' },
  { code: 'AR', name: 'Arunachal Pradesh' },
  { code: 'AS', name: 'Assam' },
  { code: 'BR', name: 'Bihar' },
  { code: 'CH', name: 'Chattisgarh' },
  { code: 'CT', name: 'Arunachal Pradesh' },
  { code: 'DL', name: 'Delhi' },
  { code: 'GA', name: 'Goa' },
  { code: 'GJ', name: 'Gujrat' },
  { code: 'HR', name: 'Haryana' },
  { code: 'HP', name: 'Himachal Pradesh' },
  { code: 'JK', name: 'Jammu and Kashmir' },
  { code: 'JH', name: 'Jharkhand' },
  { code: 'KA', name: 'Karnataka' },
  { code: 'KL', name: 'Kerala' },
  { code: 'MP', name: 'Madhya Pradesh' },
  { code: 'MH', name: 'Maharashtra' },
  { code: 'MN', name: 'Manipur' },
  { code: 'ML', name: 'Meghalaya' },
  { code: 'MZ', name: 'Mizoram' },
  { code: 'NL', name: 'Nagaland' },
  { code: 'OD', name: 'Odisha' },
  { code: 'PY', name: 'Pondicherry' },
  { code: 'PB', name: 'Punjab' },
  { code: 'RJ', name: 'Rajasthan' },
  { code: 'SK', name: 'Sikkim' },
  { code: 'TN', name: 'Tamil Nadu	' },
  { code: 'TG', name: 'Telangana' },
  { code: 'TR', name: 'Tripura' },
  { code: 'UP', name: 'Uttar Pradesh' },
  { code: 'UK', name: 'Uttarakhand' },
  { code: 'WB', name: 'West Bengal' },
];

function Dashboard() {
  // Dropdown Menu
  const [selectedState, setSelectedState] = useState('');

  const handleStateSelect = (stateCode) => {
    setSelectedState(stateCode);
  };

  // Fetching Data
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const getCovidData = async () => {
      const response = await fetch('https://data.covid19india.org/v4/min/data.min.json');
      const result = await response.json();
      const selectedStateData = result[selectedState];
      console.log(selectedStateData)
      setData(selectedStateData);
    }
    getCovidData();
  }, [selectedState])

  // Destructuring Cases, deaths and recovery
  const {deceased, confirmed, recovered} =  data?.total || {};

  //Destructuring metadata
  const {date, last_updated, population} = data?.meta || {}

  return (
    <>
      <h1>COVID - 19 Dashboard </h1>
      <h4><span>Select State : </span> <span><Dropdown states={statesData} onSelect={handleStateSelect} className="dropdown"/> </span></h4>
      <div className='container'>
        <section className='section-1'>

          {/* Metadata */}
          <p><strong>Date</strong> : {date}     <strong>Last updated</strong> : {last_updated}     <strong>Population</strong> : {population}</p>

          {/* Cards */}
          <div className="card-container">
            <Card label="Cases" value={confirmed} color="blue"/>
            <Card label="Death"  value={deceased} color="red"/>
            <Card label="Recoverd" value={recovered} color="green"/>
          </div>

          {/* Graph */}
          <div className='card-2'>
            <Bar 
                data={
                  {
                    labels: [selectedState],
                    datasets: [
                      {
                        label: "cases",
                        data: [confirmed],
                        borderColor: '#36A2EB',
                        backgroundColor: '#9BD0F5',
                      },
                      {
                        label: "death",
                        data: [deceased],
                        borderColor: '#36A2EB',
                        backgroundColor: '#FF3232',
                      },
                      {
                        label: "recovered",
                        data: [recovered],
                        borderColor: '#36A2EB',
                        backgroundColor: '#008080',
                      }
                    ],
                  }
                }
            />
          </div>
        </section>
        
      </div>
    </>
  )
}

export default Dashboard
