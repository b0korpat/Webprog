<template>
  <main class="container mt-4 mb-4">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-6 p-4 rounded shadow">
        <h2 class="text-center mb-4">Új számnégyes hozzáadása</h2>

        <div class="mb-3">
          <label class="form-label">Szám 1:</label>
          <input
              type="number"
              v-model="szam.number1"
              class="form-control"
              placeholder="Adja meg az első számot"
              required
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Szám 2:</label>
          <input
              type="number"
              v-model="szam.number2"
              class="form-control"
              placeholder="Adja meg a második számot"
              required
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Szám 3:</label>
          <input
              type="number"
              v-model="szam.number3"
              class="form-control"
              placeholder="Adja meg a harmadik számot"
              required
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Szám 4:</label>
          <input
              type="number"
              v-model="szam.number4"
              class="form-control"
              placeholder="Adja meg a negyedik számot"
              required
          />
        </div>

        <button class="btn btn-success w-100 mt-3" @click="addNewNumber">Mentés</button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useszamStore } from '@/stores/szamok.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const szamStore = useszamStore()

const szam = ref({
  number1: '',
  number2: '',
  number3: '',
  number4: '',
})

const addNewNumber = async () => {
  if (
      szam.value.number1 === '' ||
      szam.value.number2 === '' ||
      szam.value.number3 === '' ||
      szam.value.number4 === ''
  ) {
    return
  } else {
    await szamStore.AddSzamok(szam.value)
    await router.push('/')
  }
}
</script>