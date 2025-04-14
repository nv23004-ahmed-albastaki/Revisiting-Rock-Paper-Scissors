<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rock Paper Scissors</title>
    <style>
        button {
            padding: 10px 20px;
            margin: 10px;
            font-size: 18px;
        }
        #results {
            margin: 20px;
            font-size: 20px;
        }
        #score {
            font-weight: bold;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <h1>Rock Paper Scissors</h1>
    <div>
        <button id="rock">Rock</button>
        <button id="paper">Paper</button>
        <button id="scissors">Scissors</button>
    </div>
    <div id="score">Player: 0 - Computer: 0</div>
    <div id="results">Make your selection!</div>
    <script src="script.js"></script>
</body>
</html>
