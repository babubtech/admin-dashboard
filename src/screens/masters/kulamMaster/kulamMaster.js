import React, { useState } from 'react';
import { makeStyles } from "@mui/styles";
import { AddUserForm } from "./AddUser";
import { DataTable, SubFilter, SubHeader } from '../../../components';

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

const fromField = [
    {
        fieldType: "textField",
        name: "User Name",
        state: "user_name"
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

export const KulamMaster = props => {

    const classes = useStyles();
    
    const [dataList, setDataList] = useState([
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
        <SubHeader title={"Kulam Master"} buttonText={"Add Kulam Master"} handleAddOpen={handleClickOpen}/>
        
        <SubFilter 
            filter={{
                buttonName: "Advance filter",
                onFilter: ()=>null,
                formJson: fromField
            }}
            search={{
                placeholder: "Search by Kulam Name",
                onSearch: ()=>null
            }}
        />
        
        <DataTable 
            heading={"Kulam Master"}
            className={classes.results}
            orders={dataList}
            header={[{name: "S No"}, {name: "Kulam Name"}, {name: "Status"}, {name: "Edit", align: "right"}, {name: "Delete", align: "right"}]}
            dataList={[
                [
                    {
                        componentType: "count",
                        value: "1"
                    },
                    {
                        componentType: "text",
                        value: "Admin User"
                    },
                    {
                        componentType: "status",
                        value: "Active"
                    },
                    {
                        componentType: "editIcon",
                        align: "center"
                    },
                    {
                        componentType: "deleteIcon",
                        align: "center"
                    }
                ]
            ]}
        />

        <AddUserForm 
            descriptionElementRef={descriptionElementRef} 
            handleClickOpen={handleClickOpen}  
            handleClose={handleClose}
            open={open}
        />
       
    </div>
}