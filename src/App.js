import React from 'react';
import './App.css';
import ChartComponent from './components/Chart';

function App() {

  const data = [
    {
      label:'REVENUE',
      data:{tablet:1500,smartphone:500},
      color:'#3CFE6E'
    },
    {
      label:'IMPRESIONS',
      data:{tablet:15000,smartphone:750},
      color:'#3C45FE'
    },
    {
      label:'VISITS',
      data:{tablet:20000,smartphone:5000},
      color:'#FE3CD8'
    }
  ]

  return (
    <div className="App">
      <div className="container">
        <div className="columns">
          {
            data.map((el)=>
              <div key={el.label} className="column is-4">
                <ChartComponent label={el.label} datos={el.data} color={el.color}/>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
