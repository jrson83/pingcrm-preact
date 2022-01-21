export default ({ label, name, errors = [], ...rest }) => {
  return (
    <div class={rest.class}>
      {label && (
        <label class="form-label" htmlFor={name}>
          {label}:
        </label>
      )}
      <input id={name} name={name} {...rest} class={`form-input ${errors.length ? 'error' : ''}`} />
      {errors && <div class="form-error">{errors}</div>}
    </div>
  )
}
