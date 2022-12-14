import { createClient } from '@supabase/supabase-js'
import { ref } from "@vue/reactivity";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const user = ref(supabase.auth.user())

// Pour tester dans la console
globalThis.supabase = supabase

supabase.auth.onAuthStateChange(() => {

    user.value = supabase.auth.user()

})

