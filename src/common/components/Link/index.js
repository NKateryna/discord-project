import { Link } from '@mui/material';

function LinkDefault({ sx, children, href, underline = 'none' }) {
  return (
    <Link sx={sx} href={href} underline={underline} target="_blank">
      {children}
    </Link>
  );
}

export default LinkDefault;
