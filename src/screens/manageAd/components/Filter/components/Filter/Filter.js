import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import {
  Button,
  Drawer,
  TextField,
  Grid,
  Typography
} from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
// import { NetworkContext } from '../../../../context/NetworkContext';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 100,
    label: '100',
  },
];

function valuetext(value) {
  return `${value}°C`;
}


const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  drawer: {
    width: 420,
    maxWidth: '100%'
  },
  header: {
    padding: theme.spacing(2, 1),
    display: 'flex',
    justifyContent: 'space-between'
  },
  buttonIcon: {
    marginRight: theme.spacing(1)
  },
  content: {
    padding: theme.spacing(0, 3),
    flexGrow: 1
  },
  contentSection: {
    padding: theme.spacing(2, 0)
  },
  contentSectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer'
  },
  contentSectionContent: {},
  formGroup: {
   
    padding: theme.spacing(2, 0)
  },
  fieldGroup: {
    display: 'flex',
    alignItems: 'center'
  },
  field: {
    marginTop: 0,
    marginBottom: 0
  },
  flexGrow: {
    flexGrow: 1
  },
  addButton: {
    marginLeft: theme.spacing(1)
  },
  tags: {
    marginTop: theme.spacing(1)
  },
  minAmount: {
    marginRight: theme.spacing(3)
  },
  maxAmount: {
    marginLeft: theme.spacing(3)
  },
  radioGroup: {},
  actions: {
    padding: theme.spacing(3),
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  },
  datePickerCss: {
    width: "100%",
    marginTop: 14,
    marginBottom: 6
  }
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  // backgroundColor: alpha(theme.palette.common.white, 0.15),
  // '&:hover': {
  //   backgroundColor: alpha(theme.palette.common.white, 0.25),
  // },
  marginRight: 0,
  // marginLeft: 0,
  width: '100%',
  // [theme.breakpoints.up('sm')]: {
  //   marginLeft: theme.spacing(3),
  //   width: 'auto',
  // },
  backgroundColor: "#e0e0e0",
  marginLeft: 10,

}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


