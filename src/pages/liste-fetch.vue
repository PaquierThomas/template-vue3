<script setup lang="ts">
    import Card from "../components/card.vue"

    const res = await fetch("../../public/maison.json")

    const maisons = await res.json()
</script>

<template>
    <div>
        <h2>Liste en utilisant fetch</h2>
        <Card v-for="m in maisons" :key="m.nom" v-bind="m"/>
    </div>
</template>