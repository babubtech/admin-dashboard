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

export const ManageAd = props => {

    const navigate = useNavigate();
    const classes = useStyles();
    const [masters, setMasters] = useState({});

    const [products, setproductsOrders] = useState([
        {
          image : "https://picsum.photos/200/300?random=1",
          id : "AD1290",
          url : "https://picsum.photos/200/300?random=1",
          category : 'Social media',
          description : "Social media post and Ad's for rolling on feed's",
          status : 'active',
          createdAt : new Date(),
          priority: "High"
        }
    ]);

    return <div className={classes.root}>
        <Header />
        <AdFilter masters={masters} onSearch={()=>null} onFilter={()=>{}}/>
        <Results
            className={classes.results}
            orders={products} //
        />
    </div>
}