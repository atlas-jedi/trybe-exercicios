type Discipline = {
  name: string;
  grade: number;
  letterGrade?: string;
};

type Student = {
  name: string;
  disciplines: Discipline[];
};

/* Converter */
function percentageToLetterGrade({ name: studentName, disciplines }: Student):
{ name: string, disciplines: Discipline[] } {
  return {
    name: studentName,
    disciplines: disciplines.map(({ name, grade }) => {
      let letterGrade;

      if (grade >= 0.9) letterGrade = 'A';
      else if (grade >= 0.8) letterGrade = 'B';
      else if (grade >= 0.7) letterGrade = 'C';
      else if (grade >= 0.6) letterGrade = 'D';
      else if (grade >= 0.1) letterGrade = 'E';
      else letterGrade = 'F';

      return { name, grade, letterGrade };
    }),
  };
}

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
