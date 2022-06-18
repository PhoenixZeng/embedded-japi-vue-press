// Comment.vue
<template>
    <div class="gitalk-container">
        <div id="gitalk-container"></div>
    </div>
</template>

<script>
  import 'gitalk/dist/gitalk.css'
  import Gitalk from 'gitalk'

  export default {
    name: 'gitalk',
    mounted() {
      const commentConfig = {
        clientID: '6ee8116016b1decd846e',
        clientSecret: 'f9ba53249cf278670e6d0255c1bc2ce27f5056e7',
        repo: 'embedded-japi-plugin',
        owner: 'w4454962',
        admin: ["w4454962","PhoenixZeng","luciouskami"],
        // id: location.pathname,
        // facebook-like distraction free mode
        distractionFreeMode: false,
        title: path,
        id: path,
      };
      const gitalk = new Gitalk(commentConfig);
      gitalk.render('gitalk-container');
    }
  };
</script>
