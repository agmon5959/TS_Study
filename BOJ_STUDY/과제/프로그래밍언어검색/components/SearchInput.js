export default function SearchInput({ target, initState, onChangeInput }) {

    this.element = document.createElement("form");
    this.element.className = "SearchInput";

    this.state = initState

    target.appendChild(this.element);

    this.render = () => {
        this.element.innerHTML = `<input class="SearchInput__input" type="text" placeholder="프로그래밍 언어를 입력하세요." value="${this.state}"/>`
    }

    this.element.addEventListener("keyup", (e) => {
        if (!e.key.includes("Arrow") && !e.key.includes("Enter")) {
            onChangeInput(e.target.value);
        }
    })

    this.element.addEventListener("submit", (e) => {
        e.preventDefault();
    })

    this.render();

}