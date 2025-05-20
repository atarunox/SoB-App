export const FRONTIER_OUTPOST = {
  "FrontierOutpost": {
    "eventTable": {
      "rollType": "2D6",
      "requiredOnVisit": true,
      "events": {
        "2": "Mad with Power \u2013 Train with Soldiers unavailable. Each Hero must make Agility 5+ or Cunning 5+ or pay D6\u00d7$50 or leave Town.",
        "3": "Dark Stone Explosion \u2013 Strength 5+ or lose all Dark Stone and take D6 Wounds. Outpost destroyed if failed.",
        "4": "Ambushed Caravan \u2013 All Town/Camp Site Hazard rolls are -1 for this Town Stay.",
        "5": "Dark Stone Glut \u2013 Sell rate at Outpost Bank drops to D6\u00d7$10 per shard.",
        "6": "Hanging \u2013 Lose 1 Grit from shock of public hanging.",
        "7": "Trading Post \u2013 Draw World Card. Buy the Artifact for D6\u00d7$150.",
        "8": "The Banners Yet Wave \u2013 Gain 1 Grit and heal all Health and Sanity.",
        "9": "Dark Stone Shortage \u2013 Sell Dark Stone for D6\u00d7$50 per shard.",
        "10": "The Sound of Bugles \u2013 Skip next Town Event.",
        "11": "War Stories \u2013 Re-roll 1 Damage roll in next Adventure.",
        "12": "Deputized \u2013 Gain Law or replace Outlaw keyword with Law."
      }
    },
    "bank": {
      "sellDarkStoneRate": "D6 \u00d7 $25",
      "notes": "Roll individually for each shard"
    },
    "bounties": {
      "rollType": "D6",
      "limit": "Once per Town Stay",
      "rewardTable": {
        "1": "No Bounty",
        "2": "Tentacles \u2013 $10/kill",
        "3": "HellBats \u2013 $25/kill",
        "4": "Stranglers \u2013 $50/kill",
        "5": "Night Terrors \u2013 $150/kill",
        "6": "Slashers \u2013 $200/kill"
      }
    },
    "training": {
      "cost": 500,
      "limit": "Once per Town Stay",
      "reward": "Gain D6\u00d725 XP"
    },
    "items": [
      {
        "name": "Pick Axe",
        "cost": 900,
        "type": "Gear",
        "slot": "Hand Weapon",
        "effect": "+1 Combat. Gain 1 extra Dark Stone when found."
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
      },
      {
        "name": "Jar of HellBat Ichor",
        "cost": 200,
        "type": "Gear",
        "tags": [
          "Glass",
          "Void"
        ],
        "effect": "+1 Initiative for all Heroes, auto Escape until end of turn"
      },
      {
        "name": "Hunting Knife",
        "cost": 400,
        "type": "Gear",
        "slot": "Hand Weapon",
        "tags": [
          "Blade"
        ],
        "effect": "+1 Combat"
      },
      {
        "name": "Indian Hatchet",
        "cost": 750,
        "type": "Gear",
        "slot": "Hand Weapon",
        "tags": [
          "Tribal"
        ],
        "effect": "Combat Hits are +1 Damage"
      },
      {
        "name": "Cavalry Sabre",
        "cost": 1800,
        "type": "Gear",
        "slot": "Hand Weapon",
        "tags": [
          "Blade"
        ],
        "effect": "Melee and Ranged Attack usable in same activation"
      },
      {
        "name": "Military Gloves",
        "cost": 1650,
        "type": "Gear",
        "slot": "Gloves",
        "effect": "Your Critical Hits are +1 Damage"
      },
      {
        "name": "Desert Boots",
        "cost": 2100,
        "type": "Gear",
        "slot": "Boots",
        "effect": "Free Attack (Once per Fight), uses Peril Die for damage"
      },
      {
        "name": "Tribal Knife",
        "cost": 1200,
        "type": "Gear",
        "slot": "Hand Weapon",
        "tags": [
          "Tribal",
          "Blade"
        ],
        "effect": "+1 Combat. Heal 1 Sanity when you kill an Enemy."
      },
      {
        "name": "Splitter",
        "cost": 5650,
        "type": "Gear",
        "slot": "Hand Weapon",
        "effect": "+2 Combat. Uses the D8 for damage."
      }
    ]
  }
};