function cleanText(sentence)
{
new_text = sentence.replace(/[^a-zA-Z0-9 ]/g, "");
console.log(new_text);
 }

const sentence = "%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?";
cleanText(sentence);
