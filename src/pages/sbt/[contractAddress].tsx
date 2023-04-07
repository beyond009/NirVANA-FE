import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
export const SBT = () => {
	const router = useRouter()
	const { contractAddress, name, desc } = router.query
	return (
		<div className="flex flex-col w-full min-h-screen max-w-6xl px-8 gap-6">
			<div className="text-2xl">{name}</div>
			<div className="text-xl">{desc}</div>
			<div className="text-xl">{contractAddress}</div>
		</div>
	)
}
export default SBT
