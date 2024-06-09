const DarkModeSwitch = () => {
    return ( 
        <>
          <input type="checkbox" id="dark-mode"/>
            <label for="dark-mode" className="dark-mode-toggle">
                <i className="fa-solid fa-circle-half-stroke"></i>
            </label>
        </>
     );
}
 
export default DarkModeSwitch;