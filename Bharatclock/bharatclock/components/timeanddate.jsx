function Dateandtime(){
    let datebh = new Date();
    return <p className="lead">The Date and Time is {datebh.toLocaleDateString()} - {datebh.toLocaleTimeString()}</p>
}
export default Dateandtime;