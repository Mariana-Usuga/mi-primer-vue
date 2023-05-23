<script setup>
import { ref, computed } from "vue";

const name = "Vue 3";

const counter = ref(0);

const increment = () => {
    counter.value++;
};

const decrement = () => {
    counter.value--;
};

const reset = () => {
    counter.value = 0;
};

const add = () => {
    array.value.push(counter.value);
};

const blockNumber = computed(() => {
    const number = array.value.find((num) => num === counter.value);
    return number || number === 0;
});

const classCounter = computed(() => {
    if (counter.value === 0) {
        return "zero";
    }
    return counter.value > 0 ? "positive" : "negative";
});

const array = ref([]);
</script>

<template>
  <div class="container text-center">
    <h1>Hola {{ name }}!</h1>
    <h2 :class="classCounter">
        {{ counter }}
    </h2>
    <div class="btn-group">
      <button @click="increment" class="btn btn-outline-success">Incremet</button>
      <button @click="decrement" class="btn btn-outline-primary">Decrement</button>
      <button @click="reset" class="btn btn-outline-secondary">Reset</button>
      <button @click="add" :disabled="blockNumber" class="btn btn-outline-info">Add</button>  
    </div>
    

    <ul>
        <li  v-for="(item, index) in array" :key="index">
            {{ item }}
        </li>
    </ul>  
  </div>
</template>

<style>
.negative {
    color: red;
}

.positive {
    color: green;
}

.zero {
    color: black;
}
</style>

<!--<script setup>
    const name = "Vue 3";
    const styleColor = "color: red;";
    const active = true;
    const colors = ["blue", "red", "green"];
    const counter = 1;
    const arrayFrutas = ["🍎", "🍌", "🍉", "🍓", "🍒"];
    const fruta = {
        name: "Naranja",
        price: "$3.00",
        description: "Una naranja",
    };

    const arrayFrutasS = [
    {
        name: "Manzana",
        price: "$1.00",
        description: "Una manzana",
        stock: 0,
    },
    {
        name: "Pera",
        price: "$2.00",
        description: "Una pera",
        stock: 10,
    },
    {
        name: "Naranja",
        price: "$3.00",
        description: "Una naranja",
        stock: 20,
    },
];
</script>

<template>
    <h1>Hola {{ name }}!</h1>
    <h2 :style="styleColor">Hola {{ name.toUpperCase() }}</h2>
    <h3>{{ active ? "Estoy activado" : "Estoy desactivado" }}</h3>
    <h4 :style="`color: ${colors[2]}`">Color con interpolación</h4>
    <h5>Contador: {{ counter + 1 }}</h5>
    <h2 v-if="active">v-if en acción</h2>
    <h2 v-else>v-else en acción</h2>

    <h2 v-if="active === true">Estoy en true</h2>
    <h2 v-else-if="active === false">Estoy en false</h2>
    <h2 v-else>Estoy indeciso</h2>

    <h2 v-show="active">Estoy en true</h2>


    <ul>
        <li v-for="(fruta, index) in arrayFrutas" :key="index">
            {{ fruta }} - {{ index }}
        </li>
    </ul>

    <ul>
      <template  v-for="fruta in arrayFrutasS"
            :key="fruta.name">
        <li
            v-if="fruta.stock > 0"
        >
            aqui{{ fruta }}
        </li>
      </template>
    </ul>
</template>

<style>
h1 {
  color: red;
}
</style>-->