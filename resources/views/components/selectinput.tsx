import type { SelectInputProps } from '@/views/types/types'

export const SelectInput = ({
  children,
  className,
  errors = [],
  label,
  name,
  value,
  onChange,
}: SelectInputProps) => {
  return (
    <div className={className}>
      {label && (
        <label className="form-label" htmlFor={name}>
          {label}:
        </label>
      )}
      <select
        id={name}
        name={name}
        value={value}
        className={`form-select ${errors.length ? 'error' : ''}`}
        onChange={onChange}
      >
        {children}
      </select>
      {errors && <div className="form-error">{errors}</div>}
    </div>
  )
}
