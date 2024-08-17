
(function() {
  var speakHello = 'Hello ';
  var speakGoodbye = 'Good Bye '
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  const J = 'J';

  for (let i = 0; i < names.length; i++){
    const currentName = names[i];
    if (currentName.startsWith(J)) {
      console.log(speakGoodbye + currentName);
    } else {
      console.log(speakHello + currentName);
    }
  }
})();


