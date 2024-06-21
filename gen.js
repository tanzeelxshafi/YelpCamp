


function gen(){
    let s = "";
    for(let i = 0; i < 10; i++){
        s += Math.floor(Math.random() * 6);
    }
    return s;
}

console.log(gen()
)
;