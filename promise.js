import fetchedData from "./fetchedData";

const fun = () => {
    return new Promise((resovle, reject) => {
        setTimeout(() => {
            if (fetchedData) resovle(fetchedData);
            reject(new Error("서버에 데이터를 받아올 수 없습니다."));
        }, 0);
    });
};

fun()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));