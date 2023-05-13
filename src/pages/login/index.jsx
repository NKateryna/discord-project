import { useState, useContext } from 'react';
import Cookies from 'universal-cookie';
import { AuthContext } from '../../contexts/AuthContext';
import { Button, Input } from '@mui/material';
import styles from './index.module.css';
import ApplicationLogin from '../../common/layouts/ApplicationLogin';
import Link from '../../common/components/Link';
import HelpText from '../../common/components/HelpText';
import { useNavigate } from 'react-router-dom';

const buttonSX = {
  margin: '20px 0px 10px 0px',
};

function Login() {
  const [user, setUser] = useContext(AuthContext);
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [error, setError] = useState(false);
  const [textError, setTextError] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();

  const emailValueChange = (event) => {
    setEmailValue(event.target.value);
    setError(false);
  };
  const passwordValueChange = (event) => {
    setPasswordValue(event.target.value);
    setError(false);
  };

  const login = async () => {
    setisLoading(true);
    const cookies = new Cookies();
    const response = await fetch('http://localhost:80/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email: emailValue, password: passwordValue }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (data.code) {
      setTextError(data.message);
      setError(!error);
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
      {error && <HelpText error={true}>{textError}</HelpText>}
      <Button
        variant="contained"
        color="primary"
        sx={buttonSX}
        disableRipple={true}
        onClick={login}
        disabled={isLoading || !(emailValue && passwordValue)}
      >
        Log In
      </Button>
    </ApplicationLogin>
  );
}

export default Login;
