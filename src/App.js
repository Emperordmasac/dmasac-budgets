import "./App.css";
import { Container } from "semantic-ui-react";
import MainHeader from "./Components/MainHeader";
import NewEntryForm from "./Components/NewEntryForm";
import DisplayBalance from "./Components/DisplayBalance";
import DisplayBalances from "./Components/DisplayBalances";
import EntryLine from "./Components/EntryLine";

function App() {
    return (
        <Container>
            <MainHeader title="Budgets" />

            <DisplayBalance
                size="small"
                label="Your Budgets:"
                value="2,550.23"
            />

            <DisplayBalances />

            <MainHeader type="h3" title="History" />

            <EntryLine description="Something" value="$10, 000" isExpense />

            <EntryLine description="Something else" value="$100, 000" />

            <MainHeader type="h3" title="Add Transaction" />
            <NewEntryForm />
        </Container>
    );
}

export default App;
