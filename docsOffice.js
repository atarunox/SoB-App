export const DOCS_OFFICE = {
  "DocsOffice": {
    "eventTable": {
      "rollType": "2D6",
      "requiredOnVisit": true,
      "events": {
        "2": "The \u2018Good\u2019 Doctor \u2013 No Medical Attention until after the next Adventure.",
        "3": "Plague Tent \u2013 Make a Luck 5+ test or gain D3 Corruption and Max Grit 1 next Adventure.",
        "4-5": "Dirty Tools \u2013 Surgery rolls today are at -1 (min 0).",
        "6-8": "The Smell of Death \u2013 No event.",
        "9-10": "Expert Surgeon \u2013 Surgery rolls today are at +1.",
        "11": "Special Mission \u2013 Receive a free Specimen Jar, usable in Other Worlds.",
        "12": "Medical Miracle \u2013 Roll a D6 for all Injuries/Mutations/Parasites. On 3+, remove it. On 1, gain Corruption."
      }
    },
    "medicalAttention": [
      {
        "name": "Surgery",
        "cost": "D6 \u00d7 $50",
        "limit": "One attempt per Injury/Mutation",
        "resultTable": {
          "0": "Dead!",
          "1": "Botched \u2013 Cannot be healed through Surgery.",
          "2-3": "Failed \u2013 Not Healed.",
          "4-5": "Success! \u2013 Healed.",
          "6+": "Impressive Scar \u2013 Healed, +2 Health."
        }
      },
      {
        "name": "Treat Corruption",
        "cost": 100,
        "note": "Roll a D6. On 1\u20133, take D6 Wounds (ignores Defense).",
        "effect": "Remove 1 Corruption point"
      }
    ],
    "items": [
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
        "name": "Healing Herbs",
        "cost": 125,
        "type": "Gear",
        "tags": [
          "Plant",
          "Tokens"
        ],
        "effect": "Gain 1 Herbs Token"
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
        "name": "Specimen Jar",
        "cost": 150,
        "type": "Gear",
        "tags": [
          "Glass",
          "Science"
        ],
        "effect": "In Other Worlds, make Cunning 5+ to fill. Sell to Doc for D6\u00d7$100. Limit One."
      },
      {
        "name": "Bone Saw",
        "cost": 1100,
        "type": "Gear",
        "slot": "Hand Weapon",
        "effect": "Use 1 Grit to reduce Defense of target permanently (non-Tough only)"
      },
      {
        "name": "Tools of Science",
        "cost": 4800,
        "type": "Gear",
        "slot": "Hand Weapon",
        "tags": [
          "Science"
        ],
        "effect": "Your base Combat = Cunning"
      },
      {
        "name": "Field Surgeon\u2019s Apron",
        "cost": 925,
        "type": "Gear",
        "slot": "Torso",
        "effect": "+1 Sanity per kill"
      }
    ],
    "injections": [
      {
        "name": "Anti-Venom Injection",
        "cost": 10,
        "type": "Boost",
        "tags": [
          "Injection"
        ],
        "effect": "Immune to Poison and Venom for next Adventure. Limit one."
      },
      {
        "name": "Void Vapor Injection",
        "cost": 500,
        "type": "Boost",
        "tags": [
          "Injection",
          "Void"
        ],
        "effect": "+1 Max Grit, start Adventure with Max Grit. Gain 1 Corruption. Limit one."
      },
      {
        "name": "Sycorrath Injection",
        "cost": 250,
        "type": "Boost",
        "tags": [
          "Injection"
        ],
        "effect": "+1 Initiative and +1 Move for next Adventure. Gain 1 Corruption. Following Adventure: \u20131 Initiative."
      },
      {
        "name": "Dark Stone Injection",
        "cost": 100,
        "type": "Boost",
        "tags": [
          "Injection",
          "Dark Stone"
        ],
        "effect": "Re-roll 1 failed Willpower roll to avoid Corruption. Limit one."
      }
    ]
  }
};