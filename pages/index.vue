<template>
  <div class="container">
    <div class="section-img">
      <div class="main title-bold">
        <div class="main-title">
          <h1>Mirllex Pos</h1>
          <h2>Автоматизация вашего бизнеса</h2>
          <button type="button" @click="scrollToElement()">Подробнее</button>
        </div>
      </div>
    </div>
    <div class="info section">
      <div ref="scrollToMe" class="title-bold">
        <div class="info-title">
          <div>
            Mirllex Pos это облачное решение <br /> для быстрого старта небольших
            заведений 🚀 <br /><br />
          </div>
          <div>Одна POS-система решает все вопросы:</div>
          <ul>
            <li>онлайн-касса</li>
            <li>склад</li>
            <li>финансы</li>
            <li>аналитика и CRM.</li>
          </ul>
          <div>
            Оставьте заявку на приобретение, <br /> свяжемся с вами в кратчайшие сроки 😉
          </div>
        </div>
        <!-- <h2>Автоматизация вашего бизнеса</h2> -->
        <!-- <button type="button">Подробнее</button> -->
      </div>
    </div>
  </div>

  <!-- <h1>
        Mirllex Pos упрощает ведение <br />
        небольших заведений
      </h1>
      <h2>
        Одна POS-система решает все вопросы: <br />
        <ul>
          <li>онлайн-касса</li>
          <li>склад</li>
          <li>финансы</li>
          <li>аналитика и CRM.</li>
        </ul>
      </h2>
      <p>
        Пос система работает в облаке, <br />
        устанавливается за 15 минут <br />
        на любое устройство стоит от 3000р. в месяц
      </p> -->
</template>

<script>
export default {
  methods: {
    scrollToElement() {
      const el = this.$refs.scrollToMe;

      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  height: 100%;
  // flex-direction: column;
  // display: flex;
  // justify-content: center;
  // align-items: center
}
.main {
  height: 100%;
  flex-flow: column nowrap;
  align-items: stretch;
  display: flex;
  justify-content: center;
  // background: rgba(255, 255, 255, 0.1);
  // border-radius: 16px;
  // box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  // backdrop-filter: blur(5px);
  // -webkit-backdrop-filter: blur(5px);
  // border: 1px solid rgba(255, 255, 255, 0.5);
  width: fit-content;
  color: #fff;
  text-shadow: 0px 1px 20px rgba(0, 0, 0, 0.2);
  @include less-than(laptop) {
    width: 100%;
    justify-content: flex-start;
    text-shadow: 0px 1px 20px rgba(0, 0, 0, 0.05);
  }

  &-title {
    margin-bottom: 60%;
    margin-left: 50px;
    width: fit-content;
    height: fit-content;
    text-align: center;
    @include less-than(laptop) {
      margin-left: 0px;
      margin-bottom: 0%;
      margin-top: 5%;
      width: 100%;
    }
    @include less-than(tablet) {
      margin-top: 20%;
    }
    h1 {
      font-size: 5vw;
      @include less-than(laptop) {
        font-size: 10vw;
      }
    }
    h2 {
      font-size: 1.5vw;
      @include less-than(laptop) {
        font-size: 2.5vw;
      }
      @include less-than(tablet) {
        font-size: 3.5vw;
      }
    }
    button {
      margin-top: 30px;
      text-shadow: 0px 1px 20px rgba(0, 0, 0, 0.2);
      color: #fff;
      padding: 20px 50px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      letter-spacing: 2px;
      @include less-than(laptop) {
        margin-top: 30px;
      }
      @include less-than(tablet) {
        margin-top: 15px;
        padding: 10px 40px;
        font-size: 12px;
      }
    }
  }
}
.info {
  margin-top: 50px;
  padding-bottom: 100px;
  &-title {
    font-size: 25px;
    color: #fff;
    text-shadow: 0px 1px 20px rgba(0, 0, 0, 0.2);
    @include less-than(laptop_l){
      font-size: 2vw;
    }
    @include less-than(laptop_l){
      font-size: 2.3vw;
    }
    @include less-than(laptop){
      font-size: 3vw;
    }
    @include less-than(tablet){
      font-size: 4vw;
    }
    ul,
    li {
      padding-top: 5px;
      margin-left: 10.5px;
    }
    ul {
      margin-top: 10px;
      margin-bottom: 20px;
    }
  }
}
</style>
