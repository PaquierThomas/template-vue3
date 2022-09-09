<script setup lang="ts">
    import Card from "../components/card.vue" ;
    const maison1 = {
        nom: "Beverly Springfield",
        prix: 5000,
        favori: true,
        image: "/public/pexels-binyamin-mellish-106399.jpg",
        lit: "5",
        nbrSDB: 2,
        taille: 320,

    };
    const maison2 = {
        nom: "Beverly Hils",
        prix: 3200,
        favori: false,
        image: "/public/pexels-binyamin-mellish-106399.jpg",
        lit: "4",
        nbrSDB:1,
        taille: 212,

    };
    const maison3 = {
        nom: "NewHope Ohio",
        prix: 12300,
        favori: true,
        image: "/public/pexels-binyamin-mellish-106399.jpg",
        lit: "7",
        nbrSDB: 4,
        taille: 560,

    };

    const maisons = [ {maison1}, {maison2}, {maison3},];
</script>
<template>
    <div class="p-2">
        <h2>Page maisons simple</h2>
        <Card/>
        <Card v-bind="{nom: 'Beverly Springfield' , prix: 5000 , favori: true , image: '/public/pexels-binyamin-mellish-106399.jpg' ,lit:4, nbrSDB: 2, taille: 125  }"></Card>
        <Card v-bind="maison1"/>
    </div>
</template>