const convertObjectWithoutSpace = (obj) => {
    for (const key in obj) {
      const value = obj[key];

      for (const key2 in value) {
        const string = value[key2];

        value[key2] = string.replace(/  +/g, " ");
      }
    }
  };
  const object = {
    primaryInformation: {
      firstName: "John  Doe",
      lastName: "Doe     Space",
    },
  };

  console.log(convertObjectWithoutSpace(object));