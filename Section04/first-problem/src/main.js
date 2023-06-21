import { createApp } from 'vue'
import App from './App.vue'
import ActiveUser from "@/components/ActiveUser.vue";

const app = createApp(App);
app.component('active-user', ActiveUser);
app.mount('#app')
