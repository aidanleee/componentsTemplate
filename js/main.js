(() => {
    // component will go here
    const liveuser = {
        props: ['firstname', 'lastname', 'role'], // placeholder for data
        template: "#activeuser",

        methods: {
            logChildMsg() {
                console.log("helo from the child component");
            },

            runParentFunc() {
                this.$emit('passfunccallup', 'hello from the child on a click')
            }
        },

        created: function() {
            console.log('child component is live');
        }
    };

    const vm = new Vue({
        el: '#app',
        
        data: {
            message: "sup from vue!"
        },

        created: function() {
            console.log('parent is live');
        },

        methods: {
            logParent(message) {
                console.log("from the parent", message);
            },

            logMainMessage(message){
                console.log("called from the inside of a child, lives in the parent", message)
            }
        },
        components: {
            user: liveuser
        }
    })
})();