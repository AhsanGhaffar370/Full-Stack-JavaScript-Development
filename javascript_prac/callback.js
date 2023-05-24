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

function createPost(post , callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 4000);
}


// createPost({ title: 'Post Three', body: 'This is post three'});
createPost({ title: 'Post Three', body: 'This is post three'}, getPosts);

// getPosts();





/////////////
// Example 2
/////////////

function getName(name , callback) {
    setTimeout(() => {
        console.log('inside name api');

        // API -> find user record exist in database
        let api_response = true;

        callback(name);
    }, 2000);
}

function getHobbies(name, callback) {
    setTimeout(() => {
        console.log('inside hobbies api');

        // API -> find hobbies of a person from name
        let api_response = ['Cricket', 'reading', 'biking'];
        
        callback(api_response);
    }, 1000);
}





const name = getName('Ahsan', (name) => {
    console.log(name);
    getHobbies(name, (hobby) => {
        console.log(hobby);
    })
})