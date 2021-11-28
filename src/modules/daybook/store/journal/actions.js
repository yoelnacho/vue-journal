import journalApi from '@/api/journalApi'
// export const myAction = async ({ commit }) => {

// }

export const loadEntries = async ({ commit }) => {
  const {data} = await journalApi.get('/entries.json')
  const entries = []
  // recorro la data y creo un nuevo array anidando en c/id el objeto de c/u
  for(let id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id]
    })
  }

  commit('setEntries', entries)
}

export const updateEntry = async (/*{ commit }*/) => {

}


export const createEntry = async (/*{ commit }*/) => {

}
