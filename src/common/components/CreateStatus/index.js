import {
  StatusActiveIcon,
  StatusDoNotDisturbIcon,
  StatusInactiveIcon,
  StatusInvisibleIcon,
} from '../icons';

function CreateStatus(status) {
  switch (status) {
    case 'ONLINE':
      return <StatusActiveIcon />;
    case 'OFFLINE':
      return <StatusInvisibleIcon />;
    case 'AWAY':
      return <StatusInactiveIcon />;
    case 'BUSY':
      return <StatusDoNotDisturbIcon />;
    default:
      return <StatusInvisibleIcon />;
  }
}

export default CreateStatus;
