module.exports = function count(s, pairs) {
  var count; 
  var n = 1;
  if (pairs[0][1] > 1000) return ;
  if (s.length > 8) return ;

  for (let i = 0; i < pairs.length; i++) {
    n = n*Math.pow(pairs[i][0], pairs[i][1]);
  }; 
    
  if (s.length === 1) {
    if (s[0] === '1') {
      count = totientFunc(pairs);
    } else count = n - totientFunc(pairs);
  };
 
  function totientFunc(pairs) {
    let count = 1;
    for (let i = 0; i < pairs.length; i++) {
      count = count*(Math.pow(pairs[i][0], pairs[i][1]) - Math.pow(pairs[i][0], pairs[i][1] - 1));
    };
  return count;
}

  if (s.length !== 1) {
  var set = new Set();  
    
  for (let i = 1; i < n+1; i++) {
    if (s[0] === '1') {
      if (checkRelatives(i,n)) {
        set.add(i);
      }; 
    };
    if (s[0] === '0') {
      if (!checkRelatives(i,n)) {
        set.add(i);
      }; 
    };    
  }


    
  for (var i = 1; i < s.length; i++) {
    let j = i;
      for (j; j < n+i+1; j++) {
        if (set.has(j-i)) {
          if (s.charAt(i) == '1') {
            if (checkRelatives(j,n)) continue;
           else set.delete(j-i);
          } else {
            if (!checkRelatives(j,n)) continue;
            else set.delete(j-i);
          }
        }        
      }
  }

count = set.size;
    
  function checkRelatives(a1, b1) {
    let a = a1, b = b1;   
    while (a != b) {
      if (a > b) {
        a = a - b;
      } else {
        b = b - a;
      };
    }
    if (a === 1) return true;
    return false;  
  }
  } 

  return count % 1000000007 ;
}