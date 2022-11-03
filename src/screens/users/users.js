import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { LocalStorageKeys } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../router/routes';
import { Header, Results } from './components';
import {  ProductFilter } from '../../components';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '100%',
        padding: theme.spacing(3)
    },
    results: {
      marginTop: theme.spacing(3)
    }
}))

export const Users = props => {

    const navigate = useNavigate();
    const classes = useStyles();
    const [masters, setMasters] = useState({});

    const [products, setproductsOrders] = useState([
        {
          product_image : "test.png",
          product_name : "Milk",
          product_id : "BBM0001",
          purchase_price : '30',
          selling_price : "35",
          tax : "3",
          current_stock : 100,
          sku_count : 10,
          category : "Milk",
          brand : "Aavin",
          status : 'active',
          createdAt : new Date(),
  
  
  
        }
    ]);

    const onLogOut = () => {
        localStorage.removeItem(LocalStorageKeys.authToken);
        navigate(AppRoutes.login);
    }

    return <div className={classes.root}>
        <Header />
        <ProductFilter masters={masters} onSearch={()=>null} onFilter={()=>{}}/> 
        <Results
            className={classes.results}
            orders={products} //
        />
    </div>
}