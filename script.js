const App = Vue.createApp({
  data() {
    return {
      message: 'Hello World!'
    }
  }
});
const mountedApp = App.mount('#app');

// Accesso diretto tramite Proxy
console.log(mountedApp.message);

// Accesso tramite $data
console.log(mountedApp.$data.message);