const Filter = props => {
  const { open, onClose,masters, onFilter, className, ...rest } = props;
  // const { sendNetworkRequest } = React.useContext(NetworkContext);

  const classes = useStyles();

  const initialValues = {
      
  };

  const [expandProject, setExpandProject] = useState(true);
  const [expandCustomer, setExpandCustomer] = useState(false);
  const [values, setValues] = useState({ ...initialValues });
  const [subcommodity, setSubcommodity] = React.useState([]);

  const handleClear = () => {
    setValues({ 
      ...initialValues });
  };


  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleFieldChange = (event, field, value) => {
    event.persist && event.persist();
    setValues(values => ({
      ...values,
      [field]: value
    }));
  };
  const handleoptionchange = type => (event, value) => {
    if(type == 'commodity')
    {
      if(value)
      {
        // fetchsubcommodity(value.value)
        
      }else{
        setSubcommodity([])
        setValues(values => ({
          ...values,
          [subcommodity]: null
        }));
      }
    }
    setValues(values => ({
      ...values,
      [type]: value
    }));
  }
  // async function fetchsubcommodity(commodityID)
  // {
  //   let bodycontent = {
  //     commodityID
  //   }

  //   let commodity_arr = await sendNetworkRequest('/fetchsubcommodity', {}, bodycontent,false)
  //   setSubcommodity(commodity_arr)
  // }
  const handleinputchange = type => (e) => {
    setValues({
      ...values,
      [type]: e.target.value
    })
  }

  const handleDatechange = (type, val) => {
    setValues({
      ...values,
      [type]: val
    })
  }

  const handleTagAdd = () => {
    setValues(values => {
      const newValues = { ...values };

      if (newValues.tag && !newValues.tags.includes(newValues.tag)) {
        newValues.tags = [...newValues.tags];
        newValues.tags.push(newValues.tag);
      }

      newValues.tag = '';

      return newValues;
    });
  };

  const handleTagDelete = tag => {
    setValues(values => {
      const newValues = { ...values };

      newValues.tags = newValues.tags.filter(t => t !== tag);

      return newValues;
    });
  };
  const handleDateChange = type => (date) => {
    setValues({
      ...values,
      [type]: date
    })
  };
  const handleToggleProject = () => {
    setExpandProject(expandProject => !expandProject);
  };

  const handleToggleCustomer = () => {
    setExpandCustomer(expandCustomer => !expandCustomer);
  };

  const handleSubmit = event => {
    event.preventDefault();
   // alert(JSON.stringify(values))
    onFilter && onFilter(values);
    onClose && onClose()
  };

  const paymentStatusOptions = ['Pending', 'Canceled', 'Completed', 'Rejected'];
  const customerAgeOption = ['18 - 30', '30 - 45', '50 - 60', '60+'];

  return (
    <Drawer
      anchor="right"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant="temporary"
    >
      <form
        {...rest}
        className={clsx(classes.root, className)}
        onSubmit={handleSubmit}
      >
        <div className={classes.header}>
          <Typography style={{paddingLeft: 20, marginBottom: 10 }} variant={"h4"} >Filter</Typography>
          <Button
            onClick={onClose}
            size="small"
          >
            <CloseIcon className={classes.buttonIcon} />
          </Button>
        </div>
        <div className={classes.content}>
          <Grid container xs={12} spacing={1}>
            {/* <Grid item xs={12}> */}
              <Search style={{marginBottom: 12}} >
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            {/* </Grid> */}

            <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  autoComplete="off"
                  id="vendordeliverydays"
                  name="vendordeliverydays"
                  value={values.advisementId}
                  onChange={handleinputchange('advisementId')}
                  label="Advisement Id"
                />
            </Grid>


            <Grid item xs={12}>
            <Autocomplete
                  id="combo-box-demo"
                  options={[
                    {
                      value :1,
                      label: "Social media"
                    },
                    {
                      value :2,
                      label: "Podcast"
                    }
                  ]}
                  margin="dense"
                  fullWidth
                  value={values.category}
                  onChange={handleoptionchange('category')}
                  getOptionLabel={(option) => option.label}
                  renderInput={(params) => <TextField {...params} label={"Category"} fullWidth margin="dense" variant="outlined" />}
                /> 
            </Grid> 
               
            <Grid item xs={12}>
            <Autocomplete
                  // multiple
                  id="combo-box-demo"
                  options={[
                    {
                      value :"High",
                      label: "High"
                    },
                    {
                      value :'Medium',
                      label: "Medium"
                    },
                    {
                      value :'Low',
                      label: "Low"
                    }
                  ]}
                  margin="dense"
                  fullWidth
                  value={values.priority}
                 onChange={handleoptionchange('priority')}
                  getOptionLabel={(option) => option.label}
                  renderInput={(params) => <TextField {...params} label={"Priority"} fullWidth margin="dense" variant="outlined" />}
                /> 
            </Grid> 
            
            {/* user status */}
            <Grid item xs={12}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Status</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="Active" control={<Radio />} label="Active" />
                  <FormControlLabel value="inActive" control={<Radio />} label="inActive" />
                </RadioGroup>
              </FormControl>
            </Grid>
              </Grid>
        </div>
        <div className={classes.actions}>
          <Button
            fullWidth
            onClick={handleClear}
            variant={"text"}
          >
            <DeleteIcon className={classes.buttonIcon} />
            Clear
          </Button>
          <Button
            color="primary"
            fullWidth
            type="submit"
            variant="contained"
          >
            Apply filters
          </Button>
        </div>
      </form>
    </Drawer>
  );
};

Filter.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  onFilter: PropTypes.func,
  masters : PropTypes.object,
  open: PropTypes.bool.isRequired
};

export default Filter;
