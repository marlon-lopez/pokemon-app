module.exports = {
  presets: [
    ['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3.9 }],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
}
