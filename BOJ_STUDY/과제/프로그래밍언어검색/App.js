import SearchInput from "./components/SearchInput.js";
import Suggestion from "./components/Suggestion.js";
import SelectedLanguage from "./components/SelectedLanguage.js";
import callAPI from "./API/APIs.js";

export default function App({ target }) {

    this.state = {
        fetchedLanguages: [],
        selectedLanguages: [],
    }

    this.setState = (nextState) => {
        this.state = {
            ...this.state,
            ...nextState
        }
        suggestion.setState({
            items: this.state.fetchedLanguages,
            selectedIndex: 0,
        })
        selectedLanguage.setState(this.state.selectedLanguages)
    }


    const searchInput = new SearchInput({
        target,
        initState: '',
        onChangeInput: async (inputValue) => {
            if (inputValue.length === 0) {
                this.setState({ fetchedLanguages: [] });
            } else {
                const result = await callAPI(inputValue);
                this.setState({ fetchedLanguages: result });
            }
        }
    })

    const suggestion = new Suggestion({
        target,
        initState: {
            items: [],
            cursor: 0,
        },
        onSelect: (lang) => {
            alert(lang);
            this.setState({
                ...this.state,
                // todo 추후 수정
                selectedLanguages: this.state.selectedLanguages.push(lang),
            })
        }
    });

    const selectedLanguage = new SelectedLanguage({
        target,
        initState: [],
    })

}