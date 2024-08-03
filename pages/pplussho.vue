<template lang='pug'>
main 
	header
		nuxtLink(to='/')
		h1(@click='router.push("/")') Jesse Wells
		p(v-html='store.data.intro')
	section.work
		Card.desk(:pt='pCard')
			template(#content)
				Image(:pt='pImage' :src='`/img/pplus-1.png`' preview)
		Card.desk(:pt='pCard')
			template(#content)
				Image(v-for='index in 4' :pt='pImage' :src='`/img/pplus-${index + 1}.png`' preview)
                
</template>

<script setup>
import { use2024Store } from '@/store'
const store = use2024Store()
const router = useRouter()

const handleLink = (val) => window.open(`https://${val.link}`, '_blank')

const pCard = {
	root: {
		style: `--p-card-shadow: 0px 4px 20px -6px rgba(0,0,0,0.025), 0px 3px 20px 6px rgba(0,0,0,0.025), 0px 4px 20px 6px rgba(0,0,0,0.025);
				border: 4px solid rgb(43 48 63 / 90%);
				outline: 2px solid rgb(50 60 78 / 58%);
				margin: 2.5rem 0 0 0;
				background: rgb(43 48 63 / 35%);
				background-image: url(/img/otis-redding2.png);
				width: 100%;
		`
	},
	title: {
		style: ` margin: 0; color: var(--p-orange-500);`
	},
	subtitle: {
		style: `color: var(--p-blue-500); font-style: italic;`
	},
	body: {
		style: `flex: 1; padding: 0.75rem;`
	},
	content: {
		style: `flex: 1`
	},
	footer: {
		style: `display: flex;justify-content:flex-end;padding-padding-top: 2rem`
	}
}
const pCardSm = {
	root: {
		style: `--p-card-shadow: 0px 4px 20px -6px rgba(0,0,0,0.025), 0px 3px 20px 6px rgba(0,0,0,0.025), 0px 4px 20px 6px rgba(0,0,0,0.025);
						border: 4px solid rgb(43 48 63 / 90%);
						outline: 2px solid rgb(50 60 78 / 58%);
						margin: 2.25rem 0 0 0;
						background: rgb(43 48 63 / 35%);
						background-image: url(/img/otis-redding2.png);
						width: 30.75%;
		`
	},
	title: {
		style: ` margin: 0; color: var(--p-orange-500);`
	},
	subtitle: {
		style: `color: var(--p-blue-500); font-style: italic;`
	},
	body: {
		style: `flex: 1; padding: 0.75rem;`
	},
	content: {
		style: `flex: 1`
	},
	footer: {
		style: `display: flex;justify-content:flex-end;padding-padding-top: 2rem`
	}
}
const pCardAd = {
	root: {
		style: `--p-card-shadow: 0px 4px 20px -6px rgba(0,0,0,0.025), 0px 3px 20px 6px rgba(0,0,0,0.025), 0px 4px 20px 6px rgba(0,0,0,0.025);
						border: 4px solid rgb(43 48 63 / 90%);
						outline: 2px solid rgb(50 60 78 / 58%);
						margin: 2.25rem 0 0 0;
						background: rgb(43 48 63 / 35%);
						background-image: url(/img/otis-redding2.png);
						width: 100%;
		`
	},
	title: {
		style: ` margin: 0; color: var(--p-orange-500);`
	},
	subtitle: {
		style: `color: var(--p-blue-500); font-style: italic;`
	},
	body: {
		style: `flex: 1; padding: 0.75rem;`
	},
	content: {
		style: `flex: 1`
	},
	footer: {
		style: `display: flex;justify-content:flex-end;padding-padding-top: 2rem`
	}
}
const pImage = {
	image: {
		style: `max-width: 100%; height: auto;`
	},
	previewMask: {
		style: `background: rgb(243 239 121 / 1%);`
	},
	previewIcon: {
		style: `color: var(--p-blue-500);width:15%;height:15%; opacity: 0;`
	},
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
			cursor: pointer
			width: 30%
			min-width: 300px
			padding-right: auto
		p
			text-shadow: 0px 0px 16px rgb(130 140 180 / 80%)
			max-width: 77%
			height: 84px
			@media (max-width: 550px)
				max-width: 100%
				height: 114px
			@media (max-width: 400px)
				max-width: 100%
				height: 134px
	section
		display: flex
		justify-content: space-between
		padding: 0 1.5rem 1rem 1.5rem
		@media (max-width: 880px)
			flex-flow: column
			align-items: center
		.p-card
			cursor: pointer
			@media (max-width: 880px)
				width: 96%
				margin-bottom: 0 !important
			h1
				font-weight: 500 
				margin: 0
			p
				margin: 0
			.p-image
				img
					width: 100%
					height: auto
		&.work
			flex-flow: row wrap
			margin-bottom: 8rem
			h1
				font-weight: 400
				width: 100%
				padding-left: 2rem
			.p-card
				transition: border-color 0.35s ease
			.p-card:hover
				border-color: var(--p-gray-400) !important
@media (max-width:880px)
	.desk
		width: 100% !important
		margin-right: auto !important
		margin-left: auto !important
	.mob
		width: 80% !important
		margin-right: auto !important
		margin-left: auto !important
</style>