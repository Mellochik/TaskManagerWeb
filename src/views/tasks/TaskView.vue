<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    id: {
        type: String,
        required: true
    }
});

const task = ref({
    "id": 0,
    "title": "string",
    "create_date": "2024-08-10T19:10:01.306Z",
    "date_end": "2024-08-10T19:10:01.306Z",
    "description": "string",
    "priority": {
        "name": "string",
        "id": 0
    },
    "status": {
        "name": "string",
        "id": 0
    },
    "labels": []
});

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
        const response = await fetch(`http://127.0.0.1:8000/tasks/show/${props.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()
        task.value = data
    } catch (error) {
        console.error('Error fetching task:', error)
    }
})
</script>

<template>
    <div class="task">
        <h1>{{ task.title }}</h1>
        <div class="date">
            Создана: <input type="datetime-local" :value="parseDate(task.create_date)"/>
        </div>
        <div class="date">
            Окончание: <input type="datetime-local" :value="parseDate(task.date_end)" />
        </div>
        <div>{{ task.status.name }}</div>
        <div>{{ task.priority.name }}</div>
        <div v-for="label in task.labels" :key="label.id">
            <input :value="label.name"/>
        </div>
        <div>
            <textarea>{{ task.description }}</textarea>
        </div>
    </div>
</template>

<style>
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

.task {
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 20px;
    color: #cacaca;
}

.date {
    font-size: 20px;
    color: #cacaca;
    max-width: fit-content;
}

input,
textarea,
select {
    font-size: 20px;
    padding: 5px;
    margin-bottom: 10px;
    border-color: transparent;
    border-radius: 10px;
    color: #cacaca;
    background-color: transparent;
    max-width: fit-content;
}

.form-grid textarea {
    height: 200px;
    resize: none;
}
</style>