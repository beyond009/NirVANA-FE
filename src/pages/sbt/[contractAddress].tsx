import React, { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import { ethers } from 'ethers'
import { useAccount } from 'wagmi'
import { abi as diamondLoupeFacetABI } from '@/abi/DiamondLoupeFacet.json'
import { ViewGridAddIcon } from '@heroicons/react/outline'
import { Button } from '@/components/Button'
import Modal from '@mui/material/Modal'

export const pluginDesc = {
	simpleGovernance: {
		name: 'Simple governace',
		desc: 'a simple DAO with proposal creation, voting, and execution functionality to issue sbt.',
		address: 'https://blockscout.scroll.io/address/0x6C6ECfdefd7401226a9B3D19AA3ABC2631d8B9a7',
	},
	signatureRecovery: {
		name: 'Signature Recovery',
		desc: 'allowing users to recover owned sbts from a signed message,The contract leverages EIP-712 for typed data hashing and ECDSA for signature recovery.',
		address: 'https://blockscout.scroll.io/address/0x8558d078a1D3A1dbe9A0e96503Ea21c3DE573D55',
	},
}

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
}
export const SBT = () => {
	const [plugins, setPlugins] = useState<string[]>([])
	const [open, setOpen] = useState(false)
	const router = useRouter()
	const { address } = useAccount()
	const { contractAddress, name, desc } = router.query
	const fetch = useCallback(async () => {
		if (address && contractAddress) {
			const diamondContract = new ethers.Contract(
				contractAddress as string,
				diamondLoupeFacetABI,
				new ethers.providers.Web3Provider(window.ethereum)
			)
			const res = await diamondContract.facetAddresses()

			console.log(res)
			let tmp = [...plugins]
			if (res.includes('0x6C6ECfdefd7401226a9B3D19AA3ABC2631d8B9a7')) {
				console.log(plugins)
				tmp = [...tmp, 'simpleGovernance']
			}
			if (res.includes('0x8558d078a1D3A1dbe9A0e96503Ea21c3DE573D55')) {
				tmp = [...tmp, 'signatureRecovery']
			}
			console.log(tmp)
			setPlugins(tmp)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [address, contractAddress])

	useEffect(() => {
		fetch()
	}, [fetch])
	return (
		<div className="flex flex-col w-full min-h-screen max-w-6xl px-8 gap-6">
			<div className="text-2xl">SBT Name: {name}</div>
			<div className="text-xl">{desc}</div>
			<div className="text-xl">{contractAddress}</div>
			<div className="text-2xl">SBT Plugins</div>
			<div className="grid grid-cols-4 gap-6 py-6">
				{plugins.map(v => {
					return (
						<a
							key={v}
							className="block max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
						>
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								{pluginDesc[v].name}
							</h5>
							<p className="font-normal text-gray-700 dark:text-gray-400">{pluginDesc[v].desc}</p>
						</a>
					)
				})}
				<a
					className="flex items-center justify-center max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
					onClick={() => {
						setOpen(true)
					}}
				>
					<ViewGridAddIcon width={120} />
				</a>
			</div>
			<Modal
				open={open}
				onClose={() => {
					setOpen(false)
				}}
			>
				<div className="flex flex-col p-12 bg-white rounded-t w-[400px]" style={style}>
					<div className="text-2xl">Add a plugin</div>
					<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Select an option
					</label>
					<select
						id="countries"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					>
						<option selected>Social Recovery</option>
						<option value="tokenGovernance">Token Governance</option>
					</select>
					<Button onClick={() => {}} style={{ width: '100%', marginTop: '12px' }}>
						Add
					</Button>
				</div>
			</Modal>
		</div>
	)
}
export default SBT
