const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = [];
rl.question('What\'s your name? ', (answer1) => {
  answers.push(answer1);
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    answers.push(answer2);
    rl.question('What do you listen to while doing that? ', (answer3) =>{
      answers.push(answer3);
      rl.question('Which meal is your favourite? ', (answer4) => {
        answers.push(answer4);
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          answers.push(answer5);
          rl.question('Which sport is your absolute favourite? ', (answer6) => {  
            answers.push(answer6);
            rl.question('What is your superpower? ', (answer7) => {  
              answers.push(answer7);
              showAnswers();
              rl.close();
            });
          });    
        });
      }); 
    });
  });       
});

const showAnswers = function(){
  console.log(`${answers[0]} loves listening to ${answers[1]} while doing ${answers[2]}, devouring ${answers[4]} for ${answers[3]}, prefers ${answers[5]} over other sport, and is amazing at ${answers[6]}`);
}

/*Devani loves listening to Ludovico Einaudi while coding, 
devouring Yak Momos for brunch, prefers Tennis over any other sport, 
and is amazing at dropping mad puns at inopportune times.*/