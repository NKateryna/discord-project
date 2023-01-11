import { Link as BaseLink } from '@mui/material';

function Link({ children, href, underline = 'none', sx, target }) {
  return (
    <BaseLink sx={sx} href={href} underline={underline} target={target}>
      {children}
    </BaseLink>
  );
}

export default Link;
