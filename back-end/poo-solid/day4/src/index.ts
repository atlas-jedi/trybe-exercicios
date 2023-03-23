type Discipline = {
  name: string;
  grade: number;
  letterGrade?: string;
};

type Student = {
  name: string;
  disciplines: Discipline[];
};

/* Apoio para a função `getGradeLetter` */
const GRADE_DICT = {
  numbers: [0.9, 0.8, 0.7, 0.6, 0.1],
  letters: ['A', 'B', 'C', 'D', 'E'],
};

/* Função menor para remover o uso excessivo de `if{}else`s */
const getGradeLetter = (gradeNumber: number): string => {
  const gradeNumbers = GRADE_DICT.numbers;
  const gradeLetters = GRADE_DICT.letters;
  for (let i = 0; i < gradeNumbers.length; i += 1) {
    if (gradeNumber >= gradeNumbers[i]) return gradeLetters[i];
  }
  return 'F';
};

/* Coletar notas */
const getLetterGrades = (discipline: Discipline): Discipline => ({
  ...discipline,
  letterGrade: getGradeLetter(discipline.grade),
});

/* Converter */
const percentageToLetterGrade = (student: Student): Student => ({
  ...student,
  disciplines: student.disciplines.map(getLetterGrades),
});

/* Determinar */
function approvedStudents({ disciplines }: Student): boolean {
  return disciplines.every(({ grade }) => grade > 0.7);
}

/* Atualizar */
function updateApprovalData({ name: studentName, disciplines }: Student): void {
  console.log(`A pessoa com nome ${studentName} foi aprovada!`);

  disciplines.map(({ name, letterGrade }) =>
    console.log(`${name}: ${letterGrade}`));
}

/* Função principal */
function setApproved(students: Array<Student>): void {
  students
    .map(percentageToLetterGrade)
    .filter(approvedStudents)
    .map(updateApprovalData);
}

export {
  percentageToLetterGrade,
  approvedStudents,
  updateApprovalData,
  setApproved,
};
