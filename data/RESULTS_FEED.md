# Meet results feed

## Currently published
The site uses only the results rows in `data/results.json`, copied from the private Google Sheets **Results** tab on October 29, 2026. This does not expose the private registration workbook, student roster, or form responses. New edits to the private sheet will **not** appear on the site automatically while the snapshot is used.

## Enable automatic updates
1. Create a **separate public, results-only Google Sheet** containing exactly these columns:
   Date, Opponent, Team, Match Type, WX Players, Game 1, Game 2, Game 3, Winner.
2. If desired, connect its data to the private source workbook using a sheet-level IMPORTRANGE formula. Grant access only to the exact Results tab/range; verify that the public sheet contains no other tabs or private information.
3. Publish only that results-only spreadsheet as CSV. Do **not** publish the original interest-form workbook, which contains private roster/response data.
4. In the wxpickleball Vercel project, set the server-side environment variable `RESULTS_CSV_URL` to the HTTPS published CSV URL and redeploy.
5. The website will fetch fresh CSV data approximately every five minutes. It uses the last committed snapshot if the feed fails.

Use `data/results.json` for manual one-off updates until the results-only feed is configured. The UI derives match totals and meet winners from the Winner column, and it excludes preseason results from the Varsity record.
