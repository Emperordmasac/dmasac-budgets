import "./App.css";
import { Container } from "semantic-ui-react";
import MainHeader from "./Components/MainHeader";
import NewEntryForm from "./Components/NewEntryForm";
import DisplayBalance from "./Components/DisplayBalance";
import DisplayBalances from "./Components/DisplayBalances";
import { useEffect, useState } from "react";
import EntryLines from "./Components/EntryLines";
import ModalEdit from "./Components/ModalEdit";
import { useDispatch, useSelector } from "react-redux";
import { getAllEntries } from "./actions/entries.actions";

function App() {
    const [incomeTotal, setIncomeTotal] = useState(0);
    const [expenseTotal, setExpenseTotal] = useState(0);
    const [total, setTotal] = useState(0);
    const enteries = useSelector((state) => state.entries);
    const { isOpen, id } = useSelector((state) => state.modals);
    const [entry, setEntry] = useState();

    useEffect(() => {
        const index = enteries.findIndex((entry) => entry.id === id);
        setEntry(enteries[index]);
    }, [isOpen, id, enteries]);

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

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllEntries());
    });
    return (
        <Container>
            <MainHeader title="Budgets" />
            <DisplayBalance size="small" label="Your Budgets:" value={total} />
            <DisplayBalances
                incomeTotal={incomeTotal}
                expenseTotal={expenseTotal}
            />
            <MainHeader type="h3" title="History" />
            <EntryLines enteries={enteries} />
            <MainHeader type="h3" title="Add Transaction" />
            <NewEntryForm />
            <ModalEdit isOpen={isOpen} {...entry} />
        </Container>
    );
}

export default App;
