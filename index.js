function writeCards(names,eventName){
    let messages = []
for (let k = 0; k < names.length; k ++){
   messages.push(`Thank you, ${names[k]}, for the wonderful ${eventName} gift!`)
}
return messages
}
function countDown(){
    let countDown = 0
        while (countDown < 11){
            console.log(countDown++)
        } 
    
}