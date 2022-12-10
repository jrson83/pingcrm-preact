import type { ComponentChildren } from 'preact'
import type { Page } from '@inertiajs/core'

export type { Page }

export type Filters = {
  role: string
  search: string
  trashed: string
}

export type Link = {
  active: boolean
  label: string
  url: string | null
}

export type User = {
  account?: {
    id: number
    name: string
  }
  id: number
  first_name: string
  last_name: string
  email: string
  owner: boolean
  name?: string
  photo?: any
  deleted_at?: any
}

export interface DefaultProps {
  className?: string
  children?: ComponentChildren
}

export interface DefaultPageProps
  extends Page<{
    app: {
      name: string
      url: string
    }
    auth: { user: User }
    errors: string[]
    flash: { error: string | null; success: string | null }
    filters: Filters
  }> {}

export interface ErrorPageProps extends DefaultProps {
  status: string | undefined
}

export interface IconProps extends DefaultProps {
  name: string
}

export interface LogoProps extends DefaultProps {
  height: string
  width?: string
}

export interface LoadingButtonProps extends DefaultProps {
  loading: boolean
  type: string
}

export interface MainMenuProps extends DefaultProps {
  closeMenu?: () => void
}

export interface PaginationProps extends DefaultProps {
  links: Array<Link>
}

export interface SelectInputProps extends DefaultProps {
  errors?: any
  label: string
  name: string
  value?: string | number
  onChange: (e: any) => void
}

export interface TextInputProps extends DefaultProps {
  autocomplete?: string
  errors: any
  label: string
  name: string
  type: string
  value: string
  onChange: (e: Event) => void
}

export interface FileInputProps extends DefaultProps {
  errors: any
  label: string
  name: string
  value: string
  accept: string
  onInput: (photo: any) => void
}

export interface TrashedMessageProps extends DefaultProps {
  onRestore: (e: Event) => void
}

export interface OrganizationsPageProps
  extends Page<{
    organizations: {
      data: Array<{
        id: string
        name: string
        phone: string
        city: string
        deleted_at: any
      }>
      links: Array<Link>
    }
  }> {}

export interface UsersPageProps
  extends Page<{
    users: Array<User>
    links: Array<Link>
  }> {}

export interface ContactsPageProps
  extends Page<{
    contacts: {
      data: Array<{
        id: number
        name: string
        city: string
        phone: string
        organization: any
        deleted_at: any
      }>
      links: Array<Link>
    }
  }> {}
