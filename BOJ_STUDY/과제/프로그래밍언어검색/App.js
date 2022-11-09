import SearchInput from "./components/SearchInput.js";
import callAPI from "./API/API.js";

export default function App({ target }) {

    this.state = {
        searchResult: [],
        selectedLanguages: [],
    }

    this.setState = (nextState) => {
        this.state = {
            ...this.state,
            ...nextState
        }
    }


    const searchInput = new SearchInput({
        target,
        initState: '',
        onChangeInput: (inputValue) => {
            const result = callAPI(inputValue);
            return result;
        }
    })

}