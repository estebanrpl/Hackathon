import "../../css/layout/_Header.css"

export function FinancialIndicator({ title, value }) {

    return (
        <div className="indicator">
            <h2 className="indicator-title">{title}</h2>
            <p className="indicator-value">{value}</p>
        </div>
    )
}