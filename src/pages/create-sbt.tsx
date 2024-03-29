import React, { useState } from 'react'
import { Button } from '@/components/Button'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { useAccount } from 'wagmi'
import { Modal } from '@mui/material'
import { abi as diamondFactoryABI } from '@/abi/DiamondFactory.json'
import { abi as diamondInitABI } from '@/abi/DiamondInit.json'
import { pluginDesc } from './sbt/[contractAddress]'
import {
	facetCutsConst,
	getARemovedBSelectorsBySelector,
	SimpleDAOFacetSelectors,
	SignatureRecoveryFacetSelectors,
	SbtSelectorConst,
} from '@/utils/utils'
import { ethers } from 'ethers'
import { toast } from 'react-toastify'
interface BasicInfoProps {
	setStep: (step: 1 | 2) => void
	setBasicInfo: (info: any) => void
}
interface PluginProps {
	setStep: (step: 1 | 2) => void
	setSelected: (info: Plugin[]) => void
	selected: Plugin[]
	handleCreateSBT: () => void
}
export interface Plugin {
	id: string
	name: string
	selected: boolean
}

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '600px',
}

const tokenstandardPlugins: Plugin[] = [
	{ id: 'tokenstandard_1', name: 'ERC5192', selected: false },
	{ id: 'tokenstandard_2', name: 'ERC5727', selected: false },
	{ id: 'tokenstandard_3', name: 'ERC6147', selected: false },
	{ id: 'tokenstandard_4', name: 'ZKSBT', selected: false },
]
const governancePlugins: Plugin[] = [
	{ id: 'governance_1', name: 'simple governance', selected: false },
	{ id: 'governance_2', name: 'token governance', selected: false },
]
const recoveryPlugins: Plugin[] = [
	{ id: 'recovery_1', name: 'signature recovery', selected: false },
	{ id: 'recovery_2', name: 'social recovery', selected: false },
]
const verifyPlugins: Plugin[] = [{ id: 'verify_1', name: 'signature verify', selected: false }]
const BasicInfo = ({ setStep, setBasicInfo }: BasicInfoProps) => {
	const [name, setName] = useState('')
	const [desc, setDesc] = useState('')
	const [url, setUrl] = useState('')
	const handleNextStep = () => {
		console.log('name', name)
		setStep(2)
		setBasicInfo({ name, desc, url })
	}
	return (
		<>
			<label
				htmlFor="input-group-1"
				className="block mb-2 text-xl font-medium mt-12 text-gray-900 dark:text-white"
			>
				name
			</label>
			<div className="relative mb-6 w-full">
				<input
					type="text"
					id="input-group-1"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					value={name}
					onChange={e => {
						setName(e.target.value)
					}}
				/>
			</div>
			<label htmlFor="website-admin" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
				description
			</label>
			<div className="relative mb-6 w-full">
				<input
					type="text"
					id="input-group-1"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					value={desc}
					onChange={e => {
						setDesc(e.target.value)
					}}
				/>
			</div>
			<label htmlFor="website-admin" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
				url
			</label>
			<div className="relative mb-6 w-full">
				<input
					type="text"
					id="input-group-1"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder=""
					value={url}
					onChange={e => {
						setUrl(e.target.value)
					}}
				/>
			</div>
			<div className="flex items-center justify-center w-full">
				<Button onClick={() => handleNextStep()}>Next step</Button>
			</div>
		</>
	)
}

