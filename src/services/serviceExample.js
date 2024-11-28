import api from '../../plugins/api'

/**
 * Service class for handling data related operations.
 */
class ExampleService {
  /**
   * Retrieves all data.
   * @returns {Promise<Array>} A promise that resolves to an array of data.
   * @throws {Error} If an error occurs while retrieving the data.
   */
  async getData() {
    try {
      const { data } = await api.get(`/example-url`)
      return data.results
    } catch (error) {
      console.log('error in getData', error)
      throw error
    }
  }

  /**
   * Retrieves all data.
   * @returns {Promise<Array>} A promise that resolves to an array of data filtered by something.
   * @throws {Error} If an error occurs while retrieving the data.
   */
    async getDataBySomething(something, page) {
      try {
        const { data } = await api.get(`/example-url/?page=${page}&something_id=${something}`)
        return data.results
      } catch (error) {
        console.log('error in getDataBySomething', error)
        throw error
      }
    }

  /**
   * Creates a new Data.
   * @param {Object} newSpecie - The new data object to create.
   * @returns {Promise<Object>} A promise that resolves to the created data object.
   * @throws {Error} If an error occurs while creating the data.
   */
  
  async createData(newData) {
    try {
      const { data } = await api.post(`/example-url/`, newData)
      return data.results
    } catch (error) {
      console.log('error in createData', error)
      throw error
    }
  }

  /**
   * Updates an existing data.
   * @param {Object} specie - The data object to update.
   * @returns {Promise<Object>} A promise that resolves to the updated data object.
   * @throws {Error} If an error occurs while updating the data.
   */
  async updateData(newData) {
    try {
      const { data } = await api.put(`/example-url/${newData.id}/`, newData)
      return data.results
    } catch (error) {
      console.log('error in updateData')
      throw error
    }
  }

  /**
   * Deletes a data by its ID.
   * @param {number} id - The ID of the data to delete.
   * @returns {Promise<Object>} A promise that resolves to the deleted data object.
   * @throws {Error} If an error occurs while deleting the data.
   */
  async deleteData(id) {
    try {
      const { data } = await api.delete(`/example-url/${id}/`)
      return data.results
    } catch (error) {
      console.log('error in deleteData', error)
      throw error
    }
  }
}

export default new ExampleService()