<template lang='pug'>
Card.pHeader(:pt='pHeader')
  template(#content)
    h1 Jesse Wells
    p Hey, I am a 
      span.c1 Front-End Web Developer 
      | with a foundation in 
      span.c2 JavaScript 
      | and a background in 
      span.c3 Design
      | . <br> I am based in Brooklyn NY with 10+ years of professional experience.
Card(:pt='pCard')
  template(#header)
  template(#title) Advanced Card
  template(#subtitle) Card subtitle
  template(#content) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis.
  template(#footer)
    .wrap
      Button(label='Cancel' outlined)
      Button(label='Save')

</template>

<script setup lang="ts">
const route = useRoute()
const pCard = {
  root: {
    style: `--p-card-shadow: 0px 2px 8px -1px rgba(0,0,0,0.03), 0px 1px 4px 0px rgba(0,0,0,0.02), 0px 1px 3px 4px rgba(0,0,0,0.03);
            height: 100dvh;
            border: 2px solid #363b4a;
            margin: 2rem;
    `
  }
}
const pHeader = {
  root: {
    style: `--p-card-shadow: none;
            border: none;
            background: transparent;
            margin: 2rem 2rem 0 2rem;
            width: 80dvw;
            max-width: 1280px;
    `
  }
}
const pFieldset = {
  root: {
    style: `--p-fieldset-background: transparent`
  },
  legend: {
    style:
      `--p-fieldset-legend-background: transparent;
     --p-fieldset-legend-border-color: #363b4a;
     --p-fieldset-legend-border-width: 2px;
     --p-fieldset-legend-font-weight: normal;
    `

  }
}
</script>

<style lang='sass' scoped>
.p-card
  .p-button
    margin-right: 1rem
.pHeader
  h1
    font-size: 2.5rem
    font-style: italic 
    text-decoration: underline
    text-underline-offset: 4px
    color: var(--p-red-500)
  span
    &.c1
      color: var(--p-yellow-500)
    &.c2
      color: var(--p-green-500)
    &.c3
      color: var(--p-blue-500)
</style>
