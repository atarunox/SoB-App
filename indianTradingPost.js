export const INDIAN_TRADING_POST = {
  "IndianTradingPost": {
    "eventTable": {
      "rollType": "2D6",
      "requiredOnVisit": true,
      "events": {
        "2": "Spirits Running Amok \u2013 Darkness marker +3 steps. Each Hero takes 2D6 Hits.",
        "3": "Possessed Shaman \u2013 Lore 6+ to help ritual. Success = recover Grit, 25XP per 6+ rolled. Fail = D6 Horror Hits.",
        "4-5": "Unfriendly Welcome \u2013 All prices +$50 for non-Tribal Heroes.",
        "6-8": "Drumming, Dancing, and a Bonfire \u2013 No Event.",
        "9-10": "Trade Opportunities \u2013 May sell Artifact cards for D6 \u00d7 $25 extra. May sell Dark Stone for $100 each.",
        "11": "Animal Messenger \u2013 Gain Spirit Armor 5+. Ignore Injury/Madness rolls for 1 KO\u2019d event.",
        "12": "One With the Spirits \u2013 Gain Tribal Keyword or +1 Sanity per 4+ rolled on Spirit 4+ test."
      }
    },
    "medicineMan": {
      "spiritCleansing": {
        "cost": "D6 Dark Stone",
        "limit": "Once per Visit",
        "resultTable": {
          "1": "Possessed \u2013 Gain D3 new Mutations.",
          "2-3": "Failed \u2013 Not Healed.",
          "4-5": "Success \u2013 Fully Healed.",
          "6": "Spirit Guide \u2013 Fully Healed, +1 Sanity, +1 with Spirit Guide."
        }
      },
      "visionQuest": {
        "cost": "Free",
        "limit": "Once per Visit",
        "test": "Spirit 5+",
        "effect": "25 XP and Vision Quest bonus based on Spirit Guide (next Adventure).",
        "bonusTable": {
          "1": "Bear \u2013 +1 Side Bag Token (your choice).",
          "2": "Wolf \u2013 Re-roll 1 die on Darkness Event card.",
          "3": "Eagle \u2013 Draw 2 Exploration tokens and choose.",
          "4": "Fox \u2013 Re-roll 2 attack dice.",
          "5": "Snake \u2013 Ignore 1 KO/damage source.",
          "6": "Choose \u2013 Gain any bonus above. No Starting Gear bonus."
        }
      }
    },
    "items": [
      {
        "name": "Indian Hatchet",
        "cost": 750,
        "type": "Gear",
        "slot": "Hand Weapon",
        "tags": [
          "Tribal"
        ],
        "effect": "+1 Damage to Combat Hits"
      },
      {
        "name": "Feathered Hatchet",
        "cost": 2250,
        "type": "Gear",
        "slot": "Hand Weapon",
        "tags": [
          "Tribal"
        ],
        "effect": "+1 Combat, +1 Damage"
      },
      {
        "name": "Throwing Hatchet",
        "cost": 100,
        "type": "Gear",
        "tags": [
          "Tribal",
          "Tokens"
        ],
        "effect": "Gain 1 Hatchet Token"
      }
    ],
    "bows": [
      {
        "name": "Indian Bow",
        "cost": 400,
        "range": 6,
        "shots": 1
      },
      {
        "name": "Scout\u2019s Bow",
        "cost": 1200,
        "range": 8,
        "shots": 1
      },
      {
        "name": "Long Bow",
        "cost": 2400,
        "range": 10,
        "shots": 1
      },
      {
        "name": "War Bow",
        "cost": 3800,
        "range": 6,
        "shots": 3
      },
      {
        "name": "Spirit Bow",
        "cost": 5400,
        "range": 10,
        "shots": "Equal to Spirit"
      }
    ],
    "arrows": [
      {
        "name": "Dark Stone Arrow",
        "cost": 25,
        "effect": "+D3 Damage"
      },
      {
        "name": "Hunting Arrow",
        "cost": 25,
        "effect": "+3 Damage vs Beast"
      },
      {
        "name": "Spirit Arrow",
        "cost": 25,
        "effect": "+3 Damage vs Void"
      },
      {
        "name": "Blessed Arrow",
        "cost": 50,
        "effect": "+3 Damage vs Demon"
      },
      {
        "name": "Eagle Feather Arrow",
        "cost": 100,
        "effect": "Crit = +2 Shots with the Bow"
      },
      {
        "name": "Blood Arrow",
        "cost": 150,
        "effect": "Ignores Cover and Tough"
      }
    ],
    "glyphs": [
      {
        "name": "Glyph of the Buffalo",
        "cost": 200,
        "darkStone": 2,
        "type": "Upgrade",
        "tags": [
          "Rune",
          "Tribal"
        ],
        "effect": "Move through enemies until end of turn. Auto-pass Escape tests."
      },
      {
        "name": "War Glyph",
        "cost": 500,
        "darkStone": 5,
        "type": "Upgrade",
        "tags": [
          "Rune",
          "Tribal"
        ],
        "effect": "+2 Combat once per Adventure."
      },
      {
        "name": "Death Glyph",
        "cost": 1000,
        "darkStone": 6,
        "type": "Upgrade",
        "tags": [
          "Rune",
          "Tribal"
        ],
        "effect": "On KO, D6: Heal up to 5 or be KO'd. 6 = Glyph destroyed."
      }
    ],
    "gear": [
      {
        "name": "Snake Skin Belt",
        "cost": 650,
        "slot": "Belt",
        "effect": "Transfer a single Enemy Hit to adjacent model (once per Adventure)"
      },
      {
        "name": "Cavalry Jacket",
        "cost": 2750,
        "slot": "Coat",
        "effect": "Recover 1 Grit on Move roll of 6"
      },
      {
        "name": "Scout Bag",
        "cost": 2000,
        "type": "Container",
        "effect": "Carry +1 weight of gear. Not Equippable from inside."
      },
      {
        "name": "Medicine Bag",
        "cost": 3200,
        "type": "Medical",
        "tags": [
          "Tribal"
        ],
        "effect": "Heal 3D6 Health/Sanity split across self or adjacent Heroes."
      }
    ]
  }
};