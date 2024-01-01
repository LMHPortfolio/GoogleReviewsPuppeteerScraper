//this would be a giant array of all the page urls for each property
//then you would create a variable that was the result of map over the entire array
//the resulting variable would be required into the Puppeteer file, and that would run that variable and the resulting txt file should have all the scores

const publixURLs = [
  {
    name: "College Park",
    url: "https://www.google.com/maps/place/Publix+Super+Market+at+College+Park/@28.5698186,-81.3887716,20z/data=!4m6!3m5!1s0x88e77a63ecd8832d:0x1101717793a07fcf!8m2!3d28.5700025!4d-81.3883996!16s%2Fg%2F1tcwxk0w?entry=ttu",
  },
  {
    name: "Holliana",
    url: "https://www.google.com/maps/place/Publix+Super+Market+at+Hollieanna+Shopping+Center/@28.5915364,-81.3690568,17z/data=!3m1!4b1!4m6!3m5!1s0x88e77073ebaee6ab:0x8ef5577349329188!8m2!3d28.5915364!4d-81.3664819!16s%2Fg%2F1wtbvq4z?entry=ttu",
  },
];

//map over the object to extract the url only

//need to return ONE url at a time, so at each index (each object) of the array

module.exports = publixURLs;
