gsap.registerPlugin(ScrollTrigger)


class ResolutionCards {
    constructor() {
        this.myProperty = "Hello World";
        this.container = document.querySelector('#cards-lines');
        this.cards = Array.from(this.container.querySelectorAll('div'));
        this.lines = [];
        this.cardsCopy;
    }

    createLines() {

        if (this.cards.length > 0) {
            this.container.innerHTML = '';
            for (let i = this.cards.length - 1; i > 0; i--) {
                let newElement = document.createElement('div');
                newElement.classList.add(`line`, `line${i}`);
                this.cards.splice(i, 0, newElement);
                this.lines.push(newElement)
            }
            this.cards.forEach((card) => {
                this.container.appendChild(card);
            });
        }

        this.createTriggers();
    }

    createTriggers() {

        this.cardsCopy = this.container.querySelectorAll('.card');

        console.log(this.cardsCopy)

        if (this.cardsCopy.length > 0) {
            this.cardsCopy.forEach((card, index) => {
                gsap.to(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "-100px center",
                        end: "-100px center",
                        markers: true,
                        scrub: 1,
                    },
                    duration: 1,
                    y: 0,
                    scale: 1,
                    ease: "none",
                    opacity: 1
                });
            });
        }

        if (this.lines.length > 0) {
            console.log(this.lines)
            this.lines.forEach((line, index) => {
                gsap.to(line, {
                    scrollTrigger: {
                        trigger: line,
                        start: "-100px center",
                        end: "bottom center",
                        scrub: 1,
                    },
                    duration: 1,
                    scale: 1,
                        
                });
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const myClassInstance = new ResolutionCards();
    myClassInstance.createLines();
});