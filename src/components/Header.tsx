import React from 'react'
import ConnectWallet from '@/components/ConnectWallet'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { UserCircleIcon } from '@heroicons/react/outline'
import { useAccount } from 'wagmi'

export const Header = () => {
	const router = useRouter()
	const { address } = useAccount()
	return (
		<div className="relative flex justify-between w-full max-w-6xl mx-auto py-12 sm:px-6 lg:px-8">
			<div className="flex items-center text-3xl m-[-22px] gap-3 font-serif">
				<Image src="/Nirvana_Face.svg" width={40} height={40} priority alt="logo" /> NirVANA
			</div>
			<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
				<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border md:flex-row md:space-x-8 md:mt-0 md:border-0">
					<li>
						<a
							className={`block py-2 pl-3 pr-4 cursor-pointe rounded hover:text-blue-500 ${
								router.pathname === '/' ? 'text-blue-700' : ''
							}`}
							aria-current="page"
							onClick={() => {
								router.push('/')
							}}
						>
							Home
						</a>
					</li>
					<li>
						<a
							className={`block py-2 pl-3 pr-4 cursor-pointer rounded  hover:text-blue-500 ${
								router.pathname === '/create-sbt' ? 'text-blue-700' : ''
							}`}
							onClick={() => {
								router.push('/create-sbt')
							}}
						>
							create sbt
						</a>
					</li>
					<li>
						<a
							className={`block py-2 pl-3 pr-4 cursor-pointer rounded hover:text-blue-500 ${
								router.pathname === '/create-plugin' ? 'text-blue-700' : ''
							}`}
							onClick={() => {
								router.push('/create-plugin')
							}}
						>
							create plugin
						</a>
					</li>
				</ul>
				<div className="flex ml-6 gap-8 items-center">
					<ConnectWallet />
					<UserCircleIcon
						className="h-8 w-8 cursor-pointer"
						onClick={() => {
							router.push('/profile/' + address)
						}}
					/>
				</div>
			</div>
		</div>
	)
}
