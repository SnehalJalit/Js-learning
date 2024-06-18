async function getallData () {
    await getallData(1);
    console.log("get data 1");
    await getallData(2);
    console.log("get data 2");
}
getallData();