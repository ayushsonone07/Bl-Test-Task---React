import React,{ useEffect, useState } from 'react'
import Card from './Card';

function Dashboard() {

  const [data, setData] = useState([]);
    const getCovidData = async () => {
        try {
            const response = await fetch('https://data.covid19india.org/v4/min/data.min.json');
            const result = await response.json();
            console.log(result.MP);
            setData(result.MP);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCovidData();
    }, [data])

    const {deceased, confirmed, recovered} =  data?.total || {};

  return (
    <>
      <h4>COVID - 19 Dashboard</h4>
      <div className='container'>
        <section className='section-1'>
          <h2 className='heading'>Total Data</h2>
          <div className="card-container">
            <Card label="Cases" value={confirmed}/>
            <Card label="Death" value={deceased}/>
            <Card label="Recoverd" value={recovered}/>
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
