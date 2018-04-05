## Architecture
[config]{@link config} - frontend client side configuration  
[store]{@link store} - store namespace  


## Backend API
[api]{@link plugins.api} - api instance creator class (make requests, parse response, etc.)

### format response
```javascript
{
	status: 200, // {Number} - required http status code / custom status code
	data: {}, // {Object|Array} -  data
	message: ""// {String} - non required error/success/info message
}
```

## Links
[nuxt.js](https://github.com/nuxt/nuxt.js)
[nuxt-vue2-boillerplate](https://github.com/petervmeijgaard/vue-2-boilerplate/tree/master/src/store)  
[jsdoc3](https://github.com/jsdoc3/jsdoc)      
[components](https://vuetifyjs.com/ru/components/forms)    
[vue-docs-info](https://github.com/vuejs/awesome-vue#docs)  
[eslint-require-proptypes](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-prop-types.md)      
[vue-styleguidist](https://github.com/vue-styleguidist/vue-styleguidist)  
[vue-styleguidist-example](https://github.com/vue-styleguidist/vue-styleguidist/tree/master/examples/nuxtjs)   
[vue-styleguidist-write-docs](https://github.com/vue-styleguidist/vue-styleguidist/blob/master/docs/Documenting.md)  
[nuxt-api-example](https://github.com/davidroyer/nuxt-api-example/blob/master/store/index.js)  
[nuxt-auth-example](https://codeburst.io/nuxt-authentication-from-scratch-a7a024c7201b)  
[fake-rest-api](https://reqres.in/)            


