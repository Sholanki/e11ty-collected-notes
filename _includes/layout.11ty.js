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
            <main>
                ${content}
            </main>
        </body>
		<form
  action="https://buttondown.email/api/emails/embed-subscribe/reddy2go"
  method="post"
  target="popupwindow"
  onsubmit="window.open('https://buttondown.email/reddy2go', 'popupwindow')"
  class="embeddable-buttondown-form"
>
  <label for="bd-email">Enter your email</label>
  <input type="email" name="email" id="bd-email"></input>
  <input type="hidden" value="1" name="embed"></input>
  <input type="submit" value="Subscribe"></input>
  <p>
    <a href="https://buttondown.email" target="_blank">Powered by Buttondown.</a>
  </p>
</form>
    </html>
`;
