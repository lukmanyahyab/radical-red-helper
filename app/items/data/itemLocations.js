const locations = [
  {
    name: "Pallet Town",
    items: [
      {
        name: "Potion (x15)",
        detail: "Computer in player's house.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Time Changer",
        detail: "Prof. Oak's Lab, left Aide rewards correct quiz answers.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Pokédex",
        detail: "From Prof. Oak after bringing him the Parcel from Viridian City's Poké Mart.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "Poké Ball (x10)",
        detail: "From Prof. Oak after bringing him the Parcel from Viridian City's Poké Mart.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Town Map",
        detail: "From Daisy in Rival's house after getting Pokédex from Prof. Oak.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Eevium Z",
        detail: "Requires Z-Ring - From Prof. Oak after both battles.",
        isPostGame: true,
        isOptional: true,
      }
    ]
  },
  {
    name: "Route 1",
    items: [
      {
        name: "Potion (x1)",
        detail: "From the guy below the trees by the first ledge.",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Viridian City",
    items: [
      {
        name: "Repel (x1)",
        detail: "In the narrow path on the north western side, behind a cut tree.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Oak's Parcel",
        detail: "In the Poké Mart, given to you by the clerk.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "Wise Glasses",
        detail: "From the girl in the trainers school.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Old Rod",
        detail: "From a fisherman near a pond in the south west part of the city.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Teachy TV",
        detail: "From the old man north of the city after receiving Pokédex from Prof. Oak.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "Poké Vial",
        detail: "From the Teacher in Trainers School after solving a puzzle battle.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 120 - Ice Spinner",
        detail: "At the other side of the small pond. (Surf HM required)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 119 - Draco Meteor",
        detail: "Viridian City's gym, from Clair after defeating her.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "TM 072 - Draco Barrage",
        detail: "From Clair after a rematch battle.",
        isPostGame: true,
        isOptional: true,
      }
    ]
  },
  {
    name: "Route 22",
    items: [
      {
        name: "Scizorite",
        detail: "In the middle of the Route in between the pond and a ledge. (Surf HM required)",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Route 2",
    items: [
      {
        name: "Dexnav",
        detail: "From Prof. Oak's Scientist upon entering the route.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "Ability Pill (x2)",
        detail: "(HARDCORE MODE) From Prof. Oak's Scientist upon entering the route.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "Oran Berry (x10)",
        detail: "From Prof. Oak's Scientist upon entering the route.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "HM 05 - Flash",
        detail: "From Prof Oak's Aide in the south-eastern gate.(accessed later from Viridian City or Cut HM required)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Ether (x1)",
        detail: "Below the south - eastern gate. (Cut HM required)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 057 - Temper Flare",
        detail: "Eastern side to the south. (Cut HM required)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Orbeetlite",
        detail: "Above Diglett's Cave. (Rock Smash HM required)",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Viridian Forest",
    items: [
      {
        name: "Antidote (x1)",
        detail: "Hidden just north of the western entrance.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Potion (x1)",
        detail: "In the bottom right corner of the forest.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Antidote (x1)",
        detail: "In the top right area, near a Bug Catcher and a sign post.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Potion (x1)",
        detail: "In the east part near a Bug Catcher, a bit further than where Brendan was.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Potion (x1)",
        detail: "Hidden in grass near northern exit, where last Bug Catcher is looking.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Exp. Share",
        detail: "From Brendan, after defeating him in front of the northern gate.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "Stat Scanner",
        detail: "From Brendan, after defeating him in front of the northern gate.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "Infinite Repel",
        detail: "From Brendan, after defeating him in front of the northern gate.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "TM 015 - Electroweb",
        detail: "Follow the small path at the end of the forest.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 081 - X-Scissor",
        detail: "Follow the small path at the end of the forest. (Rock Smash HM required)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Butterfrite",
        detail: "Follow the small path at the end of the forest. (Rock Smash HM required)",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Diglett's Cave (Route 2)",
    items: [
      {
        name: "TM 046 - Thief",
        detail: "Inside the cave.",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Pewter City",
    items: [
      {
        name: "Nugget (x1)",
        detail: "Hidden at top left corner of the city, on light green platform.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 051 - Roost",
        detail: "From Falkner in the museum after defeating him.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "TM 039 - Rock Tomb",
        detail: "From Brock after defeating him.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "Dynamax Band",
        detail: "From Prof. Oak's Scientist upon exiting the city eastward towards Route 3.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "Wishing Piece (x5)",
        detail: "From Prof. Oak's Scientist upon exiting the city eastward towards Route 3.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "Old Amber",
        detail: "From a Scientist in the museum behind the reception desk. (Cut HM required)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Aerodactylite",
        detail: "Requires Mega Ring - From Brock after defeating him in a rematch.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "TM 071 - Stone Edge",
        detail: "Requires Mega Ring - From Brock after defeating him in a rematch.",
        isPostGame: false,
        isOptional: false,
      }
    ]
  },
  {
    name: "Route 3",
    items: [
      {
        name: "Oran Berry (x1)",
        detail: "Hidden near the Youngster in-between two ledges. (a darkened tile)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 034 - Teleport",
        detail: "In the south eastern corner of the Route, near the Raid Den.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Thunder Stone (x1)",
        detail: "In the grassy patch.",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Route 4 (West)",
    items: [
      {
        name: "Persim Berry (x1)",
        detail: "Hidden in the top right area, left from Pokémon Center.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Water Stone (x1)",
        detail: "In the north western corner, left from Pokémon Center.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 009 - Bullet Seed",
        detail: "1F, Bottom left area, left from the entrance.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Paralyze Heal (x1)",
        detail: "1F, Bottom left area, near the Bug Catcher.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Potion (x1)",
        detail: "1F, Bottom right area, near the Super Nerd.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Rare Candy (x1)",
        detail: "1F, Bottom right corner.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Escape Rope (x1)",
        detail: "1F, Near the right side's wall, in the center.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Muscle Band",
        detail: "1F, From a guy in the top right corner, near the rocks.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Moon Stone (x1)",
        detail: "1F, Top left corner, near the Hiker.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Star Piece (x1)",
        detail: "B2F(1st Ladder), On the heightened platform.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Scope Lens",
        detail: "B2F(2nd Ladder), Northwest of tunnel ladder. (Rock Smash HM needed)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Ether (x1)",
        detail: "B2F (2nd Ladder), Hidden on rock east of tunnel ladder. (Rock Smash HM needed).",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Revive (x1)",
        detail: "B2F (3rd Ladder), Top from the ladder you enter this basement from.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 078 - Low Sweep",
        detail: "B2F (3rd Ladder), Right from the 2nd Team Rocket Grunt.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Moon Stone (x1)",
        detail: "B2F (3rd Ladder), Hidden in the rock right above TM 078 - Low Sweep.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Helix / Dome Fossil",
        detail: "B2F (3rd Ladder), In the top left area, after defeating Super Nerd. (Pick one)",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "Antidote (x1)",
        detail: "B2F (3rd Ladder), On the left side, near the exit ladder.",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Route 4 (East)",
    items: [
      {
        name: "TM 040 - Low Kick",
        detail: "From the left Black Belt.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Macho Brace",
        detail: "From the right Black Belt. (You'll get 4 PP Ups on MGM/HC mode)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Sun Stone (x1)",
        detail: "Below the 3 ledges.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Razz Berry (x1)",
        detail: "Hidden next to the previous Sun Stone. (a darkened tile)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 005 - Roar",
        detail: "Right from the two Black Belts, in between the multiple ledges.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Mewtwonite Y",
        detail: "From Giovanni after defeating him in Cerulean Cave.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "Salamencite",
        detail: "From Lance after defeating Giovanni in Cerulean Cave.",
        isPostGame: false,
        isOptional: false,
      }
    ]
  },
  {
    name: "Cerulean City",
    items: [
      {
        name: "Bicycle",
        detail: "In exchange for Bike Voucher. (Obtainable in Vermilion City)",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "Punching Glove",
        detail: "In the groomer's garden, in the 3rd flower.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Rare Candy (x1)",
        detail: "Hidden in the groomer's garden, right side below 3rd flower.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Poké Rider",
        detail: "From your rival, after defeating him near the Nugget Bridge.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "TM 003 - Flip Turn",
        detail: "From Misty after defeating her.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "TM 028 - Dig",
        detail: "From a Team Rocket Grunt behind the north eastern house.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "Gyaradosite",
        detail: "Requires Mega Ring - From Misty after defeating her in a rematch.",
        isPostGame: false,
        isOptional: false,
      }
    ]
  },
  {
    name: "Route 24",
    items: [
      {
        name: "Big Nugget (x1)",
        detail: "Reward from defeating Team Rocket Grunt at end of Nugget Bridge.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "TM 045 - Drain Kiss",
        detail: "Above the Nugget Bridge.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 077 - Thunder Punch",
        detail: "Right of the Nugget Bridge, accessed from Route 25.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Tyranitarite",
        detail: "On a small islet to the left of the Nugget Bridge. (Surf HM required)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Pecha Berry (x1)",
        detail: "On the north eastern heightened platform, accessed from Route 25.",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Route 25",
    items: [
      {
        name: "Leaf Stone (x1)",
        detail: "On the heightened platform, in the grass patch.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 043 - Defog",
        detail: "Hidden in grass maze near Camper & Hiker. (Cut HM required)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Bluk Berry (x1)",
        detail: "Hidden on a darker grass tile above the Lass near the left pond.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Oran Berry (x1)",
        detail: "Hidden on a darker grass tile between a Hiker and a walking youngster.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "S.S. Ticket",
        detail: "From Bill inside his cottage when you help him.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "TM 089 - U-turn",
        detail: "From Bugsy after defeating him.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Nest Ball (x5)",
        detail: "From Bugsy after defeating him",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Elixir (x1)",
        detail: "Hidden at the start between Hiker & Youngster, 1 tile left from beside Youngster.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Ether (x1)",
        detail: "Hidden to the right of Bill's cottage, 4 tiles from the door.",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Route 5",
    items: [
      {
        name: "TM 096 - Bulldoze",
        detail: "In the middle fenced area.",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Route 6",
    items: [
      {
        name: "Rare Candy (x1)",
        detail: "Hidden in the north eastern area, right below the fence between the two ledges.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Sitrus Berry (x1)",
        detail: "Hidden on a darkened tile in the north western area.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 063 - Venoshock",
        detail: "In the north western corner.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Pinsirite",
        detail: "South of the pond. (Rock Smash HM or Surf HM required)",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Vermilion City",
    items: [
      {
        name: "Good Rod",
        detail: "From a Fisherman in the house left of Pokémon Center.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Max Ether (x1)",
        detail: "Hidden in corner: Going 4 steps down from Pokémon Center door, then turn left.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Bike Voucher",
        detail: "From the Fan Club Chairman after listening to his story.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "Wishing Piece (x5)",
        detail: "From a girl in the Pokémon Fan Club if a Yamper is following you.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 092 - Volt Switch",
        detail: "From Lt. Surge after defeating him once.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "Manectite",
        detail: "Requires Mega Ring - From Lt. Surge after defeating him in a rematch.",
        isPostGame: false,
        isOptional: false,
      },
    ]
  },
  {
    name: "Route 11",
    items: [
      {
        name: "Soft Sand (x1)",
        detail: "In middle of the Route, in grass patch near old man and engineer.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Fire Stone (x1)",
        detail: "Below the Soft Sand item in the middle of the Route, in a grass patch.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 098 - Fire Punch",
        detail: "On the bottom right side in a narrow path, near the old man below the gate.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Escape Rope (x1)",
        detail: "Hidden in the top right side in a stone.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Eviolite",
        detail: "From Whitney after defeating her.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Normal Gem",
        detail: "From Whitney after defeating her.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Itemfinder",
        detail: "From a Scientist in the gate upstairs.",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "S.S. Anne",
    items: [
      {
        name: "Hyper Potion (x1)",
        detail: "Basement floor's hallway, hidden in the trash can just under the stairs.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Rare Candy (x1)",
        detail: "Basement floor's second room from the left with the singler sailor inside.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Ether (x1)",
        detail: "Basement floor's third room from the left with the single sailor inside.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Super Potion (x1)",
        detail: "Basement floor's first room from the right with the guy and a Chesnaught inside.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 031 - Brick Break",
        detail: "First floor's second room from the left with 2 people inside.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Great Ball (x1)",
        detail: "In the kitchen, bottom left corner.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Chesto Berry (x1)",
        detail: "In the kitchen, hidden in the bottom trash can on the right.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Cheri Berry (x1)",
        detail: "In the kitchen, hidden in the middle trash can on the right.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Pecha Berry (x1)",
        detail: "In the kitchen, hidden in the top trash can on the right.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Stardust (x1)",
        detail: "Second floor's second room from the left with the Fisherman inside.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 069 - Stomping Tantrum",
        detail: "Second floor's third room from the right with Gentleman and Lass inside.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Lucky Egg (x2)",
        detail: "From Brendan, after defeating him near the Captain's room.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "Shiny Stone (x1)",
        detail: "From Brendan, after defeating him near the Captain's room.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "HM 01 - Cut",
        detail: "Captain's room, given to you by the Captain himself.",
        isPostGame: false,
        isOptional: false,
      }
    ]
  },
  {
    name: "Diglett's Cave (Route 11)",
    items: [
      {
        name: "TM 044 - Rest",
        detail: "On the northern side, close to the raid den.",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Route 9",
    items: [
      {
        name: "TM 101 - Ice Punch",
        detail: "In the bottom left corner, near the Hiker.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Burn Heal (x1)",
        detail: "In the bottom right corner, near another Hiker.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Ether (x1)",
        detail: "Hidden on a rock in the top west corner, directly next to the top ledge.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Chesto Berry (x1)",
        detail: "Hidden in the top right area on a darkened spot near the Hiker and Bug Catcher.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Rare Candy (x1)",
        detail: "Hidden in northeast corner of the Route, 2 tiles above the northeastern ledge.",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Route 10",
    items: [
      {
        name: "Everstone",
        detail: "From Prof. Oak's Scientist.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Persim Berry (x1)",
        detail: "In the bottom right corner of the fence.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Cheri Berry (x1)",
        detail: "In a darkened tile 3 steps away from the Picnicker.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Super Potion (x1)",
        detail: "Hidden one tile left of Pokémon Center, southeast corner of Rock Tunnel.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 042 - Facade",
        detail: "On the Route's south side, to the right from the entrance of the Rock Tunnel.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Nanab Berry (x1)",
        detail: "Hidden on south side of Route, left from TM 042 - Facade, in darkened grass.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 099 - Wild Charge",
        detail: "Hidden in front of the Power Plant's south eastern-most tile. (Surf HM required)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Max Ether (x1)",
        detail: "Hidden in front of Power Plant's southeast corner, with TM 099 (Surf HM required).",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Rock Tunnel",
    items: [
      {
        name: "Repel (x1)",
        detail: "To the right from the northern entrance.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Revive (x1)",
        detail: "B1F, in the dead - end path left of the Pokémaniac.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Escape Rope (x1)",
        detail: "1F, in the room with 3 Hikers.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Coalossite",
        detail: "B1F, in room with northeast crossroads. (Rock Smash HM needed)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 080 - Rock Slide",
        detail: "B1F, from a youngster in the room with multiple crossroads.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Max Ether (x1)",
        detail: "B1F, above a Picnicker in the room with multiple crossroads",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 023 - Iron Head",
        detail: "1F, Lavender Town side room, dead - end path between one Picnicker left, two right.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Safety Goggles",
        detail: "Obtainable from Rock, Ground, or Steel type follower Pokemon upon interaction.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Flyinium Z",
        detail: "Access Rock Tunnel near Power Plant; rewarded by Falkner after rematch.",
        isPostGame: true,
        isOptional: true,
      },
      {
        name: "Steel Gem",
        detail: "Access Rock Tunnel from Power Plant entrance; north room, push boulder.",
        isPostGame: true,
        isOptional: true,
      },
      {
        name: "TM 103 - Sludge Wave",
        detail: "Rock Tunnel near Power Plant entrance, east after first switch.",
        isPostGame: true,
        isOptional: true,
      }
    ]
  },
  {
    name: "Lavender Town",
    items: [
      {
        name: "TM 030 - Shadow Ball",
        detail: "From Morty in Fuji's house after defeating him.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Soothe Bell",
        detail: "From Morty in Fuji's house after defeating him",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Shed Shell",
        detail: "From Morty in Fuji's house after defeating him.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Poké Flute",
        detail: "From Fuji in his house after defeating all Pokémon Tower grunts and saving him.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "Gengarite",
        detail: "Requires Mega Ring - From Morty in Fuji's house after showing a Pokémon with max happiness.",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Route 12 (North)",
    items: [
      {
        name: "TM 027 - Return",
        detail: "In the northern gate, received from a girl upstairs.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 048 - Hurricane",
        detail: "On a small islet between some bridges. (Surf HM required)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Hyper Potion (x1)",
        detail: "Hidden on a wooden platform near the 3rd Fisherman starting from north.",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Route 8",
    items: [
      {
        name: "Rawst Berry (x1)",
        detail: "Hidden in the fenced area in the middle, on a darkened tile in the top right.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Lum Berry (x1)",
        detail: "Hidden in the fenced area in the middle, on a darkened tile in the top left.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Leppa Berry (x1)",
        detail: "Hidden in the fenced area in the middle, on a darkened tile in the bottom right.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 106 - Acrobatics",
        detail: "Western side of the Route, between the two ledges below the old man.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Rocky Helmet",
        detail: "Requires Mega Ring - From an Ace Trainer, after defeating him.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Centiskite",
        detail: "Requires Mega Ring - From an Ace Trainer, after defeating him.",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Underground Path (Route 7 - Route 8)",
    items: [
      {
        name: "TM 104 - Psyshock",
        detail: "(DEFAULT MODE) On the left side, near the stairs.",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Route 7",
    items: [
      {
        name: "Wepear Berry (x1)",
        detail: "Hidden on a darkened tile just south of the gate / east of the underground path.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 062 - Iron Tail",
        detail: "In the grass patch's north eastern corner",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Celadon City",
    items: [
      {
        name: "Lucarionite",
        detail: "From Lucario owner at Pokémon Center with Lucario follower(Soul Badge required).",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Loaded Dice",
        detail: "In top left corner, behind Department Store via narrow path left of Pokémon Center.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Tea",
        detail: "Celadon Mansion, from the granny sitting behind the table on the 1st floor.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "Amulet Coin",
        detail: "Celadon Mansion, from the tamer on the 2nd floor, sitting on a bench with camper.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "PP Up (x1)",
        detail: "Hidden in narrow pathway east of Game Corner, between trees.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Light Clay",
        detail: "(DEFAULT MODE) Across pond in front (Surf HM needed).",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Big Nugget (x1)",
        detail: "From guy in restaurant, top left behind table.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Alakazite",
        detail: "Department Store's rooftop, from a little girl sitting behind the desk.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 019 - Giga Drain",
        detail: "From Erika after defeating her.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "TM 086 - Grass Knot",
        detail: "Requires Mega Ring - Erika rematch reward after aiding her Gloom in Fuchsia City.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 117 - Brave Bird",
        detail: "In the hotel, after getting Mega Ring and defeating some folks in there.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Applite",
        detail: "In the hotel, after getting Mega Ring and defeating some folks in there",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Red Card",
        detail: "In Erika's gym, obtainable from follower Pokémon: fire and/or flying type, upon interaction.",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Rocket Hideout",
    items: [
      {
        name: "Dream Patch (x1)",
        detail: "B1F, on the table in the room on the left side of the floor under a single grunt.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "PP Up (x1)",
        detail: "B1F, hidden in the bottom right palm tree in the middle of the floor.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 105 - Psychic Noise",
        detail: "B3F, near a generator just below the stairs, near a single grunt.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Nugget (x1)",
        detail: "B3F, hidden under a generator in the top left side.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Rare Candy (x1)",
        detail: "B3F, on the right side of the warp maze.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Black Glasses",
        detail: "B3F, in the south east part of the room, near a stair case.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Max Ether (x1)",
        detail: "B4F, on a table near the stair case accessed from B3F.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 049 - Leech Life",
        detail: "B4F, above the previous Max Ether, near a single Rocket Grunt, accessed from B3F.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Lift Key",
        detail: "B4F, dropped by lone Rocket Grunt near TM 049, accessed from B3F.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "Wide Lens",
        detail: "B2F, northeast of warp maze, left of staircase from previous floor.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Moon Stone (x1)",
        detail: "B2F, inside the warp maze, in the north west area.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 012 - Taunt",
        detail: "B2F, within warp maze, south - east of previous Moon Stone.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Super Potion (x1)",
        detail: "B2F, inside the warp maze, on the far left side of it.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Hyper Potion (x1)",
        detail: "B1F, in the top left corner of the room accessed from the B3F warp maze stair case.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Calcium (x1)",
        detail: "B4F, on a table left of the elevator.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Net Ball (x1)",
        detail: "B4F, hidden in between flowers in Giovanni's Room on the left side.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Nest Ball (x1)",
        detail: "B4F, hidden in between flowers in Giovanni's Room on the right side.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Silph Scope",
        detail: "B4F, dropped by Giovanni in his room after defeating him.",
        isPostGame: false,
        isOptional: false,
      }
    ]
  },
  {
    name: "Pokémon Tower",
    items: [
      {
        name: "Sablenite",
        detail: "3F, north east area.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Elixir (x1)",
        detail: "4F, directly left of the stair case you came from 3F.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Awakening (x1)",
        detail: "4F, in the middle of the room, left of the previous Elixir.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Great Ball (x1)",
        detail: "4F, in the bottom of the room.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Cleanse Tag",
        detail: "5F, in the middle of the room on the healing platform.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Big Mushroom (x1)",
        detail: "5F, hidden in the top left corner.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Nugget (x1)",
        detail: "5F, in the bottom left of the room.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 061 - Will-O-Wisp",
        detail: "6F, in the bottom right of the room.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Rare Candy (x1)",
        detail: "6F, in the bottom left of the room.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Reaper Cloth",
        detail: "6F, in the north western part of the room. (Rock Smash HM Required)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Thick Club",
        detail: "Requires Silph Scope - 6F, dropped from the Marowak boss after defeating it.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "Ghost Gem",
        detail: "Requires Z-Ring - Southwest of Gengar puzzle room atop Tower.",
        isPostGame: true,
        isOptional: true,
      },
      {
        name: "Mimikium Z",
        detail: "Requires Z-Ring - South of Gengar puzzle room atop Tower.",
        isPostGame: true,
        isOptional: true,
      },
      {
        name: "Ghostium Z",
        detail: "Requires Z-Ring - From Morty atop Tower after trial defeat.",
        isPostGame: true,
        isOptional: true,
      },
      {
        name: "Marshadium Z",
        detail: "Requires Z-Ring - Dropped by Marshadow after Tower battle.",
        isPostGame: true,
        isOptional: true,
      }
    ]
  },
  {
    name: "Saffron City",
    items: [
      {
        name: "TM 029 - Psychic",
        detail: "From Mr.Psychic in his house in the south east part of the city.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 060 - Drain Punch",
        detail: "From Chuck after defeating him in the Dojo.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Expert Belt",
        detail: "From Chuck after defeating him in the Dojo.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Mega Ring",
        detail: "From President's assistant after defeating Giovanni in Silph Co., near gym.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "TM 116 - Trick Room",
        detail: "(NORMAL MODE) From Sabrina after defeating her.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 104 - Psyshock",
        detail: "(HARDCORE MODE) From Sabrina after defeating her.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Shiny Charm",
        detail: "From Sabrina after defeating her and showing her a Pokémon with 31 IVs in all stats.(MGM / HARDCORE MODE) A Shiny Pokemon.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "Galladite",
        detail: "Requires Mega Ring - From Chuck after defeating him and showing him a Pokémon with at least 150 EVs in Attack. (MGM / HARDCORE MODE) 125 Base Attack.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Focus Sash",
        detail: "Requires Mega Ring - From Chuck after defeating him and showing him a Pokémon with at least 150 EVs in Attack. (MGM / HARDCORE MODE) 125 Base Attack.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Alcremite",
        detail: "From a woman in the western house, after getting her ingredients for a cake.  (x1 Rawst Berry, x1 Aspear Berry, x2 Moomoo Milk)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Metronome",
        detail: "From a woman in the western house, after getting her ingredients for a cake.  (x1 Rawst Berry, x1 Aspear Berry, x2 Moomoo Milk)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 026 - Earthquake",
        detail: "From the Dumbass Mudkip Kid in the north - western house after battling him.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Swampertite",
        detail: "From the Dumbass Mudkip Kid in the north-western house after battling him then showing him a Swampert follower.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Nugget (x1)",
        detail: "Hidden near the PC in the Copycat's room, in the north-western house.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Waterium Z",
        detail: "From the Dumbass Mudkip Kid in the north-western house after a rematch battle(Requires Z - Ring)",
        isPostGame: true,
        isOptional: true,
      },
      {
        name: "Protective Pads",
        detail: "In Fighting Dojo, obtainable from follower Pokémon if it's Fighting type upon interaction.",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Silph Co.",
    items: [
      {
        name: "TM 010 - Hidden Power",
        detail: "1F, in the upper right corner behind a plant.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 073 - Thunder Wave",
        detail: "2F, from girl in top left room; key card or warp tile near 3F stairs.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Ultra Ball (x1)",
        detail: "2F, hidden in the bottom palm tree of the bottom left room with a single Scientist (Keycard required or warp tile from 6F)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Protein (x1)",
        detail: "3F, hidden in the middle palm tree at the bottom right of the floor.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Hyper Potion (x1)",
        detail: "3F, in the western-most room with a single Scientist (Keycard required, warp tile from 9F also requires Keycard)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Iron (x1)",
        detail: "4F, hidden in the bottom flower in the right room with a single grunt.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 041 - Liquidation",
        detail: "4F, on a table in the right room with a single grunt.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Full Heal (x1)",
        detail: "4F, in the room on the far left side. (Keycard required)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Max Revive (x1)",
        detail: "4F, in the room on the far left side. (Keycard required)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Garbodorite",
        detail: "4F, in the room on the far left side. (Keycard required)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Card Key",
        detail: "5F, in the bottom of the room in a narrow hallway.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "PP Up (x1)",
        detail: "5F, hidden in east room, top right corner palm tree.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Elixir (x1)",
        detail: "5F, hidden in palm tree in small room connected to east room(Keycard needed).",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Protein (x1)",
        detail: "5F, in the top room on the left side with a single Scientist. (Keycard required)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 115 - Body Press",
        detail: "5F, in the south room on the west side. (Keycard required)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Carbos (x1)",
        detail: "6F, hidden in the bottom left palm tree in the top left room.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "HP Up (x1)",
        detail: "6F, top item in the bottom left room. (Keycard required)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Audinite",
        detail: "6F, bottom item in the bottom left room. (Keycard required)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Zinc (x1)",
        detail: "7F, hidden in the bottom palm tree in the middle - right room. (Keycard required)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 008 - Zen Headbutt",
        detail: "7F, in the middle - right room. (Keycard required)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Kangaskhanite",
        detail: "7F, in the bottom left area of the floor, near a Scientist.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Iron (x1)",
        detail: "8F, in the right room with a single Scientist.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Nugget (x1)",
        detail: "8F, hidden on the top flower in the right room with a single Scientist.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Max Potion (x1)",
        detail: "9F, hidden in the left part of the floor, to the east of the woman that heals you,at the spot of a missing shelve. (Keycard required)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Calcium x1",
        detail: "9F, hidden on right palm tree, left floor near healing woman. (Keycard needed)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "HP Up (x1)",
        detail: "10F, hidden in the palm tree in the upper right room.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Carbos (x1)",
        detail: "10F, right item in the bottom left room.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Rare Candy (x1)",
        detail: "10F, bottom item in the bottom left room.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Ultra Ball (x1)",
        detail: "10F, left item in the bottom left room.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Zinc (x1)",
        detail: "11F, in the bottom right part of the floor, below a grunt.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Revive (x1)",
        detail: "11F, hidden in the middle palm tree in front of President's room, accessed by a warp tile from 7F, which is accessed from 3F. (Keycard required)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 068 - Dual Chop",
        detail: "From Brendan after defeating the Rocket Admins.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "Master Ball (x1)",
        detail: "11F, from the President in his room after defeating Giovanni.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Upgrade",
        detail: "Needs Silph Scope upgrade - Secret Area, northwest corner of spinny puzzle room.",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Route 16",
    items: [
      {
        name: "HM 02 - Fly",
        detail: "From girl in top left house, accessed via northern gate from Celadon City exit.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 100 - Dual Wingbeat",
        detail: "In the north western corner of the Route, left of the house with HM 02.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Leftovers",
        detail: "Use Itemfinder Key Item on the exact spot Snorlax was on.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Venusaurite",
        detail: "Upstairs in northern gate on Route 16, from Scientist upon showing Venusaur.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Charizardite X/Y",
        detail: "Upstairs in northern gate on Route 16, from Scientist upon showing Charizard. (Y if in Hardcore mode, else X)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Blastoisinite",
        detail: "Upstairs in northern gate on Route 16, from Scientist upon showing Blastoise.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Tri-Pass",
        detail: "From girl in small house, accessed from northern gate; given after defeating all trainers she suggests and obtaining Gengarite from Morty.",
        isPostGame: true,
        isOptional: true,
      }
    ]
  },
  {
    name: "Route 17",
    items: [
      {
        name: "TM 114 - Heat Crash",
        detail: "South of the gate, right above the grass patch.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "PP Up (x1)",
        detail: "Hidden on left bicycle path, 7 steps down from 3rd biker at top.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Max Revive (x1)",
        detail: "Hidden on left bicycle path near bottom, between ponds by signpost.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Absolite",
        detail: "At bottom of Route, middle, beside signpost between ponds.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Full Restore (x1)",
        detail: "Hidden on middle bicycle path, two steps left of first signpost.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Rare Candy (x1)",
        detail: "Hidden on right bicycle path, one step right of 3rd signpost on middle path.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Max Elixir (x1)",
        detail: "Hidden 3 steps to the right from the last sign post on the south part of the Route.",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Route 18",
    items: [
      {
        name: "Altarianite",
        detail: "Below the gate, in the bottom left corner of the grass patch.",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Route 12 (South)",
    items: [
      {
        name: "Slowbronite",
        detail: "On a small islet to the south west from the Snorlax. (Surf HM required)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Leftovers",
        detail: "Use Itemfinder Key Item on the exact spot Snorlax was on.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Sharpedonite",
        detail: "In the fisherman's house, if you show him a Sharpedo follower.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Iron (x1)",
        detail: "Just south of the Fisherman's house.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Rare Candy (x1)",
        detail: "Hidden in grass, south of Heart Scale(2nd tile from left, 5th from top).",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 004 - Seed Bomb",
        detail: "In the grassy area's south western corner.",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Route 13",
    items: [
      {
        name: "PP Up (x1)",
        detail: "Hidden at bottom of fence maze on missing fence tile near Picnicker Gwen.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 085 - Future Sight",
        detail: "At bottom of fence maze, near tile missing a fence by Picnicker Gwen.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Burnt Seed",
        detail: "Near the Raid Den, in the patch of grass.",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Route 14",
    items: [
      {
        name: "Pinap Berry (x1)",
        detail: "Hidden in the bottom right corner, on a darkened tile near the Twins.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Zinc (x1)",
        detail: "Hidden in the grassy area, above the bikers. (3rd grass tile from left, 2nd from top)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 002 - Dragon Claw",
        detail: "In the grassy area.",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Route 15",
    items: [
      {
        name: "TM 018 - Hydro Pump",
        detail: "Near the gate leading to Fuchsia City, above the ledge.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Toxic Orb",
        detail: "Upstairs in the gate from the Scientist.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Flame Orb",
        detail: "Upstairs in the gate from the Scientist",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Sandacondite",
        detail: "From a Female Ace Trainer after defeating her in the western part of the Route.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Power Herb",
        detail: "From a Female Ace Trainer after defeating her in the western part of the Route.",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Fuchsia City",
    items: [
      {
        name: "Super Rod",
        detail: "From Fisherman in southeast city house, right side.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Net Ball (x1)",
        detail: "From Fisherman in southeast city house, right side, by showing specific Magikarp.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Max Revive (x1)",
        detail: "Hidden behind Fisherman's house by pond, under middle flower.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 036 - Sludge Bomb",
        detail: "From Koga after defeating him.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "Life Orb",
        detail: "From Koga after showing him a Pokémon with at least 150 EV in speed.(MGM / HARDCORE MODE) 125 Base Speed.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Toxtricitite",
        detail: "From Koga after showing him a Pokémon with at least 150 EV in speed. (MGM / HARDCORE MODE) 125 Base Speed.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "HM 06 - Rock Smash",
        detail: "From Brendan after defeating him in front of Safari Zone's entrance.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "HM 04 - Strength",
        detail: "From Warden in house next to Fisherman's, post-Gold Teeth exchange.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "Rare Candy (x1)",
        detail: "In the Warden's house. (Strength HM required)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Medicine",
        detail: "From Nurse Joy at Safari Zone after Erika rematch request in Celadon City.",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Safari Zone",
    items: [
      {
        name: "Leaf Stone (x1)",
        detail: "East Area, on the heightened platform in the bottom right corner.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 076 - Earth Power",
        detail: "East Area, near the pond in the middle of the area.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Max Potion (x1)",
        detail: "East Area, north west of TM 076.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Heracronite",
        detail: "East Area, left of the Rest House in the north eastern part of the area.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 058 - Rising Voltage",
        detail: "East Area, north east part, right above the exit to North Area.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Beedrilite",
        detail: "North Area, eastern part, via heightened platform with dead end.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 059 - Dragon Pulse",
        detail: "North Area, near Rest House in north part.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Pidgeotite",
        detail: "North Area, in the north - central part of the area, just above the TM 059.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Gold Teeth",
        detail: "West Area, northeast part, south of sign post, right of northern Rest House.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "TM 032 - Aura Sphere",
        detail: "West Area, northwest part, between northern Rest House and pond.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Revive (x1)",
        detail: "West Area, hidden in northwest part, 3 steps down from northern Rest House entrance, facing right.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "HM 03 - Surf",
        detail: "West Area From the guy in the northern Rest House.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "Lopunnite",
        detail: "West Area, southwest part, in grass below heightened platform.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 055 - Expanding Force",
        detail: "West Area, on the heightened platform at the south side of the area.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Max Revive (x1)",
        detail: "West Area, in the south - eastern part of the area under a heightened platform.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 054 - Grassy Glide",
        detail: "Center Area, on the small islet in the pond. (Surf HM required)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Leaf Stone (x1)",
        detail: "Center Area, hidden on the small islet in the pond. (Surf HM required)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Magmarizer",
        detail: "Far - Western Area, right side of the pond. (Surf HM required)",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Route 19",
    items: [
      {
        name: "Drednawite",
        detail: "On a small islet on the south part of the Route. (Surf HM required)",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Route 20 (East)",
    items: [
      {
        name: "Glalitite",
        detail: "From Pryce after defeating him in front of Seafom Islands.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Choice Scarf",
        detail: "From Pryce after defeating him in front of Seafom Islands.",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Seafoam Islands",
    items: [
      {
        name: "Wellspring Mask",
        detail: "1F, on the heightened platform just north of the entrance from Fuchsia City side.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 070 - Triple Axel",
        detail: "B1F, on a heightened platform in the middle of the floor.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Laprasite",
        detail: "B1F, in the north western part of the floor.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Abomasite",
        detail: "B2F, in the south western part of the floor.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Nugget (x1)",
        detail: "B3F, hidden atop rock in trio near ladder to B2F in west Route.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Water Stone (x1)",
        detail: "B4F, hidden on left rock of trio on middle platform near ladder to B3F.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Ultra Ball (x1)",
        detail: "B4F, on the heightened platform in the south part of the floor.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 097 - Frost Breath",
        detail: "Beat Sandshrew race on B3F, near starting point. (Z - Ring required)",
        isPostGame: true,
        isOptional: true,
      },
      {
        name: "Icium Z",
        detail: "Beat Sandshrew race on B3F; from Pryce post - rematch. (Z - Ring required)",
        isPostGame: true,
        isOptional: true,
      },
      {
        name: "Blue Orb",
        detail: "Beat Sandshrew race on B3F; dropped by Kyogre(Z - Ring required).",
        isPostGame: true,
        isOptional: true,
      }
    ]
  },
  {
    name: "Route 20 (West)",
    items: [
      {
        name: "Medichamite",
        detail: "On small islet in middle of Route, below stationary female Swimmer.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 052 - Focus Blast",
        detail: "On the islet in the middle of the Route, a male Swimmer is swimming below it.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Stardust (x1)",
        detail: "Hidden the same islet in the middle of the Route as listed above.",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Cinnabar Island",
    items: [
      {
        name: "Latiosite",
        detail: "In Pokémon Lab's rightmost room, from Scientist at left table when showing Latios.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Latiasite",
        detail: "In Pokémon Lab's rightmost room, from Scientist at left table when showing Latias.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Soul Dew (x2)",
        detail: "In Pokémon Lab's rightmost room, from Scientist at left table when showing both Latis.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Reveal Glass",
        detail: "In Pokémon Lab's rightmost room, from Scientist at bottom left table when showing a Force of Nature member.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "DNA Splicers",
        detail: "In Pokémon Lab's rightmost room, from Scientist at bottom left table showing a Tao Trio member.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Prison Bottle",
        detail: "In Pokémon Lab's rightmost room, from Scientist at bottom left table when showing Hoopa.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Aggronite",
        detail: "From Jasmine after defeating her in Pokémon Lab.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Choice Band",
        detail: "From Jasmine after defeating her in Pokémon Lab.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Assault Vest",
        detail: "From Jasmine after defeating her in Pokémon Lab and showing her a Pokémon with 150 EVs in defense. (MGM / HARDCORE MODE) 125 Base Defense.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Steelixite",
        detail: "From Jasmine after defeating her in Pokémon Lab and showing her a Pokémon with 150 EVs in defense. (MGM / HARDCORE MODE) 125 Base Defense.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Blazikenite",
        detail: "From May after you defeat her in front of the Pokémon Mansion.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "TM 038 - Fire Blast",
        detail: "From Blaine after defeating him.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "Charizardite Y / X",
        detail: "From Blaine after defeating him and showing him a Pokémon with at least 150 EVs in Special Attack(MGM / HARDCORE MODE) 125 Base Special Attack & X.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Choice Specs",
        detail: "From Blaine after defeating him and showing him a Pokémon with at least 150 EVs in Special Attack(MGM / HARDCORE MODE) 125 Base Special Attack.",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Pokémon Mansion",
    items: [
      {
        name: "Escape Rope (x1)",
        detail: "1F, north side between the 4 pillars.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Moon Stone (x1)",
        detail: "1F, hidden among the pile of rocks in the corridor at the entrance on the left.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 090 - Gunk Shot",
        detail: "1F, south of escape rope, after pressing Mewtwo statue to unlock gate.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Zinc (x1)",
        detail: "2F, in the narrow hallway starting at the bottom of the floor.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Calcium (x1)",
        detail: "2F, in the north east part of the floor.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 007 - Heat Wave",
        detail: "3F, just south of the Nerd near a table and a staircase.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Iron (x1)",
        detail: "3F, in the north east part of the floor, accessed by pressing a Mewtwo statue on 2F and going up through the northern staircase on 2F.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Rare Candy (x1)",
        detail: "3F, hidden in the central east part of the floor, just above the staircase in the south east, requires you to press Mewtwo statue.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "HP Up (x1)",
        detail: "2F, central east section, accessible via staircase mentioned above.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Gardevoirite/Cameruptite",
        detail: "1F, in the south east part of the floor with lots of palm trees and a Scientist, accessed by falling through the bigger hole on 3F. (HARDCORE MODE) Gardevoirite.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Banettite",
        detail: "B1F, in the south west part of the floor.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Elixir (x1)",
        detail: "B1F, hidden in the upper right corner of the floor, near the Mewtwo statue.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 014 - Blizzard",
        detail: "B1F, in small room in north, requires pressing Mewtwo statue in south.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Secret Key",
        detail: "B1F, table in northwest, after pressing Mewtwo statue in northeast room.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "TM 022 - Weather Ball",
        detail: "B1F, in a small room with palm trees, just below the Secret Key.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Hearthflame Mask",
        detail: "Requires Silph Scope upgrade - 4F",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Hidden Costume",
        detail: "Requires Silph Scope upgrade - 4F",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Route 21",
    items: [
      {
        name: "Kinglerite",
        detail: "On an islet in the upper part of the Route, below 2 stationary girls.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Pearl (x1)",
        detail: "Hidden on an islet in the upper part of the Route, below 2 stationary girls.",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Cerulean Cave",
    items: [
      {
        name: "Diancite",
        detail: "2F, northeast area, reached by climbing northeast ladder on 1F.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Nugget (x1)",
        detail: "1F, on a heightened platform on the north part of the floor.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "PP Up (x1)",
        detail: "2F, in the south west area of the floor, accesed by going up the south west ladder on a heightened platform on 1F. (Rock Smash HM required)",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Full Restore (x1)",
        detail: "1F, in the south east area of the floor near the pond.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Max Elixir (x1)",
        detail: "1F, on the heightened platform in the middle of the floor.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 001 - Close Combat",
        detail: "2F, in the south east part of the floor.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Mawilite",
        detail: "1F, from Ariana after defeating her in battle.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "Houndoominite",
        detail: "1F, from Archer after defeating him in battle.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "Garchompite",
        detail: "B1F, in the north east area of the floor.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Booster Energy",
        detail: "(DEFAULT MODE) B1F, on heightened platform in central - west.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Big Nugget (x5)",
        detail: "2F, from Black Belt Ketchup after you defeat him a third time. (Or more)",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Power Plant",
    items: [
      {
        name: "Electirizer",
        detail: "Just north of the entrance.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Machampite",
        detail: "From Dumbass trainer after defeating him in the central room.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Cornerstone Mask",
        detail: "From Dumbass trainer after defeating him in the central room.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 109 - Superpower",
        detail: "In the central room, right next to the Dumbass trainer.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Elixir (x1)",
        detail: "In the central room's west side.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 025 - Thunder",
        detail: "In the south east corner.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Ampharosite",
        detail: "In the north east corner.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Max Elixir (x1)",
        detail: "Hidden in the lowest north - central room, just under the generator.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Thunder Stone (x1)",
        detail: "Hidden in the north west area, where Zapdos is, just in front of the big generator.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Eject Button",
        detail: "(DEFAULT MODE) From follower Pokémon if electric type, upon interaction.",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Route 23",
    items: [
      {
        name: "Leppa Berry (x1)",
        detail: "Hidden on darkened tile left of gate between Thunder and Rainbow Badge checks.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Max Ether (x1)",
        detail: "Hidden on islet in pond between Soul and Marsh Badge checks.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Ultra Ball (x1)",
        detail: "Hidden between two statues wall, between Marsh and Volcano badges checks.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Aspear Berry (x1)",
        detail: "Hidden on darkened tile below Volcano badge gate, left side of boulder maze.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Snorlaxite",
        detail: "In the north east corner of the Volcano badge check gate.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Full Restore (x1)",
        detail: "Hidden on a rock 2 tiles to the left of the Snorlaxite.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Sitrus Berry (x1)",
        detail: "Hidden on darkened tile in northwest corner, just below leftmost side of Victory Road.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Sceptilite",
        detail: "From Brendan after defeating him in front of Victory Road's entrance.",
        isPostGame: false,
        isOptional: false,
      },
      {
        name: "Lum Berry (x1)",
        detail: "Hidden on a dark tile on the north side of the Route, above Victory Road.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Max Elixir (x1)",
        detail: "Hidden on north side of Route, dead - end path maze in front of Pokémon League.",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Victory Road",
    items: [
      {
        name: "Rare Candy (x1)",
        detail: "1F, in the north west part of the floor, the eastern item of the boulder puzzle.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 067 - Poltergeist",
        detail: "1F, in the north west part of the floor, the northern item of the boulder puzzle.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Full Restore (x1)",
        detail: "1F, hidden northwest, on boulder 2 tiles east from TM 067.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Ultra Ball (x1)",
        detail: "1F, hidden on rock in narrow dead - end path from northwest heightened platform descent.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Heavy-Duty Boots (x2)",
        detail: "2F, western side of the floor, near a boulder.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 037 - High Horsepower",
        detail: "2F, in the central - south part of the floor, right below the heightened platform.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Full Heal (x1)",
        detail: "2F, in the central - east part of the floor, near a walking Tamer.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Metagrossite",
        detail: "2F, in the north east part of the floor, near a Juggler.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "Max Revive (x1)",
        detail: "3F, in the north eastern part of the floor, near an Ace Trainer.",
        isPostGame: false,
        isOptional: true,
      },
      {
        name: "TM 050 - Overheat",
        detail: "3F, northwest, in front of rock on narrow path west of heightened platform.",
        isPostGame: false,
        isOptional: true,
      }
    ]
  },
  {
    name: "Indigo Plateau",
    items: [
      {
        name: "TM 011 - Supercell Slam",
        detail: "From Dumbass Creator after defeating him in front of the league entrance.",
        isPostGame: false,
        isOptional: false,
      }
    ]
  },
  {
    name: "Treasure Beach",
    items: [
      {
        name: "Rock Gem",
        detail: "South of Treasure Beach.",
        isPostGame: true,
        isOptional: true,
      },
      {
        name: "Mewtwonite X",
        detail: "From Red after defeating him on beach(Requires 4 + Battle Simulator win streak).",
        isPostGame: true,
        isOptional: true,
      }
    ]
  },
  {
    name: "Kindle Road",
    items: [
      {
        name: "Bugium Z",
        detail: "On the right of the grass patches, from Bugsy after defeating him in a rematch.",
        isPostGame: true,
        isOptional: true,
      },
      {
        name: "Bug Gem",
        detail: "At the south of where Bugsy's standing.",
        isPostGame: true,
        isOptional: true,
      },
      {
        name: "Big Nugget (x1)",
        detail: "On small islet by first male Swimmer, near Bugsy.",
        isPostGame: true,
        isOptional: true,
      },
      {
        name: "Max Ether (x1)",
        detail: "Obtained by breaking a rock near the first male Swimmer.",
        isPostGame: true,
        isOptional: true,
      }
    ]
  },
  {
    name: "Ember Spa",
    items: [
      {
        name: "HM 07 - Waterfall",
        detail: "From the old man close to the waterfalls.",
        isPostGame: true,
        isOptional: true,
      }
    ]
  },
  {
    name: "Mt. Ember",
    items: [
      {
        name: "TM 112 - Misty Explosion",
        detail: "From a Hiker at the entrance.",
        isPostGame: true,
        isOptional: true,
      },
      {
        name: "Fairium Z",
        detail: "East of the mountain, in a narrow path.",
        isPostGame: true,
        isOptional: true,
      },
      {
        name: "Fire Stone (x1)",
        detail: "Hidden in a rock at the northwest of the mountain.",
        isPostGame: true,
        isOptional: true,
      },
      {
        name: "Dusk Ball (x1)",
        detail: "Northwest of the mountain.",
        isPostGame: true,
        isOptional: true,
      },
      {
        name: "TM 094 - Scale Shot",
        detail: "Northeast of the mountain, after pushing some boulders.",
        isPostGame: true,
        isOptional: true,
      }
    ]
  },
  {
    name: "Two Island",
    items: [
      {
        name: "TM 066 - Steel Beam",
        detail: "Hidden behind a cut tree near the Joyful Game Corner.",
        isPostGame: true,
        isOptional: true,
      },
      {
        name: "Normalium Z",
        detail: "From Whitney post - rematch victory.",
        isPostGame: true,
        isOptional: true,
      }
    ]
  },
  {
    name: "Cape Brink",
    items: [
      {
        name: "Rare Candy (x1)",
        detail: "Hidden behind Rachel's house.",
        isPostGame: true,
        isOptional: true,
      }
    ]
  },
  {
    name: "Three Isle Path",
    items: [
      {
        name: "Nugget (x1)",
        detail: "Hidden in a rock right below the stairs, on the right.",
        isPostGame: true,
        isOptional: true,
      },
      {
        name: "Groundium Z",
        detail: "From the Digger.",
        isPostGame: true,
        isOptional: true,
      }
    ]
  },
  {
    name: "Three Island",
    items: [
      {
        name: "Steelium Z",
        detail: "From one of two NPCs left of Pokémon Center after defeating Bikers.",
        isPostGame: true,
        isOptional: true,
      },
      {
        name: "Grass Gem",
        detail: "In a small path hidden by a cut tree, in the upper right corner.",
        isPostGame: true,
        isOptional: true,
      },
      {
        name: "PP Up (x1)",
        detail: "Hidden on the last tile of the small path, hidden by a cut tree in Bond Bridge.",
        isPostGame: true,
        isOptional: true,
      }
    ]
  },
  {
    name: "Bond Bridge",
    items: [
      {
        name: "Max Repel (x1)",
        detail: "Hidden in a stone.",
        isPostGame: true,
        isOptional: true,
      }
    ]
  },
  {
    name: "Berry Forest",
    items: [
      {
        name: "Ground Gem",
        detail: "Near the pond, next to trainer Barry.",
        isPostGame: true,
        isOptional: true,
      },
      {
        name: "TM 095 - Cosmic Power",
        detail: "In the bottom left corner of the forest, near trainer Sharon.",
        isPostGame: true,
        isOptional: true,
      },
      {
        name: "Max Ether (x1)",
        detail: "North of the forest, next to trainer Janny.",
        isPostGame: true,
        isOptional: true,
      },
      {
        name: "Psychium Z",
        detail: "From Lostelle after saving her from Mew.",
        isPostGame: true,
        isOptional: true,
      },
      {
        name: "Mewium Z",
        detail: "Dropped by Mew after defeating Owen.",
        isPostGame: true,
        isOptional: true,
      }
    ]
  }
]

export default locations