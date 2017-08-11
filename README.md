## Technical interview questions:

1  Re-implement the JavaScript native function String.indexOf()
using the String.charAt() function and no other built-in functions.

2  Implement unit tests for your indexOf() function
Bonus point: use Mocha.js

3 Dynamic DOM manipulation exercise
Google Drive link with the sources for this question: https://drive.google.com/open?id=0B7-w55gyuuGnazVBdDRUd2pNUzQ
In inbox/index.html a script is running that simulates 3rd party interaction with the DOM. Some mails are inserted and some mails are removed randomly.
Please, create another JS file to be loaded on inbox/index.html and implement:
In the inbox table, insert a new column with a double check character (✓) in every mail where the recipient is not the user (you can see the user's e-mail in the top right corner).
Add a new row in the stats table with the live count of e-mails with the double-check

Obs: You may inspect the file inbox/js/inbox.js at will but not change it's content. The solution must be on a separate JS file.


## Run mocha tests:

*  npm install mocha
*  ./node_modules/mocha/bin/mocha
