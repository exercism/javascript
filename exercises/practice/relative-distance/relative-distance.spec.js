import { describe, expect, test, xtest } from '@jest/globals';
import { degreesOfSeparation } from './relative-distance';

describe('RelativeDistance', () => {
  test('Direct parent-child relation', () => {
    const familyTree = {
      Vera: ['Tomoko'],
      Tomoko: ['Aditi'],
    };
    const results = degreesOfSeparation(familyTree, 'Vera', 'Tomoko');
    expect(results).toEqual(1);
  });

  xtest('Sibling relationship', () => {
    const familyTree = {
      Dalia: ['Olga', 'Yassin'],
    };
    const results = degreesOfSeparation(familyTree, 'Olga', 'Yassin');
    expect(results).toEqual(1);
  });

  xtest('Two degrees of separation, grandchild', () => {
    const familyTree = {
      Khadija: ['Mateo'],
      Mateo: ['Rami'],
    };
    const results = degreesOfSeparation(familyTree, 'Khadija', 'Rami');
    expect(results).toEqual(2);
  });

  xtest('Unrelated individuals', () => {
    const familyTree = {
      Priya: ['Rami'],
      Kaito: ['Elif'],
    };
    const results = degreesOfSeparation(familyTree, 'Priya', 'Kaito');
    expect(results).toEqual(-1);
  });

  xtest('Complex graph, cousins', () => {
    const familyTree = {
      Aiko: ['Bao', 'Carlos'],
      Bao: ['Dalia', 'Elias'],
      Carlos: ['Fatima', 'Gustavo'],
      Dalia: ['Hassan', 'Isla'],
      Elias: ['Javier'],
      Fatima: ['Khadija', 'Liam'],
      Gustavo: ['Mina'],
      Hassan: ['Noah', 'Olga'],
      Isla: ['Pedro'],
      Javier: ['Quynh', 'Ravi'],
      Khadija: ['Sofia'],
      Liam: ['Tariq', 'Uma'],
      Mina: ['Viktor', 'Wang'],
      Noah: ['Xiomara'],
      Olga: ['Yuki'],
      Pedro: ['Zane', 'Aditi'],
      Quynh: ['Boris'],
      Ravi: ['Celine'],
      Sofia: ['Diego', 'Elif'],
      Tariq: ['Farah'],
      Uma: ['Giorgio'],
      Viktor: ['Hana', 'Ian'],
      Wang: ['Jing'],
      Xiomara: ['Kaito'],
      Yuki: ['Leila'],
      Zane: ['Mateo'],
      Aditi: ['Nia'],
      Boris: ['Oscar'],
      Celine: ['Priya'],
      Diego: ['Qi'],
      Elif: ['Rami'],
      Farah: ['Sven'],
      Giorgio: ['Tomoko'],
      Hana: ['Umar'],
      Ian: ['Vera'],
      Jing: ['Wyatt'],
      Kaito: ['Xia'],
      Leila: ['Yassin'],
      Mateo: ['Zara'],
      Nia: ['Antonio'],
      Oscar: ['Bianca'],
      Priya: ['Cai'],
      Qi: ['Dimitri'],
      Rami: ['Ewa'],
      Sven: ['Fabio'],
      Tomoko: ['Gabriela'],
      Umar: ['Helena'],
      Vera: ['Igor'],
      Wyatt: ['Jun'],
      Xia: ['Kim'],
      Yassin: ['Lucia'],
      Zara: ['Mohammed'],
    };
    const results = degreesOfSeparation(familyTree, 'Dimitri', 'Fabio');
    expect(results).toEqual(9);
  });

  xtest('Complex graph, no shortcut, far removed nephew', () => {
    const familyTree = {
      Mina: ['Viktor', 'Wang'],
      Olga: ['Yuki'],
      Javier: ['Quynh', 'Ravi'],
      Tariq: ['Farah'],
      Viktor: ['Hana', 'Ian'],
      Diego: ['Qi'],
      Carlos: ['Fatima', 'Gustavo'],
      Hana: ['Umar'],
      Jing: ['Wyatt'],
      Sven: ['Fabio'],
      Zane: ['Mateo'],
      Isla: ['Pedro'],
      Quynh: ['Boris'],
      Kaito: ['Xia'],
      Liam: ['Tariq', 'Uma'],
      Priya: ['Cai'],
      Qi: ['Dimitri'],
      Wang: ['Jing'],
      Yuki: ['Leila'],
      Xia: ['Kim'],
      Pedro: ['Zane', 'Aditi'],
      Uma: ['Giorgio'],
      Giorgio: ['Tomoko'],
      Gustavo: ['Mina'],
      Sofia: ['Diego', 'Elif'],
      Leila: ['Yassin'],
      Umar: ['Helena'],
      Aiko: ['Bao', 'Carlos'],
      Fatima: ['Khadija', 'Liam'],
      Oscar: ['Bianca'],
      Wyatt: ['Jun'],
      Ian: ['Vera'],
      Mateo: ['Zara'],
      Noah: ['Xiomara'],
      Celine: ['Priya'],
      Xiomara: ['Kaito'],
      Bao: ['Dalia', 'Elias'],
      Elif: ['Rami'],
      Farah: ['Sven'],
      Aditi: ['Nia'],
      Vera: ['Igor'],
      Boris: ['Oscar'],
      Khadija: ['Sofia'],
      Zara: ['Mohammed'],
      Dalia: ['Hassan', 'Isla'],
      Ravi: ['Celine'],
      Yassin: ['Lucia'],
      Elias: ['Javier'],
      Nia: ['Antonio'],
      Rami: ['Ewa'],
      Hassan: ['Noah', 'Olga'],
      Tomoko: ['Gabriela'],
    };
    const results = degreesOfSeparation(familyTree, 'Lucia', 'Jun');
    expect(results).toEqual(14);
  });

  xtest('Complex graph, some shortcuts, cross-down and cross-up, cousins several times removed', () => {
    const familyTree = {
      Mina: ['Viktor', 'Wang'],
      Olga: ['Yuki'],
      Javier: ['Quynh', 'Ravi'],
      Tariq: ['Farah'],
      Viktor: ['Hana', 'Ian'],
      Diego: ['Qi'],
      Carlos: ['Fatima', 'Gustavo'],
      Hana: ['Umar'],
      Jing: ['Wyatt'],
      Sven: ['Fabio'],
      Zane: ['Mateo'],
      Isla: ['Pedro'],
      Quynh: ['Boris'],
      Kaito: ['Xia'],
      Liam: ['Tariq', 'Uma'],
      Priya: ['Cai'],
      Qi: ['Dimitri'],
      Wang: ['Jing'],
      Yuki: ['Leila'],
      Xia: ['Kim'],
      Pedro: ['Zane', 'Aditi'],
      Uma: ['Giorgio'],
      Giorgio: ['Tomoko'],
      Gustavo: ['Mina'],
      Sofia: ['Diego', 'Elif'],
      Leila: ['Yassin'],
      Umar: ['Helena'],
      Aiko: ['Bao', 'Carlos'],
      Fatima: ['Khadija', 'Liam'],
      Oscar: ['Bianca'],
      Wyatt: ['Jun'],
      Ian: ['Vera'],
      Mateo: ['Zara'],
      Noah: ['Xiomara'],
      Celine: ['Priya'],
      Xiomara: ['Kaito'],
      Bao: ['Dalia'],
      Elif: ['Rami'],
      Farah: ['Sven'],
      Aditi: ['Nia'],
      Vera: ['Igor'],
      Boris: ['Oscar'],
      Khadija: ['Sofia'],
      Zara: ['Mohammed'],
      Dalia: ['Hassan', 'Isla'],
      Ravi: ['Celine'],
      Yassin: ['Lucia'],
      Nia: ['Antonio'],
      Rami: ['Ewa'],
      Hassan: ['Noah', 'Olga'],
      Tomoko: ['Gabriela'],
    };
    const results = degreesOfSeparation(familyTree, 'Wyatt', 'Xia');
    expect(results).toEqual(12);
  });
});
