<template lang='pug'>
main 
	header
		h1 Jesse Wells
		p(v-html='store.data.intro')
	section.works
		Card(:pt='pCard')
			template(#header)
			template(#title)
				h1 Recent Work
			template(#subtitle)
				p (2020) => present
			template(#content)
				p(v-html='store.data.recent' style='')
			template(#footer)
				Button(:icon='`${store.allowed ? "pi pi-eye" : "pi pi-lock"}`' size='large' severity='success' v-tooltip.left='{value: `${store.allowed ? "View Work" : "Enter Password" }`}' style='border-width: 3px; text-decoration: none;' rounded outlined @click='handlePassword')
		Card(:pt='pCard')
			template(#header)
			template(#title)
				h1 Previous Work
			template(#subtitle)
				p (2010) => 2020
			template(#content)
				p(v-html='store.data.previous')
			template(#footer)
				Button(icon="pi pi-eye" size='large' severity='success' v-tooltip.left='{value: "View Work"}' style='border-width: 3px; text-decoration: none;' as='a' href='http://jessenwells.com/portfolio' target="_blank" rounded outlined )
	section.details
		article.shot
			Card(:pt='pCardImage')
				template(#content)
					Image(:pt='pImage' src='/img/jnwells.jpg' preview)
			.single 
				p Currently Available for Small Projects and Consultation 
				Button(label='jnwellsdev@gmail.com' severity='success' as='a' href='mailto:jnwellsdev@gmail.com' target="_blank")
				//- Timeline(:value='events' :pt='pTline')
				//- 	template(#opposite='slotProps')
				//- 		small {{slotProps.item.date}}
				//- 	template(#content='slotProps')
				//- 		small {{ slotProps.item.status }}
		article.resume
			.buttons
				Divider(type='dotted')
				Button(icon="pi pi-search" size='large' severity='info' v-tooltip.top='{value: "View Resume"}' class='info' style='border-width: 3px; text-decoration: none;' target="_blank" @click='store.setResume' rounded outlined )
				Button(icon="pi pi-print" size='large' severity='warn' v-tooltip.top='{value: "PDF Resume"}' style='border-width: 3px; text-decoration: none;' as='a' href='/img/jnwells-resume-2024.pdf' target="_blank" rounded outlined )
				Button(icon="pi pi-save" size='large' severity='help' v-tooltip.top='{value: "Word Resume"}' style='border-width: 3px; text-decoration: none;' as='a' href='/img/jnwells-resume-2024.docx' rounded outlined )
			Card(:pt='pCardResume' @click='clickResume')
				template(#content)
					Resume
				template(#footer)
	footer
	Dialog.enter-code(v-model:visible='store.dialog' header='Enter Password' :dismissableMask='true' modal)
		InputOtp(v-model='store.code' :class='[{correct: store.correct}, {incorrect: store.code.length > 3 && !store.correct}]' mask autofocus)
			template(#default)
	Dialog.view-resume(v-model:visible='store.resume' :dismissableMask='true' modal)
		Resume
	Toast(position='top-right' successIcon='pi pi-check-circle')
</template>

<script setup>
import { use2024Store } from '@/store'
import { useToast } from 'primevue/usetoast'
const store = use2024Store()
const route = useRoute()
const router = useRouter()
const toast = useToast()
store.allowed && history.pushState('', '', '/2024')

const handlePassword = () => store.allowed ? router.push('/recent-work') : (store.setDialog(true))
const handleCorrect = (val) => !val ? store.setCorrect(val) : (
	store.setCorrect(val), setTimeout(() => {
		store.setAllowed(true)
		store.setDialog(false)
	}, 1250))

const showToast = () => {
	toast.add({ severity: 'success', summary: 'Password Accepted', life: '3000' })
}

const codeFocus = () => document.querySelectorAll('.p-inputotp-input')[0].focus()

const clickResume = (e) => e.target.nodeName !== 'tspan' && e.target.nodeName !== 'svg' && store.setResume(true)

watch(
	() => store.code,
	(val) => val === store.value ? handleCorrect(true) : handleCorrect(false)
)
watch(
	() => store.correct,
	(val) => val === true && showToast()
)
watch(
	() => store.dialog,
	(val) => val === true && setTimeout(() => {
		codeFocus()
	}, 1000)
)

setTimeout(() => {
	store.allowed && showToast()
}, 1000)

const events = [
	{ status: 'Engineer', date: '2024', color: '#9C27B0' },
	{ status: 'Developer', date: '2020', color: '#673AB7' },
	{ status: 'Designer', date: '2015', color: '#FF9800' },
	{ status: 'Illsutrator', date: '2010', color: '#607D8B' }
]

const pCard = {
	root: {
		style: `--p-card-shadow: 0px 4px 20px -6px rgba(0,0,0,0.025), 0px 3px 20px 6px rgba(0,0,0,0.025), 0px 4px 20px 6px rgba(0,0,0,0.025);
						border: 4px solid rgb(43 48 63 / 90%);
						outline: 2px solid rgb(50 60 78 / 58%);
						margin: 2rem 0;
						background: rgb(43 48 63 / 35%);
						background-image: url(/img/otis-redding2.png);
		`
	},
	title: {
		style: ` margin: 0; color: var(--p-orange-500);`
	},
	subtitle: {
		style: `color: var(--p-blue-500); font-style: italic;`
	},
	body: {
		style: `flex: 1`
	},
	content: {
		style: `flex: 1`
	},
	footer: {
		style: `display: flex;justify-content:flex-end;padding-padding-top: 2rem`
	}
}
const pCardResume = {
	root: {
		style: `--p-card-shadow: 0px 4px 20px -6px rgba(0,0,0,0.025), 0px 3px 20px 6px rgba(0,0,0,0.025), 0px 4px 20px 6px rgba(0,0,0,0.025);
						border: 4px solid rgb(43 48 63 / 90%);
						outline: 2px solid rgb(50 60 78 / 58%);
						background: rgb(43 48 63 / 35%);
						background-image: url(/img/otis-redding2.png);
		`
	},
	title: {
		style: ` margin: 0; color: var(--p-orange-500);`
	},
	subtitle: {
		style: `color: var(--p-blue-500); font-style: italic;`
	},
	body: {
		style: `flex: 1;padding: 0.25rem 0;`
	},
	content: {
		style: `flex: 1`
	},
	footer: {
		style: `display: flex;justify-content:flex-end;padding-padding-top: 2rem`
	}
}
const pCardImage = {
	root: {
		style: `--p-card-shadow: 0px 4px 20px -6px rgba(0,0,0,0.025), 0px 3px 20px 6px rgba(0,0,0,0.025), 0px 4px 20px 6px rgba(0,0,0,0.025);
						border: 4px solid rgb(43 48 63 / 90%);
						outline: 2px solid rgb(50 60 78 / 58%);
						background: rgb(43 48 63 / 35%);
						background-image: url(/img/otis-redding2.png);
						z-index: 100;
		`
	},
	title: {
		style: ` margin: 0; color: var(--p-orange-500);`
	},
	subtitle: {
		style: `color: var(--p-blue-500); font-style: italic;`
	},
	body: {
		style: `flex: 1; padding: 0.3rem 0.3rem 0.25rem 0.3rem;`,
	},
	content: {
		style: `display: flex; flex: 1;`
	},
	footer: {
		style: `display: flex;justify-content:flex-end;padding-padding-top: 2rem`
	}
}

const pImage = {
	image: {
		style: `max-width: 100%; height: auto;outline: 6px solid var(--p-gray-500);border-radius: 8px;`
	},
	previewMask: {
		style: `background: rgb(243 239 121 / 7%);`
	},
	previewIcon: {
		style: `color: var(--p-blue-500);width:15%;height:15%; opacity: 0;`
	},
	original: {
		style: `width: 80vw; max-width: 600px;border-radius: 8px;`
	}
}

const pTline = {
	root: {
		style: `--p-timeline-event-connector-color: var(--p-blue-500); --p-timeline-event-marker-content-background: var(--p-blue-500);`
	}
}


</script>

<style lang='sass' scoped>
main
	width: 100%
	max-width: 1280px
	container: layout / inline-size
	header
		padding: 0 1.5rem 1rem 3rem
		margin-top: 2.25rem
		h1
			margin-top: 0
			font-family: 'Lilita One', sans-serif
			// font-family: 'Noto Sans', sans-serif
			font-weight: 400
			font-size: 3.3rem
			font-style: italic
			text-decoration: underline
			text-underline-offset: 10px
			color: var(--p-red-500)
			text-shadow: 0px 0px 22px rgb(232 50 67 / 40%)
		p
			text-shadow: 0px 0px 16px rgb(130 140 180 / 80%)
	section
		display: flex
		justify-content: space-between
		padding: 0 1.5rem 1rem 1.5rem
		@media (max-width: 880px)
			flex-flow: column
			align-items: center
		.p-card
			width: 49%
			// padding: 1.5rem
			@media (max-width: 880px)
				width: 96%
				margin-bottom: 0 !important
			h1
				font-weight: 500 
				margin: 0
			p
				margin: 0
		&.details
			margin-top: 0.75rem
			.shot
				width: 24%
				margin-bottom: 3rem
				@media (max-width: 880px)
					width: 96%
					display: flex
					flex-flow: column
					justify-content: center
					align-items: center
					margin-top: 2.25rem
				.p-card
					width: 100%
					@media (max-width: 880px)
						width: 38%
						min-width: 250px
				.single
					@media (max-width: 880px)
						width: 38%
						min-width: 250px
						display: flex
						flex-flow: column
						justify-content: flex-end
					p
						color: var(--p-slate-500)
						font-weight: 200
						margin: 2rem 0
					.p-button
						width: 100%
						font-family: Inter
						color: var(--p-zinc-600)
			.resume
				width: 74%
				@media (max-width: 880px)
					width: 96%
				.p-card
					width: 100%
					margin: 0
				.buttons
					display: flex
					justify-content: space-between
					width: 100%
					margin: 0 3% 3rem 0
					@media (max-width: 580px)
						width: 84%
						margin: 0.5rem 8% 3rem 8%
					.p-divider
						width: 74%
						margin: 0 1% 0 2%
						@media (max-width: 880px)
							width: 68%
							margin: 0 1%
						@media (max-width: 580px)
							width: 48%
							margin: 0 1% 0 0
						&:before
							border-color: rgb(37 41 54 / 50%)
							border-width: 30px
							top: calc(50% - 15px)
	footer
		margin-bottom: 4rem
</style>
