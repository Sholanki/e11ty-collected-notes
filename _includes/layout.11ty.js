import { ButtonDown } from "css/button-down";
module.exports = ({ content }) => /*html*/`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>My 11ty Site</title>
        <link rel="stylesheet" href="/css/global.css" />
        <meta name="description" content="A template for 11ty site builder and collected notes."/>
    </head>
        <body>
		<div class="topnav">
			
		<div class="topnav-right">
		  <a href="/blog">Blog</a>
		  <a class="active" href="#">About</a>
		  </div>
		</div>
            <main>
                ${content}
            </main>
        </body>
		 <ButtonDown></ButtonDown>
  
    </html>
`;
