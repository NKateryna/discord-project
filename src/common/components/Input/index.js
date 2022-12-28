import { Input } from '@mui/material';

function InputDefault({
  sx,
  value,
  onChange,
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
      value={value}
      onChange={onChange}
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
