module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/mosquito-egg-counting-software/' : '/',
  outputDir: 'docs'  // 使用 'docs' 而不是默認的 'dist'
}