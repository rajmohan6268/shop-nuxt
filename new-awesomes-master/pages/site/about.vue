<template lang="pug">
  div
    article
      h3 Why
      p Awesomes.cn 成立的目的主要是为了给国内用户提供前端Github库的归档和中文文档，从而更好地学习前端知识。

      p Awesome的中文意思是：可怕的; 令人敬畏的; 使人畏惧的; 极好的; 加上中国的顶级域名 cn，就是为了告诉大家这里是国内前端资源的集合。

      p 我们秉承开源共享的思想，让全国的前端工程师共同维护这个资源库，中文文档可以自由编辑（当然为了保证质量需要经过审核）Awesomes.cn 网站本身也开源在了 GitHub 上

      p Awesomes.cn是基于Ruby on Rails搭建的，服务器用的是阿里云的ECS，OSS云存储和RDS云数据库，最大限度地优化访问速度。

      h3 功能
      ul
        li 同步 Github 前端库并做好分类
        li 对同类的库进行 热度、时间和趋势的排序
        li 趋势的排序规则是根据各个时间段Github的多个方面的数据计算分析得出，可大致预测未来的发展趋势
        li 对每个库开放编辑文档，并对用户提交的文档做好版本控制，可查看到每个库的所有的提交历史
        li 全站采用 markdown 编辑模式
        li 对可用的数据开放了API接口，详见 API  
      p 在不失简洁的前提下，未来我们还将加入更多有趣和有用的功能，我们是一个注重用户体验的团队

      p 如果你在访问的过程中哪里让你感觉到不爽，或者你有好的想法和建议，通过 微博 联系我们，我们真诚期待您的反馈！

      h3 Logo
      p 我们同时设计了圆形和正方形的Logo，分别支持 50px、100px、200px、500px 的尺寸
      p 访问地址为：
      p 圆形：
      p http://www.awesomes.cn/assets/logo-尺寸数字.png
      p 方形：
      p http://www.awesomes.cn/assets/logo-square-尺寸数字.png
      p 比如
      img(src="https://www.awesomes.cn/assets/logo-100.png")
      p http://www.awesomes.cn/assets/logo-100.png
      img(src="http://www.awesomes.cn/assets/logo-square-100.png")
      p http://www.awesomes.cn/assets/logo-square-100.png
</template>
<script>
  export default {
  }
</script>

<style lang="scss" scoped>
 .page-site-about {
   background: #f7f8fa;
 }
</style>
