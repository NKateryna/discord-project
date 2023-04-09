import { useContext, useState, useEffect } from 'react';
import { Tabs, Tab } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { stylesMUI } from './styles';
import { FriendsPagesContext } from '../../../contexts/FriendsPagesContext';

const useStyles = makeStyles(stylesMUI);

function FriendsPagesTabs() {
  const [value, setValue] = useContext(FriendsPagesContext);
  const classes = useStyles();
  const [notifications, setNotifications] = useState(null);

  useEffect(() => {
    setNotifications(null);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor={'transparent'}
      >
        <Tab label="Online" disableFocusRipple={true} disableRipple={true} />
        <Tab label="All" disableFocusRipple={true} disableRipple={true} />
        <Tab
          label="Pending"
          disableFocusRipple={true}
          disableRipple={true}
          iconPosition={'end'}
          icon={
            notifications ? (
              <div className={classes.notifications}>{notifications}</div>
            ) : null
          }
        />
        <Tab label="Blocked" disableFocusRipple={true} disableRipple={true} />
        <Tab
          label="Add friend"
          disableFocusRipple={true}
          disableRipple={true}
          className={classes.tabGreen}
        ></Tab>
      </Tabs>
    </div>
  );
}

export default FriendsPagesTabs;
