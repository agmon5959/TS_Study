import Breadcrumb from "./components/Breadcrumb.js";
import Nodes from "./components/Nodes.js";
import APIs from "./api/APIs.js";

export default function App(target) {

    this.state = {
        rootDir: [],
        catDir: [],
        status: '',
    }

    this.setState = (nextState) => {
        this.state = nextState;
        nodes.setState(this.state);
    }

    const breadcrumb = new Breadcrumb({
        target,
        pState: this.state,
    })



    const init = async () => {
        try {
            const rootNodes = await APIs("root");
            this.setState({
                ...this.state,
                rootDir: rootNodes,
                status: "root",
            })
        } catch (err) {
            console.log(err);
        }
    }

    const onClickRootDir = async (e, id) => {
        debugger
        try {
            const catNodes = await APIs("catDir", id);
            debugger
            this.setState({
                ...this.state,
                catDir: catNodes,
                status: "root",
            })
        } catch (err) {
            console.log(err);
        }
    }

    const nodes = new Nodes({
        target,
        pState: this.state,
        onClickRootDir: onClickRootDir,
    })


    init();

}