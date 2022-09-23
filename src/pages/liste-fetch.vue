<script setup>
const res = await fetch("/src/maison.json");
const maisons = await res.json();

import Card from "../components/card.vue" ;
</script>

<template>
    <Card v-for="m in maisons" :key="m.nom" v-bind="m"/>
</template>