<template>
  <main class="container mt-4 mb-4">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-6 p-4 rounded shadow">
        <h2 class="text-center mb-4">Új növény hozzáadása</h2>

        <div class="mb-3">
          <label class="form-label">Név:</label>
          <input
            type="text"
            v-model="noveny.name"
            class="form-control"
            placeholder="Adja meg a növény nevét"
            required
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Kategória:</label>
          <select v-model="noveny.category" class="form-select">
            <option value="virág">virág</option>
            <option value="bokor">bokor</option>
            <option value="fa">fa</option>
          </select>
        </div>

        <div class="mb-3 form-check">
          <label class="form-check-label" for="perennialCheckbox">Évelő?</label>
          <input
            type="checkbox"
            v-model="noveny.perennial"
            class="form-check-input"
            id="perennialCheckbox"
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Ár:</label>
          <input
            type="text"
            v-model="noveny.price"
            class="form-control"
            placeholder="Adja meg az árát"
            required
          />
        </div>

        <button class="btn btn-success w-100 mt-3" @click="addNewPlant">Mentés</button>
      </div>
    </div>
  </main>
</template>
<script setup>
import { ref } from 'vue'
import {useNovenyStore} from '@/stores/noveny.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const novenyStore = useNovenyStore()

const noveny = ref({
  name: '',
  perennial: 0,
  category: '',
  price: '',
})


const perennial = ref(false)

const addNewPlant = async () => {
  noveny.value.perennial = perennial.value
  if (noveny.value.name.trim() === '' || noveny.value.category.trim() === '' || isNaN(noveny.value.price)) {
    return;
  }
  else
  {
    await novenyStore.AddNoveny(noveny.value)
    await router.push('/')
  }
}
</script>


