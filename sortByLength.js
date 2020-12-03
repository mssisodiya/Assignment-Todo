sortByLength= str =>{
    
    var j= str.split(" ")
    
    j.sort()
    var f=j.sort(function(a, b) {
        return a.length - b.length;
      });
      let e=f.toString()
      let h=e.replace(/\,/g," "); 
      var str2 = h.replace(/\,/g," ");

      return str2
}