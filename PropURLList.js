const propURLs = [
  {
    id: 2007,
    name: "Country Gardens",
    url: "https://search.google.com/local/writereview?placeid=ChIJC7GRFXyE54gRZOZJQ4ikSw4",
  },
  {
    id: 2044,
    name: "Trails at Loma",
    url: "https://search.google.com/local/writereview?placeid=ChIJCVYegypp54gRDSH206zK19E",
  },
  {
    id: 2059,
    name: "Retreat at Valencia",
    url: "https://search.google.com/local/writereview?placeid=ChIJ6YmVmupl54gRKl-pCzByNRU",
  },
  {
    id: 2067,
    name: "Lakewood Shores",
    url: "https://search.google.com/local/writereview?placeid=ChIJC72t03zOwogRPHu0z4L6yPc",
  },
  {
    id: 2070,
    name: "Summer Cove",
    url: "https://search.google.com/local/writereview?placeid=ChIJI4tAwQmP3YgR1wpd93xM_hY",
  },
  {
    id: 2081,
    name: "Heritage Pines",
    url: "https://search.google.com/local/writereview?placeid=ChIJ35L3yJy2wogRDNhFI9Heurs",
  },
  {
    id: 2084,
    name: "Waterford East",
    url: "https://search.google.com/local/writereview?placeid=ChIJPSrohLhn54gRXxpz1s47QOc",
  },
  {
    id: 2103,
    name: "Stuart Pointe",
    url: "https://search.google.com/local/writereview?placeid=ChIJc5ospXno3ogR7aUFIWgI3NI",
  },
  {
    id: 2111,
    name: "University Club",
    url: "https://search.google.com/local/writereview?placeid=ChIJb3YJuhqj6IgRtfRowspEgVo",
  },
  {
    id: 2116,
    name: "Bridgewater Club",
    url: "https://search.google.com/local/writereview?placeid=ChIJbykpwV0g6IgRT9A35Qjy-U0",
  },
  {
    id: 2130,
    name: "Regatta Bay",
    url: "https://search.google.com/local/writereview?placeid=ChIJk_I3kbiG3YgREev9lwt0Rr8",
  },
  {
    id: 2142,
    name: "Berkshire Club",
    url: "https://search.google.com/local/writereview?placeid=ChIJ0ft-7EGH3YgRAYecgxCY7_I",
  },
  {
    id: 2148,
    name: "The Villages On Millenia",
    url: "https://search.google.com/local/writereview?placeid=ChIJB1dRZrx-54gRMfUwPcL6Gg4",
  },
  {
    id: 2156,
    name: "Newport Sound",
    url: "https://search.google.com/local/writereview?placeid=ChIJr1huGMQu54gRh6tZUHgCUNM",
  },
  {
    id: 2164,
    name: "Hunters Run",
    url: "https://search.google.com/local/writereview?placeid=ChIJ50oQxS_AwogRAwixVrGNKbk",
  },
  {
    id: 2172,
    name: "Mystic Cove",
    url: "https://search.google.com/local/writereview?placeid=ChIJ8ZwAvitv54gRcXJpJR3bEtY",
  },
  {
    id: 2186,
    name: "St. Andrews Pointe",
    url: "https://search.google.com/local/writereview?placeid=ChIJTTSsKYfu3ogRz_Po_FGERqk",
  },
  {
    id: 2204,
    name: "Belle Isle",
    url: "https://search.google.com/local/writereview?placeid=ChIJt-d_h09j54gRrPYSmPG0f6A",
  },
  {
    id: 2207,
    name: "Lee Vista",
    url: "https://search.google.com/local/writereview?placeid=ChIJt3NgbnJj54gRIyWrkg02f7E",
  },
  {
    id: 2211,
    name: "Covington Club",
    url: "https://search.google.com/local/writereview?placeid=ChIJp8O7Bgtp54gRpZj6lRt_DPU",
  },
  {
    id: 2277,
    name: "Wickham Club",
    url: "https://search.google.com/local/writereview?placeid=ChIJ_5sFWZsP3ogRMXjv620ujyU",
  },
  {
    id: 2232,
    name: "Cove at Lady Lake",
    url: "https://search.google.com/local/writereview?placeid=ChIJme5ui9XG54gRaAVSH--IoIQ",
  },
  {
    id: 2237,
    name: "Lakeside Retreat at 27",
    url: "https://search.google.com/local/writereview?placeid=ChIJkU9vEZjq54gRjRnBHnP9zHo",
  },
  {
    id: 2244,
    name: "Lake Harris Cove",
    url: "https://search.google.com/local/writereview?placeid=ChIJ0eZxmGu-54gRC4UfVZFavTc",
  },
  {
    id: 2248,
    name: "Harbor Vista Condos",
    url: "https://search.google.com/local/writereview?placeid=ChIJGRohDWu-54gRVXHB5i2pQiY",
  },
  {
    id: 2249,
    name: "Oviedo Town Centre",
    url: "https://search.google.com/local/writereview?placeid=ChIJa1219ilq54gRXeqMR8T4t0Q",
  },
  {
    id: 2256,
    name: "Club at Eustis",
    url: "https://search.google.com/local/writereview?placeid=ChIJlYvI-i-954gR9YoY0bkg6fQ",
  },
  {
    id: 2258,
    name: "Marbella Pointe",
    url: "https://search.google.com/local/writereview?placeid=ChIJ2bwRNWRk54gRLzqszjX4beY",
  },
  {
    id: 2263,
    name: "Southwinds Cove",
    url: "https://search.google.com/local/writereview?placeid=ChIJBw8P19DB54gRjmCptzHyScw",
  },
  {
    id: 2270,
    name: "Spring Lake Cove",
    url: "https://search.google.com/local/writereview?placeid=ChIJq8f1REO9MYgRS07-huZ6eCs",
  },
  {
    id: 2271,
    name: "Fountains at Millenia",
    url: "https://search.google.com/local/writereview?placeid=ChIJi8mxZL1-54gRrpwgjIiSt5Q",
  },
  {
    id: 2274,
    name: "Cape Morris Cove",
    url: "https://search.google.com/local/writereview?placeid=ChIJy_ZHe_nY5ogRXqFkrpXnQ8g",
  },
  {
    id: 2278,
    name: "Rolling Acres",
    url: "https://search.google.com/local/writereview?placeid=ChIJsxrAiLvG54gRdj3gNLEuUbw",
  },
  {
    id: 2285,
    name: "Fountains at Falkenburg",
    url: "https://search.google.com/local/writereview?placeid=ChIJyULoN9rPwogREyouOoX25M0",
  },
  {
    id: 2286,
    name: "Hammock Harbor",
    url: "https://search.google.com/local/writereview?placeid=ChIJGa64duoB3ogRrYueaJsrx84",
  },
  {
    id: 2288,
    name: "Malabar Cove",
    url: "https://search.google.com/local/writereview?placeid=ChIJGa64duoB3ogRrYueaJsrx84",
  },
  {
    id: 2294,
    name: "Lakewood Pointe",
    url: "https://search.google.com/local/writereview?placeid=ChIJO2tL0a_OwogR2yZQnv_WhRU",
  },
  {
    id: 2295,
    name: "Taylor Place",
    url: "https://search.google.com/local/writereview?placeid=ChIJ83tmwQMb54gRtvr1ayZlZpg",
  },
  {
    id: 2297,
    name: "Beach Village",
    url: "https://search.google.com/local/writereview?placeid=ChIJe90ggxHA5ogRxDcd96PSCLQ",
  },
  {
    id: 2297,
    name: "Lake Sherwood",
    url: "https://search.google.com/local/writereview?placeid=ChIJmft1KV1454gRMJ4kDhYWPng",
  },
  {
    id: 2306,
    name: "Fountains at San Remo Court",
    url: "https://search.google.com/local/writereview?placeid=ChIJ4yeHfj-c3YgR-Bky3U2dy6k",
  },
  {
    id: 2307,
    name: "Howell Branch Cove",
    url: "https://search.google.com/local/writereview?placeid=ChIJ8-RzIRpv54gRmqHWvahvi80",
  },
  {
    id: 2309,
    name: "Fountains at Pershing Park",
    url: "https://search.google.com/local/writereview?placeid=ChIJYd0mWGNk54gRpVLi0VgqzQE",
  },
  {
    id: 2311,
    name: "River Ridge",
    url: "https://www.google.com/search?q=River+Ridge+Apartments&stick=H4sIAAAAAAAA_-NgU1I1qLCwSDU3T7W0MEg1NTZNSkyzMqgwTzZMSzNONLE0NjBJS0lNWsQqFpRZllqkEJSZkp6q4FiQWFSSm5pXUgwAb-tJeEIAAAA&hl=en&mat=CVQLo8pNdbtkElcB7PxHsQuC6ZzCOpg1jvyZCcgvhbvpMg4vuJBooyhCJ0M7qkMHl1MU13PCXE2xWVESYFXKDMGaEjTYuT0vjEqxDUHIzTGQctk6RQDK-3p3xQBuWuFveV0&authuser=0&safe=active&ssui=on",
  },
  {
    id: 2314,
    name: "Rolling Green",
    url: "https://search.google.com/local/writereview?placeid=ChIJ_cIavXY_w4gRQ2sTH28sJh4",
  },
  {
    id: 2315,
    name: "Moss Park",
    url: "https://search.google.com/local/writereview?placeid=ChIJvTEcDbdt54gRoJ0eXzE93ps",
  },
  {
    id: 2316,
    name: "Uptown Maitland",
    url: "https://search.google.com/local/writereview?placeid=ChIJPfhnNLNx54gR5McWdYC-py4",
  },
  {
    id: 2317,
    name: "Saxon Cove",
    url: "https://search.google.com/local/writereview?placeid=ChIJx3FTylYQ54gRMM_zMbTYve8",
  },
  {
    id: 2318,
    name: "Garden Park",
    url: "https://search.google.com/local/writereview?placeid=ChIJf77bNsNx54gRtfjWCi06XrY",
  },
  {
    id: 2319,
    name: "Boca Palms",
    url: "https://search.google.com/local/writereview?placeid=ChIJf77bNsNx54gRtfjWCi06XrY",
  },
  {
    id: 2323,
    name: "Harbour's Edge",
    url: "https://search.google.com/local/writereview?placeid=ChIJpX4-2IThwogRR4zD_zti8Ak",
  },
  {
    id: 2324,
    name: "Urban Landings",
    url: "https://search.google.com/local/writereview?placeid=ChIJH2kR4IThwogRBa4d9HpCeLM",
  },
  {
    id: 2325,
    name: "Richey Woods",
    url: "https://search.google.com/local/writereview?placeid=ChIJu7GrrEiQwogR_FLwF-K0FS4",
  },
  {
    id: 2327,
    name: "Lexington Court",
    url: "https://search.google.com/local/writereview?placeid=ChIJhayN-Pd654gRuCmS2GeBcRY",
  },
  {
    id: 2330,
    name: "The Hammock at Stuart Villa",
    url: "https://search.google.com/local/writereview?placeid=ChIJySUhSXDd3ogRZ_UYB6w03Xc",
  },
  {
    id: 2331,
    name: "Village Park Senior Living",
    url: "https://search.google.com/local/writereview?placeid=ChIJvy6rYRNw54gRdnO2CoESEPo",
  },
  {
    id: 2337,
    name: "Dean Woods Place",
    url: "https://search.google.com/local/writereview?placeid=ChIJgc870Ahm54gROkNjH-BjNdM",
  },
  {
    id: 2338,
    name: "Osceola Bend",
    url: "https://search.google.com/local/writereview?placeid=ChIJL3C19NKG3YgRq4t4yLU3b3k",
  },
  {
    id: 2339,
    name: "Heritage Park",
    url: "https://search.google.com/local/writereview?placeid=ChIJz2R2beyF3YgRzZKSj-fOoUM",
  },
  {
    id: 2342,
    name: "Vist Park Senior Living",
    url: "https://search.google.com/local/writereview?placeid=ChIJJ8WkVh4f6IgRgnt47hhF-bs",
  },
];

//map over the object to extract the url only

//need to return ONE url at a time, so at each index (each object) of the array

module.exports = propURLs;
