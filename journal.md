### What did you accomplish in this phase? What is the practical difference between a regular expression with start/end anchors (^...$) and one without them when checking the length of a username?

In this phase I created two different validations for my code to check for  using regular expressions. The practical difference between a regular expression with start/end anchors (^...$) and one without them is the that with it it will check the whole thing instead of just the first one it runs into.

### What did you accomplish in this phase? Why is the case-insensitive flag i cleaner than converting strings with .toLowerCase() or writing alternate variations in an if statement?

In this phase I validated the phone number with either dots, continous numbers or hyphens and the promo code on the users account that is case insensitive to accept any variation of summer. case-insensitive flag i is cleaner than converting strings with .toLowerCase() or writing alternate variations in an if statement because you always have to create a brand newstring when you use .toLowerCase() or others while using i just evaluates the aready their string.

### What did you accomplish in this phase? What is the conceptual difference between testing a string with .test() and extracting/reformatting data using capturing groups and backreferences?

In this phase I took the phone number and created a function to format it. the groups were split into three separate parts where the groups only consist of the number and not the dots or hyphens. then used .replace to put it in proper format for a phone number. the conceptual difference between testing a string with .test() and extracting/reformatting data using capturing groups and backreferences is that .test only returns a true or false and doesn't do anything with it while using captruing groups and backreferences let you exctract and use the information.