export default function HobbyList(){
    let hobbyLinks = ["https://www.youtube.com/@ElvicCartoons","https://store.steampowered.com/", "https://www.pokemon.com/us/pokemon-tcg"];
    return (
        <div>
            <h3>My Hobbies</h3>
            <a href={hobbyLinks[0]}>My YouTube Channel</a><br></br>
            <a href={hobbyLinks[1]}>Steam Games</a><br></br>
            <a href={hobbyLinks[2]}>Pokemon TCG</a><br></br>
        </div>
    )
}