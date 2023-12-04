import { useState, useEffect, useContext } from 'react';
import Cookies from 'universal-cookie';
import { AuthContext } from '../../contexts/AuthContext';
import { Button, Input, MenuItem } from '@mui/material';
import { makeStyles } from '@mui/styles';
import styles from './index.module.css';
import { stylesMUI, menuPropsStyle, sx } from './styles';
import ApplicationLogin from '../../common/layouts/ApplicationLogin';
import Link from '../../common/components/Link';
import Select from '../../common/components/Select';
import CheckboxSingle from '../../common/components/CheckboxSingle';
import HelpText from '../../common/components/HelpText';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(stylesMUI);

function Register() {
  const [, setUser] = useContext(AuthContext);
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
  const [error, setError] = useState(false);
  const [textError, setTextError] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();

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
    // eslint-disable-next-line
  }, [monthValue, yearValue]);

  const emailValueChange = (event) => {
    setEmailValue(event.target.value);
    setError(false);
  };
  const userNameValueChange = (event) => {
    setUserNameValue(event.target.value);
    setError(false);
  };
  const passwordValueChange = (event) => {
    setPasswordValue(event.target.value);
    setError(false);
  };
  const dayValueChange = (event) => {
    setDayValue(event.target.value);
    setError(false);
  };
  const monthValueChange = (event) => {
    setMonthValue(event.target.value);
    setError(false);
  };
  const yearValueChange = (event) => {
    setYearValue(event.target.value);
    setError(false);
  };
  const receiveEmailsCheckedChange = (event) => {
    setCheckedValue([event.target.checked, event.target.checked]);
    setError(false);
  };

  const register = async () => {
    setisLoading(true);
    setError(false);

    const birthDate = new Date(
      `${monthValue}/${dayValue}/${yearValue} EDT`
    ).toISOString();

    const cookies = new Cookies();
    const response = await fetch('http://localhost:80/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        email: emailValue,
        username: userNameValue,
        password: passwordValue,
        birthDate: birthDate,
        acceptNotifications: checkedValue[0],
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (data.code) {
      setTextError(data.message);
      setError(true);
    }

    cookies.set('authToken', data.accessToken, { path: '/' });
    const { accessToken, ...userData } = data;
    setUser(userData);
    setisLoading(false);

    if (cookies.cookies?.authToken !== undefined) {
      navigate('/channels/@me');
    }
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
      {error && <HelpText error={true}>{textError}</HelpText>}
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
        onClick={register}
        disabled={
          isLoading ||
          !(
            emailValue &&
            userNameValue &&
            passwordValue &&
            monthValue >= 0 &&
            dayValue &&
            yearValue
          )
        }
      >
        Continue
      </Button>
    </ApplicationLogin>
  );
}

export default Register;
