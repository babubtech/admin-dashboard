import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import { Grid, Button } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

import { Search, Filter } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  search: {
    flexGrow: 1,
    maxWidth: 480,
    flexBasis: 480
  },
  filterButton: {
    marginLeft: 'auto'
  },
  filterIcon: {
    marginRight: theme.spacing(1)
  }
}));

const SubFilter = props => {
  const { filter = {}, search = {},is_fiter = false, masters, className, ...rest } = props;
  const { onSearch = ()=>null, placeholder = "search" } = search;
  const { onFilter = ()=>null, buttonName = "", formJson=null} = filter;

  const classes = useStyles();

  const [openFilter, setOpenFilter] = useState(false);

  const handleFilterOpen = () => {
    setOpenFilter(true);
  };

  const handleFilterClose = () => {
    setOpenFilter(false);
  };

  return (
    <Grid
      {...rest}
      className={clsx(classes.root, className)}
      container
      spacing={3}
    >
      <Grid item>
        {Object.keys(search).length > 0 &&
          <Search
            className={classes.search}
            onSearch={onSearch}
            placeholder={placeholder}
          /> 
        }
      </Grid>
      {is_fiter && <Grid item>
        {Object.keys(filter).length > 0 &&
          <Button
            className={classes.filterButton}
            color="primary"
            onClick={handleFilterOpen}
            size="small"
            variant="outlined"
          >
            <FilterListIcon className={classes.filterIcon} />
            {buttonName}
          </Button>
        }
      </Grid>}
    <Filter
        onClose={handleFilterClose}
        onFilter={onFilter}
        open={openFilter}
        formJson={formJson}
      />
    </Grid>
  );
};

SubFilter.propTypes = {
  className: PropTypes.string,
  onFilter: PropTypes.func,
  masters: PropTypes.object,
  search: {
    placeholder: PropTypes.string,
    onSearch: PropTypes.func,
  }
};

export default SubFilter;
