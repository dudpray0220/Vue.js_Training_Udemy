<template>
	<li>
		<h2>{{ name }}</h2>
		<button @click="toggleDetails">
			{{ detailsAreVisible ? 'Hide' : 'Show' }} Details
		</button>
		<ul v-if="detailsAreVisible">
			<li><strong>Phone:</strong> {{ phoneNumber }}</li>
			<li><strong>Email:</strong> {{ emailAddress }}</li>
		</ul>
	</li>
</template>


<script>
export default {
  props: [
      'name',
      'phoneNumber',
      'emailAddress'
  ],
  data() {
    return {
      detailsAreVisible: false,
      friends: {
        id: 'manuel',
        name: 'Manuel Lorenz',
        phone: '01234 5678 991',
        email: 'manel@localhost.com'
      }
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
}
</script>

