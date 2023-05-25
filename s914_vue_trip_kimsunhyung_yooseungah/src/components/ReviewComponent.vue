<template>
  <div>
    <div>댓글</div>
    <div class="fontcustom">
      <div v-for="(review, index) in reviews" :key="index">
        <div>
          <div class="row">
            <div class="id">{{ review.user_id }}</div>
            <div class="date">{{ formatDate(review.creation_date) }}</div>
          </div>
        </div>
        <div class="row">
          {{ review.review_content }}
          
        </div>
        <div>
          <div class="row action-buttons">
            <div class="button-container" v-if="writerCheck(review.user_id)">
              <button class="btn-white" @click="deleteReview(review.review_id)">삭제</button>
            </div>
          </div>
        </div>
        <hr>
      </div>
    </div>
    <div v-if="islog">
      <div>댓글 쓰기</div>
      <div class="comment-form">
        <div class="form-group">
          <textarea
            id="review_content"
            v-model="review_content"
            class="form-control"
            placeholder="댓글을 작성해주세요"
            rows="3"
            max-rows="6"
          ></textarea>
        </div>
        <div class="submit-button">
          <button class="btn btn-dark" @click="addReview">댓글 작성</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from '../axios/axios-common.js';
import dayjs from 'dayjs';
import { mapState } from 'vuex';

export default {
  name: 'ReviewComponent',
  props: ['content_id'],
  data() {
    return {
      reviews: [],
      review_content: '',
      islog: false,
      user_id: '',
    };
  },
  created() {
    this.getReviewList();
    this.isUser();
  },
  computed: {
    ...mapState('userStore', ['userInfo'])
  },
  methods: {
    getReviewList() {
      http.get('/api/attraction/review/list/' + this.content_id).then((response) => {
        this.reviews = response.data;
        this.reviews.forEach((review) => {
          review.editMode = false;
          review.editContent = review.review_content;
        });
      });
    },
    formatDate(date) {
      return dayjs(date).format('YYYY.MM.DD');
    },
    addReview() {
      http
        .post(
          '/api/attraction/review/' + this.content_id,
          {
            review_content: this.review_content
          },
          {
            headers: { 'access-token': sessionStorage.getItem('access-token') }
          }
        )
        .then(() => {
          alert('리뷰 작성 완료');
          this.review_content = '';
          this.$emit('reviewAdded');
        });
    },
    isUser() {
      http
        .get('/api/user/islogin', {
          headers: {
            'access-token': sessionStorage.getItem('access-token')
          }
        })
        .then((response) => {
          if (response.data.result == 'success') {
            this.islog = true;
          } else {
            this.islog = false;
          }
        });
    },
    writerCheck(review_user_id) {
      if (this.userInfo != null && review_user_id == this.userInfo.id) {
        return true;
      }
      return false;
    },
    deleteReview(review_id) {
      http.delete('/api/attraction/review/delete/' + review_id, {
        headers: { 'access-token': sessionStorage.getItem('access-token') }
      }).then(() => {
        alert('리뷰 삭제');
        this.$emit('reviewAdded');
      });
    }
  }
};
</script>

<style>
.comment-form {
  display: flex;
  flex-direction: column;
}
.container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.right-align {
  justify-content: flex-end;
}
.action-buttons {
  justify-content: flex-end;
}
.button-container {
  margin-left: 10px;
}
.submit-button {
  align-self: flex-end;
  margin-top: 5%;
}
.id {
  font-weight: bold;
}
.date {
  color: gray;
}
.btn-white {
  font-size: 15px;
  background-color: white;
  border-style: none;
}
.fontcustom {
  font-size: 15px;
  width: 100%;
}
</style>
