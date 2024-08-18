<script setup>
import { ref } from 'vue';
import HomeIcon from './icons/HomeIcon.vue';
import SearchIcon from './icons/SearchIcon.vue';
import AddIcon from './icons/AddIcon.vue';
import TaskIcon from './icons/TaskIcon.vue';

var isActiveLink = ref('');
</script>

<template>
    <div class="logo">N0TEB00K</div>
    <div class="link">
        <SearchIcon />
        Поиск
    </div>
    <div :class="{ links: isActiveLink === 'Home' }">
        <RouterLink to="/" class="link" @click="isActiveLink = 'Home'">
            <HomeIcon />
            Домашняя
        </RouterLink>
    </div>
    <div :class="{ links: isActiveLink === 'Tasks' }">
        <RouterLink to="/tasks" class="link" @click="isActiveLink = 'Tasks'">
            <TaskIcon />
            Задачи
        </RouterLink>
        <RouterLink v-if="isActiveLink === 'Tasks'" to="/task/create" class="link">
            <AddIcon color="#8b8b8b"/>
            Создать
        </RouterLink>
    </div>
</template>

<style scoped>
a {
    color: #8b8b8b;
    text-decoration: transparent;
}

.navbar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    border: 1px solid #373737;
}

.navbar.collapsed {
    padding: 0;
    border: none;
}

.toggle-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 10px;
}

.toggle-button svg {
    transition: transform 0.3s ease;
}

.toggle-button svg rect {
    fill: #8b8b8b;
}

.logo {
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
    border-bottom: #373737 1px solid;
    color: #8b8b8b;
}

.links {
    border-radius: 10px;
    background-color: #2c2c2c;
}

.link {
    font-size: 16px;
    color: #8b8b8b;
    padding: 5px 10px;
    border-radius: 10px;
    display: flex;
    text-align: center;
    gap: 10px;
    align-items: center;
}

.link:hover {
    background-color: #373737;
}
</style>