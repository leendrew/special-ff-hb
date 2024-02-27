import { createApp } from 'vue';
import App from '@/App.vue';
import { router } from '@/router';
import { MotionPlugin } from '@vueuse/motion';
import '@/main.css';

createApp(App).use(router).use(MotionPlugin).mount('#app');
