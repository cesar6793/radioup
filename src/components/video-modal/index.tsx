'use client'

import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
// import Image from 'next/image'

export default function ModalVideo ({
  url,
  action
}: {
  url: string
  action: any
}) {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  return (
    <>
      {/* 1. The button */}
      <div
        className='absolute z-40'
        onClick={() => {
          setModalOpen(true)
        }}
      >
        {action}
      </div>

      <Transition show={modalOpen} as={Fragment}>
        <Dialog onClose={() => setModalOpen(false)}>
          {/* 2. The backdrop layer */}
          <Transition.Child
            className='fixed inset-0 z-[99999] bg-black bg-opacity-50 transition-opacity'
            enter='transition ease-out duration-200'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition ease-out duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            aria-hidden='true'
          />

          {/* 3. The modal video */}
          <Transition.Child
            className='fixed inset-0 z-[99999] flex p-6'
            enter='transition ease-out duration-300'
            enterFrom='opacity-0 scale-75'
            enterTo='opacity-100 scale-100'
            leave='transition ease-out duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-75'
          >
            <div className='w-full max-w-5xl mx-auto h-full flex items-center'>
              <Dialog.Panel className='max-w-5xl w-full h-max rounded-3xl shadow-2xl aspect-video bg-black overflow-hidden'>
                <iframe
                  src={url + "?autoplay=1"}
                  className='w-full h-full'
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title='Video'
                ></iframe>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}
