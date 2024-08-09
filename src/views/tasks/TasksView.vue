<script setup>
import TaskGrid from '@/components/tasks/TaskGrid.vue';
import TaskIcon from '@/components/icons/TaskIcon.vue';
</script>

<template>
    <div class="page">
        <div class="page-title">
            <TaskIcon :size="40"/>
            Задачи
        </div>
        <div class="page-subtitle">
            Не выполнено
        </div>
        <TaskGrid :status="'Не выполнено'"/>
        <div class="page-subtitle">
            В работе
        </div>
        <TaskGrid :status="'В работе'"/>
        <div class="page-subtitle">
            Готово
        </div>
        <TaskGrid :status="'Готово'"/>
    </div>
</template>

<style scoped>
.page {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.page-title {
    font-size: 40px;
    font-weight: bold;
    color: #cacaca;
    padding-left: 20px;
    display: flex;
    text-align: center;
    align-items: center;
    gap: 10px;
}

.page-subtitle {
    font-size: 30px;
    font-weight: bold;
    color: #a5a5a5;
    border-bottom: #a5a5a5 1px solid;
    padding: 10px 0px 10px 10px;
    margin: 10px;
    display: flex;
    text-align: center;
    align-items: center;
    gap: 10px;
}
</style>