const app = Vue.createApp({
    data() {
        return {
            msg: 'Form input binding',
            name: null,
            age: null,
            selectedOption: null,
            trafficLight: null,
            subscribe: null,
            cart: [],
        }
    },
    methods: {
        updateName(newChar) {
            console.log(newChar);
            this.name = newChar.target.value;
        },
        increment() {
          this.age++
        },
        submitForm(form) {
          this.msg = form.value.msg
          this.age = form.value.age
          this.msg = form.value.msg
          this.msg = form.value.msg
        }
    },
}).mount('#app');

