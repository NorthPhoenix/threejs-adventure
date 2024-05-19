// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { readdirSync } from 'node:fs'

const lessonFolder = resolve(__dirname, 'lessons')

function resolveLessonPaths() {
  const res = readdirSync(lessonFolder).reduce((acc, file) => {
    if (file.endsWith('.html')) {
      acc[`lesson-${file.replace('.html', '')}`] = resolve(lessonFolder, file)
    }
    return acc
  }, {})
  console.log('resolveLessonPaths() in vite.config.js: ', res)
  return res
}


export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        ...resolveLessonPaths()
      },
    },
  },
})