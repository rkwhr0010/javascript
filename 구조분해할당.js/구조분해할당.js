//단순히 scope를 나누기 위함
function scope1(){
    const arr = [1,2,3];

    const data1 = arr[0];
    const data2 = arr[1];
    const data3 = arr[2];
    console.log(`예전 방식`,data1,data2,data3);

    //배열분해할당
    const [a,b,c] = arr;
    console.log(`신 방식`,a,b,c);
}
// scope1();
