<script setup lang="ts">
    import card from "@/components/card.vue";
    import { label } from "@formkit/inputs";
    import { useRouter } from "vue-router";
    import { ref } from "@vue/reactivity";
    import { supabase } from "@/supabase";

    const router = useRouter();
    const quartier = ref({});

    const props = defineProps(["id"]);

    if (props.id) {
        // On charge les données de la maison
        let { data, error } = await supabase
            .from("quartier")
            .select("*")
            .eq("quartier_nom", props.id);
        if (error) console.log("n'a pas pu charger le table 'quartier' :", error);
        else quartier.value = (data as any[])[0];
    }

    async function upsertQuartier(dataForm, node) {
     const { data, error } = await supabase.from("quartier").upsert(dataForm);
     if (error || !data) node.setErrors([error?.message])
     else {
     node.setErrors([]);
     router.push({ name: "edit-id", params: { id: data[0].id } });
     }
    }
</script>

<template>
    <div>
        <div class="flex flex-row-reverse justify-center">
            <div class="p-2">
                <h2 class="text-2xl"> (Prévisualisation)</h2>
                <card v-bind="quartier" />
            </div>
            <FormKit @submit="upsertQuartier" type="form" v-model="quartier" :config="{
                classes: {
                input: 'p-1 rounded border-gray-300 shadow-sm border',
                label: 'text-indigo-500',
                },
                }" :submit-attrs="{ classes: 
                        { input: 'bg-blue-900 text-white font-bold p-2 rounded',
                        label:''
                    } }">
                <FormKit class="font-bold" name="quartier_nom" label="Nom" />

            </FormKit>

        </div>
    </div>
   
  </template>