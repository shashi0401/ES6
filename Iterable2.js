let s = 'shashikant';

let iterator =  s[Symbol.iterator]();

while(true){
    let result = iterator.next();
    if(result.done){
        break;
    }else{
        console.log(result.value)
    }
        
        
    
}

