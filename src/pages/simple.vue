<script setup lang="ts">
    import Card from "../components/card.vue" ;
    const maison1 = {
        nom: "Beverly Springfield",
        prix: "5000",
        favori: true,
        image: "/public/pexels-binyamin-mellish-106399.jpg",
        lit: "5",
        nbrSDB: "2",

    }
</script>
<template>
    <div class="p-2">
        <h2>Page maisons simple</h2>
        <Card/>
        <Card v-bind="{nom: 'Beverly Springfield' , prix: 5000 , favori: true , image: '/public/pexels-binyamin-mellish-106399.jpg' , nbrSDB: 2 }"></Card>
        <Card v-bind="maison1"/>
    </div>
</template>