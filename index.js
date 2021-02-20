const ComponentsApp = {
    data() {
        return {
            counter: 0,
            message: 'You loaded this page on ' + new Date().toLocaleString(),
            seen: true,
            todos: [
                { text: 'Learn JavaScript' },
                { text: 'Learn Vue' },
                { text: 'Build something awesome' }
            ]
        }
    },
    mounted() {
        setInterval(() => {
            this.counter++
        }, 1000)

        // Make api calls and populate the state.
    },
    methods: {
        reverseMessage() {
            this.message = this.message
                .split('')
                .reverse()
                .join('')
        },
        toggleSeen() {
            this.seen = !this.seen;
        }
    }
}

const app = Vue.createApp(ComponentsApp)
app.component('todo-item', {
    props: ['todo'],
    template: `<li>{{ todo.text }}</li>`
})

app.mount('#main')
// Vue.createApp(ComponentsApp).mount('#main')
