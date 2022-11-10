export default function SelectedLanguage({ target, initState }) {
    this.element = document.createElement("div");
    this.element.className = "SelectedLanguage";
    this.state = initState;

    target.appendChild(this.element);

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }

    this.render = () => {
        this.element.innerHTML = `
        <ul>
        ${this.state.map((iter, idx) => `
        <li>${iter}</li>`
        )}
        </ul>
        `
    }

    this.render();
}