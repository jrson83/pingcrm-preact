import type { PaginationProps } from '@/views/types/types'

import { Link } from '@jrson83/inertia-preact'

export const Pagination = ({ links }: PaginationProps) => {
  return (
    <div className="mt-6">
      {links && links.length > 3 && (
        <div className="flex flex-wrap -mb-1">
          {links.map((link, index) => {
            {
              return link.url === null ? (
                <div
                  key={index}
                  className="mb-1 mr-1 px-4 py-3 text-gray-400 text-sm leading-4 border rounded"
                >
                  <span dangerouslySetInnerHTML={{ __html: link.label }}></span>
                </div>
              ) : (
                <Link
                  key={`link-${index}`}
                  className={`mb-1 mr-1 px-4 py-3 focus:text-indigo-500 text-sm leading-4 hover:bg-white border focus:border-indigo-500 rounded ${
                    link.active && 'bg-white'
                  }`}
                  href={link.url}
                >
                  <span dangerouslySetInnerHTML={{ __html: link.label }}></span>
                </Link>
              )
            }
          })}
        </div>
      )}
    </div>
  )
}
