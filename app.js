const totalDMG = 0

totalDMG = simpleATKStuff * (talentDMGValue * (1 + talentMultiplier)) * (1 + elementDMG + multipleDMGBonusesByType) * (1 + deepenDMG) * cdmg * def * (1 - resistance + resistanceReduction)



const simpleATKStuff = (characterATK + weaponATK) * (1 + atkPercent) + atkFlat
// Full Damage formula source: https://wutheringwaves.gg/damage-calculation-guide/
// (characterATK + weaponATK)
const characterATK = 0
const weaponATK = 0

// (1 + bonusAttack%)
const atkPercent = 0
// (bonusFlatATK)
const atkFlat = 0


// (SkillMultiplier * (1 + SkillScalingBonus))
// SkillMultiplier - every row in each seperate category (Normal Attacks, Resonance Skill, Forte, Resonance Liberation, Intro)
const talentDMGValue = 0 
// SkillScalingBonus
const talentMultiplier = 0


// (1 + bonusElementalDamage + bonusSkillDamage)
const elementDMG = 0
const multipleDMGBonusesByType = 0


// (1 + TotalDeepenEffect)
const deepenDMG = 0


// CriticalDamageMultiplier
const cdmg = noCritRateHit
const noCritRateHit = 1


// 0.48 replaced by full formula https://wutheringwaves.fandom.com/wiki/Damage
const def = (800 + 8 * attackerLevel) / (800 + 8 * attackerLevel + enemyDEF * (1 - ignoreDEF))
const enemyDEF = 8 * enemyLevel + 792
// Changli has this it in her inherit skill and S6
const ignoreDEF = 0




// (1 - EnemyResistance + ResistanceReduction)
const resistance = "https://wuthering.wiki/monsters.html"
// S6 Spectro Rover has this
const resistanceReduction = 0
