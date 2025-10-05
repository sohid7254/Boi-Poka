const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem("readList")

    if(storedBookSTR){
        const stodedBookData = JSON.parse(storedBookSTR)
        return stodedBookData;
    }else{
        return [];
    }
}
const addToStoreDB = (id) => {
    const stodedBookData = getStoredBook();

    if(stodedBookData.includes(id)){
        alert("Already Existed")
    }else {
        stodedBookData.push(id);

        const data = JSON.stringify(stodedBookData)
        localStorage.setItem("readList", data)
    }
}
export {addToStoreDB, getStoredBook}
