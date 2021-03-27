import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/routes'
import store from './store/store'
import Toaster from '@meforma/vue-toaster';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(Toaster);
app.mount('#app');