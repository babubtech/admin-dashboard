import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import { Paper, Button, Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  search: {
    flexGrow: 1,
    height: 42,
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center'
  },
  searchIcon: {
    marginRight: theme.spacing(2),
    color: theme.palette.icon
  },
  searchInput: {
    flexGrow: 1
  },
  searchButton: {
    marginLeft: theme.spacing(2)
  }
}));

const Search = props => {
  const { onSearch, className, ...rest } = props;

  const classes = useStyles();
  const [searchcontent, setSearchcontent] = React.useState('');

  const handleinputchange = type => (e) => {
    setSearchcontent(e.target.value)
  }
  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Paper
        className={classes.search}
        elevation={1}
      >
        <SearchIcon className={classes.searchIcon} />
        <Input
          className={classes.searchInput}
          disableUnderline
          onChange={handleinputchange('searchcontent')}
          placeholder="Search by Ad Id, Category"
        />
      </Paper>
      <Button
        className={classes.searchButton}
        onClick={() => onSearch(searchcontent)}
        size="large"
        variant="contained"
      >
        Search
      </Button>
    </div>
  );
};

Search.propTypes = {
  className: PropTypes.string,
  onSearch: PropTypes.func
};

export default Search;
