import { FinancialIndicator } from "../FinancialIndicator";
import "../../css/layout/_Main.css"
export function MainContent() {

    return (
        <section className="sidebar">
            <div className="dashboard">
                <div className="box">
                    <FinancialIndicator title="Credit Card Number" value="1456 1256 1257 8561" />
                    <FinancialIndicator title="Balance" value="$10,000" />
                </div>
                <div className="box">
                    <FinancialIndicator title="Despesas Totais" value="$5,000" />
                    <div className="box">
                        <FinancialIndicator title="Categories" value="$5,000" />
                    </div>
                </div>
                <div className="box">
                    <FinancialIndicator title="Savings" value="$5,000" />
                </div>

            </div>
        </section>
    )
}