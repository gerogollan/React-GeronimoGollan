import './ItemListContainer.css'

export default function ItemListContainer(props){
    return(
        <>
        <main>
        <h1>{props.text} </h1>
        <h2 className='H2text'> Estamos empezando!</h2>
        </main>
        </>
    )
}