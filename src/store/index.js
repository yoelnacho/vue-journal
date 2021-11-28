import { createStore } from 'vuex'
import journal from '../modules/daybook/store/journal'
import ui from '../modules/ui/store'

const store = createStore({
  modules: {
    journal,
    ui
  }
})

export default store