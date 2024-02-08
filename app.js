//1)დავწეროთ Promise რომლის მიხედვითაც პირობითად მოგვდის სამი სერვერიდან დატა ანუ გვჭირდება სამი ფუნქცია ფრომისით,
// და ერთერთი მაინც რომ reject იყოს არ უნდა მქონდეს საშუალება რომ მივიღო response წარმატებულ შედეგად.

let CheckPromis1 = () => {
  return new Promise((Resolve, Reject) => {
    Resolve("Data 1");
  });
};
let CheckPromis2 = () => {
  return new Promise((Resolve, Reject) => {
    Reject("error");
    Resolve("Data 2");
  });
};
let CheckPromis3 = () => {
  return new Promise((Resolve, Reject) => {
    Resolve("Data 3");
  });
};

Promise.all([CheckPromis1(), CheckPromis2(), CheckPromis3()]).then(
  (Response) => {
    console.log(Response);
  }
).catch(console.log);

//2)დავწეროთ ასინქრონული ფუნქციები სადაც გვექნება Promise, რომლის მიხედვითაც პირობითად მოგვდის ოთხი სერვერიდან
// user data და ეს Promise უნდა აბრუნებდეს სხვასხვა დატას, მაგალითად [{id: 1, name: 'luka', isAdmin: false}]
// რომელიც პირველი დაასწრებს შესრულებას ის დატა უნდა მივიღო კონსოლში.

let userData1 = () => {
  let Data1 = [
    {
      id: 1,
      name: "luka",
      isAdmin: false,
    },
  ];
  return new Promise((Resolve, Reject) => {
    setTimeout(() => {
      Resolve(Data1);
    }, 1000);
  });
};

let userData2 = () => {
  let Data2 = [
    {
      id: 2,
      name: "nugo",
      isAdmin: true,
    },
  ];
  return new Promise((Resolve, Reject) => {
    setTimeout(() => {
      Resolve(Data2);
    }, 800);
  });
};

let userData3 = () => {
  let Data3 = [
    {
      id: 3,
      name: "gio",
      isAdmin: false,
    },
  ];
  return new Promise((Resolve, Reject) => {
    setTimeout(() => {
      Resolve(Data3);
    }, 1100);
  });
};

Promise.race([userData1(), userData2(), userData3()]).then((Response1) => {
  console.log(Response1);
}).catch(console.log);
