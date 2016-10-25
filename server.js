var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg');

var config = {
    user: 'siddharaj6010',
    database: 'siddharaj6010',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: 'db-siddharaj6010-45384'
};


var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
        title: 'Article One | Siddharaj Solanki',
        heading: 'Article One',
        date: 'Oct 12, 2016',
        content: `
            <p>
    			This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. 
    		</p>`
    },
    'article-two': {
        title: 'Article Two | Siddharaj Solanki',
        heading: 'Article Two',
        date: 'Oct 13, 2016',
        content: `
            <p>
    			This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article. 
    		</p>`
    },
    'article-three': {
        title: 'Article Three | Siddharaj Solanki',
        heading: 'Article Three',
        date: 'Oct 14, 2016',
        content: `
            <p>
    			This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article. 
    		</p>`
    }
};


function createTemplate (data) {

    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate = `
        <html>
        	<head>
        		<title>
        		    ${title}
        		</title>
        		<meta name="viewport" content="width=device-width, initial-scale=1" />
        	    <link href="/ui/style.css" rel="stylesheet" />
        	</head>
        	<body>
        	    <div class="container">
        	        <div>
            	        <a href="/">Home</a>
                    </div>
                    <hr/>
                    <h3>
                        ${heading}
                    </h3>
            		<div>
            			${date}
            		</div>
            		<div>
            			${content}
            		</div>
            	</div>
        	</body>
        </html>
    `;
    return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new Pool(config);
/*app.get('/test-db', function (req, res){
    //make a select request
    //return a response with results
    pool.query("SELECT * FROM test", function(err, result){
        if(err){
            res.send(err.toString());
        } else{
            res.send(JSON.stringify(result));
        }
    } );
});
*/

var counter = 0;
app.get('/counter', function(req, res){
    counter = counter + 1;
    //We can only send a string as a response. We can't send a number as a response.
    res.send(counter.toString());
});

app.get('/counter-read', function(req, res){
    res.send(counter.toString());
});



app.get('/dance', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'dance.html'));
});

var names = [];
app.get('/submit-name', function (req, res) {
    //get the name from the request object
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
    
});

app.get('/:articleName', function (req, res) {
    // articleName == article-one
    // articles[articleName] == {} content object for article one
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/stop.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'stop.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
