<script setup lang="ts">
    // import des éléments utilisés de VueJS
    import {ref, onMounted } from 'vue'
    import Card from "../components/card.vue" ;



    // Utilisation d'une ref pour la requête Ajax
    // null au départ 
   let maison = null;
   const response = await fetch('maison.json')
    // Récupération des résultats
    maison= await response.json();
    // Affichage dans la console
    console.log(maison);
 /*   onMounted(async() => {
    // Appel Ajax via Fetch
    const response = await fetch('../../public/maison.json')
    // Récupération des résultats
    maison= await response.json();
    // Affichage dans la console
    console.log(maison);
    }); */
</script> 

<template>
  <div class = "container">
    <h6>Liste avec fetch des maisons</h6>
    {{maison}}
    <Card v-for="l in maison" :key="l.nom" v-bind="l"/>
  </div>

</template>