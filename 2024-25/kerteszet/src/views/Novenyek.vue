<template>
  <main class="container mt-4 mb-4">
    <div v-if="novenyStore.novenyek.length > 0" class="row justify-content-center gap-3">
      <div v-for="noveny in novenyStore.novenyek" :key="noveny.id" class="col-12 col-md-4 col-lg-4">
        <div class="card shadow-lg">
          <div class="card-body">
            <h5 class="card-title">{{ noveny.name }}</h5>
            <p class="card-text">
              <strong>Évelő?</strong> {{ noveny.perennial ? 'Igen' : 'Nem' }}<br />
              <strong>Kategória:</strong> {{ noveny.category }} <br />
              <strong>Ár:</strong> {{ noveny.price }}
            </p>
            <button class="btn btn-primary w-100" @click="openModal(noveny)">Szerkesztés</button>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-center text-white mt-4">
      <p>Nincsenek növények.</p>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="modal d-block" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Növény szerkesztése</h5>
            <button type="button" class="btn-close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <label for="name" class="form-label">Név:</label>
            <input id="name" v-model="editedNoveny.name" type="text" class="form-control" />

            <label for="category" class="form-label mt-2">Kategória:</label>
            <input id="category" v-model="editedNoveny.category" type="text" class="form-control" />

            <label for="price" class="form-label mt-2">Ár:</label>
            <input id="price" v-model="editedNoveny.price" type="number" class="form-control" />

            <label class="form-label mt-2">Évelő?</label>
            <select v-model="editedNoveny.perennial" class="form-select">
              <option :value="true">Igen</option>
              <option :value="false">Nem</option>
            </select>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" @click="closeModal">Mégse</button>
            <button class="btn btn-primary" @click="saveChanges">Mentés</button>
            <button class="btn btn-danger" @click="deleteNoveny">Törlés</button>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<script setup>
import { useNovenyStore } from '@/stores/noveny.js'
import { onMounted, ref } from 'vue'


const novenyStore = useNovenyStore()

const showModal = ref(false)
const editedNoveny = ref({})

onMounted(async () => {
  await novenyStore.getNovenyek()
})

const openModal = (Noveny) => {
  editedNoveny.value = { ...Noveny }
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}

const saveChanges = async () => {
  await novenyStore.UpdateNoveny(editedNoveny.value)
  await novenyStore.getNovenyek()
  closeModal()
}

const deleteNoveny = async () => {
  await novenyStore.DeleteNoveny(editedNoveny.value)
  await novenyStore.getNovenyek()
  closeModal()
}
</script>

<style>
.modal {
  background: rgba(0, 0, 0, 0.5);
}
</style>
