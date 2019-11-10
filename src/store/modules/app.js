import {
  getMenuByRouter,
} from '@/libs/util'
import routers from '@/router/routes'

export default {
  state: {

  },
  getters: {
    menuList: (state, getters, rootState) => getMenuByRouter(routers),
  }
}
