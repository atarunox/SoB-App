export const GENERAL_STORE = {
  "GeneralStore": {
    "eventTable": {
      "rollType": "2D6",
      "requiredOnVisit": true,
      "events": {
        "2": "Closed \u2013 No Heroes may visit until after the next Adventure.",
        "3": "Robbery \u2013 Pay D6\u00d7$10 or pass Agility 5+ to stop robbery and get $100. Fail = Injury Chart roll.",
        "4-5": "Cost Increase \u2013 All purchase prices +$50. Cancels out 'Fire Sale'.",
        "6-8": "Flies are a\u2019 Buzzing \u2013 No Event.",
        "9-10": "Fire Sale \u2013 All prices \u2013$50 (min $25). Cancels out 'Cost Increase'.",
        "11": "New Items in Stock \u2013 Draw 3 Gear cards. Buy one for listed price or $25.",
        "12": "Artifact for Sale \u2013 Draw a World and Artifact card. Buy for listed price or $100."
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
        "name": "Tonic",
        "cost": 200,
        "type": "Gear",
        "tags": [
          "Tonic",
          "Tokens"
        ],
        "effect": "Gain 1 Tonic Token"
      },
      {
        "name": "Bandages",
        "cost": 50,
        "type": "Gear",
        "tags": [
          "Bandages",
          "Tokens"
        ],
        "effect": "Gain 1 Bandages Token"
      },
      {
        "name": "Dynamite",
        "cost": 200,
        "type": "Gear",
        "tags": [
          "Explosive",
          "Tokens"
        ],
        "effect": "Gain 1 Dynamite Token"
      }
    ],
    "ammo": [
      {
        "name": "Demon Shot",
        "cost": 50,
        "effect": "+1 Damage vs Demon Enemies"
      },
      {
        "name": "Void Shot",
        "cost": 50,
        "effect": "+1 Damage vs Void Enemies"
      },
      {
        "name": "Silver Shot",
        "cost": 50,
        "effect": "+1 Damage vs Beast Enemies"
      },
      {
        "name": "Holy Shot",
        "cost": 50,
        "effect": "+1 Damage vs Undead Enemies"
      }
    ],
    "guns": [
      {
        "name": "Light Pistol",
        "cost": 250,
        "range": 6,
        "shots": 2,
        "notes": "Cannot get Critical Hits"
      },
      {
        "name": "Pistol",
        "cost": 500,
        "range": 6,
        "shots": 2
      },
      {
        "name": "Quickdraw Pistol",
        "cost": 1050,
        "range": 6,
        "shots": 2,
        "effect": "+1 Initiative on first turn"
      },
      {
        "name": "Gunfighter\u2019s Pistol",
        "cost": 2450,
        "range": 7,
        "shots": 3
      },
      {
        "name": "Hold-Out Pistol",
        "cost": 800,
        "range": 3,
        "shots": 1,
        "effect": "Free Attack (Once per Fight), Crit on 5 or 6",
        "requirement": "Performer Only"
      },
      {
        "name": "Shotgun",
        "cost": 1200,
        "range": 5,
        "shots": 1,
        "effect": "Use D8 to hit/damage. 6\u20138 = Crit"
      },
      {
        "name": "Double-Barrel Shotgun",
        "cost": 2800,
        "range": 4,
        "shots": 2,
        "effect": "Use D8 to hit/damage. 6\u20138 = Crit"
      },
      {
        "name": "Hunting Rifle",
        "cost": 1500,
        "range": 12,
        "shots": 1,
        "effect": "Damage +2"
      }
    ],
    "hats": [
      {
        "name": "Rider\u2019s Hat",
        "cost": 350,
        "effect": "+1 Health. Gain Traveler"
      },
      {
        "name": "War Veteran Hat",
        "cost": 550,
        "effect": "+2 Sanity"
      },
      {
        "name": "Scout\u2019s Hat",
        "cost": 600,
        "effect": "+1 Move. Gain Scout"
      },
      {
        "name": "Frontier Hat",
        "cost": 1650,
        "effect": "Reroll 1s on Skill tests in Town. Start with +1 Grit"
      },
      {
        "name": "Cowboy Hat",
        "cost": 5800,
        "effect": "+1 Max Grit. Heal 1 Sanity each turn unless KO'd"
      },
      {
        "name": "White Hat",
        "cost": 6400,
        "effect": "Use 1 Grit to heal 3 Wounds/Sanity (any mix)"
      },
      {
        "name": "Black Hat",
        "cost": 7400,
        "effect": "Take 1 Corruption Hit to Heal 3 Wounds"
      },
      {
        "name": "Legendary Hat",
        "cost": 14500,
        "effect": "Start each Adventure with a free Revive Token"
      }
    ],
    "clothing": [
      {
        "name": "Hair Grease",
        "cost": 50,
        "tags": [
          "Grooming"
        ],
        "effect": "Stay in Town with +1 Grit. Limit 1."
      },
      {
        "name": "Tent",
        "cost": 1200,
        "tags": [
          "Survival"
        ],
        "effect": "+1 on all Camp Site Hazard rolls. Limit 1."
      },
      {
        "name": "Harmonica",
        "cost": 500,
        "tags": [
          "Music"
        ],
        "effect": "Use 1 Grit to heal D3+1 Sanity"
      },
      {
        "name": "Jacket",
        "cost": 400,
        "slot": "Coat",
        "effect": "+1 Health and +1 Sanity"
      },
      {
        "name": "Long Coat",
        "cost": 1500,
        "slot": "Coat",
        "effect": "+4 Health"
      },
      {
        "name": "Duster",
        "cost": 1800,
        "slot": "Coat",
        "effect": "Armor 6+"
      },
      {
        "name": "Poncho",
        "cost": 950,
        "slot": "Shoulders",
        "effect": "+2 Health. Ignore Weather effects",
        "requirement": "Outlaw or Traveler Only"
      }
    ]
  }
};