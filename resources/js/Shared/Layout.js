import { Fragment } from 'preact'
import MainMenu from '@/Shared/MainMenu'
import TopHeader from '@/Shared/TopHeader'
import BottomHeader from '@/Shared/BottomHeader'
import FlashMessages from '@/Shared/FlashMessages'

export default function Layout({ children }) {
  return (
    <Fragment>
      <div class="flex flex-col">
        <div class="flex flex-col h-screen">
          <div class="md:flex">
            <TopHeader />
            <BottomHeader />
          </div>
          <div class="flex flex-grow overflow-hidden">
            <MainMenu class="hidden flex-shrink-0 p-12 w-56 bg-indigo-800 overflow-y-auto md:block" />
            {/* To reset scroll region (https://inertiajs.com/pages#scroll-regions) add `scroll-region="true"` to div below */}
            <div class="px-4 py-8 w-full overflow-hidden overflow-y-auto md:p-12">
              <FlashMessages />
              {children}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
