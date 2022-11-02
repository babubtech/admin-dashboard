import { createMuiTheme } from '@mui/material';

import palette from './palette';
import typography from './typography';
import overrides from './overrides';

const theme = createMuiTheme({
  palette,
  typography,
  overrides
});

export default theme;