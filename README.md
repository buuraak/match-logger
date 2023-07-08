# Match event logger
This Next.js application allows the user to start matches and log certain events that happen during the match. The score and timeline will always be updated real-time.
## Clone this app:
First install the necessary npm packages with:
<pre>npm install</pre>
Next create a MySQL database and a .env file inside of your cloned project and paste the following value inside of your .env file (Make sure to paste your values at the placeholders):<br>
**Note: For MySQL the default port number on the mac is 3306. If this is not the case for you please replace the *3306* in the line below with your own port number**
<pre>DB_URL=mysql://YOUR_USERNAME:YOUR_PASSWORD@localhost:3306/DATABASE_NAME</pre>
Now generate your database models with:
<pre>npm run prisma:push</pre>
After everything is successfully created you can insert dummy data with:
<pre>npm run prisma:seed</pre>
Now to run your local environment run the following command:
<pre>npm run dev</pre>
