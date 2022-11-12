// https://l9817xtkq3.execute-api.ap-northeast-2.amazonaws.com/dev/
// method: GET
// 사진첩의 root 경로에 있는 파일들과 디렉토리들을 불러옵니다.

// 특정 디렉토리에 속하는 파일 / 디렉토리 불러오기
// https://l9817xtkq3.execute-api.ap-northeast-2.amazonaws.com/dev/:nodeId
// method: GET

const API_END_POINT = "https://l9817xtkq3.execute-api.ap-northeast-2.amazonaws.com/dev/";

const APIs = async (type) => {
    if (type) {
        const url = API_END_POINT;
        const getRootDirAPI = await fetch(url, { method: "GET" })
        debugger
        if (getRootDirAPI.ok) {
            debugger
        }

    }
}

export default APIs