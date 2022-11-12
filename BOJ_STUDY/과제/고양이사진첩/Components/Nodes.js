export default function Nodes(
    {
        target,
        pState,
        onClickRootDir
    }) {

    this.state = pState;
    this.element = document.createElement('div');
    this.element.className = "Nodes";

    target.appendChild(this.element);

    this.setState = (pState) => {
        this.state = pState;
        this.render();
    }

    // <img src="./assets/prev.png">
    // <img src="./assets/directory.png">
    // <img src="./assets/file.png">

    this.render = () => {
        this.element.innerHTML = getRenderItems()?.join('');

        document.querySelectorAll(".Node").forEach((iter) => {
            iter.addEventListener('click', (e) => {
                onClickRootDir(iter.dataset.id)
            })
        })
    }

    const getRenderItems = () => {
        const { status, rootDir, catDir } = this.state
        const renderItem = [];
        if (status !== "root") {
            renderItem.push(`<div class="Node"><img src="./assets/prev.png"></div>`);
        }

        switch (status) {
            case "root":
                rootDir.forEach((iter) => {
                    renderItem.push(`
                        <div class="Node" data-id="${iter.id}">
                            <img src="./assets/directory.png">
                            <div>${iter.name}</div>
                        </div>`
                    )
                })
                break;
            case "catDir":
                catDir.forEach((iter) => {
                    renderItem.push(`
                        <div class="Node" data-id="${iter.id}">
                            <img src="${iter.type === "DIRECTORY" ?
                            "./assets/directory.png" :
                            "./assets/file.png"
                        }">
                            <div>${iter.name}</div>
                        </div>`
                    )
                })
                break;
        }
        return renderItem;
    }

    this.render();
}




