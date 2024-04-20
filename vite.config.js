import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/movie': 'https://api.themoviedb.org/3'
    }
  },
  plugins: [react()]
})
//https://api.themoviedb.org/3/movie/changes