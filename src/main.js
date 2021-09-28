import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRandom, faRedo, faRetweet, faBars, faShareAlt, faHeart, faPlay, faPause, faStepBackward, faStepForward, faReply } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faRandom, faRedo, faRetweet, faBars, faShareAlt, faHeart, faPlay, faPause, faStepForward, faStepBackward, faReply)

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
