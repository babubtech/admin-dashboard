import React from 'react';
import { API_URL } from '../config';

const TOKEN = 'auth_token'

const initialNetworkCtx = {
    networkCtx: {
        mapper: {},
        status: { called: false, data: [], loading: true, error: false, parsedData: [] },
        notRequested: true
    },
    setNetworkCtx: () => null,
    sendNetworkRequest: () => null
}

const sendNetworkRequest = async (url, params, data, auth = false) => {

    url = API_URL+url;

    console.info('URL', url, data)
    const method = data ? 'POST' : 'GET', 
        headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        };
    let resdata = null;
    if(auth){
        const token = localStorage.getItem(TOKEN)

        if(token) headers["auth"] = token
       else window.location = '/'
    }
    const response = await fetch(url, {
        method, body:  JSON.stringify(data), headers
    })
    if(response.status < 400){
        resdata = await response.json();
    } else {
        alert(`${response.status}:${response.statusText} - Unable to complete your request to \n${url}`)
    }
    return resdata;
}

export const NetworkContext = React.createContext(initialNetworkCtx);

export const NetworkConsumer = NetworkContext.Consumer;

export const NetworkProvider = (props) => {

    const [ networkCtx, setNetworkCtx ] = React.useState(initialNetworkCtx.networkCtx);

    return(
        <NetworkContext.Provider value={{ networkCtx, setNetworkCtx, sendNetworkRequest }} >
            {props.children}
        </NetworkContext.Provider>
    )
}