import type { TextInputProps } from '@/views/types/types'

export const TextInput = ({
  className,
  errors = [],
  label,
  name,
  type,
  value,
  onChange,
}: TextInputProps) => {
  return (
    <div className={className}>
      {label && (
        <label className="form-label" htmlFor={name}>
          {label}:
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        className={`form-input ${errors.length ? 'error' : ''}`}
        onChange={onChange}
      />
      {errors && <div className="form-error">{errors}</div>}
    </div>
  )
}
