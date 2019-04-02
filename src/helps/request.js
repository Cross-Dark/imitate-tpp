import axios from "axios";
export default async function (path){
    const url = ' https://www.easy-mock.com/mock/5c6ab0d8d8bc8b31033c35d1/movie' + path;
    const data =axios({
        method: 'get',
        url: url,
    }).then(function(response){
        const {data} = response.data;
        return data;
    }).catch(function(error){
        console.log(error);
    });
    return data;
}