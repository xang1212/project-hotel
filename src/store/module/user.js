import axios from "axios";


// const url_API = process.env.VUE_APP_USER_API_URL
const state = {
    user:{},
    userLoading:false
};
const getters = {
    GetUser:(state)=>{
        return state.user
    },
    loadding:(state)=>{
        return state.userLoading
    }
};

const mutations = {
    userLoading(state, data){
        state.userLoading = data
    },
    sendToUser(state,data){
        state.user = data
    }
};

const actions = {
    async getData({commit}){
        commit('userLoading',true)
        await axios.get("user", {
            headers: {
                "Content-Type": "application/json",
                "ngrok-skip-browser-warning": true,
              },
        }).then((res)=>{
            commit('sendToUser',res.data)
            commit('userLoading',false)
            
            console.log('hel', res.data)
            // console.log(state.url_API,1111133411)
        }).catch(err=>{
            if(response.status == 401){
                location.reload()
            }
            // console.log(err)
        })
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};

export const IS_User_AUTHENTICATE_GETTER = '[getters] is user authenticated'