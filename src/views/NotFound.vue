<!-- src/views/NotFound.vue -->
<template>
    <div class="not-found">
       <h1 class="error-code">404</h1>
       <p class="error-message">Sorry, the page you are looking for does not exist.</p>
       <router-link to="/" class="home-link">Go back to Home</router-link>
    </div>
 </template>
 <script>
    export default {
      name: 'NotFound',
    };
 </script>
 <style scoped>
    .not-found {
    text-align: center;
    margin-top: 50px;
    }
    .error-code {
    font-size: 6rem; /* Adjust size as needed */
    font-weight: bold;
    background: linear-gradient(90deg, #fd6900, #f4097b);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    }
    .error-message {
    font-size: 1.25rem; /* Adjust size as needed */
    margin-top: 1rem;
    }
    .home-link {
    display: inline-block;
    margin-top: 1rem;
    font-size: 1.125rem; /* Adjust size as needed */
    color: #fd6900; /* Match gradient start color */
    text-decoration: none;
    border: 1px solid #fd6900; /* Match gradient start color */
    padding: 0.5rem 1rem;
    border-radius: 4px;
    }
    .home-link:hover {
    background-color: #fd6900;
    color: #fff;
    }
 </style>