class Testimony {
  constructor(data) {
    this.data = data;
    this.testimonySection = document.querySelector(".testimony");
    this.testimonyContentDiv = document.createElement("div");
    this.testimonyDiv = document.createElement("div");
    this.testimonyImage = document.createElement("img");
    this.testimonyName = document.createElement("h3");
    this.testimonyParagraph = document.createElement("p");
    this.createTestimony();
  }

  createTestimony() {
    this.createTestimonyImage();
    this.createTestimonyContentDiv();
    this.createTestimonyName();
    this.createTestimonyParagraph();
  }

  createTestimonyImage() {
    this.testimonyImage.src = this.data.image;
    this.testimonyImage.alt = this.data.name;
    this.testimonyDiv.classList.add("card");
    this.testimonyDiv.dataset.aos = 'fade-right';
    this.testimonyDiv.appendChild(this.testimonyImage);
  }

  createTestimonyContentDiv() {
    this.testimonyContentDiv.classList.add("testimony-content");
  }

  createTestimonyName() {
    this.testimonyName.textContent = this.data.name;
    this.testimonyContentDiv.appendChild(this.testimonyName);
  }

  createTestimonyParagraph() {
    this.testimonyParagraph.textContent = this.data.testimony;
    this.testimonyContentDiv.appendChild(this.testimonyParagraph);
    this.testimonyDiv.appendChild(this.testimonyContentDiv);
    this.testimonySection.appendChild(this.testimonyDiv);
  }
}

const testimonyData = [
  {
    id: 1,
    name: "Keli Santos",
    testimony:
      "I can positively say School In The Cloud has made me a better person. It has helped me develop a positive attitude my studies.",
    image: "../img/testimony1.jpg"
  },
  {
    id: 2,
    name: "Wallace Chuck",
    testimony:
      "I can positively say School In The Cloud has made me a better person. It has helped me develop a positive attitude my studies.",
    image: "../img/testimony2.jpg"
  }
];

testimonyData.map(data => new Testimony(data));
