(() => {
  class Avenger {
    static avgAge: number = 35;
    static getAvgAge() {
      return this.name; //este es el nombre de la clase
    }

    constructor(
      private name: string,
      private team: string,
      public realName?: string
    ) {}

    public bio(): string {
      return `${this.name} (${this.team})`;
    }
  }

  //   const antMan: Avenger = new Avenger("Antman", "Capitan", "Scott Lang");
  //   console.log(antMan);
  //   console.log(Avenger.getAvgAge());
})();
