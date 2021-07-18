import { createApp } from 'vue'
import App from './App'

//import VueMask from 'v-mask'
import components from '@/components/UI'

import '@/assets/sass/style.scss'
import router from '@/router/router'



const app = createApp(App)


components.forEach(component => {
    app.component(component.name, component)
});



//app.use(VueMask)

app
    .use(router)
    
    .mount('#app')
