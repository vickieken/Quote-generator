const contentEl = document.querySelector(".contentEl");

// adviceNumEl.innerHTML = Number(randomAdviceNum)

const btnEl = document.querySelector(".btn");



const randomQuotes = [
    `"The greatest glory in living lies not in never falling, but in rising every time we fall." -Nelson Mandela`,
    `"The way to get started is to quit talking and begin doing." -Walt Disney`,
    `"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma, which is living with the results of other people's thinking." -Steve Jobs`,
    `"The future belongs to those who believe in the beauty of their dreams." -Eleanor Roosevelt`,
    `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough." -Oprah Winfrey`,
    `"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success." -James Cameron`,
    `"You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one." -John Lennon`,
    `"You must be the change you wish to see in the world." -Mahatma Gandhi`,
    `"Spread love everywhere you go. Let no one ever come to you without leaving happier." -Mother Teresa`,
    `"The only thing we have to fear is fear itself." -Franklin D. Roosevelt`,
    `"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that." -Martin Luther King Jr.`,
    `"Do one thing every day that scares you. -Eleanor Roosevelt",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart." -Helen Keller`,
    `"It is during our darkest moments that we must focus to see the light." -Aristotle`,
    `"Do not go where the path may lead, go instead where there is no path and leave a trail." -Ralph Waldo Emerson`,
    "Be yourself; everyone else is already taken. -Oscar Wilde",
    `"You must be the change you wish to see in the world." -Mahatma Gandhi`,
    `"Spread love everywhere you go. Let no one ever come to you without leaving happier." -Mother Teresa`,
    `"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that." -Martin Luther King Jr.`,
    `"Believe you can and you're halfway there." -Theodore Roosevelt`,
    `"The only person you are destined to become is the person you decide to be." -Ralph Waldo Emerson`,
    `"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel." -Maya Angelou`,
    `"The question isn't who is going to let me; it's who is going to stop me." -Ayn Rand`,
    `"Winning isn't everything, but wanting to win is." -Vince Lombardi`,
    `"Whether you think you can or you think you can't, you're right." -Henry Ford`,
    `"You miss 100% of the shots you don't take." -Wayne Gretzky`,
    `"I alone cannot change the world, but I can cast a stone across the water to create many ripples." -Mother Teresa`,
    `"You become what you believe." -Oprah Winfrey`,
    `"The most difficult thing is the decision to act, the rest is merely tenacity." -Amelia Earhart`,
    `"How wonderful it is that nobody need wait a single moment before starting to improve the world." -Anne Frank`,
    `"Everything you've ever wanted is on the other side of fear." -George Addair`,
    `"Dream big and dare to fail." -Norman Vaughan`,
    `"Courage is grace under pressure." -Ernest Hemingway`,
    `"It is still best to be honest and truthful; to make the most of what we have; to be happy with simple pleasures; and have courage when things go wrong.” -Laura Ingalls Wilder`,
    `"Nothing is impossible, the word itself says, I'm possible!" -Audrey Hepburn`,
    `"It does not matter how slowly you go as long as you do not stop." -Confucius`,
    `"Don't find fault, find a remedy: anyone can complain." -Henry Ford`,
    `"A man may die, nations may rise and fall, but an idea lives on". -John F. Kennedy`,
    `"I have learned over the years that when one's mind is made up, this diminishes fear." -Rosa Parks`,
    `"I didn't fail the test. I just found 100 ways to do it wrong." -Benjamin Franklin`,
    `"If you're offered a seat on a rocket ship, don't ask what seat! Just get on." -Sheryl Sandberg`,
    `"With great power comes great responsibility." -Stan Lee`,
    `"I would rather die of passion than of boredom." -Vincent van Gogh`,
    `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough." -Oprah Winfrey`,
    `"Dreaming, after all, is a form of planning." -Gloria Steinem`,
    `"Whatever the mind of man can conceive and believe, it can achieve." -Napoleon Hill`,
    `"First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end." -Aristotle`,
    `"Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So, throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover." -Mark Twain`,
    `"If you want to achieve excellence, you can get there today. As of this second, quit doing less-than-excellent work." -Thomas J. Watson`,
    `"If you genuinely want something, don't wait for it — teach yourself to be impatient." -Gurbaksh Chahal`,
    `"The only limit to our realization of tomorrow will be our doubts of today." -Franklin D. Roosevelt`,
    `"It is better to fail in originality than to succeed in imitation." -Herman Melville`,
    `"The future belongs to those who believe in the beauty of their dreams." -Eleanor Roosevelt`,
    `"The road to success and the road to failure are almost exactly the same." -Colin R. Davis`,
    `"Always remember, your focus determines your reality." -George Lucas`,
    `"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success." -James Cameron`,
    `"If you really look closely, most overnight successes took a long time." -Steve Jobs`,
    `"To be successful, you have to be selfish, or else you never achieve. And once you get to your highest level, then you have to be unselfish." -Michael Jordan`,
    `"Let the future tell the truth, and evaluate each one according to his work and accomplishments. The present is theirs; the future, for which I have really worked, is mine." -Nikola Tesla`,
    `Try not to become a man of success. Rather become a man of value." -Albert Einstein`,
    `"Don't be afraid to give up the good to go for the great." -John D. Rockefeller`
]

btnEl.addEventListener("click", ()=> {
    let adviceNumEl = document.querySelector(".advice-id").innerHTML = Math.floor(Math.random() * 50);
    contentEl.innerHTML = randomQuotes[Math.floor(Math.random() * randomQuotes.length)];
})