const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  ///// pwa 파일 제외하는법
  // pwa: {
  //   name: 'vuestagram',
  //   themeColor: '#4DBA87',
  //   msTileColor: '#000000',
  //   workboxOptions: {
  //     exclude: [/\.map$/, /manifest\.json$/, 'index.html']
  //   }
  // }
})