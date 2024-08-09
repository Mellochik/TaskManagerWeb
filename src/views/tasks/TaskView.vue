<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    id: String
});

const task = ref();

onMounted(async () => {
    const response = await fetch(`http://127.0.0.1:8000/tasks/show/${props.id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await response.text();
    task.value = data
})
</script>

<template>
    <div class="modal" v-html="task"></div>
</template>

<style>
.modal {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    margin: auto;
}

.modal h2 {
    text-align: center;
}

.modal form {
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.form-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
}

.form-grid input,
.form-grid textarea,
.form-grid select {
    font-size: 18px;
    padding: 5px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
}

.form-grid textarea {
    height: 200px;
    resize: none;
}

.modal .form-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
}

.modal #submit-btn {
    font-size: 18px;
    background-color: #05a200;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
}

.modal #update-btn {
    font-size: 18px;
    background-color: #6900a2;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
}

.modal #delete-btn {
    font-size: 18px;
    background-color: #ba0000;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
}
</style>