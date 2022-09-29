import randomWords from 'random-words';

const main = () => {
  console.log();
  const iframe = document.getElementById('msBingFrame') as any;
  let counter = 0;
  let intervalId: number;

  const randomText = () => {
    // random number between 1 and 10
    const wordCount = Math.floor(Math.random() * 10) + 1; 
    return randomWords(wordCount).join(' ');
  }

  const func = () => {
    const searchString = randomText();
    iframe.src = `https://www.bing.com/search?q=${searchString}`;
    counter++;
    console.log('counter', counter);
    // browser
    // 150 / 5 = 30 // search in bing
    // 20 / 5 = 4   // search via bing
    // mobile
    // 100 / 5 = 20
    if (counter === 35) {
      clearInterval(intervalId);
    }
  }

  intervalId = setInterval(func, 3000) as any;
}

main();