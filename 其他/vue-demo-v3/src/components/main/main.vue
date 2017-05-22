<template>
  <div id="main">
    <div id="content">
      <div class="panel">
        <div class="header">
          <router-link to="/tab/all" class="topic-tab">全部</router-link>
          <router-link to="/tab/good" class="topic-tab">精华</router-link>
          <router-link to="/tab/share" class="topic-tab">分享</router-link>
          <router-link to="/tab/ask" class="topic-tab">问答</router-link>
          <router-link to="/tab/job" class="topic-tab">招聘</router-link>
        </div>
        <div class="inner no-padding">
          <div id="topic_list">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
