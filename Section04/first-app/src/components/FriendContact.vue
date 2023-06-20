<template>
	<li>
		<h2>{{ name }} {{ friendIsFavorite ? '(Favorite)' : '' }}</h2>
		<button @click="toggleFavorite">
			Toggle Favorite
		</button>
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
  // 최소한의 구성
  // props: [
  //     'name',
  //     'phoneNumber',
  //     'emailAddress',
  //     'isFavorite'
  // ],

  // 객체로 타입 알려주기
  // props: {
  //   name: String,
  //   phoneNumber: String,
  //   emailAddress: String,
  //   isFavorite: String
  // },

  // 객체로 더 자세한 정보 알려주기
  props: {
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false, // 필수가 아닌 props는 기본값 지정가능.
      // default: function() {} // 함수도 실행 가능.
      // 참, 거짓을 반환하는 함수는 검증자 추가가능. props에 제공되는 값을 가져와서 유효성 검사 로직으로 유효한 값인지 확인
      // validator: function(value) {
      //   return value === '1' || value === '0' // 1 또는 0이라면 true, 아니면 false
      //   }
      }
    },

  data() {
    return {
      detailsAreVisible: false,
      friendIsFavorite: this.isFavorite
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.friendIsFavorite = !this.friendIsFavorite;
    },
  }
}
</script>

