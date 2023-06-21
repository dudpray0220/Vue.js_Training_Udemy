<template>
	<!--	제출할 때 페이지가 새로 고쳐지게 만드는 브라우저 기본동작 방지-->
	<form @submit.prevent="submitData">
		<div>
			<label for="name">Name</label>
			<input
				id="name"
				v-model="enteredName"
				type="text"
			>
		</div>
		<div>
			<label for="tel">Phone</label>
			<input
				id="tel"
				v-model="enteredPhone"
				type="text"
			>
		</div>
		<div>
			<label for="email">E-Mail</label>
			<input
				id="email"
				v-model="enteredEmail"
				type="text"
			>
		</div>
		<div>
			<button>Add Contact</button>
		</div>
	</form>
</template>

<script>
  export default {
    emits: ['add-contact'],
    data() {
      return {
        enteredName: '',
        enteredPhone: '',
        enteredEmail: ''
      }
    },
    methods: {
      submitData() {
        this.$emit('add-contact', this.enteredName, this.enteredPhone, this.enteredEmail)
      }
    }
  };
</script>