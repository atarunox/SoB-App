export const DESERT_MARKETPLACE = {
  "DesertMarketplace": {
    "eventTable": {
      "rollType": "2D6",
      "requiredOnVisit": true,
      "events": {
        "2": "Alien Assassin \u2013 Luck 6+ or roll on Injury Table (D6\u20131).",
        "3": "Down a Dark Alley \u2013 Choose 1 Item or Token to discard.",
        "4": "Market Chase \u2013 Agility 6+ or take 2D6 Wounds, Location Visit ends. Success = 25 XP.",
        "5": "Street Brawl \u2013 Take D6 Hits and 2 Wounds.",
        "6-8": "Dusty Streets and Dirty Looks \u2013 No Event.",
        "9": "Lucky Find \u2013 Draw World and Artifact card. Buy for $100 + listed Gold.",
        "10": "Starving Refugees \u2013 Discard 1 Token or $100. Recover 1 Grit, remove 1 Corruption.",
        "11": "Tattoo Parlor \u2013 Pay $250 \u00d7 Tattoos. Each grants Grit use (1x/Adventure).",
        "12": "Slave Auction \u2013 Pay D6 \u00d7 $100 to free alien slave. Choose to gain +1 Corruption or use as Ally (Alien keyword)."
      }
    },
    "tokens": [
      {
        "name": "Used Bandages",
        "cost": 75,
        "type": "Gear",
        "tags": [
          "Bandages",
          "Tokens"
        ],
        "effect": "Gain 1 Bandages Token"
      },
      {
        "name": "Scavenger Rot Gut",
        "cost": 75,
        "type": "Gear",
        "tags": [
          "Whiskey",
          "Tokens"
        ],
        "effect": "Gain 1 Whiskey Token"
      },
      {
        "name": "Desert Spice",
        "cost": 100,
        "type": "Gear",
        "tags": [
          "Plant",
          "Tokens"
        ],
        "effect": "Gain 1 Spice Token"
      },
      {
        "name": "The Kraken\u2019s Nectar",
        "cost": 250,
        "type": "Gear",
        "tags": [
          "Nectar",
          "Tokens"
        ],
        "effect": "Gain 1 Nectar Token"
      }
    ],
    "marketBackAlleys": {
      "sellDarkStone": {
        "rate": "$20 per shard",
        "effect": "Roll individually per shard."
      },
      "shadyAlienSaloon": {
        "getDrink": {
          "cost": 10,
          "limit": "Once per Visit",
          "effect": "Heal D6 Sanity and gain 5 XP"
        },
        "alienDancerPerformance": {
          "cost": 20,
          "limit": "Once per Visit",
          "effect": "Lore 5+ to Recover 1 Grit. Fail = +1 Corruption"
        }
      },
      "slotPok": {
        "cost": 25,
        "type": "Gambling",
        "limit": "2x per Visit",
        "effect": "Pick number 1\u20136, roll 3 dice. Each match = $100. All 3 match = Artifact. None = +1 Corruption, pay $25."
      },
      "lanarriDice": {
        "costRange": "$25\u2013$100",
        "type": "Gambling",
        "limit": "3x per Visit",
        "effect": "Choose bet value, roll 2 dice (Desert Suns), 1 (Wanderer). Pick from 5 outcomes. Match = 2x bet. Can chain up to 4 Wanderers for compound bets. Miss = lose wager."
      }
    },
    "gear": [
      {
        "name": "Alien Chew",
        "cost": 50,
        "tags": [
          "Plant"
        ],
        "limit": 1,
        "effect": "Take 1 Corruption to Heal 5 Sanity"
      },
      {
        "name": "Scavenger\u2019s Goggles",
        "cost": 100,
        "slot": "Eyes",
        "effect": "Heal 1 when Scavenge +1 Scrap Token in Blasted Wastes"
      },
      {
        "name": "Wasteland Head Wrap",
        "cost": 400,
        "slot": "Face",
        "effect": "Ignore Corruption Hits from Hold Back the Darkness. +2 Sanity"
      },
      {
        "name": "Water Finder",
        "cost": 875,
        "type": "Tech",
        "effect": "Once per Adventure, heal D8 Wounds to every Hero on your Map Tile"
      }
    ],
    "transports": [
      {
        "name": "Desert Karn\u2019uto",
        "cost": 650,
        "tags": [
          "Animal",
          "Alien"
        ],
        "effect": "Gain 10XP when Travel. Recover 1 Grit once per Travel"
      },
      {
        "name": "Wild Karn\u2019uto",
        "cost": 850,
        "restriction": "Tribal Only",
        "effect": "10XP on Travel. Grit to re-roll Travel Hazard"
      },
      {
        "name": "Rust Cycle",
        "cost": 1850,
        "restriction": "Traveler/Showman Only",
        "tags": [
          "Vehicle",
          "Tech",
          "Rust"
        ],
        "effect": "Draw 3 Travel Hazards, choose 1"
      },
      {
        "name": "Scrap Wagon",
        "cost": 8500,
        "tags": [
          "Vehicle",
          "Tech",
          "Rust"
        ],
        "effect": "Carry 6 Heroes. Gain 15XP, may re-roll Travel Hazard. Draw 1 Random Location when entering Town."
      }
    ]
  }
};