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

const AdFilter = props => {
  const { onFilter, onSearch,masters, className, ...rest } = props;

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
        <Search
          className={classes.search}
          onSearch={onSearch}
        />
      </Grid>
      <Grid item>
        <Button
          className={classes.filterButton}
          color="primary"
          onClick={handleFilterOpen}
          size="small"
          variant="outlined"
        >
          <FilterListIcon className={classes.filterIcon} /> Advance filters
        </Button>
      </Grid>
      <Filter
        onClose={handleFilterClose}
        onFilter={onFilter}
        open={openFilter}
        masters={masters}
      />
    </Grid>
  );
};

AdFilter.propTypes = {
  className: PropTypes.string,
  onFilter: PropTypes.func,
  onSearch: PropTypes.func,
  masters: PropTypes.object
};

export default AdFilter;
