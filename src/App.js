import { useState, useEffect, useRef } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
	const [rectBounds, setRectBounds] = useState('')
	const [pRect, setPBounds] = useState('')
	const [computed, setComputed] = useState('')

	const elRef = useRef()
	const pRef = useRef()
	const timer = useRef()

	useEffect(() => {
		const checkBounds = (el, parent) => {
			if (!el.current || !parent.current) return false
			const rect = el.current.getBoundingClientRect()
			const pRect = parent.current.getBoundingClientRect()
			const winH = Math.max(
				document.documentElement.clientHeight,
				window.innerHeight
			)
			const winW = Math.max(
				document.documentElement.clientWidth,
				window.innerWidth
			)
			const parentInView =
				pRect.right > 0 &&
				pRect.right <= winW &&
				pRect.bottom > 0 &&
				pRect.bottom <= winH

			const obj = {
				winH,
				winW,
				elH: rect.height,
				elW: rect.width,
				pH: pRect.height,
				pW: pRect.width,
				pInView:
					pRect.right > 0 &&
					pRect.right <= winW &&
					pRect.bottom > 0 &&
					pRect.bottom <= winH,
				inView:
					rect.right > pRect.x &&
					rect.x <= pRect.x + pRect.width &&
					rect.bottom > 0 &&
					rect.bottom <= winH,
			}
			setRectBounds((x) => JSON.stringify(rect, null, 2))
			setPBounds((x) => JSON.stringify(pRect, null, 2))
			setComputed((x) => JSON.stringify(obj, null, 2))

			if (parentInView) {
				const inView =
					rect.right > pRect.x &&
					rect.right <= pRect.x + pRect.width &&
					rect.bottom > 0 &&
					rect.bottom <= winH
				return inView
			}

			return false
		}
		checkBounds(elRef, pRef)
		timer.current = setInterval(() => checkBounds(elRef, pRef), 500)
		window.addEventListener('scroll', () => checkBounds(elRef, pRef))
		return () => {
			clearInterval(timer.current)
			timer.current = undefined
			window.removeEventListener('scroll', () => checkBounds(elRef, pRef))
		}
	}, [])

	return (
		<div className='App'>
			<div className='App-view'>
				<pre>Child:&nbsp;{rectBounds}</pre>
				<pre>Parent:&nbsp;{pRect}</pre>
				<pre>Computed:&nbsp;{computed}</pre>
			</div>
			<header
				className='App-header'
				ref={pRef}
			>
				<div className='App-container'>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>

					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>

					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>

					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>

					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>

					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>

					<img
						src={logo}
						className='App-logo chosen'
						alt='logo'
						ref={elRef}
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>

					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>

					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
					<img
						src={logo}
						className='App-logo'
						alt='logo'
					/>
				</div>
			</header>
		</div>
	)
}

export default App
