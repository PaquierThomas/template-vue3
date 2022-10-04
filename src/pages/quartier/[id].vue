<script setup lang="ts">
    import FormulaireQuartier from "../../components/FormulaireQuartier.vue";
    defineProps<{
      Code_Quartier: string;
    }>();
</script>

<template>
    <div class="p-2">
    <FormulaireQuartier :id="Code_Quartier" />
    </div>
</template>