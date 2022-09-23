<script setup>
import Formulaire from "../components/formulaire.vue";
import { supabase } from "../supabase";
import {ref} from "@vue/reactivity"
import Card from "../components/card.vue" ;

console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code

const maisons = [supabase]; // à remplacer par l'appel à Supabase

let { data: maison, error } = await supabase
  .from('maison')
  .select('*')

  console.log('Maison: ', maison)
  const user = ref(supabase.auth.user());

    supabase.auth.onAuthStateChange(()=>{
    user.value = supabase.auth.user()
})


</script>

<template>
    <Card/>
    <Formulaire/>
</template>