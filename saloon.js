export const SALOON = {
  "Saloon": {
    "eventTable": {
      "rollType": "2D6",
      "requiredOnVisit": true,
      "events": {
        "2": "Assassination Attempt \u2013 Spirit 5+ or Luck 6+ or roll on Injury chart with 1D6.",
        "3": "\"You a'Cheatin' Us?!\" \u2013 Cunning 6+ or Agility 4+ to escape. Fail = Injury chart.",
        "4": "Spilled Drink \u2013 Leave town or buy drinks for D6\u00d7$25.",
        "5": "Bar Fight \u2013 Strength 5+ or take D6 Wounds (carry over to next Adventure).",
        "6": "Dark Tidings \u2013 Start next Adventure with 1 less Grit.",
        "7": "A Good Time \u2013 Pay $10, Recover 1 Grit.",
        "8": "A Tall Tale \u2013 Lore 5+ for 10XP per 5+ rolled.",
        "9": "Aces and Eights \u2013 Gain +2 Luck and +2 Cunning this Visit.",
        "10": "Song and Dance \u2013 Luck 5+ to regain D3 Health. Fail = Lose D6\u00d7$25 and Visit ends.",
        "11": "A Catchy Tune \u2013 Start next Adventure with Max Grit.",
        "12": "Hero of the People \u2013 Double gambling winnings and gain 2 Whiskey Tokens."
      }
    },
    "entertainment": [
      {
        "name": "Casual Poker",
        "cost": 50,
        "type": "Gambling",
        "limit": "Once per Visit",
        "effect": "Cunning 5+ for $50 per success. Fail = lose all."
      },
      {
        "name": "Brimstone Craps",
        "cost": 100,
        "type": "Gambling",
        "limit": "Once per Visit",
        "effect": "Luck 5+ for $100 per success. Fail = lose all."
      },
      {
        "name": "Saloon Girl Performance",
        "cost": 50,
        "limit": "Once per Visit",
        "effect": "Gain 10XP. On 4\u20136, recover 1 Grit."
      }
    ],
    "items": [
      {
        "name": "Whiskey",
        "cost": 50,
        "type": "Gear",
        "tags": [
          "Whiskey",
          "Tokens"
        ],
        "effect": "Gain 1 Whiskey Token"
      },
      {
        "name": "Cask",
        "cost": 300,
        "type": "Gear",
        "tags": [
          "Container"
        ],
        "effect": "Holds up to 3 Whiskey Tokens"
      },
      {
        "name": "Gambler\u2019s Deck of Cards",
        "cost": 850,
        "type": "Gear",
        "tags": [
          "Charm"
        ],
        "effect": "+1 Cunning. Cancel and re-draw 1 Darkness card. Limit one."
      },
      {
        "name": "Lucky Dice",
        "cost": 1000,
        "type": "Gear",
        "tags": [
          "Charm"
        ],
        "effect": "+1 Luck. Add +1 to any single die roll per Adventure. Limit one."
      }
    ],
    "saloonGirlTroupe": {
      "restriction": "Saloon Girl Heroes Only",
      "actions": [
        {
          "name": "Entertain",
          "cost": "Free",
          "limit": "Once per Visit",
          "effect": "Agility/Lore roll. Roll 1\u20133 = nothing, 4\u20135 = $25, 6 = $100."
        },
        {
          "name": "Pickpocket",
          "effect": "Agility 4+. 4\u20135 = $10, 6 = draw a Gear card. Take 3 Corruption Hits.",
          "limit": "Once per Visit"
        },
        {
          "name": "Perfume",
          "cost": 200,
          "type": "Boost",
          "effect": "+5XP for every Health/Sanity healed via Comforting Presence (next Adventure)"
        }
      ]
    },
    "saloonGear": [
      {
        "name": "Dark Stone Shiv",
        "cost": null,
        "darkStone": 1,
        "type": "Gear",
        "slot": "Hand Weapon",
        "tags": [
          "Dark Stone"
        ],
        "effect": "Discard to deal D6 Wounds to adjacent Enemy. Free Attack. Ignores Defense."
      },
      {
        "name": "Boned Corset",
        "cost": 1200,
        "slot": "Torso",
        "effect": "Armor 6+"
      },
      {
        "name": "Dark Stone Corset",
        "cost": 3200,
        "darkStone": 1,
        "slot": "Torso",
        "effect": "Armor 5+. +1 Max Grit"
      },
      {
        "name": "Tiny Hat",
        "cost": 2450,
        "slot": "Hat",
        "effect": "May ignore 1 Corruption point per Adventure."
      }
    ]
  }
};