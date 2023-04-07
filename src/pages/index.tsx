import { FC } from 'react'
import { APP_NAME } from '@/lib/consts'
import ConnectWallet from '@/components/ConnectWallet'
import { BookOpenIcon, CodeIcon, ShareIcon } from '@heroicons/react/outline'
import ThemeSwitcher from '@/components/ThemeSwitcher'

const Home: FC = () => {
	return (
		<section className="">
			<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
				<div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
					<h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
						Unleash the Power of Soulbound Tokens - Modular, Secure, and Customizable.
					</h1>
					<p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
						By breaking down the functionality of the token into modular components, users can select and
						combine the features they need, creating a customized token that meets their specific needs.
					</p>
					<a
						href="#"
						className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
					>
						Read more
						<svg
							aria-hidden="true"
							className="ml-2 -mr-1 w-4 h-4"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
								clipRule="evenodd"
							></path>
						</svg>
					</a>
				</div>
				<div className="grid md:grid-cols-2 gap-8">
					<div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
						<a
							href="#"
							className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2"
						>
							<svg
								className="w-3 h-3 mr-1"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path
									clipRule="evenodd"
									fillRule="evenodd"
									d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
								></path>
							</svg>
							new sbt
						</a>
						<h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Create a new SBT</h2>
						<p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
							{' '}
							create a customized token that meets their specific needs.
						</p>
						<a
							href="#"
							className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium mt-14 text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
						>
							Create sbt
						</a>
					</div>
					<div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
						<a
							href="#"
							className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2"
						>
							<svg
								className="w-3 h-3 mr-1"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path
									clipRule="evenodd"
									fillRule="evenodd"
									d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
								></path>
							</svg>
							plugin
						</a>
						<h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
							create your own plugin
						</h2>
						<p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
							Modular Soulbound Tokens are customizable digital assets that are soulbound to a specific
							user or entity, allowing for tailored functionality and control.
						</p>
						<a
							href="#"
							className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
						>
							Create plugin
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Home
