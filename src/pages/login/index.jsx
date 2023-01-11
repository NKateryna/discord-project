import { useState } from 'react';
import { Button, Input } from '@mui/material';
import styles from './index.module.css';
import ApplicationLogin from '../../common/layouts/ApplicationLogin';
import Link from '../../common/components/Link';

function Login() {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const emailValueChange = (event) => {
    setEmailValue(event.target.value);
  };
  const passwordValueChange = (event) => {
    setPasswordValue(event.target.value);
  };

  return (
    <ApplicationLogin
      title={'Welcome back!'}
      subtitle={'We’re so excited to se you there!'}
      helpText={'Need an account?'}
      link={<Link children={'Register'} href={'/register'} />}
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
      <Button
        variant="contained"
        color="primary"
        sx={{ margin: '20px 0px 10px 0px' }}
        disableRipple={true}
      >
        Log In
      </Button>
    </ApplicationLogin>
  );
}

export default Login;
