<script setup lang="ts">
import {Disclosure} from "@headlessui/vue";
import { supabase } from "../../supabase";
import groupBy from "lodash/groupBy";

const { data, error }= await supabase.from("quartiercommune").select("*");
if (error) console.log("n'a pas pu charger la table quartiercommune :", error);

</script>

<template>
  <section class="flex flex-col">
    <h3 class="text-2xl"> Liste des quartiers </h3>
    <!-- <ul>
      <li v-for="quartiercommune in (listeQuartier as any[])">
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

    <DisclosurePanel v-for="q in (listeQuartier as any[])" :key="q.quartier_nom">
      <ul>
        <li
        v-for="q in listeQuartier"
        :key="q.Code_Quartier">
        </li>
      </ul>
   </DisclosurePanel>



    </Disclosure>

  </section>
</template>