const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init(){

  let index = 0;

  document.body.addEventListener('keydown',

    (event) => {
      // Write your JavaScript code inside the init() function
      console.log(event)
      const key = parseInt(event.detail || event.which || event.location);

      if (key === code[index]) {
        index++;
        console.log(key)
        console.log(index)
        if (index === code.length) {
          alert("Hurray!");
          index = 0;
        }
      } else if (key === 38){
        index = 1;
        console.log(key)
        console.log(index)
      } else {
        index = 0;
        console.log(key)
        console.log(index)
      }
    }
  )
}
