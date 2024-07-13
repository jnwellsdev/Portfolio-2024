<template lang='pug'>
main
	section
		header
		aside 
			h1 Experience
			p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <em>incididunt</em> ut labore et dolore magna aliqua. Ut enim ad minim veniam.
		aside 
			h1 Education
			p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <em>incididunt</em> ut labore et dolore magna aliqua. Ut enim ad minim veniam.
			p <span>Experince() =></span>
</template>

<script>

</script>

<style lang='sass' scoped>
@font-face
	font-family: 'Snazzy'
	font-style: normal
	src: url('/font/SnazzyOperatorMonoLig-Medium.woff') format('woff')
	src: url('/font/SnazzyOperatorMonoLig-Medium.woff2') format('woff2')

@font-face
	font-family: 'Snazzy'
	font-style: italic
	src: url('/font/SnazzyOperatorMonoLig-MediumItalic.woff') format('woff')
	src: url('/font/SnazzyOperatorMonoLig-MediumItalic.woff2') format('woff2')
$code-r: #e83243
$code-o: #ffb32c
$code-y: #f3ef79
$code-g: #5af78e
$code-b: #9aedeb
$code-black: #202430
$code-grey: #2b303f
$code-white: #eff0eb
h1
	font-size: 18px
p
	font-size: 16px
main
	padding: 2.5rem 1.5rem
	max-width: 800px
	font-family: 'Snazzy'
	section
		display: flex
		flex-flow: row wrap
		justify-content: center
		align-content: center
		height: calc(75dvh - 8rem)
		background-color: #2b303f
		header
			display: flex
			height: 25dvh
			padding-bottom: 1.5rem
			width: 100%
			img
				margin-right: 1.5rem
		aside
			width: 49.5%
			background-color: transparentize(aliceblue, 0.98)
			padding: 1.5rem
			margin-bottom: 1%
			flex: 1
			color: $code-white
			h1
				color: $code-r
				&:after
					content: ':'
					font-size: 14px
					color: $code-white
			p
				em
					color: $code-y
				span
					color: $code-b
</style>