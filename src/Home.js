const Home = () => {

    const handlerClick = () =>{
        alert("Click Me has been clicked");
    }
     
    return (
        <div className="home">
            <h2> Home page</h2>
            <button onClick={handlerClick}> Click me</button>
        </div>
    );
}
 
export default Home;