module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [
    require('tw-elements/dist/plugin')
  ],
  
  theme:{
    extends:{
      spacing:{
        '1px':'1px'
      }
    }
  }
}
