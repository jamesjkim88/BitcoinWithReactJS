import dispatcher from "../dispatcher";

export function ajaxCall(){
    axios("https://api.github.com/search/repositories?q=reactjs").then((data) =>{
        console.log("data: ", data);
    }, (data) =>{
        console.log("error", data);
    })
}