const PluginInfo = ({ setStep, setSelected, selected, handleCreateSBT }: PluginProps) => {
	const [governance, setGovernance] = useState(governancePlugins)
	const [recovery, setRecovery] = useState(recoveryPlugins)
	const [verify, setVerify] = useState(verifyPlugins)
	const [governaceOpen, setGovernanceOpen] = useState(false)
	const [recoveryOpen, setRecoveryOpen] = useState(false)
	const [tokenstandard, setTokenstandard] = useState(tokenstandardPlugins)
	const handleBack = () => {
		setStep(1)
	}
	const handleDragEnd = ({ source, destination }) => {
		console.log(source, destination)
		if (!destination) return
		if (destination.droppableId === 'Selected') {
			const newSelected = [...selected]
			if (source.droppableId === 'Governance') {
				newSelected.splice(destination.index, 0, governance[source.index])
				const newGovernance = [...governance]
				newGovernance.splice(source.index, 1)
				setGovernance(newGovernance)
				setSelected(newSelected)
			}
			if (source.droppableId === 'Tokenstandard') {
				newSelected.splice(destination.index, 0, tokenstandard[source.index])
				const newTokenstandard = [...tokenstandard]
				newTokenstandard.splice(source.index, 1)
				setTokenstandard(newTokenstandard)
				setSelected(newSelected)
			}
			if (source.droppableId === 'Recovery') {
				newSelected.splice(destination.index, 0, recoveryPlugins[source.index])
				const newRecovery = [...recovery]
				newRecovery.splice(source.index, 1)
				setRecovery(newRecovery)
				setSelected(newSelected)
			}
			if (source.droppableId === 'Verify') {
				newSelected.splice(destination.index, 0, verifyPlugins[source.index])
				const newVerify = [...verify]
				newVerify.splice(source.index, 1)
				setVerify(newVerify)
				setSelected(newSelected)
			}
			console.log(newSelected, 'aa')
		}
	}

	const handleClickOpen = pluginId => {
		console.log('pluginId', pluginId)
		switch (pluginId) {
			case 'governance_1':
				setGovernanceOpen(true)
				break
			case 'recovery_1':
				setRecoveryOpen(true)
				break
		}
	}

	return (
		<>
			<div className="flex bg-white dark:bg-gray-700 rounded w-full min-h-[600px] p-12 mt-12">
				<DragDropContext onDragEnd={handleDragEnd}>
					<div className="flex flex-col flex-[0.5] p-6">
						<div className="text-2xl font-semibold">Select plugins</div>
						<Droppable droppableId="Tokenstandard">
							{provided => (
								<div ref={provided.innerRef} {...provided.droppableProps}>
									<div className="text-xl font-semibold mt-6">Tokenstandard</div>
									{tokenstandard.map((plugin, index) => {
										return (
											<Draggable draggableId={plugin.id} index={index} key={plugin.id}>
												{provided => (
													<div
														className="card flex items-center p-6 h-14 my-4 rounded-lg bg-gray-50 cursor-pointer hover:shadow-sm"
														{...provided.draggableProps}
														{...provided.dragHandleProps}
														ref={provided.innerRef}
														onClick={() => {
															handleClickOpen(plugin.id)
														}}
													>
														{plugin.name}
														{provided.placeholder}
													</div>
												)}
											</Draggable>
										)
									})}
									{provided.placeholder}
								</div>
							)}
						</Droppable>
						<Droppable droppableId="Governance">
							{provided => (
								<div ref={provided.innerRef} {...provided.droppableProps}>
									<div className="text-xl font-semibold mt-6">Governance</div>
									{governance.map((plugin, index) => {
										return (
											<Draggable draggableId={plugin.id} index={index} key={plugin.id}>
												{provided => (
													<div
														className="card flex items-center p-6 h-14 my-4 rounded-lg bg-gray-50 cursor-pointer hover:shadow-sm"
														{...provided.draggableProps}
														{...provided.dragHandleProps}
														ref={provided.innerRef}
														onClick={() => {
															handleClickOpen(plugin.id)
														}}
													>
														{plugin.name}
														{provided.placeholder}
													</div>
												)}
											</Draggable>
										)
									})}
									{provided.placeholder}
								</div>
							)}
						</Droppable>
						<Droppable droppableId="Recovery">
							{provided => (
								<div ref={provided.innerRef} {...provided.droppableProps}>
									<div className="text-xl font-semibold mt-6">Recovery</div>
									{recovery.map((plugin, index) => {
										return (
											<Draggable draggableId={plugin.id} index={index} key={plugin.id}>
												{provided => (
													<div
														className="card flex items-center p-6 h-14 my-4 rounded-lg bg-gray-50 cursor-pointer hover:shadow-sm"
														{...provided.draggableProps}
														{...provided.dragHandleProps}
														ref={provided.innerRef}
														onClick={() => {
															handleClickOpen(plugin.id)
														}}
													>
														{plugin.name}
														{provided.placeholder}
													</div>
												)}
											</Draggable>
										)
									})}
									{provided.placeholder}
								</div>
							)}
						</Droppable>
						<Droppable droppableId="Verify">
							{provided => (
								<div ref={provided.innerRef} {...provided.droppableProps}>
									<div className="text-xl font-semibold mt-6">verify</div>
									{verify.map((plugin, index) => {
										return (
											<Draggable draggableId={plugin.id} index={index} key={plugin.id}>
												{provided => (
													<div
														className="card flex items-center p-6 h-14 my-4 rounded-lg bg-gray-50 cursor-pointer hover:shadow-sm"
														{...provided.draggableProps}
														{...provided.dragHandleProps}
														ref={provided.innerRef}
														onClick={() => {
															handleClickOpen(plugin.id)
														}}
													>
														{plugin.name}
														{provided.placeholder}
													</div>
												)}
											</Draggable>
										)
									})}
									{provided.placeholder}
								</div>
							)}
						</Droppable>
					</div>
					<div className=" h-[360] w-1 bg-slate-300 rounded-sm"></div>
					<div className="flex flex-col flex-[0.5] p-6">
						<>
							<Droppable droppableId="Selected">
								{provided => (
									<div className="min-h-[300px]">
										<div className="text-2xl font-semibold">Selected</div>
										<div
											ref={provided.innerRef}
											{...provided.droppableProps}
											className=" min-h-[600px]"
										>
											{selected.map(v => {
												return (
													<div
														key={v.id}
														className="card flex items-center p-6 my-4 h-14 rounded-lg bg-gray-50 cursor-pointer hover:shadow-sm"
														onClick={() => {
															handleClickOpen(v.id)
														}}
													>
														{v.name}
													</div>
												)
											})}
										</div>
										{provided.placeholder}
									</div>
								)}
							</Droppable>
						</>
					</div>
				</DragDropContext>
			</div>
			<Modal
				open={governaceOpen}
				onClose={() => {
					setGovernanceOpen(false)
				}}
			>
				<div className="flex flex-col p-12 bg-white rounded-t w-[400px]" style={style}>
					<div className="text-2xl">{pluginDesc.simpleGovernance.name}</div>
					<div className="text-xl text-gray-400 mt-2">{pluginDesc.simpleGovernance.desc}</div>
					<a href={pluginDesc.simpleGovernance.address} className="mt-4" target="_blank" rel="noreferrer">
						Deployed address
					</a>
				</div>
			</Modal>
			<Modal
				open={recoveryOpen}
				onClose={() => {
					setRecoveryOpen(false)
				}}
			>
				<div className="flex flex-col p-12 bg-white rounded-t w-[400px]" style={style}>
					<div className="text-2xl">{pluginDesc.signatureRecovery.name}</div>
					<div className="text-xl text-gray-400 mt-2">{pluginDesc.signatureRecovery.desc}</div>
					<a href={pluginDesc.signatureRecovery.address} target="_blank" rel="noreferrer">
						Deployed address
					</a>
				</div>
			</Modal>
			<div className="flex items-center justify-center w-full mt-12 gap-5">
				<Button onClick={() => handleBack()} style={{ width: '120px' }}>
					Back
				</Button>
				<Button onClick={handleCreateSBT} style={{ width: '120px' }}>
					Create SBT
				</Button>
			</div>
		</>
	)
}

