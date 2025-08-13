export default function ProductCard (props) {
    return (
        <div className="prod-card">
            <div>
            <h1> { props.title } </h1> </div>
            <p> { props.description } </p>
        </div>
        )
    }