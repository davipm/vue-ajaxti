<template>
  <section class="section page">
    <div class="container">
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>Your Name: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Your Role: <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
      <!--
      <form @submit.prevent="">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input v-model="form.email" type="email" required class="form-control" id="inputEmail4" placeholder="Email">
          </div>

          <div class="form-group col-md-6">
            <label for="inputPassword4">Nome</label>
            <input v-model="form.name" type="text" required class="form-control" id="inputPassword4" placeholder="Nome">
          </div>
        </div>

        <div class="form-group">
          <label for="inputAddress">Assunto</label>
          <input v-model="form.item" type="text" required class="form-control" id="inputAddress" placeholder="Assunto">
        </div>

        <div class="form-group">
          <label for="message">Mensagem</label>
          <textarea v-model="form.message" name="message" required id="message" cols="30" rows="10" class="form-control"></textarea>
        </div>

        <button type="submit" @submit.prevent="sendEmail" class="btn btn-primary btn-send">Enviar</button>
      </form>
      -->
      <!--
      <iframe src="http://ajaxwebapp.azurewebsites.net/contato/"
              frameborder="0"
      ></iframe>
      -->
    </div>
  </section>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'index',
    data() {
      return {
        form: {
          email: '',
          name: '',
          item: '',
          message: '',
        }
      }
    },

    methods: {
      sendEmail() {
        let apiKey = '6fa5511f-fb0b-41a7-8372-d19f2e426d05';
        axios.post(`https://api.elasticemail.com/v2/email/send?apikey=${apiKey}&subject=${form.item}&from=&fromName=&sender=&senderName=&msgFrom=&msgFromName=&replyTo=&replyToName=&to=davi.p.m94@gmail.com&msgTo=&msgCC=&msgBcc=&lists=&segments=&mergeSourceFilename=&dataSource=&channel=&bodyHtml=&bodyText=&charset=&charsetBodyHtml=&charsetBodyText=&encodingType=&template=&headers_firstname=firstname: myValueHere&postBack=&merge_firstname=John&timeOffSetMinutes=&poolName=My Custom Pool&isTransactional=false&attachments=&trackOpens=true&trackClicks=true&utmSource=source1&utmMedium=medium1&utmCampaign=campaign1&utmContent=content1`)
          .then((res) => {
            console.log(res);
          })
          .catch((res) => {
            console.log(res);
          })
      }
    }
  }
</script>

<style lang="scss">
  iframe {
    display: block;
    position: relative;
    width: 100%;
    height: 570px;
    border: none;
    @media (max-width: 768px) {
      height: 710px;
    }
    @media (max-width: 576px) {
      height: 750px;
    }
  }

  form {
    padding: 10px;
  }

  .form-control {
    border: 1px solid #d5d5d5;
    color: #00734A;
  }

  .form-control:focus,
  .form-control:visited,
  .form-control:active {
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
  }

  label {
    color: #00734A;
    font-weight: 500;
  }

  .btn-send {
    background-color: #D8D9DA;
    border: 1px solid #D8D9DA;
    color: #808184;
    padding: 6px 8px;
    &:hover {
      background-color: #808184;
      border: 1px solid #D8D9DA;
      color: #D8D9DA;
    }
  }
</style>
