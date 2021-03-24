const txt = "the_stealth_warrior";
let emptyArray = [];
const separators = ['_','-'];
const storedValue = '';
try{
        for (let i = 0;i<separators.length;i++){
        
        storedValue = txt.split(separators[i]);
        
    }

}
   
catch(err){
    
}

// for (let current = 0; current < storedValue.length;current++){
//     if(current>0){
        
//         emptyArray.push(storedValue[current].charAt(0).toUpperCase() + storedValue[current].slice(1));
//         const camelCasedString = storedValue[0] + emptyArray.join('');
//         console.log(camelCasedString)
//     }
// }

