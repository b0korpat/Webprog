<template>
  <main class="container mt-4 mb-4">
    <div v-if="szamStore.szamok.length > 0" class="row justify-content-center gap-3">
      <div v-for="szam in szamStore.szamok" :key="szam.id" class="col-12 col-md-4 col-lg-4">
        <div class="card shadow-lg">
          <div class="card-body">
            <p class="card-text">
              <strong>szam1:</strong> {{ szam.number1 }}
              <strong>szam2:</strong> {{ szam.number2 }}
              <strong>szam3:</strong> {{ szam.number3 }}
              <strong>szam4:</strong> {{ szam.number4 }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-center text-white mt-4">
      <p>Nincsenek növények.</p>
    </div>
  </main>
</template>

<script setup>
import {useszamStore} from '@/stores/szamok.js'
import { onMounted, ref } from 'vue'


const szamStore = useszamStore()

const showModal = ref(false)
const editedNoveny = ref({})

onMounted(async () => {
  await szamStore.getSzamok()
})

</script>

<style>
.modal {
  background: rgba(0, 0, 0, 0.5);
}
</style>
