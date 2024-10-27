import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Dropdown1 = () => {
  return (
    <>
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-red-600 px-3 py-2.5 text-sm font-semibold text-gray-200 shadow-sm ring-1 ring-inset ring-red-600 hover:bg-red-700">
          Studio All
          <p className='text-gray-200 flex justify-items-center pt-1'><ion-icon name="chevron-down-outline"></ion-icon></p>
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            {({ focus }) => (
              <a
                href="#"
                className={classNames(focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}
              >
                Account settings
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ focus }) => (
              <a
                href="#"
                className={classNames(focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}
              >
                Support
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ focus }) => (
              <a
                href="#"
                className={classNames(focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}
              >
                License
              </a>
            )}
          </MenuItem>
          <form method="POST" action="#">
            <MenuItem>
              {({ focus }) => (
                <button
                  type="submit"
                  className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block w-full px-4 py-2 text-left text-sm',
                  )}
                >
                  Sign out
                </button>
              )}
            </MenuItem>
          </form>
        </div>
      </MenuItems>
    </Menu>
    </>
  )
}

export default Dropdown1