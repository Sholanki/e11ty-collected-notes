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
		 <form
      action="https://buttondown.email/api/emails/embed-subscribe/reddy2go"
      method="post"
      target="popupwindow"
      onSubmit={submitAction}
    >
      <div className="grid grid-cols-3 grid-rows-1 space-x-1 gap-1">
        <label className="max-w-xs self-end text-right" htmlFor="bd-email">
          subscribe to the newsletter
        </label>
        <input
          type="email"
          name="email"
          id="bd-email"
          className="border border-black"
        />
        <input type="hidden" value="1" name="embed" />

        <input
          type="submit"
          value="Subscribe"
          className="text-black rounded-sm bg-gray-300 font-medium"
        />
      </div>
    </form>
  
    </html>
`;
