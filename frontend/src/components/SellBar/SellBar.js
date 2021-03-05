import React, {useCallback, useContext, useState} from 'react';
import { Navbar, Nav, Dropdown, Icon, Button } from 'rsuite';
// import UserContext from '../../UserContext';
// import logo from '../../assets/dbs.png';
import './SellBar.css';
import { useHistory } from "react-router-dom";
import {store} from '../../index';
import { connect } from "react-redux";
import * as actions from '../../actions';

const mapStatetoProps = (state) => {
    return state;
}

const mapDispatchtoProps = (dispatch) => {
    return {
        submitSell: async (token, val) => {
            const fields = {
                token: token,
                value: val
            }
            return await dispatch(actions.thunkBuySell(fields));
        }
    }

}

const SellBar = ({submitSell}) => {
    const [value, setValue] = useState();
    const token = "b4c39a64-7369-4784-bdbf-57eb2f7b2213";
    //const [cashBalance, setCashBalance] = useState(0);
    //const [accountKey, setAccountKey] = useState(0);
    //const token = store.getState().userReducer.accountKey

    const handleSubmit = async() =>{
        console.log(value);
        const result = await submitSell(token, parseFloat(value));
    }
    

    return(
        <div className= "wrapper">
            <div className = "sellbar">
            <label className = "sell-text" htmlFor="dropdown">Sell</label>
                <select className = "dropdown" name="dropdown" id="dropdown">
                        <option value="TTK">TTK</option>
                </select>
            <label className = 'with-text' htmlFor="formValue">Units</label>
            <input className = "value-box" type="number" step="0.01" name="value" onChange={event => setValue(event.target.value)} />
            <button className ="submit-button" onClick={handleSubmit}>Sell</button>
            </div>
        </div>
    )
}

export default connect(mapStatetoProps, mapDispatchtoProps)(SellBar);