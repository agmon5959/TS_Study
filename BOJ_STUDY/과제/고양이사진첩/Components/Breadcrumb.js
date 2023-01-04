export default function Breadcrumb({ target, pState }) {
    this.state = pState;
    this.element = document.createElement('nav');
    this.element.className = "Breadcrumb";

    target.appendChild(this.element);


    this.setState = (pState) => {
        this.state = pState;
    }

    this.render = () => {
        this.element.innerHTML = `<div>root</div>`;
    }

    this.render();
    console.log('asd')
}