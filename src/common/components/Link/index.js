import { Link as BaseLink } from '@mui/material';

function Link({ sx, children, href, underline = 'none' }) {
  return (
    <BaseLink sx={sx} href={href} underline={underline} target="_blank">
      {children}
    </BaseLink>
  );
}

export default Link;
