import {LitElement,html} from 'lit-element';

export class MyElement extends LitElement{
    render(){
        return html `
            <style>
                h2{
                    color: blue;
                }
            </style>
            <h2>Grupo 6:Changoluisa-Estrada-Nacata-Navarro</h2>
            <p>Mi primer componente</p>   
            <p>Clicks: ${this.clics} </p>   
            <button @click='${this.incrementar}'> Click Here</button> 
        `;

    }
    static get properties(){
        return{

            clics:{type: Number}
        };
    }
    constructor(){
        super();
        this.clics=0;
    }

    incrementar(){
        this.clics++;
    }
}

customElements.define('my-element',MyElement);