import { Input } from '@mui/material';

function InputDefault({
  sx,
  type,
  placeholder,
  id,
  required,
  size,
  disableUnderline = true,
}) {
  return (
    <Input
      sx={sx}
      type={type}
      placeholder={placeholder}
      id={id}
      required={required}
      size={size}
      disableUnderline={disableUnderline}
    />
  );
}

export default InputDefault;
