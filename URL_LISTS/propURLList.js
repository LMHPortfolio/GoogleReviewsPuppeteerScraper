const propURLs = [
  {
    id: 2007,
    name: "Country Gardens",
    url: "https://maps.app.goo.gl/NtwLh7VMR2sNUXYt7",
  },
  {
    id: 2044,
    name: "Trails at Loma",
    url: "https://maps.app.goo.gl/CtEWZ57Rsm7pxjA26",
  },
  {
    id: 2059,
    name: "Retreat at Valencia",
    url: "https://maps.app.goo.gl/3hpX2WDtSjoKa9eo9",
  },
  {
    id: 2067,
    name: "Lakewood Shores",
    url: "https://maps.app.goo.gl/wBS8e5NJoLKRSmd19",
  },
  {
    id: 2070,
    name: "Summer Cove",
    url: "https://maps.app.goo.gl/5tKg8KrnHmvqAd1G9",
  },
  {
    id: 2081,
    name: "Heritage Pines",
    url: "https://maps.app.goo.gl/yxZaQHcr3DRdWdUC7",
  },
  {
    id: 2084,
    name: "Waterford East",
    url: "https://maps.app.goo.gl/vbGo4E8xHGeyFiXBA",
  },
  {
    id: 2103,
    name: "Stuart Pointe",
    url: "https://maps.app.goo.gl/eraRwwkZvVBhVfPR8",
  },
  {
    id: 2111,
    name: "University Club",
    url: "https://maps.app.goo.gl/zjWhP3aFX7NsjELj9",
  },
  {
    id: 2116,
    name: "Bridgewater Club",
    url: "https://maps.app.goo.gl/Ea8HMZKzePTQJ53A6",
  },
  {
    id: 2130,
    name: "Regatta Bay",
    url: "https://maps.app.goo.gl/6Ri7SrYxZbodJ5f18",
  },
  {
    id: 2142,
    name: "Berkshire Club",
    url: "https://maps.app.goo.gl/ZwP4thzRb2MgEnp37",
  },
  {
    id: 2148,
    name: "The Villages On Millenia",
    url: "https://maps.app.goo.gl/BT7Xm2rGTJbcpoZE8",
  },
  {
    id: 2156,
    name: "Newport Sound",
    url: "https://maps.app.goo.gl/Mof2DuLo5Tsag4Hb9",
  },
  {
    id: 2164,
    name: "Hunters Run",
    url: "https://maps.app.goo.gl/2BjAFrEhFJmW99NF6",
  },
  {
    id: 2172,
    name: "Mystic Cove",
    url: "https://maps.app.goo.gl/Km8xjWRaGUMb7shT9",
  },
  {
    id: 2186,
    name: "St. Andrews Pointe",
    url: "https://maps.app.goo.gl/sHMCo3rmrt2y3ZYw6",
  },
  {
    id: 2204,
    name: "Belle Isle",
    url: "https://maps.app.goo.gl/7LL9EKVypXJVV2Da8",
  },
  {
    id: 2207,
    name: "Lee Vista",
    url: "https://maps.app.goo.gl/cTY9rzELKT6rTmGdA",
  },
  {
    id: 2211,
    name: "Covington Club",
    url: "https://maps.app.goo.gl/bTBiAU7TtpcZAPiF6",
  },
  {
    id: 2227,
    name: "Wickham Club",
    url: "https://maps.app.goo.gl/DJiXaSC7qPNDsPQ48",
  },
  {
    id: 2232,
    name: "Cove at Lady Lake",
    url: "https://maps.app.goo.gl/pJtnFt5LWDuTYb9G8",
  },
  {
    id: 2237,
    name: "Lakeside Retreat at 27",
    url: "https://maps.app.goo.gl/FSSvybtzLNspePdm6",
  },
  {
    id: 2244,
    name: "Lake Harris Cove",
    url: "https://maps.app.goo.gl/HH9wraPaLaBqx3Gh8",
  },
  {
    id: 2248,
    name: "Harbor Vista Condos",
    url: "https://maps.app.goo.gl/3eUGnYCXYfxPHKrb9",
  },
  {
    id: 2249,
    name: "Oviedo Town Centre",
    url: "https://maps.app.goo.gl/S7j9yrUoYej4RmydA",
  },
  {
    id: 2256,
    name: "Club at Eustis",
    url: "https://maps.app.goo.gl/qPqJ3DNSnRdVW4du5",
  },
  {
    id: 2258,
    name: "Marbella Pointe",
    url: "https://maps.app.goo.gl/mgK7n8USd11tGtjv7",
  },
  {
    id: 2263,
    name: "Southwinds Cove",
    url: "https://maps.app.goo.gl/UEVniGMecMkcPibu6",
  },
  {
    id: 2270,
    name: "Spring Lake Cove",
    url: "https://maps.app.goo.gl/iohAHy7tRMopoAjE8",
  },
  {
    id: 2271,
    name: "Fountains at Millenia",
    url: "https://maps.app.goo.gl/5JQ8z2bzqo3oCNnM8",
  },
  {
    id: 2274,
    name: "Cape Morris Cove",
    url: "https://maps.app.goo.gl/jkxHcM6VujcPUcR26",
  },
  {
    id: 2278,
    name: "Rolling Acres",
    url: "https://maps.app.goo.gl/omrt1XESuRcsbEm97",
  },
  {
    id: 2285,
    name: "Fountains at Falkenburg",
    url: "https://maps.app.goo.gl/6zhsnmLKCfW71QbW7",
  },
  {
    id: 2286,
    name: "Hammock Harbor",
    url: "https://maps.app.goo.gl/GkBa7bQJkw2XFH4F9",
  },
  {
    id: 2288,
    name: "Malabar Cove",
    url: "https://maps.app.goo.gl/DzCzb6B6SevLxFzi9",
  },
  {
    id: 2294,
    name: "Lakewood Pointe",
    url: "https://maps.app.goo.gl/q7CRQt9NaKMoXR9i8",
  },
  {
    id: 2295,
    name: "Taylor Place",
    url: "https://maps.app.goo.gl/XPx7ouvh4pGoEoiX9",
  },
  {
    id: 2297,
    name: "Beach Village",
    url: "https://maps.app.goo.gl/kicdKu5n56C4RymC7",
  },
  {
    id: 2302,
    name: "Lake Sherwood",
    url: "https://maps.app.goo.gl/bBpxjhrhV1SvDaiC9",
  },
  {
    id: 2306,
    name: "Fountains at San Remo Court",
    url: "https://maps.app.goo.gl/ffB8tbT4dec6V64w5",
  },
  {
    id: 2307,
    name: "Howell Branch Cove",
    url: "https://maps.app.goo.gl/vg62sPwN72wZgd4JA",
  },
  {
    id: 2309,
    name: "Fountains at Pershing Park",
    url: "https://maps.app.goo.gl/3mkobr5dLySiBy6J6",
  },
  {
    id: 2311,
    name: "River Ridge",
    url: "https://maps.app.goo.gl/TNW112oqEzJjnjeg6",
  },
  {
    id: 2314,
    name: "Rolling Green",
    url: "https://maps.app.goo.gl/U1pWGG8tgoVmAhyn7",
  },
  {
    id: 2315,
    name: "Moss Park",
    url: "https://maps.app.goo.gl/i7KsEwW2rXgYPDWDA",
  },
  {
    id: 2316,
    name: "Uptown Maitland",
    url: "https://maps.app.goo.gl/aAHbNya6Q4eAAG247",
  },
  {
    id: 2317,
    name: "Saxon Cove",
    url: "https://maps.app.goo.gl/8vxoZySeKp9F3d6d7",
  },
  {
    id: 2318,
    name: "Garden Park",
    url: "https://maps.app.goo.gl/hHXEwwbtufZNgfmU9",
  },
  {
    id: 2319,
    name: "Boca Palms",
    url: "https://maps.app.goo.gl/4zh9eWqnJUPZv8Vy8",
  },
  {
    id: 2323,
    name: "Harbour's Edge",
    url: "https://maps.app.goo.gl/p9V3i27jceA716wU7",
  },
  {
    id: 2324,
    name: "Urban Landings",
    url: "https://maps.app.goo.gl/S4cJiPtE4jzPdYPa8",
  },
  {
    id: 2325,
    name: "Richey Woods",
    url: "https://maps.app.goo.gl/7w65sRYPrgb3GaVS8",
  },
  {
    id: 2327,
    name: "Lexington Court",
    url: "https://maps.app.goo.gl/nK6NfbJTkgGt7r2P9",
  },
];

module.exports = propURLs;
