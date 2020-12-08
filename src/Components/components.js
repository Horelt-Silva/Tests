// class Component
'use strict'
//todos los renderizables imprimen un div que suma otro div adicional
export class Renderizable {
    constructor(html, changes) {
        this.html = html;
        this.changes = changes;
    }
    render() {}
}

export class Module extends Renderizable {
    constructor(html, changes, components) {
        super(html, changes)
        this.components = components;
    }
    render() {
        // const div = document.createElement("")
    }
}
export class Component extends Renderizable {
    constructor(html, changes) {
        super(html, changes)
    }
    render() {

    }
}