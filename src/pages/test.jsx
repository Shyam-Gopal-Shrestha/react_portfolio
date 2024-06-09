const Test = () => {
    // Logic in JS
    const handleOnClick = () => {
        alert("HELLO SS")
    }
    
    return(
        <div>
            <button onClick={handleOnClick}>Click ME</button>
        </div>
    )
}

export default Test