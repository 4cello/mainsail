import { GetterTree } from 'vuex'
import { SocketState } from '@/store/socket/types'
import { RootState } from '@/store/types'

export const getters: GetterTree<SocketState, RootState> = {
    getUrl: (state) => {
        const normPath = state.path.replaceAll(/(^\/*)|(\/*$)/g, '')
        const path = normPath.length > 0 ? `/${normPath}` : ''
        return '//' + state.hostname + (state.port !== 80 ? ':' + state.port : '') + path
    },

    getHostUrl: (state) => {
        const protocol = state.protocol === 'wss' ? 'https' : 'http'

        return `${protocol}://${state.hostname}/`
    },

    getWebsocketUrl: (state, getters) => {
        return state.protocol + ':' + getters['getUrl'] + '/websocket'
    },
}
