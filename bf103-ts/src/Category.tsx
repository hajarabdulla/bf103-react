import React, { useRef, useState } from "react";

interface IProps {
  title: string;
  name: string;
}

const Category = ({ title, name }: IProps) => {
  const [value, setValue] = useState<string>("");
  //   const divRef= useRef<>(null)

  return (
    <div>
      Category
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        type="text"
        name=""
        id=""
      />
    </div>
  );
};

export default Category;
