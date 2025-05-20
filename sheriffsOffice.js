export const SHERIFFS_OFFICE = {
  "SheriffsOffice": {
    "eventTable": {
      "rollType": "2D6",
      "requiredOnVisit": true,
      "restriction": "Outlaws may not visit, except to pay off Warrants",
      "events": {
        "2": "Jailbreak \u2013 All Heroes roll for Town Event. Their next Adventure begins with 1 less Grit.",
        "3": "Corrupt Sheriff \u2013 Spirit 5+ to challenge him. Win = 50 XP and $50. Fail = Injury Chart. All in Town = Wanted.",
        "4": "Insane Ramblings \u2013 All take 2D6 Horror Hits. Doubles = Town Event marker +2.",
        "5-8": "Cold, Hard Justice \u2013 No Event.",
        "9-10": "Telegraph \u2013 Recover 1 Grit and Heal D6 Health/Sanity (any mix).",
        "11": "\"We need Six Men!\" \u2013 All non-Law/Holy may become Deputized. Join Manhunt = double XP and Gold earned.",
        "12": "Legendary Outlaw \u2013 Lore 6+ to escort a prisoner and earn D8 \u00d7 $100."
      }
    },
    "bounties": {
      "sheriffsBounty": {
        "cost": "Free",
        "limit": "Once per Town Stay",
        "effect": "Draw Low Threat to assign bounty. Heroes earn gold per XP value when killing enemies."
      },
      "payOffWarrants": {
        "cost": "Variable",
        "effect": "$300 \u00d7 Hero Level and discard Wanted card. Infamous = $500 \u00d7 Hero Level.",
        "note": "Additional $200 \u00d7 Level if Wanted status was earned from ability. Removes all Wanted statuses."
      }
    },
    "items": [
      {
        "name": "Caped Overcoat",
        "cost": 800,
        "slot": "Coat",
        "effect": "Heal D6 Health/Sanity when finding a Clue"
      },
      {
        "name": "Black Duster",
        "cost": 1650,
        "slot": "Coat",
        "restriction": "Traveler Only",
        "effect": "+2 Health, Armor 6+"
      },
      {
        "name": "Hangman's Noose",
        "cost": 2250,
        "slot": "Belt",
        "restriction": "Frontier or Law Only",
        "effect": "Free Attack. Deal D6 Wounds ignoring Defense."
      },
      {
        "name": "Duelist's Gunbelt",
        "cost": 5800,
        "slot": "Belt",
        "effect": "Each Gun gets +1 Shot when Dual Wielding."
      },
      {
        "name": "Executioner Shotgun",
        "cost": 2400,
        "type": "Gun",
        "slot": "Shotgun",
        "range": 3,
        "shots": 3,
        "effect": "D8 To Hit/Damage. +1 Damage if adjacent."
      }
    ],
    "lawGear": [
      {
        "name": "Marshal/Sheriff Badge",
        "cost": 0,
        "tags": [
          "Law",
          "Icon"
        ],
        "effect": "+2 Shots with chosen Gun once per Adventure."
      },
      {
        "name": "Bounty Hunter\u2019s Badge",
        "cost": 850,
        "effect": "Gain Traveler. All gain 1 Grit when you recover a Bounty."
      },
      {
        "name": "Deputy Badge",
        "cost": 1200,
        "effect": "+50 XP when you end an Adventure. Heal D6 Health/Sanity."
      },
      {
        "name": "Executioner\u2019s Badge",
        "cost": 2400,
        "effect": "+3 Damage to each of your Hits once per Adventure."
      },
      {
        "name": "Peacekeeper Pistol",
        "cost": 1000,
        "type": "Gun",
        "slot": "Pistol",
        "range": 6,
        "shots": 3
      },
      {
        "name": "The Punisher",
        "cost": 3000,
        "type": "Gun",
        "slot": "Shotgun",
        "range": 6,
        "shots": 2,
        "effect": "D8 To Hit. Re-roll 1 Damage die per turn."
      }
    ],
    "actions": [
      {
        "name": "Interrogate Prisoner",
        "cost": 50,
        "limit": "Once per Town Stay",
        "effect": "Roll die equal to Strength or Cunning. 6 = re-roll token/card. 1 = Darkness moves 1 space forward."
      },
      {
        "name": "Become Deputized",
        "cost": "50 XP",
        "restriction": "Not Law or Holy",
        "effect": "Gain +1 Cunning and Law keyword. Roll D6 at end of Adventure. 1\u20133 = lose bonus."
      },
      {
        "name": "Join a Manhunt",
        "cost": "Free",
        "restriction": "Law Heroes Only",
        "effect": "Cunning 5+ = track outlaw. 6 = track leader. Initiative fight. Earn XP, Gold, + Gear card if successful."
      },
      {
        "name": "Escort Prisoner",
        "cost": "Free",
        "restriction": "Law Heroes Only",
        "effect": "Lore 5+ = $100 \u00d7 D8. Fail = Escape. Gain bonus XP. Skip Travel Hazard Chart on roll of 6."
      }
    ],
    "wantedPoster": {
      "cost": 100,
      "type": "Gear",
      "tags": [
        "Poster"
      ],
      "limit": 1,
      "effect": "Discard to gain D6 \u00d7 $50 (Outlaw), D6 \u00d7 $100 (Infamous), or D6 \u00d7 $250 (Legendary Outlaw in posse)"
    }
  }
};