import React from 'react'
import ConnectWallet from '@/components/ConnectWallet'
import Image from 'next/image'

export const Header = () => {
	return (
		<div className="flex justify-between w-full max-w-6xl mx-auto py-12 bg-gray-100 dark:bg-gray-900 sm:px-6 lg:px-8">
			<div className="flex items-center text-3xl m-[-22px] gap-3 font-serif">
				<Image src="/Nirvana_Face.svg" width={40} height={40} priority alt="logo" /> NirVANA
			</div>
			<div className="flex">
				<ConnectWallet />
			</div>
		</div>
	)
}
