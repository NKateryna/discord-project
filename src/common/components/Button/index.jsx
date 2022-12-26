import { Button } from '@mui/material';

function ButtonDefault({ sx, text, variant, color, size, disabled }) {
  return (
    <>
      <Button
        sx={sx}
        variant={variant}
        color={color}
        size={size}
        disabled={disabled}
        disableRipple={true}
      >
        {text}
      </Button>
    </>
  );
}

export default ButtonDefault;
