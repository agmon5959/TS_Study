const API_END_POINT = "https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev";
const cache = {}

const callAPI = async (inputWord) => {

    // 캐싱
    if (cache[inputWord]) {
        return cache[inputWord];
    }

    const url = `${API_END_POINT}/languages?keyword=${inputWord}`;
    const responseData = await fetch(url, { method: "GET" });

    if (responseData.ok) {
        const json = responseData.json();
        cache[inputWord] = json;
        console.log(cache);
        return json;
    }

    throw new Error('요청에 실패하였습니다.');

}

export default callAPI;