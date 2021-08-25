const isMatch = function(s, p) {
  if(s.length === 0 && p.length === 0){
      return true;
  }
  if(s.length !== 0 && p.length === 0){
      return false;
  }

  let str = s[0], pattern = p[0];
  let isNextStart = p[1] === "*";

  if(isNextStart){
      if(str && (str === pattern || pattern === ".")){
          return isMatch(s.slice(1), p) || isMatch(s.slice(1), p.slice(2)) || isMatch(s, p.slice(2))
      }
      else if(pattern === "." && p.slice(2).length === 0){
          return true
      }
      else{
          return isMatch(s,p.slice(2));
      }
  }
  else{
      if(str && (str === pattern || pattern === ".")){
          return isMatch(s.slice(1), p.slice(1))
      }
      else{
          return false;
      }
  }
};