import "./App.css";
import { Container } from "semantic-ui-react";
import MainHeader from "./Components/MainHeader";
import NewEntryForm from "./Components/NewEntryForm";
import DisplayBalance from "./Components/DisplayBalance";
import DisplayBalances from "./Components/DisplayBalances";
import { useEffect, useState } from "react";
import EntryLines from "./Components/EntryLines";
import ModalEdit from "./Components/ModalEdit";

function App() {
    const [enteries, setEntries] = useState(initialEntries);
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");
    const [isExpense, setIsExpense] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [entryId, setEntryId] = useState();
    const [incomeTotal, setIncomeTotal] = useState(0);
    const [expenseTotal, setExpenseTotal] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (!isOpen && entryId) {
            const index = enteries.findIndex((entry) => entry.id === entryId);
            const newEntries = [...enteries];
            newEntries[index].description = description;
            newEntries[index].value = value;
            newEntries[index].isExpense = isExpense;
            setEntries(newEntries);
            resetEntry();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    useEffect(() => {
        let totalIncomes = 0;
        let totalExpenses = 0;

        enteries.map((entry) => {
            if (entry.isExpense) {
                return (totalExpenses += Number(entry.value));
            }
            return (totalIncomes += Number(entry.value));
        });
        setTotal(totalIncomes - totalExpenses);
        setExpenseTotal(totalExpenses);
        setIncomeTotal(totalIncomes);
    }, [enteries]);

    const deleteEntry = (id) => {
        const result = enteries.filter((entry) => entry.id !== id);
        setEntries(result);
    };

    const addEntry = () => {
        const result = enteries.concat({
            id: enteries.length + 1,
            description,
            value,
            isExpense,
        });
        setEntries(result);
    };

    const resetEntry = () => {
        setDescription("");
        setValue("");
        setIsExpense(true);
    };

    const editEntry = (id) => {
        console.log(`edit entry with id ${id}`);
        if (id) {
            const index = enteries.findIndex((entry) => entry.id);
            const entry = enteries[index];
            setEntryId(id);
            setDescription(entry.description);
            setValue(entry.value);
            setIsExpense(entry.isExpense);
            setIsOpen(true);
        }
    };

    return (
        <Container>
            <MainHeader title="Budgets" />
            <DisplayBalance size="small" label="Your Budgets:" value={total} />
            <DisplayBalances
                incomeTotal={incomeTotal}
                expenseTotal={expenseTotal}
            />
            <MainHeader type="h3" title="History" />
            <EntryLines
                enteries={enteries}
                deleteEntry={deleteEntry}
                editEntry={editEntry}
            />
            <MainHeader type="h3" title="Add Transaction" />
            <NewEntryForm
                addEntry={addEntry}
                description={description}
                value={value}
                isExpense={isExpense}
                setValue={setValue}
                setDescription={setDescription}
                setIsExpense={setIsExpense}
            />
            <ModalEdit
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                description={description}
                value={value}
                isExpense={isExpense}
                setValue={setValue}
                setDescription={setDescription}
                setIsExpense={setIsExpense}
            />
        </Container>
    );
}

export default App;

var initialEntries = [
    {
        id: 1,
        description: "Work income",
        value: 1000.0,
        isExpense: false,
    },
    {
        id: 2,
        description: "Water bill",
        value: 20.0,
        isExpense: true,
    },
    {
        id: 3,
        description: "Rent",
        value: 300.0,
        isExpense: true,
    },
    {
        id: 4,
        description: "Power bill",
        value: 50.0,
        isExpense: true,
    },
];
