const API_END_POINT = "https://l9817xtkq3.execute-api.ap-northeast-2.amazonaws.com/dev/"
const cache = {}
const APIs = async (type, param) => {
    let callAPI = "";
    let url = "";
    let json = null;
    debugger
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

    callAPI = await fetch(url, { method: "GET" });
    if (callAPI.ok) {
        json = callAPI.json();
    }

    return json;
}

export default APIs;