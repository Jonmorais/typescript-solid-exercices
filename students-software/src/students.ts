
class Students {
  private _enrollment: string;
  private _name: string;
  private _grades: number[];

  constructor(name: string, enrollment: string) {
    this._name = name;
    this._enrollment = enrollment;
    this._grades = []
  }
}

export default Students;
