import { Bar } from 'react-chartjs-2';
import { useState, useEffect } from 'react';

import {
    Chart as ChartJS, 
    BarElement,
    CategoryScale,
    LinearScale, 
    Tooltip,
    Legend
} from 'chart.js';


const returned_items = JSON.parse(localStorage.getItem('budgets'));
const data_keys = returned_items.map((e) => e.name)
data_keys.push('Uncategorized')
// eslint-disable-next-line no-unused-vars
let total_payment = 0;
const ids_names_count = returned_items.map((e) => [e.id, e.name, e.total = 0])
ids_names_count.push(['Uncategorized', 'Uncategorized', 0])

const returned_expenses = JSON.parse(localStorage.getItem('expenses'))
returned_expenses.map((e) => {
    ids_names_count.map((arr) => {
        if(e.budgetId == arr[0]) {
            arr[2] += e.amount
            total_payment += e.amount;
        }
    })
})

const amounts = ids_names_count.map(arr => arr[2])
localStorage.setItem("amounts", JSON.stringify(amounts))
/*
function August() {
    <div className="categories transaction-modals">
        <div className="transaction-modal">
            <span className="bubble-icon">&#127828;</span>
            <div className="transaction-detail">
                <p className="payment-source">Groceries</p>
                <p className="category">8 Transactions</p>
            </div>
            <div className="cost">
                <p>-$89.40</p>
            </div>
        </div>
        <div className="transaction-modal">
            <span className="bubble-icon">&#127828;</span>
            <div className="transaction-detail">
                <p className="payment-source">Food & Drink</p>
                <p className="category">13 Transactions</p>
            </div>
            <div className="cost">
                <p>-$89.40</p>
            </div>
        </div>
        <div className="transaction-modal">
            <span className="bubble-icon">&#127828;</span>
            <div className="transaction-detail">
                <p className="payment-source">Transportation</p>
                <p className="category">2 Transactions</p>
            </div>
            <div className="cost">
                <p>-$89.40</p>
            </div>
        </div>
    </div>
}
 

function September() {
    <div className="categories transaction-modals">
        <div className="transaction-modal">
            <span className="bubble-icon">&#127828;</span>
            <div className="transaction-detail">
                <p className="payment-source">Total Payments</p>
                <p className="category"></p>
            </div>
            <div className="cost">
                <p>-$89.40</p>
            </div>
        </div>
    </div>
}

*/
ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale, 
    Tooltip,
    Legend
)


function Spending() {
    const bdata = {
        labels: data_keys,
        datasets: [
          {
            label: 'Budget',
            data: amounts, // Actual data points
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.3, // Adjust this tension value to control the squiggly effect
            borderWidth: 2,
            pointStyle: 'circle', // Optional: Customize the point style
            radius: 2, // Optional: Adjust the point radius
          },
        ],
      };

    

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'August',
            data: [12, 19, 3, 5, 2], // Actual data points
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.3, // Adjust this tension value to control the squiggly effect
            borderWidth: 2,
            pointStyle: 'circle', // Optional: Customize the point style
            radius: 2, // Optional: Adjust the point radius
          },
        ],
      };
    
    const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    }
    }

    const [month, setMonth] = useState('august')
    const [gdata, setGdata] = useState(data)
    const [viewtype, setViewType] = useState('monthly')

    const changeMonth = () => {
        if(month == 'august') {
            setMonth('september')
        } else {
            setMonth('august')
        }
    }

    const changeViewType = () => {
        if(viewtype == 'monthly') {
            setViewType('budget')
            document.getElementById('round-btns').style.display = "none"
        } else {
            setViewType('monthly')
            document.getElementById('round-btns').style.display = "flex"
        }
          
    }

    useEffect(() => {
        if(month=='august') {
            setGdata({
                labels: ['1-4', '5-11', '12-18', '19-25', '26-31'],
                datasets: [
                  {
                    label: 'August',
                    data: [40.96, 19.89, 90.87, 15.43, 20.54], // Actual data points
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.3, // Adjust this tension value to control the squiggly effect
                    borderWidth: 2,
                    pointStyle: 'circle', // Optional: Customize the point style
                    radius: 2, // Optional: Adjust the point radius
                  },
                ],
              })
        } else {
            setGdata({
                labels: ['1-4', '5-11', '12-18', '19-25', '26-31'],
                datasets: [
                  {
                    label: 'September',
                    data: [200, 57, 175, 430, 65], // Actual data points
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.3, // Adjust this tension value to control the squiggly effect
                    borderWidth: 2,
                    pointStyle: 'circle', // Optional: Customize the point style
                    radius: 2, // Optional: Adjust the point radius
                  },
                ],
              });
        }
    }, [month])

    return(
        <div className="main-content">
            <div className="monthly-reports">
                <div id="round-btns">
                    <a onClick={changeMonth} className="previous round">&#8249;</a>
                    <a onClick={changeMonth} className="next round">&#8250;</a>
                </div>
            
                <div className="report">
                    <div className="report-title">
                        <p className="view-type">Monthly</p>
                        <p onClick={changeViewType} className="switch-view">Switch view</p>
                    </div>
                    <div className="report-data">
                        <Bar data={viewtype == 'monthly' ? gdata : bdata} options={options}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Spending