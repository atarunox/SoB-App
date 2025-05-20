export const SCAVENGER_DOC = {
  "ScavengerDoc": {
    "eventTable": {
      "rollType": "2D6",
      "requiredOnVisit": true,
      "events": {
        "2": "Vile Experiments \u2013 Strength 6+ or roll on Injury Table. Pass = 25 XP. Fail = Doc is closed.",
        "3": "No Understanding of Human Anatomy \u2013 Surgery unavailable this visit.",
        "4": "Alien Virus \u2013 Luck 5+ or \u20133 Health and \u20131 Max Grit next Adventure.",
        "5": "Rusty Tools \u2013 Surgery rolls are \u20131. Leech rolls of 1\u20132 = D6 Wounds.",
        "6-8": "Screams of Pain \u2013 No Event.",
        "9": "An Actual Doctor \u2013 Surgery rolls are +1.",
        "10": "Dying Patient \u2013 Draw Mine Artifact and get free Surgery.",
        "11": "Alien Technology \u2013 Heal one Injury or Mutation.",
        "12": "Research Library \u2013 Gain 1 Fungus or Alien Research marker"
      }
    },
    "healing": {
      "scavengerSurgery": {
        "cost": 250,
        "limit": "1x per Visit",
        "effect": "Roll D6:\n1 = Dead!\n2 = Painful\n3 = Butchering (\u20131 Health)\n4\u20135 = Failed\n6+ = Success (Parasite gets +1)"
      },
      "xantherLeech": {
        "cost": "$50 per leech",
        "limit": "Once per Town Stay",
        "effect": "Roll 1D6 per leech. 5\u20136 = remove 1 Corruption. 1\u20132 = D6 Wounds."
      }
    },
    "medicalSupplies": [
      {
        "name": "Alien Bandages",
        "cost": 75,
        "tags": [
          "Bandages",
          "Tokens"
        ],
        "effect": "Gain 1 Bandages Token"
      },
      {
        "name": "Scavenger Rot Gut",
        "cost": 75,
        "tags": [
          "Whiskey",
          "Tokens"
        ],
        "effect": "Gain 1 Whiskey Token"
      },
      {
        "name": "Wasteland Tonic",
        "cost": 200,
        "tags": [
          "Tonic",
          "Tokens"
        ],
        "effect": "Gain 1 Tonic Token"
      },
      {
        "name": "Self-Sealing Stim Patch",
        "cost": 225,
        "tags": [
          "Medical"
        ],
        "limit": 2,
        "effect": "Ignore 1 Injury until next Adventure"
      },
      {
        "name": "Cut Scrubber",
        "cost": 350,
        "tags": [
          "Medical"
        ],
        "effect": "Remove 1 Parasite on 3+"
      },
      {
        "name": "Filter Mask",
        "cost": 125,
        "slot": "Face",
        "effect": "Prevent Poison on 4+"
      },
      {
        "name": "Specimen Basket",
        "cost": 200,
        "tags": [
          "Alien",
          "Science"
        ],
        "effect": "Collect specimen (Lore 5+) to sell for D6\u00d7$200"
      }
    ],
    "weapon": {
      "Loodus Saw": {
        "cost": 1350,
        "slot": "Hand Weapon",
        "effect": "+1 Damage vs Large. +1 Wound per Hit vs Endurance enemies"
      }
    },
    "research": {
      "requirement": "Medical or Cunning 4+",
      "fungus": {
        "type": "Free",
        "limit": "Once per Town Stay",
        "effect": "Cunning 5+ to gain 10 XP and 1 Fungus Research marker. Multiple markers grant:\n- 1 Marker: Reroll D6 on Fungus token use (on 6 keep it)\n- 2+ Markers: Reroll on 5\u20136"
      },
      "alien": {
        "type": "Free",
        "limit": "Once per Town Stay",
        "effect": "Cunning 6+ to gain 25 XP and 1 Alien Research marker. Multiple markers grant:\n- 1 Marker: +1 Lore in Blasted Wastes\n- 3+ Markers: +1 Damage to Alien enemies"
      }
    }
  }
};