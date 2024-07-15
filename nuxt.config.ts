import ViteYaml from '@modyfi/vite-plugin-yaml';

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
  modules: [
    '@primevue/nuxt-module',
    '@pinia/nuxt'
  ],
  vite: {
    plugins: [
      ViteYaml(), // you may configure the plugin by passing in an object with the options listed below
    ]
  },
  primevue: {
    importTheme: { from: '@/assets/theme.js' },
    // importPT: { from: '@/passthrough/theme.js'},
    options: {
      ripple: true,
      inputVariant: 'outlined',
      theme: {
        // preset: Lara,
        cssLayer: true
    }
  }
  }
})


