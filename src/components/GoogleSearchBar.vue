<template>
        <form id="googleSearch" method="get" action="https://www.google.com/search">
            <input id="googleSearchBar" type="text" name="q" value="" autocomplete="off">  
        </form>
    
</template>

<script>
export default { 
    name: "GoogleSearch"
}
</script>

<style lang="scss" scoped>
$nord0: #2e3440;
$nord1: #3b4252;
$nord2: #434c5e;
$nord3: #4c566a;
$nord4: #d8dee9;
$nord5: #e5e9f0;
$nord6: #eceff4;
$nord7: #8fbcbb;
$nord8: #88c0d0;
$nord9: #81a1c1;
$nord10: #5e81ac;
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');


    input[type=text] {
        width: 60%;
        box-sizing: border-box;
        border-radius: 10vh;
        font-size: 3rem;
        font-family: Quicksand, sans-serif;
        color: $nord6;
        outline: none;
        border: none; 
        box-shadow: none;
        background-color: $nord2;
        background-image: url('../assets/google-icon.svg');
        background-position: 2rem;
        background-repeat: no-repeat;
        background-size: 3rem;
        padding: 0.5rem 6.5rem;
        display: block;
        margin: -7vw auto;
        opacity: 80%;
        -webkit-transition: background-color 0.4s ease-in-out;
        transition: background-color 0.4s ease-in-out;
        -webkit-transition: opacity 0.4s ease-in-out;
        transition: opacity 0.4s ease-in-out;
    }

    input[type=text]:focus {
        background-color: $nord3;
        opacity: 100%;
    }
</style>