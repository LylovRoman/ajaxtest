import router from "../../router";

const state = {
    user: null,
    users: null
}

const getters = {
    user: () => state.user,
    users: () => state.users
}

const actions = {
    getUser({state, commit, dispatch}, id) {
        axios.get(`/api/users${id}`)
            .then(res => {
                commit('setUser', res.data.data);
            })
    },
    getUsers({commit}) {
        axios.get('/api/users')
            .then(res => {
                commit('setUsers', res.data.data);
            })
    },
    deleteUsers({dispatch}, id) {
        axios.delete(`/api/users/${id}`)
            .then(res => {
                dispatch('getUsers');
            })
    },
    updateUser({}, data){
        axios.patch(`/api/users${data.id}`, {name: data.name, email: data.email, admin: data.admin})
            .then(res => {
                router.push({ name: 'user.show', params: {id: data.id} })
            })
    },
    store({}, data){
        axios.post('/api/users', {name: data.name, email: data.email, admin: data.admin})
            .then(res => {
                router.push({ name: 'user.add' })
            })
    }
}

const mutations = {
    setUser(state, user){
        state.user = user
    },
    setUsers(state, users){
        state.users = users
    }
}

export default {
    state, getters, actions, mutations
}
