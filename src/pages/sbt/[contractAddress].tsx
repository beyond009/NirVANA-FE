import React, { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import { ethers } from 'ethers'
import { useAccount } from 'wagmi'
import { abi as diamondLoupeFacetABI } from '@/abi/DiamondLoupeFacet.json'
const pluginInfo = {
	simpleGovernance: {
		name: 'Simple governace',
		desc: 'a simple DAO with proposal creation, voting, and execution functionality to issue sbt.',
	},
	signatureRecovery: {
		name: 'Signature Recovery',
		desc: 'allowing users to recover owned sbts from a signed message,The contract leverages EIP-712 for typed data hashing and ECDSA for signature recovery.',
	},
}
export const SBT = () => {
	const router = useRouter()
	const { address } = useAccount()
	const { contractAddress, name, desc } = router.query
	const fetch = useCallback(async () => {
		console.log('aaaa')
		if (address && contractAddress) {
			const diamondContract = new ethers.Contract(
				contractAddress as string,
				diamondLoupeFacetABI,
				new ethers.providers.Web3Provider(window.ethereum)
			)
			const res = await diamondContract.facetAddresses()
			console.log(res, 'abs')
		}
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
				<a className="block max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						Simple governace
					</h5>
					<p className="font-normal text-gray-700 dark:text-gray-400">
						a simple DAO with proposal creation, voting, and execution functionality to issue sbt.
					</p>
				</a>
				<a className="block max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						Signature Recovery
					</h5>
					<p className="font-normal text-gray-700 dark:text-gray-400">
						allowing users to recover owned sbts from a signed message,The contract leverages EIP-712 for
						typed data hashing and ECDSA for signature recovery.
					</p>
				</a>
			</div>
		</div>
	)
}
export default SBT
