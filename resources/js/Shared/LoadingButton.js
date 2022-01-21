export default ({ loading, children, ...props }) => {
  return (
    <button disabled={loading} class={`flex items-center ${props.class}`}>
      {loading && <div class="btn-spinner mr-2" />}
      {children}
    </button>
  )
}
