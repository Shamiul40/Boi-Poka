const getStoreBook =()=>{
  const storeBookSTR = localStorage.getItem("readlist");

  if(storeBookSTR) {
    const storeBookData= JSON.parse(storeBookSTR);
    return storeBookData
  } else{
    return []
  }
}

const addToStoreDb=(id)=>{
  const storeBookData = getStoreBook();

  if(storeBookData.includes(id)){
    alert("vai ai id exist")
  } else {
    storeBookData.push(id)
    const data = JSON.stringify(storeBookData);
    localStorage.setItem("readlist", data)
  }
}

export {addToStoreDb,getStoreBook}



