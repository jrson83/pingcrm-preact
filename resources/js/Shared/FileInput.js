import { useState, useRef } from 'preact/hooks'

const Button = ({ text, onClick }) => (
  <button
    type="button"
    class="px-4 py-1 text-white text-xs font-medium bg-gray-600 hover:bg-gray-700 rounded-sm focus:outline-none"
    onClick={onClick}
  >
    {text}
  </button>
)

export default ({ name, label, accept, errors = [], onChange, ...rest }) => {
  const fileInput = useRef()
  const [file, setFile] = useState(null)

  const browse = () => {
    fileInput.current.click()
  }

  const remove = () => {
    setFile(null)
    onChange(null)
    fileInput.current.value = null
  }

  const handleFileChange = e => {
    const file = e.target.files[0]
    setFile(file)
    onChange(file)
  }

  function filesize(size) {
    var i = Math.floor(Math.log(size) / Math.log(1024))
    return (size / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i]
  }

  return (
    <div class={rest.class}>
      {label && (
        <label class="form-label" htmlFor={name}>
          {label}:
        </label>
      )}
      <div class={`form-input p-0 ${errors.length && 'error'}`}>
        <input id={name} ref={fileInput} accept={accept} type="file" class="hidden" onChange={handleFileChange} />
        {!file && (
          <div class="p-2">
            <Button text="Browse" onClick={browse} />
          </div>
        )}
        {file && (
          <div class="flex items-center justify-between p-2">
            <div class="flex-1 pr-1">
              {file.name}
              <span class="ml-1 text-gray-600 text-xs">({filesize(file.size)})</span>
            </div>
            <Button text="Remove" onClick={remove} />
          </div>
        )}
      </div>
      {errors.length > 0 && <div class="form-error">{errors}</div>}
    </div>
  )
}
