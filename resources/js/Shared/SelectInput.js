export default ({ label, name, children, errors = [], ...rest }) => {
  return (
    <div class={rest.class}>
      {label && (
        <label class="form-label" htmlFor={name}>
          {label}:
        </label>
      )}
      <select id={name} name={name} {...rest} class={`form-select ${errors.length ? 'error' : ''}`}>
        {children}
      </select>
      {errors && <div class="form-error">{errors}</div>}
    </div>
  )
}
