import React from 'react'

import styles from './SpinnerRow.module.scss'

const SpinnerRow = () => {
	return (
		<>
			<svg
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.spinner}
			>
				<g clipPath="url(#clip0_84_446)">
					<g clipPath="url(#clip1_84_446)">
						<g clipPath="url(#clip2_84_446)">
							<circle
								cx="9.93761"
								cy="19.5"
								r="5"
								transform="rotate(-30 9.93761 19.5)"
								stroke="#46484E"
								strokeWidth="2"
							/>
							<path
								d="M2.07012 14.9807C3.40598 13.8112 5.09289 13.1194 6.86519 13.0141C8.63748 12.9088 10.3945 13.396 11.8594 14.3991C13.3243 15.4021 14.4139 16.864 14.9567 18.5544C15.4994 20.2449 15.4644 22.0678 14.8572 23.7362"
								stroke="#46484E"
								strokeWidth="2"
								strokeLinecap="round"
							/>
							<circle
								cx="9.93762"
								cy="19.5"
								r="2"
								transform="rotate(-30 9.93762 19.5)"
								fill="#46484E"
							/>
						</g>
						<g clipPath="url(#clip3_84_446)">
							<circle
								r="5"
								transform="matrix(-0.866025 0.5 0.5 0.866025 22.062 12.5)"
								stroke="#46484E"
								strokeWidth="2"
							/>
							<path
								d="M22.0819 3.4268C20.4012 3.99895 18.9585 5.11394 17.9812 6.59615C17.0039 8.07835 16.5474 9.84356 16.6836 11.6137C16.8198 13.3839 17.541 15.0585 18.7336 16.3738C19.9261 17.689 21.5224 18.5702 23.2708 18.8785"
								stroke="#46484E"
								strokeWidth="2"
								strokeLinecap="round"
							/>
							<circle
								r="2"
								transform="matrix(-0.866025 0.5 0.5 0.866025 22.062 12.5)"
								fill="#46484E"
							/>
						</g>
					</g>
				</g>
				<path
					d="M21.8325 23.8518L20.9011 21L19.3104 22.5715L21.8325 23.8518Z"
					fill="#46484E"
				/>
				<defs>
					<clipPath id="clip0_84_446">
						<rect width="32" height="32" fill="white" />
					</clipPath>
					<clipPath id="clip1_84_446">
						<rect
							width="32"
							height="32"
							fill="white"
							transform="translate(-5.85657 10.1436) rotate(-30)"
						/>
					</clipPath>
					<clipPath id="clip2_84_446">
						<rect
							width="32"
							height="32"
							fill="white"
							transform="translate(-5.85657 10.1436) rotate(-30)"
						/>
					</clipPath>
					<clipPath id="clip3_84_446">
						<rect
							width="32"
							height="32"
							fill="white"
							transform="matrix(-0.866025 0.5 0.5 0.866025 21.8562 -5.85641)"
						/>
					</clipPath>
				</defs>
			</svg>
		</>
	)
}

export default SpinnerRow
