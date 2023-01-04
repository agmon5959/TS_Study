function solution(genres, plays) {
    let songMap = new Map();
    let arr = []
    arr = genres.map((iter, idx) => [iter, plays[idx]])
        .forEach(([장르, 횟수], idx) => {
            const data = songMap.get(장르) || { total: 0, songs: [] }
            songMap.set(장르, {
                total: data.total + 횟수,
                songs: [...data.songs, { 횟수, idx }]
                    .sort((a, b) => b.횟수 - a.횟수)
                    .slice(0, 2)
            })
        })
    return (
        [...songMap]
            .sort((a, b) => b[1].total - a[1].total)
            .flatMap(item => item[1].songs)
            .map(iter => iter.idx)
    )

}