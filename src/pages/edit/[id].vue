<script setup lang="ts">
import Formulaire from "../../components/formulaire.vue"
import {supabase} from "@/supabase";

defineProps({
    id: String,
});
    
</script>

<template>
    <div>
        <Formulaire  :id="id"/>
    </div>
</template>