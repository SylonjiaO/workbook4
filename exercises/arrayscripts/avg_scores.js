let myScores = [92, 98, 84, 76, 89, 99, 100];
 let yourScores = [82, 98, 94, 88, 92, 100, 100]; 

 function getMean(scores) {
    for (let i = 0; i < scores.length; i++) {   
    let avgScores = (scores[i]/scores.length) * scores.length;
    return avgScores;  
    
}
 }

 let average = getMean(myScores);
console.log(average);


 function getAverage(scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {   
     total = total + scores[i];
    }
return total/scores.length; 
 }

 let ave = getAverage(myScores);
console.log(ave.toFixed(2));

