const jargonoLevelingChart = {
  2: {
    name: "Fighting Style",
    description: "Choose a Specific Enemy Type (HellBats, Trederran Raiders, etc). From now on, you take 1 less Damage from any Attack made by an Enemy of that Type (minimum of 1)."
  },
  3: { bonus: "+1 Strength" },
  4: { bonus: "+1 Move" },
  5: { bonus: "+1 Lore or +1 Luck", extra: "+D6 Health" },
  6: { bonus: "+1 Cunning or +1 Spirit", extra: "+D6 Health/Sanity (any mix)" },
  7: { bonus: "+D6 Health and +D6 Sanity" },
  8: { bonus: "+1 Lore or +1 Agility", extra: "+D6 Health/Sanity (any mix)" },
  9: { bonus: "+2 Side Bag Token Capacity", extra: "+D6 Sanity" },
  10: { bonus: "+1 Max Grit" },
  11: { bonus: "+1 Initiative" },
  12: {
    name: "Dark Stone Resistance",
    description: "You can now hold 2 more Corruption Points before getting a Mutation."
  }
};

export default jargonoLevelingChart;
