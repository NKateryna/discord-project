import {
  StatusActiveIcon,
  StatusDoNotDisturbIcon,
  StatusInactiveIcon,
  StatusInvisibleIcon,
} from '../icons';

function CreateStatus(status, styleIconHover) {
  switch (status) {
    case 'ONLINE':
      return <StatusActiveIcon />;
    case 'OFFLINE':
      return <StatusInvisibleIcon style={styleIconHover} />;
    case 'AWAY':
      return <StatusInactiveIcon style={styleIconHover} />;
    case 'BUSY':
      return <StatusDoNotDisturbIcon />;
    default:
      return <StatusInvisibleIcon style={styleIconHover} />;
  }
}

export default CreateStatus;
