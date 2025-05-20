export const MINING_OPERATION = {
  "MiningOperation": {
    "eventTable": {
      "rollType": "2D6",
      "requiredOnVisit": true,
      "events": {
        "2": "Refinery Explosion \u2013 Mining Operation destroyed. D6 roll for adjacent locations. 1-2 = destroyed. 2D6 Wounds to Heroes there.",
        "3": "Mining Accident \u2013 All Heroes take D6 Corruption Hits. May not Work the Mines today.",
        "4": "Fungus Revolt \u2013 All Heroes take D6 Hits. May not Work the Fungus Farms.",
        "5-6": "The Dark Beneath the Surface \u2013 Move Darkness marker forward 1 day.",
        "7": "Toxic Fumes and a Cavern of Spores \u2013 No Event.",
        "8-9": "Worker Shortage \u2013 +$100 for any Work Down in the Tunnels today.",
        "10": "Good Harvest \u2013 Fungus Crops are \u2013$25 each.",
        "11": "Buried Town \u2013 Draw 2 Gear + 2 Artifact cards. May buy at list price +$100. Use Lore to break ties.",
        "12": "Astounding Discovery \u2013 Draw Artifact from Derelict Ship. If not available, draw World + Artifact."
      }
    },
    "gear": {
      "Pick Axe": {
        "cost": 900,
        "type": "Gear",
        "slot": "Hand Weapon",
        "effect": "+1 Combat. Find +1 Dark Stone when discovered."
      },
      "Blast Charges": {
        "cost": 200,
        "type": "Gear",
        "tags": [
          "Explosive",
          "Tokens"
        ],
        "effect": "Gain 1 Dynamite Token"
      }
    },
    "excavationEquipment": [
      {
        "name": "Flash Powder",
        "cost": 75,
        "type": "Gear",
        "tags": [
          "Flash",
          "Tokens"
        ],
        "effect": "Gain 1 Flash Token"
      },
      {
        "name": "Laser Drill",
        "cost": 2250,
        "type": "Gear",
        "slot": "Hand Weapon",
        "effect": "+1 Combat. Use D8 To Hit and Damage. Draw 1 extra Scavenge card."
      },
      {
        "name": "Scrap Thrower",
        "cost": 3200,
        "type": "Gear",
        "slot": "Rifle",
        "range": 10,
        "shots": 2,
        "effect": "2 Damage. Requires Scrap Token per shot. Adjacent enemies take D6\u20131 Damage."
      },
      {
        "name": "Buy from the Scrap Heap",
        "cost": 200,
        "effect": "Gain D3 Scrap Tokens"
      }
    ],
    "fungusCrops": [
      {
        "name": "Fin Plates",
        "cost": 225,
        "limit": 5,
        "effect": "Heal D6 Wounds and Recover 1 Grit"
      },
      {
        "name": "Bauldo Stems",
        "cost": 150,
        "limit": 5,
        "effect": "Remove all Status Effects"
      },
      {
        "name": "Sevorri Crumble",
        "cost": 250,
        "limit": 1,
        "effect": "+5 Health, +1 Strength, +1 Move for Adventure"
      },
      {
        "name": "Ve\u2019ta Shrooms",
        "cost": 250,
        "limit": 1,
        "effect": "+5 Sanity, +1 Spirit, +2 Initiative for Adventure"
      }
    ],
    "containers": [
      {
        "name": "Scrap Sack",
        "cost": 500,
        "type": "Gear",
        "slot": "Container",
        "limit": 1,
        "requirement": "Strength 3+",
        "effect": "Holds 25 Scrap Tokens (Hidden, 0 Weight)"
      }
    ],
    "tunnelWork": {
      "refinery": {
        "cost": "1 Grit",
        "effect": "Take D3 Corruption Hits. Gain D6 \u00d7 $100. Flash Powder costs $25 less today."
      },
      "fungusFarms": {
        "cost": "1 Grit",
        "effect": "Gain D6 \u00d7 $25. All Fungus purchased today cost $25 less."
      },
      "mines": {
        "cost": "1 Grit",
        "effect": "Take D6 Hits, gain $50, then roll D6:\n1: Buried Hulk \u2013 Random Town location destroyed\n2: Cave In \u2013 D6 Wounds\n3: Scrap Pocket \u2013 D3+1 Scrap Tokens\n4: Lost Tech \u2013 D3 Tech Tokens\n5: Buried Escape Pod \u2013 D3 Wasteland Loot cards\n6: What\u2019s This? \u2013 Draw World + Artifact card"
      }
    }
  }
};