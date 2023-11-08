function HobbyLinks() {
    let hobbyLinks = [
        "https://www.chewy.com/",
        "http://www.bjjfanatics.com/"
    ];
    return (
    <div>
        <h4>Hobbies</h4>
            <p><a href = {hobbyLinks[0]}>Chewy</a> </p>
            <p><a href = {hobbyLinks[1]}>BJJ Fanatics</a> </p>
    </div>
    );
 }

 export default HobbyLinks;