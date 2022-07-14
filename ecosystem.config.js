module.exports = {
  apps: [{
    name: 'fruit-mall',
    script: './app.js',
    instances: 1,
    exec_mode: 'cluster',
    watch: true
  }]
}