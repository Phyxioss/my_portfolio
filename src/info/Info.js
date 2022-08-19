import self from "../img/self.png"
import memoji from "../img/memoji.png"
import mock1 from "../img/mock_firehol.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */


export const info = {
    firstName: "AdemZiya",
    lastName: "Akkaya",
    initials: memoji, // the example uses first and last, but feel free to use three or more if you like.
    position: "a BackEnd Developer and Cyber Security Analyst",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the TR'
        },
        {
            emoji: "💼",
            text: "Backend Developer at Swordsec"
        },
        {
            emoji: "📧",
            text: "ademakkaya5@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.instagram.com/akkaya.z1ya",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/phyxioss",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/adem-ziya-akkaya-430399162/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/AdemZiyaAkkaya1",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello there! I am Adem. I am a backend developer for Swordsec. I'm studying Computer Engineering at Bartın University. I am trying to improve myself in cyber security and software. That's all for now :)",
    skills:
        {
            proficientWith: ['Python', 'C#', 'PHP','javascript', 'git', 'bootstrap', 'html5', 'css3', 'Docker', 'Laravel', 'mysql', 'mongodb', 'nosql'],
            exposedTo: ['CyberSecurity', 'elastic search', 'adobe illustrator', 'adobe photoshop']
        }
    ,
    hobbies: [
        {
            label: 'Listening to music',
            emoji: '🎧'
        },
        {
            label: 'Shopping',
            emoji: '🛒'
        },
        {
            label: 'Watching movies',
            emoji: '🎥'
        },
        {
            label: 'Playing video games',
            emoji: '🎮'
        },
        {
            label: 'Participate in CTF competitions',
            emoji: '👨‍💻'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Firehol Project using Mongo and Flask.",
            live: "https://github.com/Phyxioss", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/Phyxioss", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        }
    ]
}