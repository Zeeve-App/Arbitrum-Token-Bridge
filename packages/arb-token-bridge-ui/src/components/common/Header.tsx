import React from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import Logo from '@/images/oma3-logo.svg'
import { isNetwork } from '../../util/networks'
import { useNetworks } from '../../hooks/useNetworks'
import { AppMobileSidebar } from '../Sidebar/AppMobileSidebar'

export function Header({ children }: { children?: React.ReactNode }) {
  const [{ sourceChain }] = useNetworks()
  const { isTestnet } = isNetwork(sourceChain.id)

  return (
    <header
      className={twMerge(
        'sticky top-0 z-10 flex h-12 w-full justify-center bg-[#111111] px-4 backdrop-blur sm:relative sm:h-16 sm:px-6 sm:backdrop-blur-none [body.menu-open_&]:fixed',
        isTestnet
          ? 'sm:border-b sm:border-[#21a7f2] sm:bg-[#111111]'
          : 'sm:bg-transparent'
      )}
    >
      <div className="flex w-full items-center justify-end gap-2 text-[#21a7f2]">
        <Image className="mr-auto  object-contain" src={Logo} alt="Rayls Bridge" width={150} />
        {isTestnet && <span className="grow font-medium">TESTNET MODE</span>}
        <div className="hidden sm:flex">{children}</div>
      </div>
      {/* <AppMobileSidebar /> */}
    </header>
  )
}
