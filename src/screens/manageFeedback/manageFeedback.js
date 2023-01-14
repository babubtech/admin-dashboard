import React, { useState } from 'react';
import { makeStyles } from "@mui/styles";
import { useNavigate } from 'react-router-dom';
import { Header, Results, AdFilter } from './components';

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

export const ManageFeedback = props => {

    const navigate = useNavigate();
    const classes = useStyles();
    const [masters, setMasters] = useState({});

    const [products, setproductsOrders] = useState([
        {
          type : "Issue in app",
          comment : "I can't able to post",
          screenshot : 'https://picsum.photos/200/300?random=1',
          status : 'active',
          createdAt : new Date(),
          priority: "High"
        },
        {
            type : "Issue in app",
            comment : "I can't able to post",
            screenshot : 'https://picsum.photos/200/300?random=1',
            status : 'active',
            createdAt : new Date(),
            priority: "High"
          },
          {
            type : "Issue in app",
            comment : "I can't able to post",
            screenshot : 'https://picsum.photos/200/300?random=1',
            status : 'active',
            createdAt : new Date(),
            priority: "High"
          },
          {
            type : "Issue in app",
            comment : "I can't able to post",
            screenshot : 'https://picsum.photos/200/300?random=1',
            status : 'active',
            createdAt : new Date(),
            priority: "High"
          },
          {
            type : "Issue in app",
            comment : "I can't able to post",
            screenshot : 'https://picsum.photos/200/300?random=1',
            status : 'active',
            createdAt : new Date(),
            priority: "High"
          }
    ]);

    return <div className={classes.root}>
        <Header />
        {/* <AdFilter masters={masters} onSearch={()=>null} onFilter={()=>{}}/> */}
        <Results
            className={classes.results}
            orders={products} //
        />
    </div>
}