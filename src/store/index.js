import cookie from 'js-cookie'
import cookieKeys from '@/const/cookie-keys'
import META from '@/const/meta.js'
import app from '~~/app.json'
const cookiePath = process.env.COOKIE_PATH

const envPath = process.env.API_PATH || '/serverless-dev'
// 最好提前在你的 store 中初始化好所有所需属性
// https://vuex.vuejs.org/zh-cn/mutations.html
export const state = () => ({
    // 这两个用于client side的使用, 又放cookie里是为了刷新时状态不丢失
    _token: '',
    user: {},
    meta: META,
    appKey: app.appKey,
    visibleRoutes: [
        '/'
    ],
    roles:[],
    iamAppId: ''
})

//  mutation 必须同步执行
export const mutations = {
    login(state, payload) {
        // 部署不一定是在根路径, 所以cookie要设置path
        cookieKeys.forEach(key => {
            if(payload[key] !== undefined) {
                state[key] = payload[key]
                cookie.set(key, payload[key], {
                    path: cookiePath
                })
            } else {
                state[key] = ''
                cookie.remove(key, {
                    path: cookiePath
                })
            }
        })
    },

    logout(state) {
        cookieKeys.forEach(key => {
            state[key] = ''
            cookie.remove(key, {
                path: cookiePath
            })
        })
        this.$router.replace('/login')
    },

    update(state, payload) {
        cookieKeys.forEach(key => {
            if(payload[key] !== undefined) {
                state[key] = payload[key]
                cookie.set(key, payload[key], {
                    path: cookiePath
                })
            } else {
                state[key] = ''
                cookie.remove(key, {
                    path: cookiePath
                })
            }
        })
    },

    setRoles(state, payload = []){
    	state.roles = payload.map(role => role.name)
    },

    setVisibleRoutes(state, payload){
    	state.visibleRoutes = payload
    }

}

// Action 提交的是 mutation，而不是直接变更状态
// Action 可以包含任意异步操作
export const actions = {
    async login(context, data) {
        // store 对象
        const { commit, state, dispatch } = context

        data.appKey = state.appKey
        const res = await this.$axios.$post(`${envPath}/serverless-platform/api/v1/iam/login`, data)
        res.payload._token = res.payload.access_token
        delete res.payload.token
        commit('login', res.payload)
        return res.payload
    },

    async getRoles(context, data) {
        // store 对象
        const { commit, state, dispatch } = context
        const res = await this.$axios.$get(`${envPath}/deepexi-iam-service/deepexi-iam-openapi/api/v1.0/serverless/listUserRoles/${state.iamAppId}`)
        const roles = resolveRoles(res.payload || [])
        commit("setRoles", roles)
        return roles || []
    },

}

const resolveRoles = tree => {
    const roles = []
    for (const node of tree) {
      if (node.roles && node.roles.length) {
        roles.push(...resolveRoles(node.roles))
      } else {
        roles.push(node)
      }
    }
    return roles
}
  