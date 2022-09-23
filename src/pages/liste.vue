<script setup lang="ts">
    import Card from "../components/card.vue" ;
    import maison from "../maison.json"
</script>


<template>
    <div class="p-2">
        <h2>Page liste maisons simple</h2>
        <Card v-for="m in maison" :key="m.nom" v-bind="m"/>
    </div>
</template>