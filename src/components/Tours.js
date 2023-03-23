import Card from "./Card";

function Tours({tours, removetour}) {
    return <>
        {tours.map((item) => (
            <Card key={item.id} {...item} removetour={removetour}></Card>
        ))}
    </>
};

export default Tours;