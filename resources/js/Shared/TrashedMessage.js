import Icon from './Icon'

export default ({ children, onRestore }) => {
  return (
    <div class="flex items-center justify-between mb-6 p-4 max-w-3xl bg-yellow-400 rounded">
      <div class="flex items-center">
        <Icon name="trash" class="flex-shrink-0 mr-2 w-4 h-4 fill-yellow-800" />
        <div class="text-yellow-800 text-sm font-medium">{children}</div>
      </div>
      <button class="text-yellow-800 hover:underline text-sm" tabindex="-1" type="button" onClick={onRestore}>
        Restore
      </button>
    </div>
  )
}
