import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useTextStore = defineStore("text", {
  state: () => ({
    states: {
      chicago: {
        text: "Completed competitor analysis for client by searching through 2000+ earned media articles based on their sentiment, relevancy, and message, allowing our team to identify issues with the client’s media engagement. Investigated potential partner organizations, healthcare events, and media trends that led to informative and strategic presentations to remodel the client’s outreach.",
        location: "Hawthorne - Chicago",
      },
      newYork: {
        text: "Developed web application using React, JavaScript, and Material UI while shadowing a client team; implemented proper version control, code structure, and iterative development to produce credible demo to acquire new clients. Managed the creation of an internal pitch book on portfolio optimization to drive new project acquisition; developed and adhered to project timeline, led weekly standups, and coordinated multiple feedback/review cycles.",
        location: "Baringa - New York",
      },
      minnesota: {
        text: "Led 8 young adults through rigorous leadership training program - acted as mentor and supervisor for the program. Managed team of 3 counselors who oversaw a cabin of 16 kids aged 11-12 years old; ensured adherence to strict time schedule and cleaning routine, responsible for looking after kids’ social and emotional well-being.",
        location: "Camp Lincoln - Minnesota",
      },
      indianapolis: {
        text: "Created Power BI report using industry-standard relational database schemas, complex data transformations, and efficient Dax to revitalize a company culture report with enhanced data interaction, analysis, and insights. Automated workflows across Forms, SharePoint, Lists, Teams, and Outlook with Microsoft’s Power Automate.",
        location: "TiER1 - Indianapolis",
      },
      colorado: {
        text: "Executed data migration and quality assurance checks with clinical trial data by highlighting discrepancies through cross references with source data and protocol documents resulting in compliant material presentable to the FDA. Finished internship with cumulative presentation in front of all senior leadership to summarize value added.",
        location: "Chimerix - Colorado",
      },
    },
    currentStateKey: "newYork",
  }),

  getters: {
    currentState(state) {
      return state.states[state.currentStateKey];
    },
  },
  actions: {
    changeState(stateKey) {
      if (this.states[stateKey]) {
        this.currentStateKey = stateKey;
      } else {
        console.error(`State key "${stateKey}" does not exist.`);
      }
    },
  },
});
