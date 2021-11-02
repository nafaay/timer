const args = process.argv.slice(2);
if (args.length === 0){
    console.log("x");
    return;
}
for(const arg of args){
    if(isNaN(arg)){
        return ;
    }
    if (arg < 0){
        return;
    }
}
for(const arg of args){
    let delay = Number(arg);
    setTimeout(() => {
        process.stdout.write('\x07');
    }, delay*1000);
}

