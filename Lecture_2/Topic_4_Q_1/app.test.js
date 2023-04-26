const app = require("./index");
const axios = require("axios");

jest.mock("axios");

const apiUrl = "https://api.codingninjas.com/api/v3/event_tags";
const responseData = {
  data: {
    tags: [
      "Interview Preparation",
      "Contest Solutions",
      "Competitive Programming",
      "Futuristic Tech",
      "Coding Concepts",
      "Career Guidance",
      "Web Development",
      "Android",
      "Machine Learning",
      "Campus Event",
      "Online Coding Event",
      "Hackathon",
      "Women Who Code",
      "GSoC",
      "Placement",
      "Aptitude Preparation",
      "Efficient Coding",
      "Programming Contest",
      "Coding Marathon",
      "All Night Coding",
      "Code Wars",
      "Scholarship Test",
    ],
  },
  message: "Event Tags",
  status: 200,
  error: null,
  disabled: false,
  update: false,
  external_rating: null,
};

const consoleSpy = jest.spyOn(console, "log");
const axiosGetSpy = jest.spyOn(axios, "get");

describe("Axios get request", () => {
  it("should log the correct data in the console", async () => {
    axiosGetSpy.mockResolvedValue(responseData);

    await app();

    expect(axiosGetSpy).toHaveBeenCalledTimes(1);
    expect(axiosGetSpy).toHaveBeenCalledWith(apiUrl);
    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith(responseData.data);
  });
});
