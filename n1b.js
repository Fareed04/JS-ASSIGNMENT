// N1B
function callMeInTwoMinutes(time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let timeInMinutes = time / 10000
        resolve(() => console.log(`It's been ${timeInMinutes} minutes \n Calling...`));
      }, time);
    });
  }
  
  async function go() {
    const call = await callMeInTwoMinutes(4000);
    call();
  }
  
  go();