const abilities = [
  { name: "Unknown" },
  { name: "Adaptability" },
  { name: "Aerilate" },
  { name: "Aftermath" },
  { name: "Analytic" },
  { name: "Anger Point" },
  { name: "Anger Shell" },
  { name: "Arena Trap" },
  { name: "Aroma Veil" },
  { name: "As One <Ice>" },
  { name: "As One <Shadow>" },
  { name: "Bad Company" },
  { name: "Bad Dreams" },
  { name: "Battle Armor" },
  { name: "Battle Bond" },
  { name: "Beads of Ruin" },
  { name: "Beast Boost" },
  { name: "Berserk" },
  { name: "Blaze" },
  { name: "Blazing Soul" },
  { name: "Bone Zone" },
  { name: "Bull Rush" },
  { name: "Bulletproof" },
  { name: "Cheek Pouch" },
  { name: "Chlorophyll" },
  { name: "Clear Body" },
  { name: "Cloud Nine" },
  { name: "Comatose" },
  { name: "Competitive" },
  { name: "Compound Eyes" },
  { name: "Contrary" },
  { name: "Corrosion" },
  { name: "Cotton Down" },
  { name: "Cursed Body" },
  { name: "Cute Charm" },
  { name: "Damp" },
  { name: "Dancer" },
  { name: "Dark Aura" },
  { name: "Valiant Shield" },
  { name: "Dazzling" },
  { name: "Defeatist" },
  { name: "Defiant" },
  { name: "Delta Stream" },
  { name: "Desolate Land" },
  { name: "Disguise" },
  { name: "Download" },
  { name: "Dragon's Maw" },
  { name: "Drizzle" },
  { name: "Drought" },
  { name: "Dry Skin" },
  { name: "Early Bird" },
  { name: "Earth Eater" },
  { name: "Effect Spore" },
  { name: "Electric Surge" },
  { name: "Electromorphosis" },
  { name: "Emergency Exit" },
  { name: "Fairy Aura" },
  { name: "Fatal Precision" },
  { name: "Feline Prowess" },
  { name: "Flame Body" },
  { name: "Flaming Soul" },
  { name: "Flare Boost" },
  { name: "Flash Fire" },
  { name: "Flower Gift" },
  { name: "Fluffy" },
  { name: "Forecast" },
  { name: "Forewarn" },
  { name: "Friend Guard" },
  { name: "Frisk" },
  { name: "Fur Coat" },
  { name: "Gale Wings" },
  { name: "Galvanize" },
  { name: "Gluttony" },
  { name: "Good as Gold" },
  { name: "Gooey" },
  { name: "Gorilla Tactics" },
  { name: "Grass Pelt" },
  { name: "Grassy Surge" },
  { name: "Grim Neigh" },
  { name: "Gulp Missile" },
  { name: "Guts" },
  { name: "Hadron Engine" },
  { name: "Harvest" },
  { name: "Heatproof" },
  { name: "Heavy Metal" },
  { name: "Huge Power" },
  { name: "Hunger Switch" },
  { name: "Hustle" },
  { name: "Hydration" },
  { name: "Hyper Cutter" },
  { name: "Ice Body" },
  { name: "Ice Face" },
  { name: "Ice Scales" },
  { name: "Illuminate" },
  { name: "Illusion" },
  { name: "Immunity" },
  { name: "Imposter" },
  { name: "Infiltrator" },
  { name: "Innards Out" },
  { name: "Inner Focus" },
  { name: "Insomnia" },
  { name: "Intimidate" },
  { name: "Intrepid Sword" },
  { name: "Iron Barbs" },
  { name: "Iron Fist" },
  { name: "Justified" },
  { name: "Leaf Guard" },
  { name: "Levitate" },
  { name: "Light Metal" },
  { name: "Lightning Rod" },
  { name: "Limber" },
  { name: "Liquid Ooze" },
  { name: "Liquid Voice" },
  { name: "Magic Bounce" },
  { name: "Magic Guard" },
  { name: "Magician" },
  { name: "Magma Armor" },
  { name: "Magnet Pull" },
  { name: "Marvel Scale" },
  { name: "Mega Launcher" },
  { name: "Merciless" },
  { name: "Minus" },
  { name: "Misty Surge" },
  { name: "Mold Breaker" },
  { name: "Motor Drive" },
  { name: "Mountaineer" },
  { name: "Moxie" },
  { name: "Multiscale" },
  { name: "Multitype" },
  { name: "Mummy" },
  { name: "Natural Cure" },
  { name: "Neuroforce" },
  { name: "Neutralizing Gas" },
  { name: "No Guard" },
  { name: "Oblivious" },
  { name: "ORAORAORAORA!" },
  { name: "Orichalcum Pulse" },
  { name: "Overcoat" },
  { name: "Overgrow" },
  { name: "Own Tempo" },
  { name: "Parasitic Waste" },
  { name: "Parental Bond" },
  { name: "Pastel Veil" },
  { name: "Perish Body" },
  { name: "Phoenix Down" },
  { name: "Pickup" },
  { name: "Pixilate" },
  { name: "Plus" },
  { name: "Poison Heal" },
  { name: "Poison Touch" },
  { name: "Power Construct" },
  { name: "Prankster" },
  { name: "Pressure" },
  { name: "Primal Armor" },
  { name: "Primordial Sea" },
  { name: "Prism Armor" },
  { name: "Protean" },
  { name: "Protosynthesis" },
  { name: "Psychic Surge" },
  { name: "Punk Rock" },
  { name: "Purifying Salt" },
  { name: "Quark Drive" },
  { name: "Quick Draw" },
  { name: "Quick Feet" },
  { name: "Rain Dish" },
  { name: "Receiver" },
  { name: "Reckless" },
  { name: "Refrigerate" },
  { name: "Regenerator" },
  { name: "Ripen" },
  { name: "Rivalry" },
  { name: "Rock Head" },
  { name: "Rocky Payload" },
  { name: "Run Away" },
  { name: "Sage Power" },
  { name: "Sand Force" },
  { name: "Sand Rush" },
  { name: "Sand Spit" },
  { name: "Sand Stream" },
  { name: "Sand Veil" },
  { name: "Sap Sipper" },
  { name: "Schooling" },
  { name: "Scrappy" },
  { name: "Screen Cleaner" },
  { name: "Seed Sower" },
  { name: "Self Sufficient" },
  { name: "Serene Grace" },
  { name: "Shadow Shield" },
  { name: "Shadow Tag" },
  { name: "Sharpness" },
  { name: "Shed Skin" },
  { name: "Sheer Force" },
  { name: "Shield Dust" },
  { name: "Shields Down" },
  { name: "Simple" },
  { name: "Skill Link" },
  { name: "Slow Start" },
  { name: "Slush Rush" },
  { name: "Sniper" },
  { name: "Snow Cloak" },
  { name: "Snow Warning" },
  { name: "Solar Power" },
  { name: "Solid Rock" },
  { name: "Soul-Heart" },
  { name: "Soundproof" },
  { name: "Speed Boost" },
  { name: "Stakeout" },
  { name: "Stalwart" },
  { name: "Stamina" },
  { name: "Stance Change" },
  { name: "Static" },
  { name: "Steadfast" },
  { name: "Steam Engine" },
  { name: "Steely Spirit" },
  { name: "Steelworker" },
  { name: "Stench" },
  { name: "Sticky Hold" },
  { name: "Storm Drain" },
  { name: "Striker" },
  { name: "Strong Jaw" },
  { name: "Sturdy" },
  { name: "Suction Cups" },
  { name: "Super Luck" },
  { name: "Supreme Overlord" },
  { name: "Surge Surfer" },
  { name: "Swarm" },
  { name: "Sweet Veil" },
  { name: "Swift Swim" },
  { name: "Sword of Ruin" },
  { name: "Synchronize" },
  { name: "Tablets of Ruin" },
  { name: "Technician" },
  { name: "Telepathy" },
  { name: "Thermal Exchange" },
  { name: "Thick Fat" },
  { name: "Tinted Lens" },
  { name: "Torrent" },
  { name: "Tough Claws" },
  { name: "Toxic Boost" },
  { name: "Toxic Debris" },
  { name: "Trace" },
  { name: "Transistor" },
  { name: "Triage" },
  { name: "Truant" },
  { name: "Turboblaze" },
  { name: "Unaware" },
  { name: "Unburden" },
  { name: "Unnerve" },
  { name: "Unseen Fist" },
  { name: "Vessel of Ruin" },
  { name: "Victory Star" },
  { name: "Volt Absorb" },
  { name: "Wandering Spirit" },
  { name: "Water Absorb" },
  { name: "Water Bubble" },
  { name: "Water Compaction" },
  { name: "Water Veil" },
  { name: "Weak Armor" },
  { name: "Well-Baked Body" },
  { name: "Wind Rider" },
  { name: "Wonder Guard" },
  { name: "Wonder Skin" },
  { name: "Zen Mode" },
  { name: "Zero to Hero" }
]

export default abilities