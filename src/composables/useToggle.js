import { ref } from 'vue';

export const toggleNav = ref({
  isOpened: false,
  setIsOpened(value) {
    this.isOpened = value;
  }
})

toggleNav.value.isOpened