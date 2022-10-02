<script setup lang="ts">
    defineProps<{
      id: string;
    }>();
    // TODO
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