export const GAMBLING_HALL = {
  "GamblingHall": {
    "eventTable": {
      "rollType": "2D6",
      "requiredOnVisit": true,
      "events": {
        "2": "Assassination Attempt \u2013 Make a Cunning 5+ or Lore 6+ or roll on Injury Chart (1D6).",
        "3": "I say you're Cheatin' me! \u2013 Make a Luck 4+ test to avoid Unwanted Attention and danger. Roll D6 to collect winnings (D6\u00d7$50). Fail = Injury Chart roll.",
        "4-5": "\u201cSorry Mister\u201d \u2013 Lose $200, 2 Dark Stone, or 1 Gear/Artifact.",
        "6-8": "Laughter, Cheers, and Sadness \u2013 No Event.",
        "9-10": "Everyone\u2019s a Winner \u2013 All Heroes here gain D6 \u00d7 $25.",
        "11": "Drinks and Cigars All Around \u2013 All Heroes here gain 1 Whiskey and 1 Fine Cigar Token.",
        "12": "High Stakes Bet \u2013 Play Five Card Draw Poker, draw World card and Artifact if won during first game."
      }
    },
    "sideBagItems": [
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
        "name": "Fine Cigar",
        "cost": 25,
        "type": "Gear",
        "tags": [
          "Cigar",
          "Tokens"
        ],
        "effect": "Gain 1 Fine Cigar Token"
      }
    ],
    "clothing": [
      {
        "name": "Black Tie",
        "cost": 200,
        "slot": "Neck",
        "effect": "+1 Cunning while in Town"
      },
      {
        "name": "Fancy Bowler",
        "cost": 450,
        "slot": "Hat",
        "effect": "Recover 1 Sanity each time you roll doubles on a Location Event Chart"
      },
      {
        "name": "Top Hat",
        "cost": 850,
        "slot": "Hat",
        "effect": "+2 Sanity. Gain Showman keyword"
      },
      {
        "name": "Gambler\u2019s Jacket",
        "cost": 1250,
        "slot": "Coat",
        "effect": "Once per Adventure/Town Stay, Recover D3 Grit"
      },
      {
        "name": "Red Sash",
        "cost": 1850,
        "slot": "Belt",
        "requirement": "Performer or Showman only",
        "effect": "+1 Move. Cancel 1 Initiative assignment per Adventure"
      },
      {
        "name": "Gold Ring",
        "cost": 2750,
        "slot": "Ring",
        "requirement": "Showman only",
        "effect": "Once per Adventure/Town Stay, change any single die to 6"
      }
    ],
    "gambling": [
      {
        "name": "Five Card Draw Poker",
        "cost": 50,
        "limit": "3x per Visit",
        "type": "Gambling",
        "effect": "Roll 5 dice as hand. Cunning test determines win type. Can place additional bets. Win = D6 \u00d7 $25 + double Extra Bet."
      },
      {
        "name": "Brimstone Craps",
        "cost": 100,
        "limit": "1x per Visit",
        "type": "Gambling",
        "effect": "Luck 5+ = $100 per success. Fail = lose all."
      },
      {
        "name": "The Devil\u2019s Wheel",
        "cost": 25,
        "limit": "3x per Visit",
        "type": "Gambling",
        "effect": "Mini-game for high risk/reward. D6 \u00d7 $25 bonus for all if Artifact collected."
      }
    ],
    "cashier": {
      "cashInDarkStoneRate": "$50 per shard",
      "robbery": {
        "requirements": "Cunning 6+",
        "reward": "D6\u00d7$100 per success, 1 extra Unwanted Attention per shard",
        "fail": "Jail or death (if not rescued during Hanging High Town Event)"
      }
    },
    "items": [
      {
        "name": "Cheater\u2019s Hold-Out Pistol",
        "cost": 1250,
        "type": "Gear",
        "slot": "Gun",
        "tags": [
          "Pistol",
          "Light"
        ],
        "requirement": "Performer or Showman only",
        "effect": "Free Attack (Once per Fight), Range 4, Shots 1, Crit on 5+, +3 Initiative"
      },
      {
        "name": "Gambler\u2019s Gun",
        "cost": 1400,
        "type": "Gear",
        "slot": "Gun",
        "tags": [
          "Pistol"
        ],
        "requirement": "Performer or Showman only",
        "effect": "Range 7, Shots 2. Once per Turn: Roll D6 for damage; if match, reduce damage to 1"
      },
      {
        "name": "The Devil\u2019s Own",
        "cost": 600,
        "type": "Gear",
        "tags": [
          "Charm",
          "Hell"
        ],
        "restriction": "No Holy or Tribal heroes",
        "effect": "Take D3 Corruption to gain same Grit. Once per Adventure/Town Stay."
      },
      {
        "name": "Dark Stone Poker Chip",
        "cost": 800,
        "darkStone": 1,
        "type": "Gear",
        "tags": [
          "Charm",
          "Dark Stone"
        ],
        "effect": "+1 Luck. Gain +$50 each time you win gold gambling. Limit one."
      }
    ]
  }
};