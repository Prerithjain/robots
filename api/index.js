const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "public")));

const realFlag = "PhaseShift{robots_are_not_good_at_hiding_$6v6}";

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Robots Redux</title>
        <link href="https://fonts.googleapis.com/css?family=Orbitron:700" rel="stylesheet">
        <style>
          body {
            background: linear-gradient(120deg,#ffd8b5,#ffeeee 70%,#c1f0fc);
            font-family: 'Orbitron', Arial, sans-serif;
            height: 100vh;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .centerbox {
            background: #fff5;
            border-radius: 18px;
            box-shadow: 0 2px 24px #3333;
            padding: 38px 42px;
            display: flex;
            flex-direction: column;
            align-items: center;
            animation: comein 1.1s;
          }
          @keyframes comein {
            0% { transform: scale(.8) translateY(30px); opacity: .2; }
            100% { transform: scale(1) translateY(0); opacity: 1; }
          }
          h1 {
            letter-spacing: 5px;
            font-weight: 900;
          }
          .robot {
            font-size: 96px;
            filter: drop-shadow(0 6px 4px #0002);
            animation: robotAnim 2s infinite alternate;
          }
          @keyframes robotAnim {
            0% { transform: rotate(-5deg); }
            100% { transform: rotate(8deg); }
          }
          .tip {
            margin-top: 15px;
            color: #567;
            font-size: 1.1em;
          }
        </style>
      </head>
      <body>
        <div class="centerbox">
          <div class="robot">🤖</div>
          <h1>Robots Redux</h1>
          <div>Are you curious where the robots go? <br>Sometimes secrets are well hidden. Sometimes too obvious. <br>Check all possibilities!</div>
          <div class="tip">What does a search engine find first on an unfamiliar site?</div>
        </div>
      </body>
    </html>
  `);
});

app.get("/admin-bots", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Access Denied</title>
        <style>
          body {
            background: #fff4f8;
            font-family: 'Orbitron', Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
          }
          .hintbox {
            background: #fff8;
            padding: 29px 35px;
            border-radius: 18px;
            box-shadow: 0 2px 15px #bc3344cc;
            margin-top: 80px;
          }
          .hint {
            font-size: 1.01em;
            color: #a44;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="hintbox">
          <h2>Access denied for bots!</h2>
          <div class="hint">
            Only true robots can find: U2VjcmV0UGF0aC10b0ZsYWc=
          </div>
        </div>
      </body>
    </html>
  `);
});

app.get("/hidden-4f4b5c2e", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Nothing To See</title>
        <style>
          body {
            background: #ededed;
            font-family: 'Orbitron', Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
          }
          .hiddenbox {
            background: #fff5;
            padding: 23px 27px;
            border-radius: 16px;
            box-shadow: 0 2px 11px #acacac;
            margin-top: 90px;
          }
        </style>
      </head>
      <body>
        <div class="hiddenbox">
          <h2>Nothing to see here 👀</h2>
          <div>“Are you sure you're in the right place?”</div>
          <div class="failbox">
          <div class="gifbox">
            <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnlzZGJxenowbTU4Y2l6NTZqeDNsNWhibjJ0c2wyamI4dTB3eTg4YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YExAAySmC0I9u2TjKJ/giphy.gif" width="310" alt="Funny gif"/>
          </div>
          <a class="tryagain" href="/">Go Home</a>
        </div>
        </div>
      </body>
    </html>
  `);
});

// Flag page: display flag directly, NO submission
app.get("/SecretPath-toFlag", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Secret Flag</title>
        <style>
          body {
            background: #d8ffec;
            font-family: 'Orbitron', Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
          }
          .flagbox {
            background: #fff;
            padding: 38px 30px;
            border-radius: 22px;
            box-shadow: 0 0 38px #33c9c77a;
            font-size: 1.5rem;
            text-align: center;
            animation: fadein 1.5s;
          }
          @keyframes fadein {
            from {opacity: 0;}
            to {opacity: 1;}
          }
        </style>
      </head>
      <body>
        <div class="flagbox">
          🎉 You found the flag!<br><br>
          <b>${realFlag}</b>
        </div>
      </body>
    </html>
  `);
});

// Catch-all wrong paths (except /admin-bots)
app.get(["/wrong-path1", "/hidden-4f4b5c2e", "/notallowed"], (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Wrong Path!</title>
        <style>
          body {
            background: #fad9e1;
            font-family: 'Orbitron', Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
          }
          .failbox {
            background: #fff5;
            padding: 32px 18px;
            border-radius: 20px;
            margin-top: 45px;
            animation: shakeX 0.6s;
            text-align:center;
          }
          @keyframes shakeX {
            0%,100% {transform: translateX(0);}
            20%, 60% {transform: translateX(-17px);}
            40%, 80% {transform: translateX(15px);}
          }
          .gifbox img {
            border-radius: 18px;
            margin-top: 12px;
          }
          a.tryagain {
            display: inline-block;
            background: #bbb3;
            border-radius: 6px;
            padding: 5px 19px;
            margin-top: 12px;
            text-decoration: none;
            color: #212;
            font-weight: 600;
          }
          a.tryagain:hover {
            background: #d8e1e3;
          }
        </style>
      </head>
      <body>
        <div class="failbox">
          <h2>❌ Wrong path!</h2>
          <div class="gifbox">
            <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnlzZGJxenowbTU4Y2l6NTZqeDNsNWhibjJ0c2wyamI4dTB3eTg4YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YExAAySmC0I9u2TjKJ/giphy.gif" width="310" alt="Funny gif"/>
          </div>
          <a class="tryagain" href="/">Go Home</a>
        </div>
      </body>
    </html>
  `);
});

module.exports = app;
