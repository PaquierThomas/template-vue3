<script setup lang="ts">
    import card from "@/components/card.vue";
    import { label } from "@formkit/inputs";
    import { useRouter } from "vue-router";
    import { ref } from "@vue/reactivity";
    import { supabase } from "@/supabase";

    const router = useRouter();
    const quartier = ref({});

    const props = defineProps(["Code_Quartier"]);

    if (props.Code_Quartier) {
        // On charge les données du quartier
        let { data, error } = await supabase
            .from("quartier")
            .select("*")
            .eq("quartier_nom", props.Code_Quartier);
        if (error) console.log("n'a pas pu charger le table 'quartier' :", error);
        else quartier.value = (data as any[])[0];
    }

    async function upsertQuartier(dataForm, node) {
     const { data, error } = await supabase.from("quartier").upsert(dataForm);
     if (error || !data) node.setErrors([error?.message])
     else {
        node.setErrors([]);
        router.push({ name: "quartier-id", params: { id: data[0].Code_Quartier } });
     }
    }

    // Charger les données des communes
    const { data: listeCommune, error } = await supabase
        .from("commune")
        .select("*");
    if (error) console.log("n'a pas pu charger la table Commune :", error);
    // Les convertir par `map` en un tableau d'objets {value, label} pour FormKit
    const optionsCommune = listeCommune?.map((commune) => ({
        value: commune.commune_code,
        label: commune.commune_nom,
    }));

    async function supprimerQuartier() {
    const { data, error } = await supabase
        .from("quartier")
        .delete()
        .match({ Code_Quartier: quartier.value.Code_Quartier });
    if (error) {
        console.error(
        "Erreur à la suppression de ",
        quartier.value,
        "erreur :",
        error
        );
    } else {
        router.push("/quartier");
    }
    }
</script>

<template>
    <div>
        <div class="flex flex-row-reverse justify-center">
            <div class="pb-10  ml-10">
                <h2 class="text-2xl"> (Prévisualisation)</h2>
                <card v-bind="quartier" />
            </div>
            <FormKit @submit="upsertQuartier" type="form" v-model="quartier" :config="{
                classes: {
                input: 'p-1 rounded border-gray-300 shadow-sm border ',
                label: 'text-indigo-500',
                },
                }" :submit-attrs="{ classes: 
                        { input: 'bg-blue-900 text-white font-bold p-2 rounded mt-3',
                        label:''
                    } }">
                <FormKit class="font-bold" name="quartier_nom" label="Nom" />

                <!-- Affiche les communes avec comme valeur l'id de la relation -->
                <FormKit
                    type="select"
                    name="commune_code"
                    label="Commune"
                    :options="optionsCommune"
                />

            </FormKit>

        </div>
    </div>
   
  </template>