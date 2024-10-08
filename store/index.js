import { defineStore } from 'pinia'
import data from '../content/index.yml'

export const use2024Store = defineStore('2024', {
	state: () => ({
		data,
		allowed: false,
		dialog: false,
		resume: false,
		code: '',
		value: '2024',
		correct: false,
		complete: false,
		mobile: false,
	}),
	getters: {},
	actions: {
		
		setAllowed(val) {
			this.allowed = val
		},
		setDialog(val) {
			this.dialog = val
		},
		setCorrect(val) {
			this.correct = val
		},
		setResume(val) {
			this.resume = val
		},
		setComplete(val) {
			this.complete = val
		},
		handleMobile(val) {
			// watch media query
			const mq = window.matchMedia(`(max-width: ${val}px)`)
			const mqMatch = (e) => (this.mobile = e.matches)
			mqMatch(mq)
			mq.addEventListener('change', mqMatch)
		},
	},
})
