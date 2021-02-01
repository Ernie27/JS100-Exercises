function localGreet(str) {
  let language  = str.slice(0,2);
  let region = str.slice(3,5);

  if (language) {
    switch (region) {
      case 'US': return 'Hey!';
      case 'GB': return 'Hello!';
      case 'AU': return 'Howdy!';
    }
  } else {
      return 'Salut!';
    }
}


console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'