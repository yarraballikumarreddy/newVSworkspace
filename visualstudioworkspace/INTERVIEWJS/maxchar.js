function Maxchar(str){
    const charmap ={};
    let max=0;
    
    let maxchar="";
//for iteration of string angd array
    for (let char of str){
      
        if(charmap[char]){

            charmap[char]++;
        }
        else{
            charmap[char]=1
        }
    }
   // console.log(charmap)
// for iteration of objecyt
  for (let char in charmap){
      
      console.log("====="+char)
      if (charmap[char]>max){
           max = charmap[char];
           console.log( "*****"+max)
          maxchar = char;
         // console.log( "///////"+maxchar)
      }
  }
console.log(" maxmum char--"+"   "+maxchar)
return maxchar
}

Maxchar(["kku", "kkuuuvhgxuuhhu", "kkuuuvhgxuuhhu"])
Maxchar("kumarrrsrxsxxrsvxrxssvsxsxssxrsx")
