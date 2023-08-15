import { useState } from "react";
import menu from "./data";
import Menu from "./Menu";
import Categories from "./Categories";
import Title from "./Title";

const App = () => {
  const [text, setText] = useState("Our Menu");
  const [originalData, setOriginalData] = useState(menu);
  const [data, setData] = useState(menu);

  const uniqueItems = new Set();

  uniqueItems.add("all");

  originalData.forEach((item) => {
    if (!uniqueItems.has(item.category)) {
      uniqueItems.add(item.category);
    }
  });

  function filterItems(cat) {
    if (cat === "all") {
      setData(originalData);
      setText("Our Menu");
    } else {
      setData(originalData.filter((el) => el.category === cat));
      setText(cat);
    }
  }
  const uniqueTitles = [...uniqueItems];
  return (
    <main>
      <section className="menu">
        {" "}
        <Title text={text} />
        <Categories
          uniqueTitles={uniqueTitles}
          filterItems={filterItems}
          data={data}
        />
        <Menu data={data} />
      </section>
    </main>
  );
};
export default App;
