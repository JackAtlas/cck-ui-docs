---
title: FileButton
lang: en-US
---

# FileButton

Open file picker with a button click

## Usage

<c-file-button @change="setSingleFile">
  <template #default="{ onClick }">
    <c-button variant="filled" @click="onClick">Upload image</c-button>
  </template>
</c-file-button>

<c-text mt="sm" size="sm" ta="center" v-if="singleFile">Picked file: {{ singleFile?.name }}</c-text>

```vue
<template>
  <c-file-button @change="setFile">
    <template #default="{ onClick }">
      <c-button variant="filled" @click="onClick">Upload image</c-button>
    </template>
</c-file-button>
</template>

<c-text mt="sm" size="sm" ta="center" v-if="file">Picked file: {{ file?.name }}</c-text>

<script setup lang="ts">
import { ref } from 'vue'

const file = ref<File | null>(null)

const setFile = (payload: File | File[] | null) => {
  if (payload && !Array.isArray(payload)) {
    file.value = payload
  }
}
</script>
```

## Multiple files

Set the `multiple` prop to allow picking multiple files:

<c-file-button accept="image/png,image/jpeg" multiple @change="setMultipleFiles">
  <template #default="{ onClick }">
    <c-button variant="filled" @click="onClick">Upload image(s)</c-button>
  </template>
</c-file-button>

<c-text mt="sm" size="sm" v-if="multipleFiles.length > 0">Picked files:</c-text>

<ul>
  <li v-for="(file, index) in multipleFiles" :key="index">{{ file.name }}</li>
</ul>

```vue
<template>
  <c-file-button accept="image/png,image/jpeg" multiple @change="setMultipleFiles">
    <template #default="{ onClick }">
      <c-button variant="filled" @click="onClick">Upload image(s)</c-button>
    </template>
  </c-file-button>

  <c-text mt="sm" size="sm" v-if="multipleFiles.length > 0">Picked files:</c-text>

  <ul>
    <li v-for="(file, index) in multipleFiles" :key="index">{{ file.name }}</li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const multipleFiles = ref<File[]>([])

const setMultipleFiles = (payload: File | File[] | null) => {
  if (payload && Array.isArray(payload)) {
    multipleFiles.value = payload
  }
}
</script>
```

### Reset file

Call `reset` when the user selection is cleard:

<c-group>
  <c-file-button accept="image/png,image/jpeg" ref="fileButtonRef" @change="setFile">
    <template #default="{ onClick }">
      <c-button variant="filled" @click="onClick">Upload image</c-button>
    </template>
  </c-file-button>
  <c-button color="red" variant="filled" :disabled="!file" @click="clearFile">Reset</c-button>
</c-group>

<c-text mt="sm" size="sm" ta="center" v-if="file">Picked file: {{ file?.name }}</c-text>

```vue
<template>
  <c-group>
    <c-file-button accept="image/png,image/jpeg" ref="fileButtonRef" @change="setFile">
      <template #default="{ onClick }">
        <c-button variant="filled" @click="onClick">Upload image</c-button>
      </template>
    </c-file-button>
    <c-button color="red" variant="filled" :disabled="!file" @click="clearFile">Reset</c-button>
  </c-group>

  <c-text mt="sm" size="sm" ta="center" v-if="file">Picked file: {{ file?.name }}</c-text>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const fileButtonRef = ref<InstanceType<typeof CFileButton> | null>(null)

const file = ref<File | null>(null)

const setFile = (payload: File | File[] | null) => {
  if (payload && !Array.isArray(payload)) {
    file.value = payload
  }
}
const clearFile = () => {
  file.value = null
  fileButtonRef.value?.reset()
}
</script>
```

## Props

### FileButton props

|Name|Type|Description|
|---|---|---|
|accept|string|File input accept attribute, for example, `"image/png,image/jpeg"`|
|capture|boolean \| "user" \| "environment"|Specifies that, optionally, a new file should be captured, and which device should be used to capture that new media of a type defined by the accept attribute|
|disabled|boolean|Disables file picker|
|form|string|Input form attribute|
|inputProps|ElementProps<'input'>|Passes down props to the input element used to capture files|
|multiple|boolean|If set, user can pick more than one file|
|name|string|Input name attribute|

### FileButton emits/events

|Name|Type|Description|
|---|---|---|
|change|(payload: File \| File[] \| null) => void|Called when files are picked|

### FileButton exposes

|Name|Type|Description|
|---|---|---|
|reset|Function|Function that should be called when value changes to null or empty array|

<script setup lang="ts">
import { ref } from 'vue'

const fileButtonRef = ref<InstanceType<typeof CFileButton> | null>(null)

const singleFile = ref<File | null>(null)
const multipleFiles = ref<File[]>([])
const file = ref<File | null>(null)

const setSingleFile = (payload: File | File[] | null) => {
  if (payload && !Array.isArray(payload)) {
    singleFile.value = payload
  }
}

const setMultipleFiles = (payload: File | File[] | null) => {
  if (payload && Array.isArray(payload)) {
    multipleFiles.value = payload
  }
}

const setFile = (payload: File | File[] | null) => {
  if (payload && !Array.isArray(payload)) {
    file.value = payload
  }
}
const clearFile = () => {
  file.value = null
  fileButtonRef.value?.reset()
}
</script>