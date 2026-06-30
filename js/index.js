const followersInput = document.getElementById("followers");
const followingInput = document.getElementById("following");

checkFiles();

followersInput.addEventListener("change", async(e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.name !== "followers_1.json") {
        alert("Csak a followers_1.json fájl engedélyezett!");
        e.target.value = "";
        return;
    }

    const data = await file.text();
    sessionStorage.setItem("followers", data);
    checkFiles();
});

followingInput.addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.name !== "following.json") {
        alert("Csak a following.json fájl engedélyezett!");
        e.target.value = "";
        return;
    }

    const data = await file.text();
    sessionStorage.setItem("following", data);
    checkFiles();
});

function ChooseFile(button){
    switch (button){
        case "followers":
            followersInput.click();
            break;
        case "following":
            followingInput.click();
            break;
    }
}

function checkFiles() {
    if (sessionStorage.getItem("followers") &&
        sessionStorage.getItem("following")) {
        location.href = "main.html";
    }
}

function OpenTab(){
    window.open("https://accountscenter.instagram.com/info_and_permissions/dyi/", "_blank");
}
