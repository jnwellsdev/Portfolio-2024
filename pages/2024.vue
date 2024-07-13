<template></template>
<script setup>
import { use2024Store } from '@/store'
const store = use2024Store()
console.log(store.allowed)
const route = useRouter()
store.setAllowed(true)
route.push({ path: "/" })  
</script>