import React, { useState } from 'react'
import { Button } from '@/components/Button'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
interface BasicInfoProps {
	setStep: (step: 1 | 2) => void
	setBasicInfo: (info: any) => void
}
interface PluginInfo {
	setStep: (step: 1 | 2) => void
	setPluginInfo: (info: any) => void
}
interface Plugin {
	id: string
	name: string
	selected: boolean
}
const BasicInfo = ({ setStep, setBasicInfo }: BasicInfoProps) => {
	const [name, setName] = useState('')
	const [desc, setDesc] = useState('')
	const [category, setCategory] = useState<'token standard' | 'governance' | 'recovery' | 'verify'>('governance')
	const handleNextStep = () => {
		console.log('name', name)
		setStep(2)
		setBasicInfo({ name, desc, category })
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
				categroy
			</label>
			<div className="relative mb-6 w-full">
				<input
					type="text"
					id="input-group-1"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder=""
					value={category}
					onChange={e => {}}
				/>
			</div>
			<div className="flex items-center justify-center w-full">
				<Button onClick={() => handleNextStep()}>Next step</Button>
			</div>
		</>
	)
}
const CreateSBT = () => {
	const [step, setStep] = useState<1 | 2>(1)
	const [basicInfo, setBasicInfo] = useState({ name: '', desc: '', url: '' })
	const [pluginInfo, setPluginInfo] = useState()
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
						Plugin <span className="hidden sm:inline-flex sm:ml-2">Info</span>
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
						Code <span className="hidden sm:inline-flex sm:ml-2"></span>
					</span>
				</li>
				{/* <li
					className={`flex md:w-full items-center  sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700 ${
						step === 3 ? 'text-blue-600 dark:text-blue-500' : ''
					}`}
				>
					{step === 3 ? (
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
						<span className="mr-2">3</span>
					)}
					Confirmation
				</li> */}
			</ol>
			{step === 1 && <BasicInfo setBasicInfo={setBasicInfo} setStep={setStep} />}
			{/* {step === 2 && <PluginInfo setStep={setStep} setPluginInfo={setPluginInfo} />} */}
		</div>
	)
}
export default CreateSBT
