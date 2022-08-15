// For my implementation I am the wonders of  es6
// The Workflow: We sum each digit of the number using mod operator
// After we have the total sum we check if it is odd or even 
// Finally we  return the corresponding string 

// Time Complexity : O(n). I think O(n) is the optimal time complexity for the problem.



const evenOrOdd=(number)=>{
    let sum=0;
    
    while(number>1){
        sum+=number%10;
        number=parseInt(number/10);
    }
    
    if(sum%2==0){
        return 'Even';
    }
    else{
        return 'Odd';
    }
}