import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Typography,
  colors
} from '@mui/material';

// import axios from 'utils/axios';
import { GenericMoreButton } from '../../../../components';
import { Chart } from './components';


const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0,
    '&:last-child': {
      paddingBottom: 0
    }
  },
  chartContainer: {
    padding: theme.spacing(3)
  },
  chart: {
    height: 281
  },
  statsContainer: {
    display: 'flex'
  },
  statsItem: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(3, 2),
    '&:not(:last-of-type)': {
      borderRight: `1px solid ${theme.palette.divider}`
    }
  }
}));

const EarningsSegmentation = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const [earnings, setEarnings] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchEarnings = () => {
      // axios.get('/api/dashboard/earnings').then(response => {
      //   if (mounted) {
      //     setEarnings(response.data.earnings);
      //   }
      // });

      setEarnings([
        {
          id: 1,
          label: 'Active User',
          value: 56,
          color: colors.indigo[500]
        },
        {
          id: 12,
          label: 'New User',
          value: 24,
          color: colors.indigo[300]
        }
      ])

    };

    fetchEarnings();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        // action={<GenericMoreButton />}
        title="Active User Stats"
      />
      <Divider />
      <CardContent className={classes.content}>
        <div className={classes.chartContainer}>
          <Chart
            className={classes.chart}
            data={earnings}
          />
        </div>
        <Divider />
        <div className={classes.statsContainer}>
          {earnings.map(earning => (
            <div
              className={classes.statsItem}
              key={earning.id}
            >
              <Typography
                align="center"
                component="h6"
                gutterBottom
                variant="overline"
              >
                {earning.label}
              </Typography>
              <Typography
                align="center"
                variant="h4"
              >
                {earning.value}%
              </Typography>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

EarningsSegmentation.propTypes = {
  className: PropTypes.string
};

export default EarningsSegmentation;
