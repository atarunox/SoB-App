export const GLADIATOR_ARENA = {
  "GladiatorArena": {
    "eventTable": {
      "rollType": "2D6",
      "requiredOnVisit": true,
      "events": {
        "2": "Warden Raid \u2013 Cunning 6+ or take D8 Wounds. Pass = 15 XP. Arena destroyed for rest of stay.",
        "3": "Pulled From The Crowd \u2013 Must immediately resolve Fight in the Arena.",
        "4": "Wounded Trainer \u2013 All rolls to Train today are \u20131.",
        "5": "Fight in the Stands \u2013 Strength 5+ or take D6 Wounds (ignores Defense).",
        "6": "Low Attendance \u2013 Bet on a Match may only be done once today.",
        "7": "Blood and Sand \u2013 No Event.",
        "8": "Carnage \u2013 During Bet on a Match, if two or more 3s are rolled, all bets are lost. Gain 1 Grit.",
        "9": "Roaring Crowd \u2013 Gain 1 Grit.",
        "10": "Singing and Chanting \u2013 Ignore first Injury during Fight in the Arena today.",
        "11": "Black Smoke and Spinning Wheels \u2013 Roll 3 extra dice in Bet. +$50 per 6. Arena fights lose 1 Skill choice.",
        "12": "Expert Trainer \u2013 +2 to Train with Arena Veteran today."
      }
    },
    "arenaBattles": {
      "betOnMatch": {
        "costRange": "$10\u2013$150",
        "type": "Gambling",
        "limit": "3x per Visit",
        "effect": "Choose to bet on Larger Fighter or Smaller Scrappy One. Roll 5 dice. 4\u20136 = Hits for Larger, 1\u20132 = Hits for Smaller. 3s go to Larger Fighter in a tie. Most Hits wins. Double if Larger wins, triple if Smaller wins."
      },
      "fightInArena": {
        "cost": "Free",
        "limit": "Once per Town Stay",
        "effect": "Choose 3 Skills (Spirit, Agility, Luck, etc). Test each:\n- Skill A (6+): 20 XP, $300\n- Skill B (5+): 20 XP, $300\n- Skill C (5+ with 2 successes): 20 XP, $300\nAll 3 pass: +40 XP and Artifact.\nAll 3 fail: Roll on Injury Table, Hero dies."
      }
    },
    "healingAndTraining": {
      "pitDocSurgery": {
        "cost": 350,
        "limit": "Once per Visit",
        "effect": "Remove 1 Injury. D6 Roll: 1\u20132 = fail, 3 = success with \u20131 Health, 4+ = fully healed"
      },
      "bandages": {
        "cost": 50,
        "type": "Gear",
        "tags": [
          "Bandages",
          "Tokens"
        ],
        "effect": "Gain 1 Bandages Token"
      },
      "tonic": {
        "cost": 200,
        "type": "Gear",
        "tags": [
          "Tonic",
          "Tokens"
        ],
        "effect": "Gain 1 Tonic Token"
      },
      "trainWithVeteran": {
        "cost": 200,
        "limit": "Once per Visit",
        "effect": "Spend Grit (up to max Grit) to roll 2D6 + Grit spent. No re-rolls.\n0\u20133: No Effect\n4\u20135: Gain 25 XP and Recover 1D3 Grit\n6\u201310: 10 XP and next Adventure ignore all Damage from 1 Hit\n11+: Gain New Trick (choose one permanently):\n- Diving Roll: Ignore all Damage from 1 Hit once per Adventure\n- Dirty Trick: Crit removes 1 Defense from target\n- Gladiator\u2019s Reflexes: +2 Initiative first turn"
      }
    }
  }
};