import React,{ useEffect, useState } from 'react'
import Card from './Card';
import Dropdown from './Dropdown';

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

  const [selectedState, setSelectedState] = useState('');

  const handleStateSelect = (stateCode) => {
    setSelectedState(stateCode);
  };

  const [data, setData] = useState([]);
    const getCovidData = async () => {
        try {
            // const response = await fetch('https://data.covid19india.org/v4/min/data.min.json');
            const result = await response.json();
            console.log(selectedState);
            // setData(result.MP);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        // getCovidData();
    }, [data])

    const {deceased, confirmed, recovered} =  data?.total || {};

  return (
    <>
      <h4>COVID - 19 Dashboard <span>Select State : </span><span><Dropdown states={statesData} onSelect={handleStateSelect}/></span>Selected State: {selectedState}</h4>
      <div className='container'>
        <section className='section-1'>
          <h2 className='heading'>Total Data</h2>
          <div className="card-container">
            <Card label="Cases" value={confirmed} color="blue"/>
            <Card label="Death"  value={deceased} color="red"/>
            <Card label="Recoverd" value={recovered} color="green"/>
          </div>
          <div className='card-2'>
            Map
          </div>
        </section>
        <section className='section-2'>
            <h2 className='heading'>Live Data</h2>
            <div className="card-container">
              <div className='card-3'>
              </div>
            </div>
        </section>
      </div>
    </>
  )
}

export default Dashboard
