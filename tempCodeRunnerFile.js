function countWords(paragraph,word1) {
  const paragraph =
    "I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.";
   let a = paragraph.split(" ");
//    console.log(a);
let count1 = 0;
for (let i = 0; i < a.length; i++)
{
// if match found increase count
if (word1==(a[i]))
    count1++;
}

return count1;
}
let word1 = "love";
    document.write(countWords(paragraph,word1));

