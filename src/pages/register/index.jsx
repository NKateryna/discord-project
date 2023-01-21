import { useState } from 'react';
import { Button, Input, MenuItem } from '@mui/material';
import { makeStyles } from '@mui/styles';
import styles from './index.module.css';
import { stylesMUI, menuPropsStyle, sx } from './styles';
import ApplicationLogin from '../../common/layouts/ApplicationLogin';
import Link from '../../common/components/Link';
import Select from '../../common/components/Select';
import CheckboxSingle from '../../common/components/CheckboxSingle';
import { useEffect } from 'react';

const useStyles = makeStyles(stylesMUI);

function Register() {
  const classes = useStyles();

  const [emailValue, setEmailValue] = useState('');
  const [userNameValue, setUserNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [dayValue, setDayValue] = useState('');
  const [monthValue, setMonthValue] = useState('');
  const [yearValue, setYearValue] = useState('');
  const [checkedValue, setCheckedValue] = useState([false, true]);
  const today = new Date();
  const [daySelectsItems, setDaySelectItems] = useState(
    new Array(31).fill(0).map((_, i) => i + 1)
  );
  const monthSelectsItems = new Array(12).fill(0).map((_, i) =>
    new Date(today.getFullYear(), i).toLocaleString('en-US', {
      month: 'long',
    })
  );
  const yearSelectsItems = new Array(149)
    .fill(0)
    .map((_, i) => today.getFullYear() - (3 + i));

  useEffect(() => {
    const numberOfDays = new Date(
      yearValue || today.getFullYear(),
      (monthValue || today.getUTCMonth()) + 1,
      0
    ).getDate();
    setDaySelectItems(new Array(numberOfDays).fill(0).map((_, i) => i + 1));
    if (dayValue && dayValue > numberOfDays) {
      setDayValue('');
    }
  }, [monthValue, yearValue]);

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
          {daySelectsItems.map((a) => (
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
          {monthSelectsItems.map((a, id) => (
            <MenuItem
              key={a}
              value={id}
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
          {yearSelectsItems.map((a) => (
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
        sxFormControl={sx.FormControl}
        sxCheckbox={sx.Checkbox}
      />
      <Button
        variant="contained"
        color="primary"
        sx={sx.Button}
        disableRipple={true}
      >
        Continue
      </Button>
    </ApplicationLogin>
  );
}

export default Register;
