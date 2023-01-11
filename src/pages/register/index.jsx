import { useState } from 'react';
import { Button, Input, MenuItem } from '@mui/material';
import { makeStyles } from '@mui/styles';
import styles from './index.module.css';
import ApplicationLogin from '../../common/layouts/ApplicationLogin';
import Link from '../../common/components/Link';
import Select from '../../common/components/Select';
import dataSelects from './data-selects';
import CheckboxSingle from '../../common/components/CheckboxSingle';

const useStyles = makeStyles({
  select: {
    width: 125,
  },
  monthSelect: {
    width: 146,
    margin: '0 10px',
  },
  selectMenuItem: {
    width: 122,
  },
  montSelecthMenuItem: {
    width: 143,
  },
  paper: {
    borderStyle: 'solid',
    borderRadius: '4px',
    borderWidth: '1px',
    borderColor: 'var(---gray-4)',
    '&::-webkit-scrollbar': {
      width: '8px',
      backgroundColor: 'var(---gray-2)',
      position: 'absolute',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'var(---gray-4)',
      height: '40px',
      width: '6px',
      borderRadius: '30%',
      border: '2px solid var(---gray-2)',
      borderTop: '4px solid var(---gray-2)',
      borderBottom: '4px solid var(---gray-2)',
    },
  },
});

const menuPropsStyle = {
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'center',
  },
  transformOrigin: {
    vertical: 'bottom',
    horizontal: 'center',
  },
};

function Register() {
  const classes = useStyles();
  const selectsItems = dataSelects;

  const [emailValue, setEmailValue] = useState('');
  const [userNameValue, setUserNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [dayValue, setDayValue] = useState('');
  const [monthValue, setMonthValue] = useState('');
  const [yearValue, setYearValue] = useState('');
  const [checkedValue, setCheckedValue] = useState([false, true]);

  const emailValueChange = (event) => {
    setEmailValue(event.target.value);
  };
  const userNameValueChange = (event) => {
    setUserNameValue(event.target.value);
  };
  const passwordValueChange = (event) => {
    setPasswordValue(event.target.value);
  };
  const dayValueChange = (event) => {
    setDayValue(event.target.value);
  };
  const monthValueChange = (event) => {
    setMonthValue(event.target.value);
  };
  const yearValueChange = (event) => {
    setYearValue(event.target.value);
  };
  const receiveEmailsCheckedChange = (event) => {
    setCheckedValue([event.target.checked, event.target.checked]);
  };
  return (
    <ApplicationLogin
      title={'Create an account'}
      link={<Link children={'Already have an account?'} href={'/login'} />}
    >
      <div className={styles.caption}>EMAIL</div>
      <Input
        value={emailValue}
        onChange={emailValueChange}
        type={'email'}
        id={'id'}
        required={true}
        size={'small'}
        disableUnderline={true}
      />
      <div className={styles.caption}>USERNAME</div>
      <Input
        value={userNameValue}
        onChange={userNameValueChange}
        type={'text'}
        id={'username'}
        required={true}
        size={'small'}
        disableUnderline={true}
      />
      <div className={styles.caption}>PASSWORD</div>
      <Input
        value={passwordValue}
        onChange={passwordValueChange}
        type={'password'}
        id={'password'}
        required={true}
        size={'small'}
        disableUnderline={true}
      />
      <div className={styles.caption}>DATE OF BIRTH</div>
      <div className={styles.boxSelects}>
        <Select
          value={dayValue}
          onChange={dayValueChange}
          label="day"
          placeholder="Day"
          MenuProps={{
            anchorOrigin: menuPropsStyle.anchorOrigin,
            transformOrigin: menuPropsStyle.transformOrigin,
            classes: {
              paper: classes.paper,
            },
          }}
          className={classes.select}
        >
          {selectsItems.day.map((a) => (
            <MenuItem
              key={a}
              value={a}
              className={classes.selectMenuItem}
              disableTouchRipple={true}
            >
              {a}
            </MenuItem>
          ))}
        </Select>
        <Select
          value={monthValue}
          onChange={monthValueChange}
          label="month"
          placeholder="Month"
          MenuProps={{
            anchorOrigin: menuPropsStyle.anchorOrigin,
            transformOrigin: menuPropsStyle.transformOrigin,
            classes: {
              paper: classes.paper,
            },
          }}
          className={classes.monthSelect}
        >
          {selectsItems.month.map((a) => (
            <MenuItem
              key={a}
              value={a}
              className={classes.montSelecthMenuItem}
              disableTouchRipple={true}
            >
              {a}
            </MenuItem>
          ))}
        </Select>
        <Select
          required
          value={yearValue}
          onChange={yearValueChange}
          label="year"
          placeholder="Year"
          MenuProps={{
            anchorOrigin: menuPropsStyle.anchorOrigin,
            transformOrigin: menuPropsStyle.transformOrigin,
            classes: {
              paper: classes.paper,
            },
          }}
          className={classes.select}
        >
          {selectsItems.year.map((a) => (
            <MenuItem
              key={a}
              value={a}
              className={classes.selectMenuItem}
              disableTouchRipple={true}
            >
              {a}
            </MenuItem>
          ))}
        </Select>
      </div>
      <CheckboxSingle
        checked={checkedValue[0]}
        onChange={receiveEmailsCheckedChange}
        required={true}
        label="(Optional) It’s okay to send me emails with Discord updates, tips, and special offers. You can opt out at any time."
        sxFormControl={{ width: '369px' }}
        sxCheckbox={{ margin: '20px 8px 20px 0px' }}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ marginBottom: '10px' }}
        disableRipple={true}
      >
        Continue
      </Button>
    </ApplicationLogin>
  );
}

export default Register;
