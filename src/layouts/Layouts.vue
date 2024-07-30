<script setup>
import { computed, watch, ref } from 'vue';
import TopBar from './TopBar.vue';
import SideBar from './SideBar.vue';
</script>

<template>
    <div class="layout-wrapper">
        <top-bar></top-bar>
        <div class="layout-sidebar">
            <side-bar></side-bar>
        </div>
    </div>
    <div class="layout-main-container">
        <div class="layout-main">
            <router-view></router-view>
        </div>
    </div>
</template>