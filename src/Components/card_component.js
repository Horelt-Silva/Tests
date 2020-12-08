import { Component } from './components'
export class Card extends Component {
    constructor(html) {
        super()
        this.html = `
        <div class="card-body">
            <h4 class="card-title">Trigonometría</h4>
            <h5 class="card-title">Trigonometría</h5>
            <p class="card-text">
            Prof. Eyner Horelt Silva
            </p>
        </div>`
    }
    render() {
        const div = document.createElement("div");  
        div.classList.add("card", "special-card")
        div.innerHTML = this.html;
        return div;
    }
}