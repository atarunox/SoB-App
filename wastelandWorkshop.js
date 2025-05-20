export const WASTELAND_WORKSHOP = {
  "Wasteland Workshop": {
    "locationEvents": {
      "2": "Boiler Overload \u2013 Luck 5+ or take D6+3 Wounds. Workshop closed if failed.",
      "3": "Rampaging Robot \u2013 Agility 5+ or take 2 Damage each Hit.",
      "4": "Broken Torch \u2013 No items with Scrap cost can be bought.",
      "5": "Over a Barrel \u2013 +$500 x Hero Level to all purchases today.",
      "6-8": "The Smell of Burning Oil \u2013 No event.",
      "9": "Junk Shortage \u2013 +$25 per Scrap, +$100 per Tech.",
      "10": "Cargo Crate \u2013 Buy crate for D6 x $100, may contain Tech, Gear or Artifact.",
      "11": "Lend a Hand \u2013 Skip location visit, gain D6 x $50 and 1 Grit.",
      "12": "One of a Kind \u2013 Add random stat +1 to a gear with upgrade slot."
    },
    "items": {
      "Junk Bomb": {
        "cost": "4 Scrap",
        "type": "Token",
        "bonus": "Gain 1 Junk Bomb Token."
      },
      "Junk Bomb Satchel": {
        "cost": "$500",
        "type": "Container",
        "limit": 1,
        "bonus": "Holds up to 5 Junk Bomb Tokens."
      },
      "Workshop Torch": {
        "cost": "$800",
        "type": "Construction",
        "bonus": "Discard an item to gain 1 Scrap per $50 value. If item is Tech, also gain 1 Tech."
      },
      "Wasteland Torc Chest": {
        "cost": "15 Scrap",
        "type": "Container",
        "bonus": "Holds up to 8 Dark Stone. Hidden and does not cause Corruption Hits."
      }
    },
    "armor": {
      "Wasteland Scrap Armor": {
        "cost": "$1500 + 12 Scrap",
        "type": "Torso",
        "bonus": "Start with 5 Scrap Markers. Prevent up to 3 Wounds per marker. Max 6 markers."
      },
      "Armor Spikes": {
        "cost": "$250 + 4 Scrap",
        "bonus": "Adjacent enemies that roll 1 To Hit take 1 Wound ignoring Defense."
      },
      "Extra Fittings": {
        "cost": "$500 + 2 Scrap",
        "bonus": "Max Scrap Markers increased to 10."
      },
      "Socket Fittings": {
        "cost": "$1000",
        "bonus": "Spend 1 Grit to attach carried Scrap as markers during Activation."
      }
    },
    "upgrades": {
      "Hand Guard": {
        "cost": "4 Scrap",
        "bonus": "+2 Health"
      },
      "Reinforced Handle": {
        "cost": "12 Scrap",
        "bonus": "+1 Initiative"
      },
      "Electro Shock": {
        "cost": "2 Scrap + 4 Tech",
        "bonus": "Stun enemies on 4+ or discard Dark Stone to auto-stun."
      },
      "Suspensor": {
        "cost": "8 Tech",
        "bonus": "Counts as one less Hand Slot"
      },
      "Axe Blade Attachment": {
        "cost": "10 Scrap",
        "bonus": "+1 Damage vs adjacent"
      },
      "Chain Blade Attachment": {
        "cost": "15 Scrap + 2 Tech",
        "bonus": "Apply Bleeding Marker on hit."
      },
      "Desert Scope": {
        "cost": "3 Scrap + 3 Tech",
        "bonus": "+2 Range, reroll missed To Hit."
      },
      "Laser Scope": {
        "cost": "5 Tech",
        "bonus": "+1 Damage if target is 3+ spaces away."
      }
    }
  }
};