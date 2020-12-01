export class Person {
  constructor(
    public id: number = 0,
    public firstName: string = '',
    public urlImage: string = '',
    public name: string = '',
    public job: string = '',
    public cin: number = 0,
    public age: number = 0 ){
      this.id = id;
      this.firstName = firstName;
      this.urlImage = urlImage;
      this.name = name;
      this.job = job;
      this.cin = cin;
      this.age = age ;
    }
}
