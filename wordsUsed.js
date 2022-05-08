function varietyOfWords(sentence) {
    var a = [];
    for (var i=0, l=sentence.length; i<l; i++)
        if (a.indexOf(sentence[i]) === -1 && sentence[i] !== '')
            a.push(sentence[i]);
    return a.length;
}
  const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`
  console.log(varietyOfWords(sentence))