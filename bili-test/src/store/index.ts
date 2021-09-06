import { createStore,mapState,mapGetters,mapActions,mapMutations } from 'vuex'

export default createStore({
  state: {
    isConnect:false,
    author:'',
    user:''
  },
  mutations: {
    getStatus(state,status){
      state.isConnect = status;
    }
  },
  actions: {
  },
  modules: {
  }
})
