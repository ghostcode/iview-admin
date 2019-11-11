
import Vue from 'vue'
import VueI18n from 'vue-i18n'

import config from '@/libs/config'

import customZhCn from './lang/zh-CN'
import customEnUs from './lang/en-US'
import localeEnUs from 'view-design/dist/locale/en-US'
import localeZhCn from 'view-design/dist/locale/zh-CN'

Vue.use(VueI18n)
Vue.local = ()=>{}

const messages = {
  en:Object.assign(localeEnUs,customEnUs),
  zh:Object.assign(localeZhCn,customZhCn)
}

const i18n = new VueI18n({
  locale:config.lang,
  messages
})

export default i18n
