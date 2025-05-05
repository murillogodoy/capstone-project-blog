import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

let posts = [
    {
        id: 1,
        title: "The Magic of the Ordinary: Finding Beauty in Small Moments",
        content: 
        "In the fast-paced rhythm of modern life, it's easy to get lost chasing big goals, major achievements, and heavy responsibilities. But what if true happiness was hidden in the small, often overlooked moments? Picture the warmth of a cup of coffee on a chilly morning, the gentle sound of rain tapping on your window, or the genuine smile a stranger shares with you on the street. These moments may seem insignificant, but they hold a quiet beauty that enriches our daily lives. The ability to appreciate the ordinary is like a secret superpower we all possess. It's a reminder that life doesn’t have to be extraordinary to be wonderful. When we learn to slow down and value simplicity, we discover happiness is closer than we imagined. Challenge yourself to notice the little miracles in your everyday routine. Put your phone aside for a few minutes, take a deep breath, and observe the world around you. Who knows? You might find something extraordinary in what’s been there all along.",
        author: "Jonathan Price",
        date: "2025-04-30T10:00:00Z",
    },
    {
        id: 2,
        title: "Rediscovering Joy: The Power of Living in the Moment",
        content: 
        "Life often feels like a race against the clock—always moving, always striving, always chasing the next big thing. But in the hustle of it all, we sometimes forget the beauty of simply being present. Take a moment to pause. Notice the way sunlight dances through the leaves of a tree, or how a gentle breeze carries the scent of blooming flowers. These fleeting experiences may seem insignificant, but they can ground us in the here and now, offering clarity and peace amidst the chaos. Living in the moment doesn’t mean abandoning your goals or ignoring responsibilities. It’s about balancing ambition with mindfulness, allowing yourself to truly experience life as it unfolds. When you embrace the present, even the ordinary becomes extraordinary, and joy sneaks into the quietest corners of your day. So, the next time you feel overwhelmed, try anchoring yourself in the moment. Take a deep breath, let go of what's outside your control, and give yourself the gift of being fully present. You might just find that the moments you once overlooked become the ones you cherish most.",
        author: "Mary Wilson",
        date: "2025-04-30T14:30:00Z",
    },
    {
        id: 3,
        title: "The Science of Happiness: Can We Really Measure Joy?",
        content:
        "Happiness is something we all crave, but what exactly is it? Is it a fleeting feeling of joy, a sense of contentment, or the excitement of reaching a goal? Science has been exploring this age-old question, and while happiness remains a deeply personal experience, researchers have uncovered some fascinating insights. One key finding is that happiness isn’t about constant pleasure; it’s about balance. It’s the interplay of positive emotions like gratitude, hope, and love with resilience during challenges. Interestingly, scientists use tools like brain scans and surveys to measure happiness, revealing how our thoughts, actions, and environments shape our mood. Simple habits, like spending time with loved ones, practicing mindfulness, or even getting a dose of sunshine, have been shown to boost happiness. And here's the good news: happiness isn’t just genetic—it’s something you can nurture. So, can we measure joy? Maybe not in exact numbers, but science shows that small, intentional choices can make a big impact on how we feel.",
        author: "Peter Fudge",
        date: "2025-04-30T16:30:00Z"
    },
];

let lastId = 3;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/posts", (req, res) => {
    console.log(posts);
    res.json(posts);
});


app.listen(port, () => {
    console.log(`API is running on http://localhost:${port}`);
});