// Get the user's country from the cookie
// fix this function. 
//const db = require('../database/db');  //improt db connectoin

function getUserCountry() {
    /*
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === 'country') {
            return decodeURIComponent(value);
        }
    }
    */
    return 'Afghanistan'; // If the country cookie is not set
}

// Fetch and display posts from different countries
const loadFeed = async(e) => {
    e.preventDefault(); 
    const userCountry = getUserCountry();
    if (!userCountry) {
        // Handle the case where the country cookie is not set
        alert('Please log in to view the feed.');
        window.location.href = 'login.html';
        return;
    }

    // Fetch posts from the database
    fetch('http://localhost:3000/api/posts/feed', { // Replace 'fetch_posts.php' with your server-side script
        method: 'POST',
        body: JSON.stringify({ userCountry }), // Send the user's country to the server
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(posts => {
        const feedContainer = document.getElementById('feed');
        
        feedContainer.innerHTML = '';
        // alert(posts.length)
        // alert(posts[0])
        if (posts.length === 0) {
            feedContainer.textContent = 'No posts available from other countries.';
        } else {
            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');
                postElement.innerHTML = `
                    <h3>${post.full_name}</h3>
                    <p>${post.caption}</p>
                `;
                 feedContainer.appendChild(postElement);
            });
        }
    })
    .catch(error => {
        console.error('Error fetching posts:', error);
    });
}

// Load the feed when the page is loaded
// window.addEventListener('load', loadFeed);
