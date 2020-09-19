
module.exports = ({ content }) => /*html*/`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <title>My 11ty Site</title>
        <link rel="stylesheet" href="/css/global.css" />
        <meta name="description" content="A template for 11ty site builder and collected notes."/>
    </head>
        <body>
		<script type="application/json" class="js-hypothesis-config">
		  {
			"openSidebar": false
		  }
		</script>
		<script src="https://hypothes.is/embed.js" async></script>
		<script>
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
</script>
  
		<div class="topnav" id="myTopnav">
			
		<div class="topnav-right">
		<a class="active" href="#">About</a>
		  <a href="/blog">Blog</a>
		  
		  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
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
      <div class="grid grid-cols-3 grid-rows-1 space-x-1 gap-1" style="padding-bottom: 50px;">
        <label class="text2 text-right" htmlFor="bd-email" style="display: flex;
    align-items: center;">
          subscribe to the newsletter
        </label>
        <input
          type="email"
          name="email"
          id="bd-email"
          class="border border-black"
        />
        <input type="hidden" value="1" name="embed" />

        <input
          type="submit"
          value="Subscribe"
          class="button"
        />
      </div>
    </form>
  
    </html>
`;
