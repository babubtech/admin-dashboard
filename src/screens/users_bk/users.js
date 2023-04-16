import React, { useState } from 'react';
import { makeStyles } from "@mui/styles";
import { LocalStorageKeys } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../router/routes';
import { Header, Results, AddUserForm } from './components';
import {  SubFilter } from '../../components';

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

const formData = [
    {
        name: "Gender",
        state: "gender",
        id: "gender",
        fieldType: "select",
        options: [
            {
              value :1,
              label: "Male"
            },
            {
              value :2,
              label: "Female"
            }
        ]
    },
    {
        name: "City",
        state: "city",
        id: "city",
        fieldType: "select",
        options: [
            {
              value :"Chennai",
              label: "Chennai"
            },
            {
              value :'Delhi',
              label: "Delhi"
            },
            {
              value :'Mumbai',
              label: "Mumbai"
            },
            {
              value :'Bangalore',
              label: "Bangalore"
            },
            {
              value :'Hyderabad',
              label: "Hyderabad"
            },
            {
              value :'Ahmedabad',
              label: "AhmedabadHyderabad"
            }
        ]
    },
    {
        name: "Kulam",
        state: "kulam",
        id: "kulam",
        fieldType: "select",
        options: [
            {
              value :"Podiyan",
              label: "Podiyan"
            },
            {
              value :'Pavalan',
              label: "Pavalan"
            },
            {
              value :'Gounder',
              label: "Gounder"
            },
            {
              value :'kongu vellala gounder',
              label: "kongu vellala gounder"
            }
        ]
    },
    {
        name: "Country",
        state: "country",
        id: "country",
        fieldType: "select",
        options: [
            {
              value :"Afghanistan",
              label: "Afghanistan"
            },
            {
              value :'Albania',
              label: "Albania"
            },
            {
              value :'Belgium',
              label: "Belgium"
            },
            {
              value :'Bulgaria',
              label: "Bulgaria"
            },
            {
              value :'China',
              label: "China"
            },
            {
              value :'India',
              label: "India"
            }
        ]
    },
    {
        name: "Age rage",
        state: "age_rage",
        id: "Age rage",
        fieldType: "rangePicker",
        options: [
            {
              value: 0,
              label: '0',
            },
            {
              value: 100,
              label: '100',
            },
        ]
    },
    {
        name: "Company",
        state: "company",
        id: "company",
        fieldType: "textField"
    },
    {
        name: "Education Institute",
        state: "education_institute",
        id: "education_institute",
        fieldType: "textField"
    },
    {
        name: "Logged In Date",
        state: "logged_in_date",
        id: "logged_in_date",
        fieldType: "datePicker"
    },
    {
        name: "Onboard Date",
        state: "onboard_date",
        id: "onboard_date",
        fieldType: "datePicker"
    },
    {
        name: "Status",
        state: "status",
        id: "status",
        fieldType: "radioGroup",
        options: [
            {
                value: "Active",
                label: "Active"
            },
            {
                value: "In-Active",
                label: "In-Active"
            }
        ]
    }
]

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


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);

    React.useEffect(() => {
        if (open) {
             const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
            descriptionElement.focus();
        }
        }
    }, [open]);

    return <div className={classes.root}>

        <Header  handleAddOpen={handleClickOpen}/>
        <SubFilter 
            filter={{
                buttonName: "Advance filter",
                onFilter: ()=>null,
                formJson: formData
            }}
            search={{
                placeholder: "Search by Username, Email, Mobile, City",
                onSearch: ()=>null
            }}
        /> 
        <Results
            className={classes.results}
            orders={products} //
        />

        <AddUserForm 
            descriptionElementRef={descriptionElementRef} 
            handleClickOpen={handleClickOpen}  
            handleClose={handleClose}
            open={open}
        />
       
    </div>
}