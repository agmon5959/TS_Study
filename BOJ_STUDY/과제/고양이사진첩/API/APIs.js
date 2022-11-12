const API_END_POINT = "https://l9817xtkq3.execute-api.ap-northeast-2.amazonaws.com/dev/"
const cache = {}
const APIs = async (type, param) => {
    let callAPI = "";
    let url = "";
    let json = null;
    switch (type) {
        case "root":
            callAPI = await fetch(API_END_POINT, { method: "GET" });
            break;
        case "catDir":
            url = `${API_END_POINT}+${param}`
            callAPI = fetch(url, { method: "GET" });
            break;
        case "image":
            url = `${API_END_POINT}+${param}`
            callAPI = fetch(url, { method: "GET" });
            break;
    }

    if (callAPI.ok) {
        json = callAPI.json();
    }

    return json;
}

export default APIs;