import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import SearchIcon from '@material-ui/icons/Search';
import '../styles/form_dialog.css';

export function FormDialog() {
  const [open, setOpen] = useState(false);
  const [addr, setAddr] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(blue[600]),
      backgroundColor: blue[600],
      '&:hover': {
        backgroundColor: blue[800],
      },
    },
  }))(Button);

  const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: blue[600],
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: blue[600],
      },
    },
  })(TextField);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    
  };

  const checkFilled = () => {
    return addr != '' && city != '' && state != '' && zip != '';
  }

  return (
    <div>
      <ColorButton 
        id='form-button'
        variant="contained" 
        color="primary" 
        className={classes.margin} 
        onClick={handleClickOpen}
      >
        <SearchIcon />
      </ColorButton>

      <Dialog 
        open={open} 
        onClose={handleClose} 
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Your Address</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Type your address into the fields below. This will find your GPS
            location and measure the density of pedestrians around your 
            area.
          </DialogContentText>

          <TextField
            required
            value={addr}
            margin="dense"
            id="street_address"
            label="Street Address"
            onChange={(e) => setAddr(e.target.value)}
            fullWidth
          />
          <TextField
            required
            value={city}
            margin="dense"
            id="city"
            label="City"
            onChange={(e) => setCity(e.target.value)}
            fullWidth
          />
          <TextField
            required
            value={state}
            margin="dense"
            id="state"
            label="State"
            onChange={(e) => setState(e.target.value)}
            fullWidth
          />
          <TextField
            required
            value={zip}
            margin="dense"
            id="zip_code"
            label="Zip Code"
            type="number"
            onChange={e => setZip(e.target.value)}
            fullWidth
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>

          {
          checkFilled() ? 
            <Button onClick={handleClose} color="primary">
              Compute Density
            </Button>
            :
            <Button disabled color='primary'>
              Compute Density
            </Button>
          }

        </DialogActions>
      </Dialog>

    </div>
  );
}
