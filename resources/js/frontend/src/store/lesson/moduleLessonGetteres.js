export default {
    getListeningList: (state) => (id) => {
        const dataList = state.dataList
        let flag = true
        let newArray = []
        let keys = []
        while (flag){
            let index = Math.floor(Math.random() * dataList.length)
            let randomItem = dataList[index]
             if(index !== id && !keys.includes(index)) {
                 newArray.push(randomItem)
                 keys.push(index)
             }
            flag = newArray.length < 4
        }
        // push Answer item as random key.
        let index = Math.floor(Math.random() * newArray.length)
        let itemTemp = newArray[index]
        newArray[index] = dataList[id]
        newArray.push(itemTemp)
        return newArray
    },
    getRandomData: (state) =>(id) => {
        const dataList = state.dataList
        let index = Math.floor(Math.random() * dataList.length)
        return dataList[index]
    }
}
