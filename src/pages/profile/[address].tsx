import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Profile = () => {
	const router = useRouter()
	const [sbts, setSbts] = useState([])
	const { address } = router.query
	useEffect(() => {
		const tmp = JSON.parse(localStorage.getItem('SBT' + address)) || []
		console.log(tmp)
		setSbts(tmp)
	}, [address])
	return (
		<div className="flex flex-col w-full min-h-screen max-w-6xl px-8">
			<div className="text-2xl">Created SBT</div>
			<div className="grid grid-cols-4 gap-6 py-6">
				{sbts.map(v => {
					return (
						<Link
							href={{
								pathname: `/sbt/${v.address}`,
								query: { name: v.name, desc: v.desc },
							}}
							key={v.address}
						>
							<a
								key={v.address}
								className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
							>
								<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
									{v.name}
								</h5>
								<p className="font-normal text-gray-700 dark:text-gray-400">{v.desc}</p>
							</a>
						</Link>
					)
				})}
			</div>
		</div>
	)
}

export default Profile
