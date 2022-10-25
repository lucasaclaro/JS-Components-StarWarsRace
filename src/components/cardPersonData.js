class CardPersonalData extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }
    
    build() {

        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "personal-data");

        const textPilot = document.createElement("h3");
        textPilot.textContent = this.getAttribute("position");

        const textName = document.createElement("h4");
        textName.textContent = this.getAttribute("name");

        const pilotImage = document.createElement("img");
        pilotImage.src = this.getAttribute("photo") || "https://centrodediabetescuritiba.com.br/wp-content/uploads/2021/09/avatar.jpg"

        const textSpaceship = document.createElement("h5");
        textSpaceship.textContent = 'Spaceship: ' + this.getAttribute("text-space");


        componentRoot.appendChild(textPilot);
        componentRoot.appendChild(textName);
        componentRoot.appendChild(pilotImage);
        componentRoot.appendChild(textSpaceship);



        

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = 
        `
        
            .personal-data {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background-color: rgba(128, 128, 128, 0.308);
                width: 60vw;
                border-radius: 0.3rem;
                margin: 1rem 0;
            }

            .personal-data > h3 {
                background-color: #ffe819a9;
                color: black;
                text-align: center;
                width: 100%;
                margin-bottom: 1.5rem;
                border-radius: 0.3rem;
            }

            .personal-data > h4 {
                font-size: 2rem;
                margin-bottom: 1rem;
            } 

            .personal-data > img {
                height: 18rem;
                width: 25rem;
                border-radius: 0.5rem;
                -webkit-box-shadow: 10px 10px 28px 4px rgba(0,0,0,0.87);
                -moz-box-shadow: 10px 10px 28px 4px rgba(0,0,0,0.87);
                box-shadow: 10px 10px 28px 4px rgba(0,0,0,0.87);
            } 

            .personal-data > h5 {
                margin: 1rem 0;
            }
        `

        return style;
    }



}

customElements.define('card-personal', CardPersonalData);

