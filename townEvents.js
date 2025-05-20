export const TOWN_EVENTS = {
  "TownEvents": {
    "eventTable": {
      "rollType": "2D6",
      "trigger": "Roll D6 daily and compare to Darkness Marker",
      "events": {
        "0-2": "Void Twister \u2013 Agility 5+ or be killed. Fail = Town destroyed.",
        "3": "Town Overrun \u2013 Agility 5+. Roll for each Dark Stone. Fail = D6 Wounds. KO = dead. Town destroyed.",
        "4": "Fire \u2013 D3 Random Town Locations destroyed.",
        "5": "The Fever \u2013 Spirit 6+ or D6+3 Wounds. Pass = 10 XP.",
        "6-8": "Spreading Fear \u2013 1 Location closes. Hotel uses current rate. Camp Site cannot be used.",
        "9": "Intense Dread \u2013 Cunning 6+ or D6+3 Sanity Damage. Add Growing Dread card if fail.",
        "10-11": "The End is Nigh! \u2013 All prices +$50 due to panic buying.",
        "12": "Rotten From Within \u2013 Random Hero pays D6\u00d7$100 or D6 Dark Stone. Fail = escape town or 2D6 Wounds. Town stay ends."
      }
    }
  },
  "CampSiteHazards": {
    "eventTable": {
      "rollType": "2D6",
      "description": "Roll before starting the Day in Town (if staying at Camp Site)",
      "events": {
        "0-1": "Hired Cutthroat \u2013 Luck 4+ or take D6 \u00d7 Hero Level Wounds. Pass = 100 XP.",
        "2": "Demon Attack! \u2013 Agility 5+ or Cunning 5+. Fail = 3D6 Wounds. KO = dead. Pass = 50 XP. Fail = 2D6\u00d710 XP for survival.",
        "3": "Robbed \u2013 Lose D6 Dark Stone. No Dark Stone = lose D6\u00d7$50.",
        "4": "The Fever \u2013 Spirit 5+ or take D6 Wounds. Pass = 10 XP.",
        "5": "Stories of Terror \u2013 Lore 5+ or take D6 Sanity. Pass = 10 XP.",
        "6-11": "Uneventful Night \u2013 No Event.",
        "12": "Learn Some Tricks \u2013 Gain 1 Health and 1 Sanity."
      }
    }
  }
};