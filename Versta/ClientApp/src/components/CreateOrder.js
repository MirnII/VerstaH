import React, { Component } from 'react';
import Rand from "random-string";
import "./CreateOrder.css";

var order;

function Random() {
    order = Rand({
        length: 8,
        numeric: true,
        letters: false,
        special: false
    });
}
async function createOrder(order, sendCity, sendAddress, recipCity, recipAddress, cargoWeight, pickupDate) {

   
    const response = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
            order: order,
            sendCity: sendCity,
            sendAddress: sendAddress,
            recipCity: recipCity,
            recipAddress: recipAddress,
            cargoWeight: cargoWeight,
            pickupDate: pickupDate
        })
    });
    if (response.ok === true) {
        await response.json();
        alert(`Вы успешно создали заказ, запомните номер заказа: ${order}`);
    }
    else {
        const error = await response.json();
        console.log(error);
    }
}

class OrderForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: '',
            sendCity: '',
            sendAddress: '',
            recipCity: '',
            recipAddress: '',
            cargoWeight: '',
            pickupDate: '',
            formError: { 
                sendCity: '',
                sendAddress: '',
                recipCity: '',
                recipAddress: '',
                cargoWeight: '',
                pickupDate: ''
            },
            sendCV: false,
            sendAV: false,
            recipCV: false,
            recipAV: false,
            cargoWV: false,
            pickupDV: false,
            formValid: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this); 
    }
    onChange(e) {
        var name = e.target.name;
        var val = e.target.value;
        this.setState({ [name]: val }, () => { this.validate(name, val) });
    }
    validate(name, value) {
        let validateForm = this.state.formError;
        let sendCV = this.state.sendCV;
        let sendAV = this.state.sendAV;
        let recipCV = this.state.recipCV;
        let recipAV = this.state.recipAV;
        let cargoWV = this.state.cargoWV;
        let pickupDV = this.state.pickupDV;

        switch (name) {
            case 'sendCity':
                sendCV = value.length > 2;
                validateForm.sendCity = sendCV ? "" : "Укажите город отправителя";
                break;
            case 'sendAddress':
                sendAV = value.length > 2;
                validateForm.sendAddress = sendAV ? "" : "Укажите адрес отправителя";
                break;
            case 'recipCity':
                recipCV = value.length > 2;
                validateForm.recipCity = recipCV ? "" : "Укажите город получателя";
                break;
            case 'recipAddress':
                recipAV = value.length > 2;
                validateForm.recipAddress = recipAV ? "" : "Укажите адрес получателя";
                break;
            case 'cargoWeight':
                cargoWV = value > 0;
                validateForm.cargoWeight = cargoWV ? "" : "Укажите вес груза в килограммах";
                break;
            case 'pickupDate':
                pickupDV = value.match(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/) && value >= new Date().toLocaleDateString();
                validateForm.pickupDate = pickupDV ? "" : "Укажите дату в формате ДД/ММ/ГГГГ";
                break;

        }this.setState({
            formError: validateForm,
            sendCV: sendCV,
            sendAV: sendAV,
            recipCV: recipCV,
            recipAV: recipAV,
            cargoWV: cargoWV,
            pickupDV: pickupDV
        }, this.validateForm);
    
    }
    validateForm() {
        this.setState({
            formValid: this.state.sendCV &&
                this.state.sendAV &&
                this.state.recipCV &&
                this.state.recipAV &&
                this.state.cargoWV &&
            this.state.pickupDV
        });
    }
    handleSubmit(e) {
            e.preventDefault();
            Random();
            createOrder(order, this.state.sendCity, this.state.sendAddress, this.state.recipCity, this.state.recipAddress, this.state.cargoWeight, this.state.pickupDate)
            this.setState({
                order: "",
                sendCity: "",
                sendAddress: "",
                recipCity: "",
                recipAddress: "",
                cargoWeight: "",
                pickupDate: ""
            });
    }
    render() {
        return (
            <div>
                <div className="leftBlock"></div>
                <div className="rightBlock"></div>
            <form onSubmit={this.handleSubmit} className="form">
                    <h2 className="headForm">Создание заказа</h2>
                    <label>Город отправителя: <p className="error">{this.state.formError.sendCity}</p></label><br />
                    <input type="text" name="sendCity" value={this.state.sendCity} onChange={this.onChange}></input><br />
                    <label>Адрес отправителя: <p className="error">{this.state.formError.sendAddress}</p></label><br />
                    <input type="text" name="sendAddress" value={this.state.sendAddress} onChange={this.onChange}></input><br />
                    <label>Город получателя: <p className="error">{this.state.formError.recipCity}</p></label><br />
                    <input type="text" name="recipCity" value={this.state.recipCity} onChange={this.onChange}></input><br />
                    <label>Адрес полчателя: <p className="error">{this.state.formError.recipAddress}</p></label><br />
                    <input type="text" name="recipAddress" value={this.state.recipAddress} onChange={this.onChange}></input><br />
                    <label>Вес груза: <p className="error">{this.state.formError.cargoWeight}</p></label><br />
                    <input type="text" name="cargoWeight" value={this.state.cargoWeight} onChange={this.onChange}></input><br />
                    <label>Дата забора заказа: <p className="error">{this.state.formError.pickupDate}</p></label><br />
                    <input  type="text" name="pickupDate" value={this.state.pickupDate} onChange={this.onChange}></input><br />
                    <input className="buttonSubmit" disabled={!this.state.formValid} type="submit" value="Отправить"></input>
                </form>
                
            </div>
        );
    }

}
export class CreateOrder extends Component {
    static displayName = CreateOrder.name;
    render() {  
        return (
            <div>
                <OrderForm />
            </div>
            )
    }
}
  