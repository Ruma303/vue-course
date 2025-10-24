const App = Vue.createApp({
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
            //users1: ["Marco", "Anna", "Alessandro", "Rebecca"],
            users2: [
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

    }

});
const mountedApp = App.mount("#app");