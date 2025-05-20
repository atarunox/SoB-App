export const MUTANT_QUARTER = {
  "MutantQuarter": {
    "eventTable": {
      "rollType": "2D6",
      "requiredOnVisit": true,
      "events": {
        "2": "Writhing Mass of Flesh \u2013 Lore 6+ to stop destruction. Each 6+ = 20XP. D6 roll for each building: 1\u20132 = destroyed.",
        "3": "\"One of us! One of us!\" \u2013 Strength 6+ or gain D3 Mutations and lose Dark Stone.",
        "4": "Railworkers\u2019 Strike \u2013 All here and 2 other buildings roll D6. 1\u20132 = closed. Escape = D6 Wounds ignoring Defense.",
        "5": "Little Thief \u2013 Agility 5+ or lose 3 Side Bag Tokens or D3 Dark Stone. Pass = gain 20XP.",
        "6": "Street Beggers \u2013 Pay D6\u00d7$10 or gain 1 Grit.",
        "7": "Ricketty Buildings and Deformities Galore \u2013 No Event.",
        "8": "Mutant Saloon \u2013 Gain Tequila Token. $25 to perform = 15XP, D6 roll 3+: +1 Grit, +1 Corruption.",
        "9": "Party in the Streets \u2013 Luck 4+ = Heal D6 Health/Sanity. At least one 6 = +1 Sanity (1x per Stay).",
        "10": "Street Vendor \u2013 Heal D6 Health/Sanity. Gain 25XP. Also get 1 token per Mutation you have.",
        "11": "Preaching the Faith \u2013 Mutant Preacher grants +1 Spirit and removes 2 Corruption Hits until next Adventure.",
        "12": "A Few New Tricks \u2013 Gain D6 \u00d7 25XP. If you have 'Tentacle' or 'Tail' Mutation, gain +1 Extra Use on it."
      }
    },
    "communityActions": {
      "mutantSurgeon": {
        "cost": 50,
        "limit": "Once per Visit",
        "effect": "Remove 1 Mutation. Roll D6 for result.",
        "resultTable": {
          "1-2": "Butchered \u2013 Not healed, lose 1 Health permanently.",
          "3": "Painful Success \u2013 Mutation healed, lose 1 Sanity.",
          "4": "Success, Mostly \u2013 Mutation healed, gain D3 Corruption.",
          "5-6": "Well Done! \u2013 Mutation is Healed."
        }
      },
      "meetRevolutionaries": {
        "cost": "Free",
        "limit": "Once per Town Stay",
        "requirement": "At least 3 Mutations among all Heroes",
        "effect": "May re-draw 1 Daily Event card. Cancel 1 Darkness card next Adventure."
      },
      "visitProphet": {
        "cost": "D6 \u00d7 $10",
        "limit": "Once per Town Stay",
        "effect": "Spirit 5+ test. Each 5+ = 10XP. Once: Heal D6 Health/Sanity. Fail = D6 Horror Hits."
      }
    },
    "items": [
      {
        "name": "Whiskey",
        "cost": 40,
        "type": "Gear",
        "tags": [
          "Whiskey",
          "Tokens"
        ],
        "effect": "Gain 1 Whiskey Token (Limit 2 per Visit)"
      },
      {
        "name": "Bandages",
        "cost": 40,
        "type": "Gear",
        "tags": [
          "Bandages",
          "Tokens"
        ],
        "effect": "Gain 1 Bandages Token (Limit 2 per Visit)"
      },
      {
        "name": "Dynamite",
        "cost": 175,
        "type": "Gear",
        "tags": [
          "Explosive",
          "Tokens"
        ],
        "effect": "Gain 1 Dynamite Token (Limit 2 per Visit)"
      },
      {
        "name": "Hooded Cloak",
        "cost": 450,
        "slot": "Shoulders",
        "effect": "Ignore 2 Unwanted Attention. Once per Fight, re-roll Escape test."
      },
      {
        "name": "Extractor",
        "cost": 600,
        "type": "Gear",
        "tags": [
          "Medical"
        ],
        "effect": "Use 1 Grit, take D6 Wounds to remove D3 Corruption (Limit 1)."
      },
      {
        "name": "Rail Hammer",
        "cost": 1350,
        "type": "Gear",
        "slot": "Hand Weapon",
        "effect": "Add +D6 Damage to one Combat Hit per turn."
      },
      {
        "name": "Void Child Pistol",
        "cost": 1800,
        "type": "Gear",
        "slot": "Gun",
        "tags": [
          "Pistol",
          "Light"
        ],
        "effect": "Free Attack (once per turn). Crit on 4, 5, or 6. Requires 'Child of the Void' Mutation."
      },
      {
        "name": "Brace of Three Pistols",
        "cost": 2100,
        "type": "Gear",
        "slot": "Gun",
        "tags": [
          "Pistol"
        ],
        "effect": "Range 6, Shots 5"
      },
      {
        "name": "Rail Spike Driver",
        "cost": 4800,
        "type": "Gear",
        "slot": "Hand Weapon",
        "effect": "+1 Combat per adjacent enemy. Uses D8 for hit and damage."
      }
    ]
  }
};