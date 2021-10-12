import fatchedData from "./fetchedData.js"

const fun = () => {
    return new Promise((resovle, reject)=> {
        setTimeout(()=>{
            if (fetchedData) resovle(fatchedData);
            reject(new Error("서버에서 데이터를 받아올 수 없습니다."));
        }, 0);
    });
};

(async() => {
    try {
        const data = await fun();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
})

fun()
.then((data) => console.log(data))
.catch((err) => console.error(err));
