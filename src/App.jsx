import { useState } from 'react'
import './App.css'
import { QUOTES, COLORS } from './quotes'
import { getRandomIndex } from './utils'

function App() {
	const [quoteIdx, setQuoteIdx] = useState(() =>
		Math.floor(Math.random() * QUOTES.length)
	)
	const [colorIdx, setColorIdx] = useState(() =>
		Math.floor(Math.random() * COLORS.length)
	)

	const handleNewQuote = () => {
		setQuoteIdx((idx) => getRandomIndex(QUOTES, idx))
		setColorIdx((idx) => getRandomIndex(COLORS, idx))
	}

	const { text, author } = QUOTES[quoteIdx]
	const bgColor = COLORS[colorIdx]
	const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
		'"' + text + '" - ' + author
	)}`

	return (
		<div
			id="quote-box"
			className="quote-container"
			style={{
				background: bgColor,
				minHeight: '100vh',
				transition: 'background 0.5s',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<div className="quote-box-inner">
				<p id="text" className="quote-text">
					“{text}”
				</p>
				<p id="author" className="quote-author">
					- {author}
				</p>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						gap: '1rem',
					}}
				>
					<button
						id="new-quote"
						className="new-quote-btn"
						onClick={handleNewQuote}
						style={{ background: bgColor }}
					>
						New Quote
					</button>
					<a
						id="tweet-quote"
						className="tweet-quote-btn"
						href={tweetUrl}
						target="_blank"
						rel="noopener noreferrer"
						style={{
							background: bgColor,
							color: '#fff',
							padding: '0.75rem 1.5rem',
							borderRadius: '2rem',
							textDecoration: 'none',
							fontWeight: 'bold',
							display: 'inline-flex',
							alignItems: 'center',
						}}
					>
						Tweet Quote
					</a>
				</div>
			</div>
		</div>
	)
}

export default App
