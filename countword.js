function countWords(paragraph,word1,word2) {
let a = paragraph.split(" ");
//    console.log(a);
let count1 = 0;
for (let i = 0; i < a.length; i++)
{
// if match found increase count
if (word1==(a[i]))
    count1++;
}

let count2 = 0;
for (let i = 0; i < a.length; i++)
{
// if match found increase count
if (word2==(a[i]))
    count2++;
}

if (count1 > count2){
    console.log("The Word" + word1 + "more frequently occured than"+ word2);
    } //Comparing the word counter to check if word1 occured more than word2
    else if (count2 > count1){
    console.log("The Word" + word2 + "more frequently occured than"+ word1);
    }
    //if above conditions doesn't matches then executing the same coccurance of words
    else{
    console.log("Both word occured same times");
    }
}
let word1 = "teaching";
let word2 = "you";
let paragraph =
    "I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.";
countWords(paragraph,word1, word2);

    

