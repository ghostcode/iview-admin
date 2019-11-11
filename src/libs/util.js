import config from '@/libs/config'
import { forEach, hasChild } from '@/libs/tool'

const {useI18n} = config

/**
 * @param {Array} list 通过路由列表得到菜单列表
 * @returns {Array}
 */
export const getMenuByRouter = (list, access) => {
  let res = []
  forEach(list, item => {
    if (!item.meta || (item.meta && !item.meta.hideInMenu)) {
      let obj = {
        icon: (item.meta && item.meta.icon) || '',
        name: item.name,
        meta: item.meta
      }
      if (hasChild(item)) {
        obj.children = getMenuByRouter(item.children, access)
      }
      if (item.meta && item.meta.href) obj.href = item.meta.href
      // if (showThisMenuEle(item, access)) res.push(obj)
      res.push(obj)
    }
  })
  return res
}

export const showTitle = (item,vm)=>{
  let title = (item.meta && item.meta.title) || item.name

  if(useI18n){
    title = vm.$t(item.name)
  }

  return title
}