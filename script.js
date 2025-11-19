const app = Vue.createApp({
  data() {
    return {
      name: '',
      firstName: '',
      lastName: '',
      age: null
    }
  },
  methods: {
    submitForm() {
      if (!this.name) {
        this.firstName = '';
        this.lastName = '';
        return;
      }
      // Suddivide il nome sugli spazi
      const names = this.name.trim().split(/\s+/);
      this.firstName = names[0] || '';
      this.lastName = names.length > 1 ? names.slice(1).join(' ') : '';
    }
  },
  computed: {
    fullName() {
      return [this.firstName, this.lastName].filter(Boolean).join(' ');
    }
  },
  watch: {
    age(newVal, oldVal) {
      setTimeout(() => {
        this.age = 20
      }, 3000)
    }
  }
}).mount('#app');