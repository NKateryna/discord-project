import {
  StatusActiveIcon,
  StatusDoNotDisturbIcon,
  StatusInactiveIcon,
  StatusInvisibleIcon,
} from '../icons';

function CreateStatus(status, styleIconHover, className) {
  switch (status) {
    case 'ONLINE':
      return <StatusActiveIcon />;
    case 'OFFLINE':
      return (
        <StatusInvisibleIcon style={styleIconHover} className={className} />
      );
    case 'AWAY':
      return (
        <StatusInactiveIcon style={styleIconHover} className={className} />
      );
    case 'BUSY':
      return <StatusDoNotDisturbIcon />;
    default:
      return (
        <StatusInvisibleIcon style={styleIconHover} className={className} />
      );
  }
}

export default CreateStatus;
