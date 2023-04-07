import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
export const SBT = () => {
	const router = useRouter()
	const { contractAddress, name, desc } = router.query
	return (
		<div className="flex flex-col w-full min-h-screen max-w-6xl px-8 gap-6">
			<div className="text-2xl">SBT Name: {name}</div>
			<div className="text-xl">{desc}</div>
			<div className="text-xl">{contractAddress}</div>
			<div className="text-2xl">SBT Plugins</div>
			<div className="grid grid-cols-4 gap-6 py-6">
				<a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						Simple governace
					</h5>
					<p className="font-normal text-gray-700 dark:text-gray-400">{v.desc}</p>
				</a>
			</div>
		</div>
	)
}
export default SBT
