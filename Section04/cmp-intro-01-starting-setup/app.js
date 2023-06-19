const app = Vue.createApp({
    data() {
        return {
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
})

app.component('friend-contact', {
    template: `
         <li>
          <h2>{{friends.name}}</h2>
          <button @click="toggleDetails">{{detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{friends.phone}}</li>
            <li><strong>Email:</strong> {{friends.email}}</li>
          </ul>
        </li>
`,
    data() {
        return {
            detailsAreVisible: false,
            friends: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '01234 5678 991',
                email: 'manel@localhost.com'
            }
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
})

app.mount('#app');