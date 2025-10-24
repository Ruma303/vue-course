const app = Vue.createApp({
    mounted() {
        setTimeout(() => {
            this.loading = false;
        }, 3000); // Dopo 3 secondi
        setTimeout(() => {
            this.message = 'Ciao a tutti.';
        }, 3000); // Dopo 3 secondi
    },
    data() {
        return {
            imgPath: "./img/roma.jpg",
            htmlContent: '<strong>Testo in grassetto</strong>',
            url: "https://it.wikipedia.org",
            description: "<em>Lorem ipsum</em>",
            weather: "sun",
            //users: ["Marco", "Anna", "Alessandro", "Rebecca"],
            users: [
                { name: "Marco", id: 1, age: 22 },
                { name: "Anna", id: 2, age: 22 },
                { name: "Alessandro", id: 3, age: 22 },
                { name: "Rebecca", id: 4, age: 22 },
            ],
            compiled: 'Codice compilato',
            notCompiled: 'Codice non compilato',
            loading: true,
            message: 'Codice compilato una volta soltanto.'
        };
    },
});

//# Direttive personalizzate

//* Creazione di una direttiva globale
app.directive('focus', {
  //? Hook "mounted" per manipolare il DOM quando l'elemento è montato
  mounted(el) {
    el.focus(); //? Porta il focus sull'elemento
  }
});

app.directive('colore-sfondo', {
    mounted(el, binding) {
        //? binding.value contiene il valore passato alla direttiva
        el.style.backgroundColor = binding.value || 'yellow';
    },

    updated(el, binding) {
        el.style.backgroundColor = binding.value || 'red';
    }
})

app.directive('log', {
  created(el, binding) {
    console.log('Direttiva creata:', binding.value);
  },
  mounted(el) {
    console.log('Elemento montato:', el);
  },
  updated(el, binding) {
    console.log('Elemento aggiornato:', binding.value);
  },
  unmounted(el) {
    console.log('Elemento rimosso:', el);
  }
});

app.directive('hover-color', {
  mounted(el, binding) {
    const defaultColor = binding.value || 'blue';
    el.style.transition = 'color 0.3s';

    el.addEventListener('mouseenter', () => {
      el.style.color = defaultColor;
    });

    el.addEventListener('mouseleave', () => {
      el.style.color = '';
    });
  }
});

const mountedApp = app.mount("#app");