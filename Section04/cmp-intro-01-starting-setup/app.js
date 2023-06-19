const app = Vue.createApp({
    data() {
        return {
            showButtonValue: false,
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manel@localhost.com'
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '09876 543 221',
                    email: 'manel@localhost.com'
                }
            ]
        }
    },
    methods: {
        toggleShowButton() {
            this.showButtonValue = !this.showButtonValue;
        }
    }
})

app.mount('#app');