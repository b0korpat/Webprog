import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNovenyStore = defineStore('noveny', () => {
  const novenyek = ref({})

  const getNovenyek = async () => {
    try{
      const response = await fetch('http://localhost:3000/plants')
      novenyek.value = await response.json()
    } catch (error) {
      console.error(error)
    }
  }

  const AddNoveny = async (noveny) => {
    try{
      const response = await fetch('http://localhost:3000/plants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: noveny.name,
          perennial: noveny.perennial,
          category: noveny.category,
          price: noveny.price,
        })
      })
      novenyek.value = await response.json()
    } catch (error) {
      console.error(error)
    }
  }

  const DeleteNoveny = async (noveny) => {
    try{
      const response = await fetch(`http://localhost:3000/plants/${noveny.id}`, {
        method: 'DELETE',
      })
      novenyek.value = await response.json()
    } catch (error) {
      console.error(error)
    }
  }

  const UpdateNoveny = async (noveny) => {
    try{
      const response = await fetch(`http://localhost:3000/plants/${noveny.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: noveny.name,
          perennial: noveny.perennial,
          category: noveny.category,
          price: noveny.price,
        })
      })
      novenyek.value = await response.json()
    } catch (error) {
      console.error(error)
    }
  }




  return { novenyek, getNovenyek, AddNoveny, DeleteNoveny, UpdateNoveny }
})
