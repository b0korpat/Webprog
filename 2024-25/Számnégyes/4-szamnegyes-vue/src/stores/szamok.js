import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useszamStore = defineStore('szamok', () => {
  const szamok = ref({})

  const getSzamok = async () => {
    try{
      const response = await fetch('https://localhost:44350/api/Numbers')
      szamok.value = await response.json()
    } catch (error) {
      console.error(error)
    }
  }

  const AddSzamok = async (szam) => {
    try{
      const response = await fetch('https://localhost:44350/api/Numbers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          number1: szam.number1,
          number2: szam.number2,
          number3: szam.number3,
          number4: szam.number4
        })
      })
      szamok.value = await response.json()
    } catch (error) {
      console.error(error)
    }
  }







  return { szamok, getSzamok, AddSzamok }
})
