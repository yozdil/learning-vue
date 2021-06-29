<template>
  <BaseCard>
    <BaseButton @click="setSelectedTab('stored-resources')"
      >Stored Resources</BaseButton
    >
    <BaseButton @click="setSelectedTab('add-resource')"
      >Add Resources</BaseButton
    >
    <component :is="selectedTab"></component>
  </BaseCard>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';
import BaseCard from '../ui/BaseCard.vue';
import BaseButton from '../ui/BaseButton.vue';

export default {
  components: {
    AddResource,
    StoredResources,
    BaseCard,
    BaseButton
  },
  data() {
    return {
      selectedTab: 'stored-resources'
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    }
  }
};
</script>

<style lang="scss" scoped></style>
