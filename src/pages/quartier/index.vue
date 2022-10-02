<script setup lang="ts">
import { supabase } from "../../supabase";
import groupBy from "lodash/groupBy";
const { data, error }= await supabase.from("quartiercommune").select("*");
if (error) console.log("n'a pas pu charger la table quartiercommune :", error);

</script>

<template>
  <section class="flex flex-col">
    <h3 class="text-2xl"> Liste des quartiers </h3>
    <!-- <ul>
      <li v-for="quartiercommune in (data as any[])">
          {{ quartiercommune.commune_nom }} -
          {{ quartiercommune.quartier_nom }}
      </li>
    </ul> -->
    <Disclosure
      v-for="(listeQuartier, commune_nom) in groupBy(
        data,
        'commune_nom'
      )"
    :key="commune_nom"
    >

    <DisclosureButton  v-for="c in (listeQuartier as any[])" :key="c.commune_nom"
                class="border">
        {{ c.commune_nom }}
    </DisclosureButton>



    </Disclosure>

  </section>
</template>