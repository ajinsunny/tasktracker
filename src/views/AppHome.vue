<template>
  <TheTasks
    @toggle-reminder="toggleReminder"
    @delete-task="deleteTask"
    :tasks="tasks"
  />
  <AddTask v-show="showAddTask" @add-task="addTask" />
</template>

<script>
import AddTask from "../components/AddTask.vue";
import TheTasks from "../components/Tasks.vue";
import tasks from "../../db.json";

export default {
  name: "AppHome",
  props: {
    showAddTask: Boolean,
  },
  components: {
    TheTasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    addTask(task) {
      const newTask = { ...task, id: Date.now() };
      this.tasks.push(newTask);
    },
    deleteTask(id) {
      if (confirm("Are you sure?")) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      }
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      );
    },
    fetchTasks() {
      return tasks.tasks;
    },
  },
  created() {
    this.tasks = this.fetchTasks();
  },
};
</script>
