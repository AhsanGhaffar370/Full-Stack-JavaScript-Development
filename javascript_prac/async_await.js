
const posts = [
    { title: "post One", body: "This is post one"},
    { title: "post Two", body: "This is post two"},
]

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error) {
                resolve();
            }
            else {
                reject('Error: Something went wrong!');
            }
        }, 2000);

    });
    
    
}


//////////////////////////
// async / await
/////////////////////////
// async await is a efficient way to handle promise .then() and .catch() function.
async function init() {
    
    await createPost({ title: 'Post Three', body: 'This is post three'})

    getPosts();
}

init();

async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    console.log(data);
}

fetchUsers();