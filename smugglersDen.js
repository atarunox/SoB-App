export const SMUGGLERS_DEN = {
  "SmugglersDen": {
    "eventTable": {
      "rollType": "2D6",
      "requiredOnVisit": true,
      "restriction": "Law Heroes may not visit",
      "events": {
        "2": "He Arrived in Town Just Before You Did \u2013 Outlaws: High Noon Duel. Others: pay D6\u00d7$100 or become Wanted.",
        "3": "\"It\u2019s a Raid!\" \u2013 Make Agility 6+ test or become Wanted. Fail = roll on Hanging High chart.",
        "4-5": "\"What\u2019chu Lookin\u2019 at, Boy?\" \u2013 Lose 1 Grit or pay 1 Grit to enter.",
        "6-8": "Drunken Debauchery and Veiled Threats \u2013 No Event.",
        "9-10": "A Big Haul \u2013 Roll for extra Black Market items.",
        "11": "Honor Among Thieves \u2013 Gain D6\u00d7$25 and 10 XP. Outlaws recover 1 Grit or to Max Grit if Wanted.",
        "12": "One Last Job \u2013 Ride/train heist. Cunning 5+, Agility 6+ to succeed. Reward = money. Fail = become Wanted."
      }
    },
    "services": {
      "Back Alley Doc": {
        "cost": 25,
        "limit": "Once per Visit",
        "effect": "Roll D6 to remove Injury or Mutation.",
        "results": {
          "1": "Dead!",
          "2-3": "Failed \u2013 Not healed. Lose 1 Health permanently.",
          "4": "Success, Sort Of \u2013 Healed, lose 1 Sanity.",
          "5-6": "Well Done \u2013 Fully healed."
        }
      },
      "Black Market Goods": {
        "limit": "Once per Town Stay",
        "effect": "Roll 3 dice. For each 0\u20133 = Gear Card, 4\u20135 = World Card, 6 = Artifact.",
        "cost": "D6\u00d7$25 + printed value (min $50 per item)",
        "note": "Heroes may only buy 1 item each. If tied, higher Luck buys first."
      }
    },
    "items": [
      {
        "name": "Inferno Shot",
        "cost": 100,
        "type": "Ammo",
        "effect": "+1 Damage on Crit (Shotgun only)"
      },
      {
        "name": "Blood Rounds",
        "cost": 200,
        "type": "Ammo",
        "effect": "+1 Shot on Crit (Gun only)"
      },
      {
        "name": "Hell Bullets",
        "cost": 250,
        "type": "Ammo",
        "effect": "All To Hit rolls = Crits, gain 1 Corruption"
      },
      {
        "name": "Tequila",
        "cost": 125,
        "type": "Gear",
        "tags": [
          "Tequila",
          "Tokens"
        ],
        "effect": "Gain 1 Tequila Token"
      },
      {
        "name": "Smuggler\u2019s Hold-Out Pistol",
        "cost": 3000,
        "type": "Gun",
        "tags": [
          "Pistol",
          "Light"
        ],
        "slot": "Gun",
        "effect": "Free Attack. Crit on 5 or 6. Range 3, Shots 3. Performer/Outlaw/Showman Only"
      },
      {
        "name": "Buy a Round of Shots",
        "cost": "D6 \u00d7 $5",
        "effect": "All Heroes at table gain 1 Grit, take D3 Wounds (ignores Defense)"
      },
      {
        "name": "Down a Dark Road",
        "cost": 500,
        "restriction": "Outlaw Only",
        "effect": "Gain +1 Luck and Outlaw keyword. Roll D6 at Church/Church Den: 1\u20132 = lose bonus."
      }
    ],
    "outlawGear": {
      "restriction": "Outlaw Heroes Only",
      "items": [
        {
          "name": "Outlaw Pistol",
          "cost": 300,
          "type": "Gun",
          "slot": "Pistol",
          "range": 5,
          "shots": 3,
          "effect": "Crit only vs adjacent targets"
        },
        {
          "name": "Sawed-Off Shotgun",
          "cost": 850,
          "type": "Gun",
          "slot": "Shotgun",
          "range": 3,
          "shots": 1,
          "effect": "Splash Damage on Crit, +1 Wound to all adjacent"
        },
        {
          "name": "Bandana",
          "cost": 100,
          "slot": "Face",
          "effect": "Once per turn, re-roll Escape test"
        },
        {
          "name": "Shaped Charge",
          "cost": 325,
          "type": "Gear",
          "tags": [
            "Explosive"
          ],
          "effect": "Discard for Free Attack vs adjacent enemy. Crit on 4+, deal 2D6 damage"
        },
        {
          "name": "Black Gunbelt",
          "cost": 600,
          "slot": "Belt",
          "effect": "Once per Adventure, gain +2 Shots with a Gun"
        },
        {
          "name": "Gunman\u2019s Poncho",
          "cost": 750,
          "slot": "Shoulders",
          "effect": "+1 Initiative in first turn. Ignore Weather effects"
        }
      ]
    },
    "outlawActions": [
      {
        "name": "Join a Bank Heist",
        "cost": "Free",
        "limit": "Once per Town Stay",
        "effect": "Cunning 5+. Success = D6 \u00d7 $50 per roll. Fail = Wanted, possibly dead. Gain XP."
      },
      {
        "name": "Rustle Cattle",
        "cost": "Take 1 Corruption Hit",
        "limit": "Once per Town Stay",
        "effect": "Agility 5+. Gain D6 \u00d7 $50 and XP. +2 Agility if have Transport. Fail = wounded."
      },
      {
        "name": "Shady Contacts",
        "cost": "Free",
        "limit": "Once per Town Stay",
        "effect": "Look at top D6\u20132 Daily Event cards. Reorder top deck. Gain 10XP."
      }
    ]
  }
};