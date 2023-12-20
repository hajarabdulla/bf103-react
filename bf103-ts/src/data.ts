interface IHobby {
  hobbyName: string;
  hours: string;
}

interface IData {
  name: string;
  surname: string;
  age: number;
  hobby: IHobby;
}

export const data: IData[] = [
  {
    name: "Hajar",
    surname: "Abdullayeva",
    age: 22,
    hobby: {
      hobbyName: "swimming",
      hours: "jds",
    },
  },
];
