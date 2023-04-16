import React from "react";


export const SnackBarContext = React.createContext({
    open: false,
    type: '',
    msg: '',
    vertical: 'top',
    horizontal: 'center',
    onclose: () => null,
    setSnack: () => null
})