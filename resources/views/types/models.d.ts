/**
 * This file is auto generated using 'php artisan typescript:generate'
 *
 * Changes to this file will be lost when the command is run again
 */

declare namespace App.Models {
  export interface User {
    id: number
    account_id: number
    first_name: string
    last_name: string
    email: string
    email_verified_at: string | null
    password: string | null
    owner: boolean
    photo_path: string | null
    remember_token: string | null
    created_at: string | null
    updated_at: string | null
    deleted_at: string | null
    account?: App.Models.Account | null
    readonly name?: any
  }

  export interface Contact {
    id: number
    account_id: number
    organization_id: number | null
    first_name: string
    last_name: string
    email: string | null
    phone: string | null
    address: string | null
    city: string | null
    region: string | null
    country: string | null
    postal_code: string | null
    created_at: string | null
    updated_at: string | null
    deleted_at: string | null
    organization?: App.Models.Organization | null
    readonly name?: any
  }

  export interface Organization {
    id: number
    account_id: number
    name: string
    email: string | null
    phone: string | null
    address: string | null
    city: string | null
    region: string | null
    country: string | null
    postal_code: string | null
    created_at: string | null
    updated_at: string | null
    deleted_at: string | null
    contacts: Array<App.Models.Contact> | []
    contacts_count?: number | null
  }

  export interface Account {
    id: number
    name: string
    created_at: string | null
    updated_at: string | null
    users?: Array<App.Models.User> | null
    organizations?: Array<App.Models.Organization> | null
    contacts?: Array<App.Models.Contact> | null
    users_count?: number | null
    organizations_count?: number | null
    contacts_count?: number | null
  }
}
