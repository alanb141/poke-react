import { typeStates } from "../store/collection";

export const calculateDamageRelations = (primaryType, secondaryType = '') => {
  if (!primaryType) return;

  const type1 = typeStates[primaryType];
  const type2 = secondaryType ? typeStates[secondaryType] : null;

  // OFFENSE (Damage To)
  const calcOffense = (key) => [...new Set([...(type1[key] || []), ...(type2 ? type2[key] || [] : [])])];
  const doubleTo = calcOffense('double_damage_to');
  const halfTo = calcOffense('half_damage_to');
  const noDamageFrom = calcOffense('no_damage_from');

  // const noDamageTo = calcOffense('no_damage_to');
  const noDamageTo = [
    ...(type1.no_damage_to || []).map(t => ({ source: primaryType, target: t })),
    ...(type2 ? type2.no_damage_to || [] : []).map(t => ({ source: secondaryType, target: t }))
  ];

  // DEFENSE (Damage From)
  const defenseMultipliers = {};
  const allTypes = Object.keys(typeStates);
  allTypes.forEach(attackingType => {
    let multiplier = 1;
    const lowerAttackType = attackingType.toLowerCase();

    if (type1.double_damage_from.includes(lowerAttackType)) multiplier *= 2;
    if (type1.half_damage_from.includes(lowerAttackType)) multiplier *= 0.5;
    if (type1.no_damage_from.includes(lowerAttackType)) multiplier *= 0;

    if (type2) {
      if (type2.double_damage_from.includes(lowerAttackType)) multiplier *= 2;
      if (type2.half_damage_from.includes(lowerAttackType)) multiplier *= 0.5;
      if (type2.no_damage_from.includes(lowerAttackType)) multiplier *= 0;
    }
    defenseMultipliers[lowerAttackType] = multiplier;
  });

  const quadFrom = [];
  const doubleFrom = [];
  const halfFrom = [];
  const quarterFrom = [];

  Object.entries(defenseMultipliers).forEach(([type, mult]) => {
    if (mult === 4) quadFrom.push(type);
    if (mult === 2) doubleFrom.push(type);
    if (mult === 0.5) halfFrom.push(type);
    if (mult === 0.25) quarterFrom.push(type);
  });
  return { doubleTo, halfTo, noDamageTo, quadFrom, doubleFrom, halfFrom, quarterFrom, noDamageFrom, type2 };
};