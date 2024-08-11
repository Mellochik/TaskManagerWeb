<script setup>
import TaskGrid from '@/components/tasks/TaskGrid.vue';
import TaskIcon from '@/components/icons/TaskIcon.vue';
</script>

<template>
    <div class="page">
        <h1>
            <TaskIcon :size="40"/>
            Задачи
        </h1>
        <h2>
            Не выполнено
        </h2>
        <TaskGrid :status="'Не выполнено'"/>
        <h2>
            В работе
        </h2>
        <TaskGrid :status="'В работе'"/>
        <h2>
            Готово
        </h2>
        <TaskGrid :status="'Готово'"/>
    </div>
</template>

<style scoped>
.page {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

h1 {
    font-size: 40px;
    font-weight: bold;
    color: #cacaca;
    padding-left: 20px;
    display: flex;
    text-align: center;
    align-items: center;
    gap: 10px;
    margin: 0px;
}

h2 {
    font-size: 30px;
    font-weight: bold;
    color: #a5a5a5;
    padding: 10px 0px 10px 10px;
    margin: 10px;
    display: flex;
    text-align: center;
    align-items: center;
    gap: 10px;
}
</style>