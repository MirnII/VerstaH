import React, { Component } from "react";
import "./ViewingOrders.css";
import { Link } from 'react-router-dom';



export class ViewingOrders extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }
    static displayName = ViewingOrders.name;
      componentDidMount() {
        fetch("/api/viewing-orders")
            .then(response => response.json())
            .then(_data => {
                this.setState({
                    data: _data
                })
            })
    }
    render() {
        return (
            
            <div >
                <div className="leftBlock"></div>
                <div className="rightBlock"></div>

                <div className="centerBlockTable">
                    <h3>Список заказов</h3>
                    <p>Для того чтобы посмотреть детали заказа кликните по номеру заказа.</p>
                <table>
                        <thead><tr><th>Номер заказа</th><th>Город отправителя</th><th>Город получателя</th><th></th></tr></thead>
                <tbody>{this.state.data.map(function (item, key) {
                    return (
                        <tr key={key} className="stroke">
                            <td><Link className="btn"  to={`/order/${item.id}`}>{item.order}</Link></td>
                            <td>{item.sendCity}</td>
                            <td>{item.recipCity}</td>
                        </tr>
                    )
                })}</tbody>
                </table></div>
                
       </div>);  
    }  
}

 

