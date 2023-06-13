import ExpenseItem from "./components/ExpenseItem";

function App() {
  const data = [
    {
      id: 1,
      amount: 200,
      title: 'Pappers',
      date: new Date(2020, 7, 14),
    },
    {
      id: 2,
      amount: 200,
      title: 'Toilet Paper',
      date: new Date(2021, 5, 12),
    },
    {
      id: 3,
      amount: 200,
      title: 'Woodeen Paper',
      date: new Date(2021, 2, 28),
    },
    {
      id: 4,
      amount: 200,
      title: 'Insurance Pappers ',
      date: new Date(2000, 1, 1),
    },
  ]
  return (
    <div className="App">
      <ExpenseItem title={data[0].title} amount={data[0].amount} date={data[0].date} />
      <ExpenseItem title={data[1].title} amount={data[1].amount} date={data[1].date} />
      <ExpenseItem title={data[2].title} amount={data[2].amount} date={data[2].date} />
      <ExpenseItem title={data[3].title} amount={data[3].amount} date={data[3].date} />
    </div>
  )
}

export default App;
