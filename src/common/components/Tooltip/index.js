import { Tooltip as BaseTooltip } from '@mui/material';

function Tooltip({ children, title, placement, popperProps }) {
  const styleTooltip = {
    tooltip: {
      sx: {
        backgroundColor: 'var(--gray-9)',
        '& .MuiTooltip-arrow': {
          color: 'var(--gray-9)',
        },
        fontFamily: 'Whitney',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '17px',
      },
    },
  };

  return (
    <BaseTooltip
      title={title}
      placement={placement}
      slotProps={styleTooltip}
      PopperProps={popperProps}
      arrow
    >
      <span>{children}</span>
    </BaseTooltip>
  );
}

export default Tooltip;
