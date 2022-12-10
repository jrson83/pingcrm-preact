import type { DefaultProps } from '@/views/types/types'

import { Fragment } from 'preact'
import { MainMenu } from '@/views/components/mainmenu'
import { TopHeader } from '@/views/components/topheader'
import { BottomHeader } from '@/views/components/bottomheader'
import { FlashMessages } from '@/views/components/flashmessages'

export const Layout = ({ children }: DefaultProps) => {
  return (
    <Fragment>
      <div className="flex flex-col">
        <div className="flex flex-col h-screen">
          <div className="md:flex">
            <TopHeader />
            <BottomHeader />
          </div>
          <div className="flex flex-grow overflow-hidden">
            <MainMenu className="hidden flex-shrink-0 p-12 w-56 bg-indigo-800 overflow-y-auto md:block" />
            {/* To reset scroll region (https://inertiajs.com/pages#scroll-regions) add `scroll-region="true"` to div below */}
            <div className="px-4 py-8 w-full overflow-hidden overflow-y-auto md:p-12">
              <FlashMessages />
              {children}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
