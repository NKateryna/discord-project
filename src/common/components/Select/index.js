import { InputLabel, Select as BaseSelect } from '@mui/material';
import { ArrowSelectIcon } from '../icons/index';

function Select({
  children,
  sxSelect,
  value = '',
  onChange,
  placeholder = '',
  MenuProps,
  variant,
  sxLabel,
  labelId,
  labelText,
  ...rest
}) {
  return (
    <>
      {labelText ? (
        <InputLabel sx={sxLabel} id={labelId}>
          {labelText}
        </InputLabel>
      ) : null}
      <BaseSelect
        {...rest}
        sx={sxSelect}
        variant={variant}
        MenuProps={MenuProps}
        labelId={labelId}
        id="select"
        value={value}
        label={labelId}
        onChange={onChange}
        IconComponent={() => <ArrowSelectIcon />}
        displayEmpty
        renderValue={value !== '' ? undefined : () => `${placeholder}`}
      >
        {children}
      </BaseSelect>
    </>
  );
}
export default Select;
