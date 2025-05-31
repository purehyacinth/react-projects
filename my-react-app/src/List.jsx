
function List(props){

    const itemList = props.items;

    // fruits.sort((a, b) => a.name.localeCompare(b.name))
    itemList.sort((a, b)=>a.calories-b.calories);
    // const lowCalFruits = fruits.filter(fruit=> fruit.calories < 100)

    const listItems = itemList.map(fruit => 
    <li key={fruit.id}>
            {fruit.name}: &nbsp;<b> {fruit.calories}</b>
    </li>)

    return(
        <>
            <ul>{listItems}</ul>
        </>
    );
}

export default List 