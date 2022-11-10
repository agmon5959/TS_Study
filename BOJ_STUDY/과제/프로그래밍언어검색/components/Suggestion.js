export default function Suggestion({ target, initState, onSelect }) {
    this.element = document.createElement("div");
    this.element.className = "Suggestion";

    this.state = {
        items: initState.items,
        selectedIndex: 0,
    }

    target.appendChild(this.element);

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }

    window.addEventListener("keyup", (e) => {
        const keyArr = ["ArrowDown", "ArrowUp"];
        if (keyArr.includes(e.key)) {
            const { selectedIndex, items } = this.state;

            let nextIdx = selectedIndex;
            let lastIdx = items.length > 0 ? items.length - 1 : 0;
            if (e.key === "ArrowUp") {
                nextIdx = nextIdx !== 0 ? nextIdx - 1 : lastIdx;
            } else if (e.key === "ArrowDown") {
                nextIdx = nextIdx !== lastIdx ? nextIdx + 1 : 0;
            }

            this.setState({
                ...this.state,
                selectedIndex: nextIdx
            })
        } else if (e.key === "Enter") {
            e.preventDefault();
            const { items, selectedIndex } = this.state;
            onSelect(items[selectedIndex]);
        }
    })

    this.element.addEventListener("click", (e) => {
        if (e.target.closest('li')?.dataset) {
            const selected = e.target.closest('li').dataset.index;
            onSelect(this.state.items[selected]);
        }
    })


    this.render = () => {
        const { items } = this.state;
        if (items.length > 0) {
            this.element.style.display = "block";
            this.element.innerHTML =
                `<ul>
            ${items.map((iter, idx) =>
                    `<li 
                data-index="${idx}"
                class=${idx === this.state.selectedIndex ? "Suggestion__item--selected" : ""}
                >
                ${iter}
                </li>`
                ).join('')}
            </ul>`
        } else {
            this.element.style.display = "none";
            this.element.innerHTML = "";
        }
    }

    this.render();
}