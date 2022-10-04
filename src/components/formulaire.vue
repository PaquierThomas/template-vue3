<script setup lang="ts">
    import {supabase} from '@/supabase'
    import { ref } from "@vue/reactivity";
    import Card from "@/components/card.vue";
    import { label } from "@formkit/inputs";
    import { useRouter } from "vue-router";
    
    const router = useRouter();
    const maison = ref({});
    
    const props = defineProps(["id"]);
    if (props.id) {
     // On charge les données de la maison
     let { data, error } = await supabase
     .from("maison")
     .select("*")
     .eq("id", props.id);
     if (error) console.log("n'a pas pu charger le table Maison :", error);
     else maison.value = (data as any[])[0];
    }
    
    
    async function upsertMaison(dataForm, node) {
     const { data, error } = await supabase.from("maison").upsert(dataForm);
     if (error || !data) node.setErrors([error?.message])
     else {
     node.setErrors([]);
     router.push({ name: "edit-id", params: { id: data[0].id } });
     }
    }

    const { data: dataQuartierCommune, error } = await supabase
        .from("quartiercommune")
        .select("*");
    if (error) console.log("n'a pas pu charger la vue quartiercommune :", error);
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
            <FormKit @submit="upsertMaison" type="form" v-model="maison" submit-label="Changer"  :config="{ 
                classes: {
                    input: 'p-1 rounded border-gray-300 shadow-sm border',
                    label: 'text-indigo-500',
                },
            }" :submit-attrs="{ 
                classes: { 
                    input: 'bg-blue-900 text-white font-bold p-2 rounded',
                    label: '' } }">
                <FormKit name="nomMaison" label="Nom" label-class="font-bold"/>
                <FormKit name="prix" label="Prix" type="number" label-class="font-bold" />
                <FormKit name="adresse" label="Adresse" type="text" label-class="font-bold" />
                <FormKit name="image" label="Image" type="text" label-class="font-bold" />
                <FormKit name="nbrLit" label="Nombre de lits" type="number" label-class="font-bold" />
                <FormKit name="nbrSDB" label="Nombre de salle de bain" type="number" label-class="font-bold" />
                <FormKit name="surface" label="surface" type="text" label-class="font-bold" />
                <FormKit name="favori" label="Mettre en valeur" type="checkbox" wrapper-class="flex p-2"/>
                <FormKit name="Code_Quartier" label="Quartier" type="select">
                    <option value="" :disabled="true">Choisir un quartier...</option>
                    
                </FormKit>
                    
                
            </FormKit>
        </div>
    </div>
</template>