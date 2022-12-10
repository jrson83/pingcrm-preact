import type { LoadingButtonProps } from '@/views/types/types'

export const LoadingButton = ({
  className,
  children,
  loading,
  type,
}: LoadingButtonProps) => {
  return (
    <button
      disabled={loading}
      className={`flex items-center ${className}`}
      type={type}
    >
      {loading && <div className="btn-spinner mr-2" />}
      {children}
    </button>
  )
}
