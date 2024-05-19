function firstWord(s) {
  // your code here
	if (s.length<0){
		return s;
	}
	s.trim();
	let p="";
	for(let i in s){
		if(s.charAt(i)==' '|| i==s.length-1){
			p=s.slice(0,i);
			break;
		}
	}
	return p;
}

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
