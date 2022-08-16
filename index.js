const App = {
    data() {
        return {
            element: '',
            text: '',
            id: '',
            elements: [
                {
                    id: 0,
                    name: 'Хліб',
                    src: "https://www.svgrepo.com/show/101598/bread.svg"
                },
                {   id: 1,
                    name: 'Хліб',
                    src: "https://www.svgrepo.com/show/101598/bread.svg"
                },
                {   id: 2,
                    name: 'Хліб',
                    src: "https://www.svgrepo.com/show/101598/bread.svg"
                },
                {   
                    id: 3,
                    name: 'Хліб',
                    src: "https://www.svgrepo.com/show/101598/bread.svg"
                }
            ]
        } 
    },
    
    methods: {
        startDrag(event){
            if (event.target.tagName === "IMG"){
                this.element = event.target
                this.text = this.element.parentNode.childNodes[1]
                event.dataTransfer.dropEffect = 'move'
                event.dataTransfer.effectAllowed = 'move'
                event.dataTransfer.setData('id',this.element.id) 
                this.element.style.opacity = '-1'
                this.text.style.opacity = '-1'
            }
        },
        endDrag(event){
            if (event.target.className === "inventory-slot"){
                const id = event.dataTransfer.getData('id')
                const element = this.elements.find(v => v.id == id)
                element.id = parseInt(event.target.id)  
            }
        },
        checkElement(){
            this.element.style.opacity = '1'
            this.text.style.opacity = '1'
        },
        getId(slot,line){   
            this.id = ((line - 1)*6+slot)-1     
            return ((line - 1)*6+slot)-1    
        }
    }
}


const app = Vue.createApp(App)

app.mount('#app')