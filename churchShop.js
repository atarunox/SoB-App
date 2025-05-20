export const CHURCH_SHOP = {
  "Church": {
    "eventTable": {
      "rollType": "2D6",
      "requiredOnVisit": true,
      "events": {
        "2": "Cult Worshippers \u2013 Make a Strength 6+ test. If passed, draw a Mine Artifact card. If failed, lose an Artifact to theft. Church is closed until after next Adventure.",
        "3": "Possession \u2013 Take D6 Horror Hits and lose all Sanity permanently.",
        "4-5": "Dark Stone Altar \u2013 All Rituals require +1 Dark Stone.",
        "6-8": "Faith to the Forsaken \u2013 No event.",
        "9-10": "A Gift of Blessing \u2013 Choose any Blessed Aura to gain for free.",
        "11": "Protective Shield \u2013 Cancel one Darkness or Growing Dread card next Adventure.",
        "12": "Divine Fortitude \u2013 Gain D3 Sanity."
      }
    },
    "rituals": [
      {
        "name": "Exorcism of Madness",
        "cost": "D6 x $50",
        "type": "Ritual",
        "limit": "One Exorcism attempt per Madness",
        "resultTable": {
          "1": "Dead!",
          "2": "Too Far Gone",
          "3": "Failed",
          "4-5": "Success!",
          "6+": "Mental Resolve"
        }
      },
      {
        "name": "Banish Corruption",
        "cost": 100,
        "type": "Ritual",
        "effect": "Remove D6\u20132 Corruption or take D6 Sanity Damage (ignores Willpower)."
      },
      {
        "name": "Resurrection",
        "cost": "$500 \u00d7 Hero Level",
        "type": "Ritual",
        "effect": "Revive a dead Hero (returns with \u20131 Max Grit, min 1)."
      }
    ],
    "blessedAuras": [
      {
        "name": "Aura of Endurance",
        "cost": 200,
        "effect": "Armor 5+",
        "test": "Spirit 4+",
        "type": "Shield"
      },
      {
        "name": "Aura of Wrath",
        "cost": 100,
        "effect": "+D6 Damage to one Hit",
        "test": "Spirit 4+"
      },
      {
        "name": "Aura of Fortitude",
        "cost": 150,
        "effect": "Spirit Armor 5+",
        "test": "Spirit 4+",
        "type": "Shield"
      },
      {
        "name": "Aura of Protection",
        "cost": 250,
        "effect": "Armor 6+ / Spirit Armor 6+",
        "test": "Spirit 4+",
        "type": "Shield"
      }
    ],
    "items": [
      {
        "name": "Vial of Brimstone Ash",
        "cost": 250,
        "type": "Gear",
        "tags": [
          "Void"
        ],
        "effect": "Free Attack \u2013 1 Wound to all adjacent enemies, ignores Defense."
      },
      {
        "name": "Conversion",
        "cost": 500,
        "type": "Holy",
        "effect": "+1 Spirit and Holy keyword. Roll a D6 each Saloon visit. On 1\u20132, lose bonus.",
        "note": "Not available to Holy Heroes."
      }
    ],
    "sacredOrder": {
      "note": "Holy Heroes Only",
      "items": [
        {
          "name": "Holy Robes",
          "cost": 600,
          "type": "Clothing",
          "slot": "Coat",
          "tags": [
            "Holy"
          ],
          "effect": "+3 Health"
        },
        {
          "name": "Holy Book",
          "cost": 800,
          "type": "Gear",
          "tags": [
            "Book",
            "Holy",
            "Icon"
          ],
          "effect": "+1 Combat",
          "limit": "One"
        },
        {
          "name": "Book of Armageddon",
          "cost": 5600,
          "type": "Gear",
          "tags": [
            "Book",
            "Holy",
            "Icon"
          ],
          "effect": "+2 Combat. +1 to Faith Rolls. Doubles cause Corruption."
        },
        {
          "name": "Cross of Vengeance",
          "cost": 2350,
          "type": "Gear",
          "slot": "Hand Weapon",
          "tags": [
            "Holy"
          ],
          "effect": "+2 Damage when below Half Health. Combat Hits = +1 Damage."
        },
        {
          "name": "Scroll of Protection",
          "cost": 400,
          "type": "Gear",
          "tags": [
            "Holy",
            "Scroll"
          ],
          "effect": "Discard to cancel a Darkness card on a 3+."
        },
        {
          "name": "Icon of Resistance",
          "cost": 1400,
          "type": "Gear",
          "tags": [
            "Holy",
            "Icon"
          ],
          "effect": "Re-roll one Defense roll per turn."
        },
        {
          "name": "Censer of Illumination",
          "cost": 3200,
          "type": "Gear",
          "tags": [
            "Light",
            "Holy"
          ],
          "effect": "Pass 1 Faith Roll per Sermon automatically (limit one)."
        }
      ]
    }
  }
};