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
  const { open, onClose,masters, onFilter, className, formJson=null, ...rest } = props;

  const classes = useStyles();

  const initialValues = {
      
  };

  const [values, setValues] = useState({ ...initialValues });
  const [subcommodity, setSubcommodity] = React.useState([]);

  const handleClear = () => {
    setValues({ 
      ...initialValues });
  };


  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (type, newValue) => {
    debugger
    // setValue(newValue);
    setValues({
      ...values,
      [type]: newValue
    })
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

  const handleSubmit = event => {
    event.preventDefault();
   // alert(JSON.stringify(values))
    onFilter && onFilter(values);
    onClose && onClose()
  };

  const getFormField = (data) => {
    switch (data.fieldType) {
      case "textField":
        return <TextField
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  autoComplete="off"
                  id={data?.id??""}
                  name={data?.name??""}
                  value={values[data?.state]}
                  onChange={handleinputchange(data?.state)}
                  label={data?.name??""}
                />
      case "select":
        return(
          <Autocomplete
            id={data?.id??""}
            options={data?.options??[]}
            margin="dense"
            fullWidth
            value={values[data?.state]}
            onChange={handleoptionchange(data?.state)}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => <TextField {...params} label={data?.name??""} fullWidth margin="dense" variant="outlined" />}
          />
        )
      case "rangePicker":
        return(
          <Box sx={{ width: "100%", padding: "0px 10px" }}>
            <Typography>{data?.name??""}</Typography>
            <Slider
              getAriaLabel={() => 'Temperature range'}
              value={values[data?.state]??[20, 37]}
              onChange={(e, newValue)=>handleChange(data?.state, newValue)}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              marks={data?.options??[]}
              style={{marginBottom: "10px"}}
            />
          </Box>
        )
      case "datePicker":
        return(
          // <DatePicker
          //   className={classes.datePickerCss}
          //   label={data?.name??""}
          //   value={values[data?.state]??null}
          //   onChange={(newValue) => handleDatechange(data?.state, newValue)}
          //   renderInput={(params) => <TextField {...params} />}
          //   disableHighlightToday
          //   disablePast
          //   inputFormat={"DD/MM/YYYY"}
          // />
          ""
        )
      case "radioGroup":
        return(
          <FormControl>
            <FormLabel id={data?.id}>{data?.name}</FormLabel>
            <RadioGroup
              row
              aria-labelledby={data?.id}
              name="row-radio-buttons-group"
            >
              {data.options.map(val => {
                return(
                  <FormControlLabel value={val.value} control={<Radio />} label={val.label} />
                )
              })}
            </RadioGroup>
          </FormControl>
        )
      default:
        break;
    }
  }


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

              {/* <Search style={{marginBottom: 12}} >
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search> */}

              {formJson && formJson.map(data => {
                return(
                  <Grid item xs={12}>
                      {getFormField(data)}
                  </Grid>
                )
              })}
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
  open: PropTypes.bool.isRequired,
  formJson: PropTypes.array,
};

export default Filter;
