const API_END_POINT = "https://l9817xtkq3.execute-api.ap-northeast-2.amazonaws.com/dev/"
const cache = {}
const APIs = async (type, param) => {
    let callAPI = "";
    let url = "";
    let json = null;
    switch (type) {
        case "root":
            url = `${API_END_POINT}`
            break;
        case "catDir":
            url = `${API_END_POINT}${param}`
            break;
        case "image":
            url = `${API_END_POINT}${param}`
            break;
    }

    try {
        callAPI = await fetch(url);
        if (!callAPI.ok) {
            throw new Error("error");
        }
        switch (callAPI.status / 100) {
            case 3:
                return "Redirect Error";
            case 4:
                return "Client Error";
            case 5:
                return "Server Error";
            default:
                return json = callAPI.json();
        }


    } catch (e) {
        console.log(e);
    }
}

export default APIs;