<script setup lang="ts">
import { ref } from "@vue/reactivity";
import Card from "./card.vue";
// On fait une variable réactive qui réference les données
// ATTENTION : faire une Ref pas une Reactive car :
// c'est l'objet qui doit être réactif, pas ses props
const maison = ref({});
</script>
    
<template>
    <div>
        <div class="p-2">
            <h2 class="text-2xl">Résultat (Prévisualisation)</h2>
            <!-- Optionnel on affiche les données -->
            <Card v-bind="maison" />
        </div>
        <div class="p-2 mt-4">
            <!--On passe la "ref" à FormKit-->
            <FormKit type="form" v-model="maison" submit-label="Changer" :config="{ classes: {
                 input: 'p-1 rounded border-gray-300 shadow-sm border',
                  label: 'text-indigo-500',
                 },
            }" :submit-attrs="{ classes: { input: 'bg-blue-900 text-white font-bold p-2 rounded' } }">
                <FormKit name="nom" label="Nom" label-class="font-bold"/>
                <FormKit name="prix" label="Prix" type="number" label-class="font-bold" />
                <FormKit name="favori" label="Mettre en valeur" type="checkbox" wrapper-class="flex"/>
            </FormKit>
        </div>
    </div>
</template>