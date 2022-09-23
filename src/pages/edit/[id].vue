<script setup lang="ts">
import Formulaire from "../../components/formulaire.vue";

defineProps({
    id: String,
});
    
</script>

<template>
    <Formulaire :id="id" />
</template>