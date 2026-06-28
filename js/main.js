const followers = JSON.parse(sessionStorage.getItem("followers"));
const following = JSON.parse(sessionStorage.getItem("following"));

if (!followers || !following) {
    location.href = "../index.html";
}

const followerList = followers.map(user => ({
    name: user.string_list_data[0].value,
    link: user.string_list_data[0].href
}));

const followingList = following.relationships_following.map(user => ({
    name: user.title,
    link: user.string_list_data[0].href
}));

const followerNames = new Set(followerList.map(u => u.name));

const notFollowingBack = followingList.filter(user =>
    !followerNames.has(user.name)
);

const div = document.querySelector(".row");

let html = "";

notFollowingBack.forEach((element, index) => {
    html += `
    <div class="col-sm-12 col-md-6 col-lg-4">
        <div class="card">
            <img src="../img/instagram.png"/>
            <div class="card-body">
                <div class="content">
                    <div>
                        <h5><b>${element.name}</b></h5>

                        <a href="${element.link}" target="_blank">
                            Profil megnyitása
                        </a>
                    </div>
                    <button onclick="this.closest('.col-sm-12').remove()">
                        Törlés
                    </button>
                </div>
            </div>
        </div>
    </div>`;
});

div.innerHTML = html;