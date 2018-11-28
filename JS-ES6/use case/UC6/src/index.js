function getX() {

    obj = new Map(); // ES 6
  
    return function(x) {

      if (obj.get(x)) {
        alert('Value Already Cached')
      } else {
        obj.set(x, x);
        console.log('value added to DB and cached dataset');
      }
    };
  }
  
  let service = new getX();
