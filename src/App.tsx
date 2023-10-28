import { useState } from "react";
//import "./App.css";
import ExpenseList from "./expense-tracker/Components/ExpenseList";
import ExpenseFilter from "./expense-tracker/Components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/Components/ExpenseForm";
import categories from "./expense-tracker/categories";
function App() {
  //const [count, setCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Apple", amount: 4, category: "Groceries" },
    { id: 2, description: "Bat", amount: 999, category: "Utilities" },
    { id: 3, description: "Vegetables", amount: 654, category: "Groceries" },
    {
      id: 4,
      description: "PlayStation",
      amount: 9999,
      category: "Entertainment",
    },
  ]);
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        ></ExpenseForm>
      </div>
      <div>
        <div className="mb-3">
          <ExpenseFilter
            onSelectCategory={(category) => setSelectedCategory(category)}
          ></ExpenseFilter>
        </div>

        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        ></ExpenseList>
      </div>
    </>
  );
}

export default App;
/*
<div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
*/
