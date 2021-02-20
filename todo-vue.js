const ComponentsApp = {
    data() {
        return {
            // Create form
            name: '',
            date: null,
            time: null,
            category: '',
            done: false,
            notify: [],
            image: null,
            imageSrc: '',
            categories: [
                {name: 'House chores', value: 'House chores'},
                {name: 'Work', value: 'Work'},
                {name: 'Family', value: 'Family'},
            ],

            // List of todos
            todos: []
        }
    },
    mounted() {

        // Make api calls and populate the state.
    },
    methods: {
        addItem() {
            /*
            console.log({ 
                name: this.name, 
                date: this.date, 
                time: this.time, 
                category: this.category, 
                done: this.done, 
                notify: this.notify[0]
            });
            console.log(this.image);
            */

            this.todos.push({
                name: this.name, 
                date: this.date, 
                time: this.time, 
                category: this.category, 
                done: this.done, 
                notify: this.notify,
                image: this.image,
            })

            // Reset form
            this.name = ''
            this.date = null; 
            this.time = null 
            this.category = '', 
            this.done = false; 
            this.notify = [];
            this.image = null; 
            this.imageSrc = '';
        },
        categoryChanged($event) {
            // console.log('Category changed', $event);
        },

        imageChanged($event) {
            // console.log('Image changed', $event);
            this.imageSrc = URL.createObjectURL($event.target.files[0])
            this.image = $event.target.files[0];
            // console.log(this.imageSrc);
        },

        editItem() {

        },
        deleteItem() {

        }
    }
}

const app = Vue.createApp(ComponentsApp)
app.component('todo-item', {
    props: ['todo'],
    template: `
        <tr>
            <td>    
                <img v-if="todo.image" :src="createImgUrl" class="img-fluid rounded mb-2"/>
                <span class="d-block">{{ todo.name }}</span>
            </td>
            <td>{{ todo.date }} @ {{ todo.time }}</td>
            <td>{{ todo.category }}</td>
            <td>
                <span class="my-spanner" v-if="todo.notify.length">
                    <ul class="my-ul">
                        <li v-for="n in todo.notify"> {{ n }} minutes </li>
                    </ul>
                </span>
                <span v-else class="text text-warning">No notif</span>
            </td>
            <td>
                <span v-if="todo.done" class="text text-success">✅</span>
                <span v-else  class="text text-info">😵‍💫</span>
            </td>
        </tr>
    `, 
    computed: {
        createImgUrl() {
            return URL.createObjectURL(this.todo.image);
        }
    }
})

app.mount('#main')
