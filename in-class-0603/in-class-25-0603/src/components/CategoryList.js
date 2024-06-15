import React from "react";
import { Link } from "react-router-dom";
import "./CategoryList.css";

const categories = [
  { id: 1, name: "한식" },
  { id: 2, name: "중식" },
  { id: 3, name: "일식" },
  { id: 4, name: "양식" },
];

const CategoryList = () => {
  return (
    <div className="category-list">
      {categories.map((category) => (
        <div key={category.id} className="category-item">
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
