const followersInput = document.getElementById("followers");
const followingInput = document.getElementById("following");

followersInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.name !== "followers_1.json") {
        alert("Csak a followers_1.json fájl engedélyezett!");
        e.target.value = ""; // reset
        return;
    }

    console.log("OK fájl:", file.name);
});

followingInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.name !== "following.json") {
        alert("Csak a following.json fájl engedélyezett!");
        e.target.value = ""; // reset
        return;
    }

    console.log("OK fájl:", file.name);
});

function ChooseFile(button){
    switch(button){
        case "followers":
            followersInput.click();
            break;
        case "following":
            followingInput.click();
            break;
    }
}