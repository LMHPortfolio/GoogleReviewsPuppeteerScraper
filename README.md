This script is split into 2 parts that should be run separately. This was done to avoid timeout issues that occur when running Puppeteer too long over a single very large URL list.
Part 1 "googleReviewsCrawl" will scrape the "propURLList" and return a CSV file with the results. Part 2 "googleReviewsCrawl2" will scrape the "propURLList2" and return a CSV file with those results.
When complete, you can copy paste from both CSV files into your preferred Excel file.

Install the following dependencies if you do not have these already installed on your local machine:

Dependencies:

1. NodeJS (javascript runtime to allow you to run the program on your local machine): https://nodejs.org/en
2. PuppeteerJS (testing/webscraping library to call the special webscraping functions): https://pptr.dev/
3. terminal to run the scripts using npm (or NodeJS) commands. I recommend using GitBash on Windows (non UNIX) Operating Systems. Any commands I've listed here are based on UNIX (git bash) shell commands.
   If you want to install GitBash: https://gitforwindows.org/

Installation Order and Running the Scripts:

1. Install NodeJS first, then follow the instructions to install Puppeteer using Node Package Manager (NPM)
2. Create a new folder/directory on your computer where you'd like to store this project's code. The resulting CSV files with the Google Review Scores will be written to this directory!
3. Download the project files into this directory, and open in your local IDE/Code editor if preferred. This makes it easy to run and view the results in real time.
4. Make sure you have your terminal open ( >bash if you are running GitBash like me) and that you are in the correct directory. This is why running from your Code Editor/IDE makes it easier.
5. To run the first script, type the following command (You can also run it using node ex: 'node googleReviewsCrawl'):

   npm run crawl1

You should see the following output in the terminal:

      starting

This means the progam has STARTED successfully. Writing the results to the CSV file is gradual, but you can see the writing in real time.
The terminal will update with:

      --running--

continuously while the scrape is in progress.

If the program failed to start running, you will see the following error in the terminal:

      scrape initiation failed

Any other errors that occurr while CSV file writing is in progress will likely be Puppeteer or network timeout errors. You'll see the error reason in the terminal.
In this instance, wait at least 30 seconds before trying to run the script again.
Puppeteer will timeout if it runs into a navigation attempt to a URL that takes longer than 30,000ms (30secs).

In your directory, you will see a CSV file created. The first one will be titled "GoogleReviewCount.csv".
If the file already exists, the program will write to that pre-existing file. It will only create a new one if it does not yet exist.
It will not "overwrite" existing content, but it will add to what is already in a pre-existing CSV with that same name.
I recommend renaming the file once the scrape is successful so you don't confuse different versions!
While the program is running, you will see --running-- in your terminal. You can view your progress in writing to the CSV file by opening the file that was created and seeing the rows populate in real time.

In the instance that you need to STOP the program from running, type CONTROL+C into the terminal. Think of this as the emergency break. Otherwise, just wait for the CSV file write process to be complete.

6.  When the first scrape is done, you will be greeted with the following in the terminal:

        complete. run part 2 after 30secs

Once your first scrape/file write is complete, you can begin the second. I recommend waiting at least 30 seconds before running the second script to avoid timeout errors but you can take as much time as you like. Begin running part 2 with the following command in the terminal:

        npm run crawl2

This process is identical to the first round, and will output a "GoogleReviewCount2.csv" file. When the scrape is completed, you will receive confirmation in the terminal.

7. When both your CSV files are completed (can check against the url lists in the "propURLList" and "propURLList2" files that have the lists in JSON format), you can easily open the CSVs in Excel or Google Sheets and copy paste to your desired final sheet/format.

8. Any errors or change requests should be referred to the author.
