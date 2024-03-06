// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url';

export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      serviceId: process.env.SERVICE_ID,
      templateId: process.env.TEMPLATE_ID,
      publicKey: process.env.PUBLIC_KEY,  
    }
  },
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url)),
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
            @import '@fortawesome/fontawesome-free/scss/solid.scss';
            @import '@fortawesome/fontawesome-free/scss/regular.scss';
            @import '@fortawesome/fontawesome-free/scss/brands.scss';
            @import '@/style/main.scss';
            @import '@nabux-crush/crush-styles/nabuxLayoutVariables';
          `
        }
      }
    }
  }
})
