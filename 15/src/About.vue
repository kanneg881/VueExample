<template>
    <div>
        <h1>About</h1>
        <router-link to="/about/both">Both</router-link>
        <router-link :to="{name: 'us'}">Us</router-link>
        <router-link to="/about/you">You</router-link>
        <router-view></router-view>
        <router-view name="us"></router-view>
        <router-view name="you"></router-view>
    </div>
</template>
