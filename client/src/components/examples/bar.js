import React from 'react';
import {Bar} from 'react-chartjs-2';
import axios from 'axios';


export default class BarExample extends React.Component {

  render() {
let labels = []
let arra = []
let d = []

  axios.get("http://localhost:8080/case?query=countcasetypesperjudge")
  .then(res => {
    var arr = Object.keys(res.data).map(function(key) {
      return [key, res.data[key]];
    });
    console.log("returned results: " + Array.isArray(arr))
       //const dataFromServer = arr;
       arra = arr;
       console.log(JSON.stringify(arr[0][1].judge) + " it worksss");
       for (let kv of arr) {
        labels.push(kv[1]['judge']);
        d.push(kv[1]['COUNT(case_type)']);
        console.log("judge: " + kv.judge)
      }
      console.log("judges: "+ labels)
      console.log("types: "+ d)
    });






var data = {
  labels: labels,
  datasets: [
  {
    label: 'Caseloads per judge',
    backgroundColor: '#28ABE2',
    borderColor: '#28ABE2',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
    hoverBorderColor: 'rgba(255,99,132,1)',
    data: d
  }
  ]
};

    return (
      <div>
      <h2 class="exampleTitle">Caseloads per Judge</h2>
      <Bar
      data={data}
      width={1000}
      height={150}
      options={{
        maintainAspectRatio: false
      }}
      />
      </div>
      );
  }
}