const CreateSBT = () => {
	const [step, setStep] = useState<1 | 2>(1)
	const [basicInfo, setBasicInfo] = useState({ name: '', desc: '', url: '' })
	const [selected, setSelected] = useState<Plugin[]>([])
	const { address, isConnected } = useAccount()
	const handleCreateSBT = async () => {
		if (isConnected) {
			const provider = new ethers.providers.Web3Provider(window.ethereum)
			const signer = provider.getSigner()
			const diamondFactoryContract = new ethers.Contract(
				'0xE404ed8EC88220074030880b8BD1a48645fBE1A2',
				diamondFactoryABI,
				signer
			)
			const diamondInitContract = new ethers.Contract(
				'0xeFbF963506C986397FC92A63E0b173f25248BC99',
				diamondInitABI,
				signer
			)
			let functionCall = diamondInitContract.interface.encodeFunctionData('init')
			const diamondArgs = {
				owner: address,
				init: '0xa2a438492eC98e58087e1D5cef284EDCBd022B0f',
				initCalldata: functionCall,
			}
			const facetCuts = JSON.parse(JSON.stringify(facetCutsConst))
			const selecters = JSON.parse(JSON.stringify(SbtSelectorConst))
			selected.forEach(plugin => {
				switch (plugin.id) {
					case 'governance_1': {
						console.log(plugin)
						const simpleGovernceSelecters = getARemovedBSelectorsBySelector(
							SimpleDAOFacetSelectors,
							selecters
						)
						selecters.push(...simpleGovernceSelecters)
						facetCuts.push({
							facetAddress: '0x6C6ECfdefd7401226a9B3D19AA3ABC2631d8B9a7',
							action: 0,
							functionSelectors: simpleGovernceSelecters,
						})
						break
					}
					case 'recovery_1': {
						console.log(plugin)
						const recoverySelecters = getARemovedBSelectorsBySelector(
							SignatureRecoveryFacetSelectors,
							selecters
						)
						selecters.push(...recoverySelecters)
						facetCuts.push({
							facetAddress: '0x8558d078a1D3A1dbe9A0e96503Ea21c3DE573D55',
							action: 0,
							functionSelectors: recoverySelecters,
						})
						break
					}
				}
			})
			diamondFactoryContract.once('DiamondDeployed', contractAddr => {
				const res = JSON.parse(localStorage.getItem('SBT' + address)) || []
				res.push({
					address: contractAddr,
					name: basicInfo.name,
					desc: basicInfo.desc,
					url: basicInfo.url,
				})
				localStorage.setItem('SBT' + address, JSON.stringify(res))
			})

			const tx = await diamondFactoryContract.deployDiamond(facetCuts, diamondArgs)
			toast.promise(tx.wait(), {
				pending: 'Transaction pending 🤞',
				success: 'Transaction successful 🎉',
				error: 'rejected 🤯',
			})
		}
	}
	return (
		<div className="max-w-6xl flex flex-col px-24 items-start w-full mx-auto sm:px-6 lg:px-8 py-4 sm:pt-0">
			<ol className="flex items-center w-full mt-12 text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
				<li
					className={`flex md:w-full items-center  sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700 ${
						step === 1 ? 'text-blue-600 dark:text-blue-500' : ''
					}`}
				>
					<span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
						{step === 1 ? (
							<svg
								aria-hidden="true"
								className="w-4 h-4 mr-2 sm:w-5 sm:h-5"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clipRule="evenodd"
								></path>
							</svg>
						) : (
							<span className="mr-2">1</span>
						)}
						Basic <span className="hidden sm:inline-flex sm:ml-2">Info</span>
					</span>
				</li>
				<li
					className={`flex md:w-full items-center  sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700 ${
						step === 2 ? 'text-blue-600 dark:text-blue-500' : ''
					}`}
				>
					<span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
						{step === 2 ? (
							<svg
								aria-hidden="true"
								className="w-4 h-4 mr-2 sm:w-5 sm:h-5"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clipRule="evenodd"
								></path>
							</svg>
						) : (
							<span className="mr-2">2</span>
						)}
						Choose <span className="hidden sm:inline-flex sm:ml-2">module</span>
					</span>
				</li>
			</ol>
			{step === 1 && <BasicInfo setBasicInfo={setBasicInfo} setStep={setStep} />}
			{step === 2 && (
				<PluginInfo
					setStep={setStep}
					selected={selected}
					setSelected={setSelected}
					handleCreateSBT={handleCreateSBT}
				/>
			)}
		</div>
	)
}
export default CreateSBT
