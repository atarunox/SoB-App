export const STREET_MARKET = {
  "StreetMarket": {
    "eventTable": {
      "rollType": "2D6",
      "requiredOnVisit": true,
      "events": {
        "2": "Blood Sacrifice \u2013 Spirit 6+ or gain Madness, roll Madness Chart. Pass = Gain 25XP and D6\u00d7$50.",
        "3": "Swamp Slug Stampede \u2013 Lore 5+ or Strength 5+ or roll Injury Chart. Street Market destroyed.",
        "4": "Held Up \u2013 Pay D6 \u00d7 $100, D6 Dark Stone, or roll 2D6 Initiative. Win = 50XP, else take 2D6 Wounds ignoring Defense.",
        "5": "Market Prices Up \u2013 All items +$50.",
        "6-8": "Hogs and Horse Thieves \u2013 No Event.",
        "9": "Market Prices Down \u2013 All items \u2013$50 (minimum $25).",
        "10": "Fortune Teller \u2013 Choose path of glory or luck. Gain Revive Token or D6\u00d7$100 and 50XP.",
        "11": "Lucky Streak \u2013 All re-rolls may add/subtract 1. Recover 1 Grit.",
        "12": "Rare Deal \u2013 Draw World card and buy Artifact at half price."
      }
    },
    "services": {
      "Bath House": {
        "cost": 50,
        "limit": "Once per Visit",
        "effect": "Heal D6 Health/Sanity, gain 10 XP. Spend 1 Grit to remove Parasites (roll D6 per Parasite)."
      },
      "Street Gambling": {
        "cost": 25,
        "limit": "2x per Visit",
        "type": "Gambling",
        "effect": "Roll 4 dice. Pay for re-rolls. Payout: Straight = $300, 4 of a Kind = $100 \u00d7 number. Else = lose."
      },
      "Sell Dark Stone": {
        "rate": "$20 per shard",
        "effect": "Roll individually per shard."
      }
    },
    "tokens": [
      {
        "name": "Far Eastern Potion",
        "cost": 75,
        "type": "Gear",
        "tags": [
          "Potion",
          "Tokens"
        ],
        "effect": "Gain 1 Potion Token"
      },
      {
        "name": "Rare Spices",
        "cost": 50,
        "type": "Gear",
        "tags": [
          "Plant",
          "Tokens"
        ],
        "effect": "Gain 1 Spice Token"
      },
      {
        "name": "Exotic Herbs",
        "cost": 200,
        "type": "Gear",
        "tags": [
          "Plant",
          "Tokens"
        ],
        "effect": "Gain 1 Exotic Herb Token"
      },
      {
        "name": "Refined Lantern Oil",
        "cost": 200,
        "type": "Gear",
        "tags": [
          "Oil",
          "Tokens"
        ],
        "effect": "Gain 1 Lantern Oil Token"
      }
    ],
    "gear": [
      {
        "name": "Scavenger\u2019s Hat",
        "cost": 150,
        "slot": "Hat",
        "effect": "Heal 1 Wound when you Scavenge."
      },
      {
        "name": "Explorer\u2019s Hat",
        "cost": 425,
        "slot": "Hat",
        "effect": "Look at top 2 Darkness cards, discard one."
      },
      {
        "name": "Badlands Hat",
        "cost": 1200,
        "slot": "Hat",
        "effect": "+2 Health, +1 Sanity."
      },
      {
        "name": "Miner\u2019s Hat",
        "cost": 850,
        "slot": "Hat",
        "effect": "Take Corruption Hit to discard Darkness token."
      },
      {
        "name": "Drifter\u2019s Hat",
        "cost": 3000,
        "slot": "Hat",
        "effect": "Start on Depth Track. Recover to Max Grit."
      },
      {
        "name": "Ornate Pistol",
        "cost": 1600,
        "type": "Gun",
        "slot": "Pistol",
        "range": 7,
        "shots": 2,
        "effect": "+2 Damage (Once per Fight)."
      },
      {
        "name": "Butcher\u2019s Blade",
        "cost": 750,
        "type": "Hand Weapon",
        "slot": "Blade",
        "effect": "+1 Damage for all future Combat Hits after 1st."
      },
      {
        "name": "Red Dragon Injection",
        "cost": 100,
        "type": "Boost",
        "effect": "+1 Initiative, Spirit Armor 5+, +1 Shot. Take D3 Corruption."
      }
    ],
    "horses": [
      {
        "name": "Mutant Horse",
        "cost": 650,
        "effect": "Gain 10XP when you Travel. Spend 1 Grit to add/subtract 1 from Travel roll."
      },
      {
        "name": "Wild Horse",
        "cost": 750,
        "restriction": "Scout Only",
        "effect": "Gain 10XP when you Travel. Once per Town Stay: Re-draw 1 Daily Event card."
      },
      {
        "name": "Trederran Stallion",
        "cost": 800,
        "effect": "+1 to avoid Traveling Hazard."
      },
      {
        "name": "Swamp Slug",
        "cost": 1800,
        "restriction": "Traveler or Tribal Only",
        "effect": "+1 XP when Travel Hazard avoided. Re-roll 1 result."
      }
    ],
    "equipment": [
      {
        "name": "Chew",
        "cost": 50,
        "tags": [
          "Plant"
        ],
        "limit": 1,
        "effect": "Discard to take 1 Corruption Hit and Heal 3 Sanity."
      },
      {
        "name": "Silk Sash",
        "cost": 450,
        "slot": "Belt",
        "restriction": "Showman Only",
        "effect": "Once per Adventure: Heal 5 Wounds."
      },
      {
        "name": "Ornate Case",
        "cost": 1250,
        "type": "Container",
        "effect": "Choose items to carry between Adventures (not in Inventory)."
      },
      {
        "name": "Dark Stone Bracelet",
        "cost": 1000,
        "slot": "Charm",
        "effect": "Cancel Enemy attack once per Adventure (after roll)."
      },
      {
        "name": "Merchant\u2019s Apron",
        "cost": 350,
        "restriction": "Frontier Only",
        "slot": "Apron",
        "effect": "+1 Gear or Artifact on draw. Gain +1 XP on sells."
      },
      {
        "name": "Railworker\u2019s Jacket",
        "cost": 860,
        "slot": "Coat",
        "effect": "+1 Defense vs Explosives and Rubble/Cave-ins."
      }
    ]
  }
};