
class Students {
  private _enrollment: string;
  private _name: string;
  private _grades: number[];

  constructor(name: string, enrollment: string) {
    this._name = name;
    this._enrollment = enrollment;
    this._grades = []
  }

  public get enrollment(): string {
    return this._enrollment;
  }

  
  public set enrollment(value : string) {
    this._enrollment = value;
  }
  
  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    if (value.length < 2) {
      throw new Error('The name must have at least 2 characters')
    }

    this._name = value;
  }

  public get grades() : number[] {
    return this._grades
  }
    
  public set grades(value : number[]) {
    this._grades = value;
  }  
}

export default Students;
