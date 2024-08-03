<template lang="pug">
#app
	NuxtPage
</template>
<script>
const el = document.querySelector('html')
el.classList.toggle('is-dark')
</script>
<style lang="sass">
@import 'primeicons/primeicons.css'
@import 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lilita+One&family=Lobster&family=Mukta:wght@200;300;400;500;600;700;800&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap'
@font-face
	font-family: 'Snazzy'
	font-style: normal
	src: url('/font/operator-medium.woff2') format('woff2')

@font-face
	font-family: 'Snazzy'
	font-style: italic
	src: url('/font/operator-medium-italic.woff2') format('woff2')

$code-r: #e83243
$code-o: #ffb32c
$code-y: #f3ef79
$code-g: #5af78e
$code-b: #9aedeb
$code-black: #202430
$code-grey: #2b303f
$code-white: #eff0eb
svg
	width: 100%
:root
	--p-mask-background: rgb(12 12 22 / 88%)
body
	font-family: Snazzy
	font-weight: 300
	background: #202430
	background-image: url(/img/egg-shell2.png)
	color: #eff0eb
	margin: 0
a
	text-decoration: none
#app
	display: flex
	flex-flow: column
	justify-content: center
	align-items: center
	// height: 100dvh
	padding-top: 10cqh
	font-size: 1.1rem
	@media (max-width: 880px)
		height: auto
		padding-top: 4cqh
	background: transparent
	
// teleport
.p-tooltip-arrow
	display: none
.p-tooltip-text
	color: var(--p-green-400)
	padding: 10px 16px
.p-tooltip-top .p-tooltip-text
	color: var(--p-yellow-400)
	padding: 10px 16px
#pv_id_3_tooltip .p-tooltip-text
	color: var(--p-blue-400)
	padding: 10px 16px
#pv_id_4_tooltip .p-tooltip-text
	color: var(--p-orange-400)
	padding: 10px 16px
#pv_id_5_tooltip .p-tooltip-text
	color: var(--p-yellow-400)
	padding: 10px 16px
	width: auto
#pv_id_6_tooltip .p-tooltip-text
	color: var(--p-green-400)
	padding: 10px 16px
	width: auto
.p-inputotp
	gap: 1
.p-inputotp input
	border-color: var(--p-stone-400)
	border-width: 2px
.p-inputotp.incorrect input
	border-color: var(--p-red-400)
	color: var(--p-red-400)
	box-shadow: 0 0 0 0.2rem color-mix(in srgb,var(--p-red-600),transparent 80%)
.p-inputotp.correct input
	border-color: var(--p-green-400)
	border-width: 2px
	color: var(--p-green-400)
.p-dialog.enter-code
	padding: 0.5rem 1.75rem 0.5rem 2.5rem
	border-color: var(--p-stone-700)
	background: var(--p-zinc-700)
	border-width: 2px
.p-dialog-title
	font-weight: 400
.p-dialog.view-resume
	width: 98dvw
	max-height: 98dvh
	padding: 0
	.p-dialog-header
		padding: 0
		margin-bottom: -44px
	.p-dialog-content
		padding-left: 0
		padding-right: 0
		margin-bottom: -18px
.p-dialog-close-button
	border: none
	box-shadow: none
	background: transparent
.p-toast
	width: auto
	@media (max-width: 550px)
		width: calc(100% - 40px)
	.p-toast-message
		margin: 0
		.p-toast-message-content
			align-items: center
			.p-toast-message-text
				gap: 0.25rem
				padding-left: 0.75rem
			.p-toast-close-button
				margin: 0
@keyframes blink
	0%, 28%, 32%, 60%, 88%
		border-color: var(--p-stone-400)
		border-width: 2px
		color: var(--p-stone-400)
	14%, 46%, 74%, 100%
		border-color: var(--p-green-400)
		border-width: 2px
		color: var(--p-green-400)
</style>