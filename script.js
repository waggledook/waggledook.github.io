document.addEventListener('DOMContentLoaded', function() {
    const sentences = [
    { sentence: "The volcano erupted after long periods of ... (active)", answer: "inactivity" },
    { sentence: "The film ... was good, but I much prefer the book (adapt)", answer: "adaptation" },
    { sentence: "Paul is ... to computer games (addict)", answer: "addicted" },
    { sentence: "Even good friends sometimes have ... (agreeable)", answer: "disagreements" },
    { sentence: "Sending a human to mars is an ... plan (ambition)", answer: "ambitious" },
    { sentence: "We've provided you with some games for your ... (amusing)", answer: "amusement" },
    { sentence: "I think his painting is very ... (art)", answer: "artistic" },
    { sentence: "When she finishes school, she wants to be a ... (beauty)", answer: "beautician" },
    { sentence: "He was shocked and in a state of ... (believe)", answer: "disbelief" },
    { sentence: "People say that olive oil is ... for our health (benefit)", answer: "beneficial" },
    { sentence: "... are scientists (biological)", answer: "biologists" },
    { sentence: "Joe is so unfit. Running leaves him... (breath)", answer: "breathless" },
    { sentence: "People make mistakes because of ... (care)", answer: "carelessness" },
    { sentence: "She's 25, but she can be quite ... sometimes (childhood)", answer: "childish" },
    { sentence: "The dish looked boring and ... (colour)", answer: "colourless" },
    { sentence: "After falling, he was in a lot of ... for a while (comfortable)", answer: "discomfort" },
    { sentence: "It's just a game so don't be so ... (competitor)", answer: "competitive" },
    { sentence: "This file is ... Nobody can see it. (confidence)", answer: "confidential" },
    { sentence: "New York is ... Many people from around the world live there (culture)", answer: "multicultural" },
    { sentence: "We remember his ... (dead) on this day every year.", answer: "death" },
    { sentence: "You must leave a message with the secretary. You can only talk to him... (direction)", answer: "indirectly" },
    { sentence: "I tried to cook but it was ... (disaster)", answer: "disastrous" },
    { sentence: "Neptune is a ... (distance) planet in the solar system.", answer: "distant" },
    { sentence: "School trips should be ... (education)", answer: "educational" },
    { sentence: "What a mistake! She couldn't hide her ... (embarrass)", answer: "embarrassment" },
    { sentence: "Pandas are an ... species (danger)", answer: "endangered" },
    { sentence: "Most students find homework ... (enjoyment)", answer: "unenjoyable" },
    { sentence: "Singers, dancers and clowns are called ... (entertainment)", answer: "entertainers" },
    { sentence: "Studying your phrasal verbs is ... (essence) for passing the FCE", answer: "essential" },
    { sentence: "It's ... (evidence) that he was the robber", answer: "evident" },
    { sentence: "When he saw his present, he couldn't hide his ... (exciting)", answer: "excitement" },
    { sentence: "The artist's work will be ... (exhibition) next week", answer: "exhibited" },
    { sentence: "We were as surprised as anyone by the ... (expectancy) news", answer: "unexpected" },
    { sentence: "If we don't act now, many animals face certain ... (extinct)", answer: "extinction" },
    { sentence: "Many people only want to become singers for the ... (famous)", answer: "fame" },
    { sentence: "The ... (finance) crisis hit many countries hard", answer: "financial" },
    { sentence: "Drinking and driving is a ... (fool) thing to do", answer: "foolish" },
    { sentence: "If you're not from the country you're in, you're a ... (foreign)", answer: "foreigner" },
    { sentence: "Thank you for your ... (generous)", answer: "generosity" },
    { sentence: "Barcelona beat Madrid in a ... (glory) fashion - 6 goals to 0!!", answer: "glorious" },
    { sentence: "Some insects are .... (harm) but others are dangerous", answer: "harmless" },
    { sentence: "Eating fried food is ... (health)", answer: "unhealthy" },
    { sentence: "I want to adopt that cat - it looks ... (help)", answer: "helpless" },
    { sentence: "There's a book about the Mezquita by a famous ... (historical)", answer: "historian" },
    { sentence: "The crash caused a lot of ... (injure)", answer: "injuries" },
    { sentence: "The story was very ... (imagination)", answer: "imaginative" },
    { sentence: "You must remember the ... (important) of studying", answer: "importance" },
    { sentence: "I didn't like his painting. It was ... (impression)", answer: "unimpressive" },
    { sentence: "Is Huesca an ... (industry) city?", answer: "industrial" },
    { sentence: "It wasn't an accident. It was ... (intention)", answer: "intentional" },
    { sentence: "The couple separated because of his ... (jealous)", answer: "jealousy" },
    { sentence: "Scaring your cat is very ... (kindness). You shouldn't do it", answer: "unkind" },
    { sentence: "My professor is a very ... (knowledge) person", answer: "knowledgeable" },
    { sentence: "He's broken his leg twice now. He's so ... (luck)", answer: "unlucky" },
    { sentence: "He's not good at maths, but he's very ... (music)", answer: "musical" },
    { sentence: "Cats are ... (mystery) animals", answer: "mysterious" },
    { sentence: "It's just a small mistake. It's not very ... (notice)", answer: "noticeable" },
    { sentence: "There are ... (number) ways to remember new vocabulary", answer: "numerous" },
    { sentence: "We need to train the dog. It's being very ... (obedience)", answer: "disobedient" },
    { sentence: "The surgery was very easy and ... (pain)", answer: "painless" },
    { sentence: "Most computers have ... (parent) controls", answer: "parental" },
    { sentence: "Don't be so ... (patience)", answer: "impatient" },
    { sentence: "The park is a ... (peace) place to relax", answer: "peaceful" },
    { sentence: "Dogs are not ... (permit) here", answer: "permitted" },
    { sentence: "He wouldn't take 'no' for an answer. He was very ... (persistence)", answer: "persistent" },
    { sentence: "Giving blood is an ... (pleasure) experience", answer: "unpleasant" },
    { sentence: "Many modern cities are very ... (pollution)", answer: "polluted" },
    { sentence: "Take an umbrella just in case. The weather can be ... (prediction)", answer: "unpredictable" },
    { sentence: "It's important to behave ... (profession) at work", answer: "professionally" },
    { sentence: "Police found ... (prove) that he was the robber", answer: "proof" },
    { sentence: "I think €20 for a hamburger is ... (reason)", answer: "unreasonable" },
    { sentence: "If it's too dark you can turn up the ... (bright)", answer: "brightness" },
    { sentence: "Einstein was remembered for his ... (brilliant)", answer: "brilliance" },
    { sentence: "There were many ... (competition) in the race", answer: "competitors" },
    { sentence: "Do not hand in homework that's ... (completion)", answer: "incomplete" },
    { sentence: "He hit his head and lost ... (conscious)", answer: "consciousness" },
    { sentence: "A Ferrari costs a ... (consideration) amount of money", answer: "considerable" },
    { sentence: "We apologise for the ... (convenient)", answer: "inconvenience" },
    { sentence: "My tutor usually makes ... (correct) on my essays", answer: "corrections" },
    { sentence: "The army doesn't tolerate ... (coward)", answer: "cowardice" },
    { sentence: "Animal ... (cruel) is a crime in most countries in Europe", answer: "cruelty" }
];

    let currentSentenceIndex = 0;
    let score = 0;
    let timeLeft = 120;
    let timerInterval;
    let incorrectAnswers = [];

    // Shuffle the sentences array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Start the game
    function startGame() {
    shuffleArray(sentences);
    currentSentenceIndex = 0;
    score = 0;
    timeLeft = 120; // Set time limit to 2 minutes
    incorrectAnswers = [];
    document.getElementById('score').textContent = `Score: ${score}`;
    document.getElementById('sentence').textContent = sentences[currentSentenceIndex].sentence;
    document.getElementById('feedback').textContent = '';
    document.getElementById('restart').style.display = 'none';
    document.getElementById('report').style.display = 'none';
    document.getElementById('submit').disabled = false;
    document.getElementById('answer').disabled = false;
    document.getElementById('answer').value = '';
    document.getElementById('answer').focus();
    document.getElementById('timer').textContent = `Time left: 2:00`; // Update initial display
    startTimer();
}

    // Check the answer
    function checkAnswer() {
        const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
        const correctAnswer = sentences[currentSentenceIndex].answer.toLowerCase();

        if (userAnswer === correctAnswer) {
            document.getElementById('feedback').textContent = "Correct!";
            score++;
        } else {
            document.getElementById('feedback').textContent = `Incorrect. The correct answer is "${correctAnswer}".`;
            incorrectAnswers.push({
                sentence: sentences[currentSentenceIndex].sentence,
                correctAnswer: correctAnswer,
                userAnswer: userAnswer
            });
        }

        document.getElementById('score').textContent = `Score: ${score}`;
        nextSentence();
    }

    // Move to the next sentence
    function nextSentence() {
        currentSentenceIndex++;
        if (currentSentenceIndex >= sentences.length) {
            currentSentenceIndex = 0;
        }
        document.getElementById('sentence').textContent = sentences[currentSentenceIndex].sentence;
        document.getElementById('answer').value = '';
        document.getElementById('answer').focus(); // Automatically focus the textbox
    }

    function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById('timer').textContent = `Time left: ${minutes}:${seconds.toString().padStart(2, '0')}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

    // Start the timer
    function startTimer() {
        timerInterval = setInterval(() => {
            timeLeft--;
            document.getElementById('timer').textContent = `Time left: ${timeLeft} seconds`;

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                endGame();
            }
        }, 1000);
    }

    // End the game
    function endGame() {
        document.getElementById('feedback').textContent = `Time's up! Your final score is ${score}.`;
        document.getElementById('submit').disabled = true;
        document.getElementById('answer').disabled = true;
        document.getElementById('restart').style.display = 'block';
        showReport();
    }

    // Show the report of incorrect answers
    function showReport() {
        const incorrectList = document.getElementById('incorrect-list');
        incorrectList.innerHTML = '';

        if (incorrectAnswers.length > 0) {
            incorrectAnswers.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.sentence} - Your answer: ${item.userAnswer}, Correct answer: ${item.correctAnswer}`;
                incorrectList.appendChild(li);
            });
            document.getElementById('report').style.display = 'block';
        }
    }

    // Attach event listeners
    document.getElementById('submit').addEventListener('click', checkAnswer);
    document.getElementById('restart').addEventListener('click', startGame);

    // Submit on Enter key
    document.getElementById('answer').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            checkAnswer();
        }
    });

    // Start the game when the page loads
    startGame();
});