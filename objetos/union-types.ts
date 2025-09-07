(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  };

  let myCustomVariable: string | number | Hero = "Billy";
  console.log(typeof myCustomVariable);

  myCustomVariable = 20;
  console.log(typeof myCustomVariable);

  myCustomVariable = {
    name: "Spiderman",
    age: 18,
    powers: ["Sentido Aracnido", "Lanzar Telarañas"],
  };
  console.log(typeof myCustomVariable);
  console.log(myCustomVariable);
})();
