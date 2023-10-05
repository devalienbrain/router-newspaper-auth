import { useEffect, useState } from "react";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/data/categories.json")
      .then((res) => res.json())
      .then((categories) => setCategories(categories))
      .catch((err) => console.error(err));
  }, []);
  // console.log(categories);
  return (
    <div>
      <h3 className="text-2xl font-bold mb-5">All Category</h3>
      {categories.map((category) => (
        <p key={category.id}>{category.name}</p>
      ))}
    </div>
  );
};
export default LeftNav;
