function Breadcrumb({ target, initState }) {
    this.state = initState;
    this.element = document.createElement('nav');
    this.element.className = "Breadcrumb";
    target.appendChild = this.element;

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }

    this.render = () => {

    }


}

export default Breadcrumb;