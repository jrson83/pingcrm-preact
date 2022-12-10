import type { FileInputProps } from '@/views/types/types'

import { filesize } from '@/views/utils'
import { createRef } from 'preact'
import { useState } from 'preact/hooks'

type ButtonProps = {
  text: string
  onClick: () => void
}
const Button = ({ text, onClick }: ButtonProps) => (
  <button
    type="button"
    class="px-4 py-1 text-white text-xs font-medium bg-gray-600 hover:bg-gray-700 rounded-sm focus:outline-none"
    onClick={onClick}
  >
    {text}
  </button>
)

export const FileInput = ({
  className,
  name,
  label,
  accept,
  errors = [],
  onInput,
}: FileInputProps) => {
  const fileInput = createRef<HTMLInputElement>()
  const [file, setFile] = useState<File | null>(null)

  const browse = () => {
    if (fileInput) {
      fileInput.current?.click()
    }
  }

  const remove = () => {
    /* if (!fileInput.current) throw Error("fileInput is not assigned"); */
    setFile(null)
    onInput(null)
    fileInput.current!.value = ''
  }

  const handleFileChange = (e: Event) => {
    /* const file = (e.target as HTMLInputElement).files?.[0] */
    const input = e.target as HTMLInputElement

    if (!input.files?.length) {
      return
    }
    const file = input.files[0]

    setFile(file)
    onInput(file)
  }

  return (
    <div className={className}>
      {label && (
        <label className="form-label" htmlFor={name}>
          {label}:
        </label>
      )}
      <div className={`form-input p-0 ${errors.length && 'error'}`}>
        <input
          id={name}
          ref={fileInput}
          accept={accept}
          type="file"
          className="hidden"
          onInput={handleFileChange}
        />
        {!file && (
          <div className="p-2">
            <Button text="Browse" onClick={browse} />
          </div>
        )}
        {file && (
          <div className="flex items-center justify-between p-2">
            <div className="flex-1 pr-1">
              {file.name}
              <span className="ml-1 text-gray-600 text-xs">
                ({filesize(file.size)})
              </span>
            </div>
            <Button text="Remove" onClick={remove} />
          </div>
        )}
      </div>
      {errors.length > 0 && <div className="form-error">{errors}</div>}
    </div>
  )
}
