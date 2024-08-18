<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    id: {
        type: String,
        required: true
    }
});

const task = ref();
const labels = ref();

function parseDate(date) {
    if (date != null) {
        const formattedDate = new Date(date).toISOString().slice(0, -1);
        return formattedDate;
    } else {
        return null;
    }
}

onMounted(async () => {
    try {
        var response = await fetch(`http://127.0.0.1:8000/tasks/show/${props.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        var data = await response.json();
        task.value = data;

        response = await fetch('http://127.0.0.1:8000/tasks/labels', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        data = await response.json()
        labels.value = data
    } catch (error) {
        console.error('Error fetching task:', error)
    }
})
</script>

<template>
    <div class="task" v-if="task">
        <h1>{{ task.title }}</h1>
        <h2>Даты</h2>
        <div class="date">
            Создана: <input type="datetime-local" :value="parseDate(task.create_date)" readonly />
        </div>
        <div class="date">
            Окончание: <input type="datetime-local" :value="parseDate(task.date_end)" />
        </div>
        <h2>Детали</h2>
        <div class="status-container">
            Статус:
            <div class="status">
                {{ task.status.name }}
            </div>
        </div>
        <div class="priority-container">
            Приоритет:
            <div class="status">
                {{ task.priority.name }}
            </div>
        </div>
        <div class="labels-container">
            Метки:
            <div v-for="label in task.labels" :key="label.id" class="label">
                {{ label.name }}
            </div>
        </div>
        <h2>Описание</h2>
        <textarea v-model="task.description" />
        <h2>Комментарии</h2>
        <div>WIP</div>
    </div>
</template>

<style>
.task {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    color: #a5a5a5;
    gap: 10px;
}

.date {
    font-size: 20px;
    color: #a5a5a5;
    max-width: fit-content;
}

.status-container,
.priority-container,
.labels-container {
    display: flex;
    align-items: center;
    gap: 10px;
}

.status,
.priority,
.label {
    background-color: #2c2c2c;
    border-radius: 10px;
    padding: 2px 10px;
}

input {
    font-size: 20px;
    border-color: transparent;
    border-radius: 10px;
    color: #a5a5a5;
    background-color: #2c2c2c;
    max-width: fit-content;
    padding: 2px 10px;
}

textarea {
    font-size: 20px;
    border-color: transparent;
    border-radius: 10px;
    color: #a5a5a5;
    background-color: transparent;
    height: auto;
    overflow-y: auto;
    resize: vertical;
    min-height: 50px;
    max-height: 200px;
}

textarea:focus {
    outline: none;
    border: none;
}

.form-grid textarea {
    height: 200px;
    resize: none;
}
</style>