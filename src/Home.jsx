import { NavLink } from "react-router-dom"
import { UilUsdCircle, UilFilesLandscapes, UilPizzaSlice, UilPlaneDeparture, UilCar, UilTransaction} from '@iconscout/react-unicons'
import { json, local } from "d3";

if(JSON.parse(localStorage.getItem('budgets')) == null) {
    localStorage.setItem('budgets', JSON.stringify([]))
    localStorage.setItem('expenses', JSON.stringify([]))
} 

function Home() {
    const returned_items = JSON.parse(localStorage.getItem('budget'))
    let initial_balance = 1000.00;
    let balance = initial_balance
    if("amounts" in localStorage) {
       const amounts = JSON.parse(localStorage.getItem('amounts'))
       balance = amounts.reduce((a,b) => {
        return a - b
       }, initial_balance)
    } 
    return(
        <div className="homepage">
            <div className="account-modal">
                <p className="account-summary">Account Summary</p>
                <div className="account-info">
                    <p className="spendable-title">Spendable <span>&#169;</span></p>
                    <h1 className="balance">${balance}</h1> 
                    <div className="btns">
                        <button className="send-money"><NavLink className="button-link" to="/tips"><UilFilesLandscapes size="25"/> Budget Tips</NavLink></button>
                        <button className="recent-loads"><NavLink className="button-link" to="/budget"><UilUsdCircle size="25"/> Budget Tool</NavLink></button>
                    </div>
                    
                </div>
            </div>

            <div className="recent-transactions">
                <div className="transactions-header">
                    <p>Latest transactions</p>
                    <NavLink className="see-all" to="/spending">View graph</NavLink>
                </div>
            
                
                <div className="transaction-modals">
                    <div className="transaction-modal">
                        <span className="bubble-icon" style={{backgroundColor: "orange"}}><UilPizzaSlice size="33"/></span>
                        <div className="transaction-detail">
                            <p className="payment-source">SparkFun</p>
                            <p className="category">Food & Drink</p>
                        </div>
                        <div className="cost">
                            <p>-$89.40</p>
                        </div>
                    </div>
                    <div className="transaction-modal">
                    <span className="bubble-icon" style={{backgroundColor: "whitesmoke"}}><UilPlaneDeparture size="33"/></span>
                        <div className="transaction-detail">
                            <p className="payment-source">United Airlines</p>
                            <p className="category">Travel, Airlines and Aviation</p>
                        </div>  
                        
                        <div className="cost">
                            <p>-$500.00</p>
                        </div>
                    </div>
                    <div className="transaction-modal">
                        <span className="bubble-icon" style={{backgroundColor: "lightgreen"}}><UilCar size="35"/></span>
                        <div className="transaction-detail">
                            <p className="payment-source">Uber</p>
                            <p className="category">Travel, Taxi</p>
                        </div>
                        <div className="cost">
                            <p>-$6.33</p>
                        </div>
                    </div>
                    <div className="transaction-modal">
                        <span className="bubble-icon" style={{backgroundColor: "red"}}><UilTransaction size="33"/></span>
                        <div className="transaction-detail">
                            <p className="payment-source">Automatic Payment</p>
                            <p className="category">Payment Rent</p>
                        </div>
                        <div className="cost">
                            <p>-$2078.50</p>
                        </div>
                    </div>
                </div>
                <div>
                    {returned_items}
                </div>
            </div>
        </div>
        
    )
}

export default Home