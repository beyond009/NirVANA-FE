import 'tailwindcss/tailwind.css'
import { ThemeProvider } from 'next-themes'
import Web3Provider from '@/components/Web3Provider'
import { Header } from '@/components/Header'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { ToastContainer } from 'react-toastify'

const App = ({ Component, pageProps }) => {
	return (
		<ThemeProvider attribute="class">
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			{/* Same as */}
			<Web3Provider>
				<div className="w-full flex flex-col items-center px-28 relative dark:bg-gray-900 min-h-screen bg-[url('/hero-pattern.svg')]">
					<Header />
					<Component {...pageProps} />
					<ThemeSwitcher className="absolute bottom-6 right-6" />
				</div>
			</Web3Provider>
			<ToastContainer />
		</ThemeProvider>
	)
}

export default App
