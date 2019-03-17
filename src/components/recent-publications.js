
Vue.component("each-publication", {
  props: ["description"],
  template: `<div> 
  <img src="publication-icon.png" style="width:36px;height:36px" align = 'left'>
  <i>{{description}}</i><br/><br/>
   </div> `
});

Vue.component("recent-publications", {
  props: ["descriptions"],
  template: `
  <div>
  <div v-for="description in descriptions">
  <each-publication v-bind:description = description></each-publication>
  </div>
  </div>`
});

var app = new Vue({
  el: "#app",
  data: {
    publications: [
      "Kang, K., Hahn, J. and De, P. (2017) \"Learning Effects of Domain, Technology, and Customer Knowledge in Information Systems Development: An Empirical Study, \" Information Systems Research, 28(4), pp. 797-811. DOI:10.1287/isre.2017.0713.",
      "Moon, J.Y., Hahn, J., Oh, W. and Kim, T. (2016) \"Leader Influence on Sustained Participation in Online Collaborative Work Communities: A Simulation - based Approach, \" Information Systems Research, 27(2), pp. 383-402. (DOI:10.1287/isre.2016.0632)",
      'Kankanhalli, A., Hahn, J., Tan, S. and Gao, G. (2016) "Big Data and Analytics in Healthcare: Introduction to the Special Issue, " Information Systems Frontiers, 18(2) Special Section on Big Data and Analytics in Healthcare, pp. 233-235. (DOI: 10.1007/s10796-016-9641-2) [Guest Editorial]'
    ]
  }
});
