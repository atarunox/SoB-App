export const TEMPLE = {
  "Temple": {
    "idolRoll": {
      "1": "Massive Warhead",
      "2": "The Great Kraken",
      "3": "Dark Stone Warp Drive",
      "4": "Deactivated MK II Warden",
      "5": "Hall of Bones",
      "6": "Gateway to the Void"
    },
    "mainEventTable": {
      "rollType": "2D6",
      "requiredOnVisit": true,
      "events": {
        "2": "Blood and Sacrifice \u2013 Luck 5+ or roll Injury Table twice.",
        "3": "Heretic! \u2013 Cunning 6+ or Town Stay ends.",
        "4": "Fanatical Followers \u2013 Use Idol Location Event #4.",
        "5": "Join us\u2026 \u2013 Must complete the Idol\u2019s Blessing before continuing.",
        "6-8": "The Smell of Incense \u2013 No Event.",
        "9": "Blessing of the Temple \u2013 Use Idol Location Event #10.",
        "10": "The Idol\u2019s Glory \u2013 Use Idol Location Event #10.",
        "11": "An Offering to the Gods \u2013 Discard token to gain 1 Grit.",
        "12": "Our Savior! \u2013 Artifact + special Idol connection for future bonuses."
      }
    },
    "rituals": {
      "Banishment of Madness": {
        "cost": 250,
        "limit": "1x per Visit",
        "rollResults": {
          "0": "Dead!",
          "1": "Demonic \u2013 not Healed, -1 Max Sanity",
          "2-3": "Failed \u2013 not Healed",
          "4-6+": "Success \u2013 Healed"
        }
      },
      "The Cleansing Torment": {
        "cost": 100,
        "effect": "Remove D6-2 Corruption. If none, take D6 Sanity Damage ignoring Willpower."
      }
    }
  }
};