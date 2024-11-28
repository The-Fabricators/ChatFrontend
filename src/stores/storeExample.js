import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { ExampleService } from '@/services/index'
import { useStorage } from '@vueuse/core'

/**
 * Store for managing data data.
 * @typedef {Object} SpecieStore
 * @property {Object} state - The state object containing data data.
 * @property {Array} state.datas - The array of data.
 * @property {Object|null} state.selectedData - The currently selected organ.
 * @property {boolean} state.loading - Indicates if data is currently being loaded.
 * @property {Error|null} state.error - The error object, if any.
 * @property {boolean} isLoading - Computed property indicating if data is currently being loaded.
 * @property {number} datasCount - Computed property indicating the number of data.
 * @property {Function} getData - Function to fetch data data.
 * @property {Function} createData - Function to create a new data.
 * @property {Function} updateData - Function to update an existing organ.
 * @property {Function} deleteData - Function to delete a organ.
 */

/**
 * Creates a new instance of the ExampleStore.
 * @function useExampleStore
 * @returns {ExampleStore} The ExampleStore instance.
 */
export const useExampleStore = defineStore('example', () => {
  const state = reactive({
    datas: [],
    selectedData: {},
    datasBySomething: [],
    loading: false,
    error: null,
    connection: false
  })

  const datas = computed(() => state.organs)
  const datasBySomething = computed(() => state.organsBySystem)
  const selectedData = computed(()=> state.selectedOrgan)
  const isLoading = computed(() => state.loading)
  const datasCount = computed(() => state.datas.length)

  /**
   * Fetches data data.
   * @async
   * @function getData
   */
  const getData = async () => {
    state.loading = true
    try {
      state.datas = await ExampleService.getData()
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
      state.connection = true
    }
  }

   /**
   * Fetches datas data.
   * @async
   * @function getDataBySomething
   */
   const getDataBySomething = async (data_id) => {
    state.loading = true
    try {
      const response = await ExampleService.getDataBySomething(data_id)   
      state.datasBySomething = response
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
      state.connection = true
    }
  }

  /**
   * Creates a new data.
   * @async
   * @function createData
   * @param {Object} newSpecie - The new data object to create.
   */
  const createData = async (newData) => {
    state.loading = true
    try {
      state.datas.push(await ExampleService.createData(newData))
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  /**
   * Updates an existing data.
   * @async
   * @function updateData
   * @param {Object} data - The data object to update.
   */
  const updateData = async (data) => {
    state.loading = true
    try {
      const index = state.datas.findIndex((s) => s.id === data.id)
      state.datas[index] = await ExampleService.updateData(data)
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }
  /**
   * Deletes a data.
   * @async
   * @function deleteSpecie
   * @param {number} id - The ID of the data to delete.
   */
  const deleteData = async (id) => {
    state.loading = true
    try {
      const index = state.datas.findIndex((s) => s.id === id)
      state.datas.splice(index, 1)
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  return {
    state,
    isLoading,
    datas,
    datasBySomething,
    selectedData,
    datasCount,
    getData,
    getDataBySomething,
    createData,
    updateData,
    deleteData,
  }
})