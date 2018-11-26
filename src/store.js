import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    crews: [{
        cardinal: "1기",
        name: "남현욱",
        description: "Team Co-Founder, Team Leader, Full-Stack Developer"
      },
      {
        cardinal: "1기",
        name: "민경빈",
        description: "Frontend Developer"
      },
      {
        cardinal: "1기",
        name: "박태형",
        description: "Frontend Developer"
      },
      {
        cardinal: "1기",
        name: "진우민",
        description: "Backend Developer"
      },
      {
        cardinal: "1기",
        name: "서상희",
        description: "Full-Stack Developer"
      },
      {
        cardinal: "1.5기",
        name: "이유승",
        description: "Junior Developer"
      },
      {
        cardinal: "1.5기",
        name: "전광용",
        description: "Junior Developer"
      },
      {
        cardinal: "1.5기",
        name: "이진영",
        description: "Junior Developer"
      }
    ]
  },
  getters: {
    getCrews(state) {
      return state.crews.sort((el, el2) => parseInt(el.cardinal.split("기")[0]) - parseInt(el2.cardinal.split("기")[0]));
    },
    getCrewSpec(state, name) {
      state.crews.forEach(crew => {
        if (crew.name === name) {
          return crew;
        }
      });
    }
  },
  mutations: {

  },
  actions: {

  }
});