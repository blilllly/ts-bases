(() => {
  const fullName = (firstName: string, lastName: string): string => {
    if (!firstName) {
      throw new Error("Nombre Requerido");
    }
    return `${firstName} ${lastName}`;
  };

  const name = fullName("Tony", "Stark");

  console.log({ name });
})();
