class Project {
  id;
  dataExtraInfo;
  heading;
  description;
  confirmDescription;
  moreInfo;
  confirmBtn;

  constructor(
    id,
    dataExtraInfo,
    heading,
    description,
    confirmDescription,
    moreInfo,
    confirmBtn
  ) {
    this.id = id;
    this.dataExtraInfo = dataExtraInfo;
    this.heading = heading;
    this.description = description;
    this.confirmDescription = confirmDescription;
    this.moreInfo = moreInfo;
    this.moreInfo.addEventListener('click', () => {
      this.displayMoreInfo();
    });
    this.confirmBtn = confirmBtn;
    this.confirmBtn.addEventListener('click', () => {
      this.renderElment();
    });
  }

  displayMoreInfo() {
    const rootElement = document.getElementById(this.id);
    const info = document.createElement('p');
    info.textContent = `${this.dataExtraInfo}`;
    rootElement.append(info);
  }

  deleteElment(rootElement) {
    const list = rootElement.querySelector('ul');
    const task = document.getElementById(this.id);
    list.removeChild(task);
  }

  createElement(rootElement) {
    const list = rootElement.querySelector('ul');
    const task = document.createElement('li');
    task.setAttribute('data-extra-info', this.dataExtraInfo);
    task.className = 'card';
    task.id = this.id;
    task.innerHTML = `<h2>${this.heading}</h2>
    <p>${this.description}</p>
    <button class="alt">More Info</button>
    <button>${this.confirmDescription}</button>
    `;
    this.moreInfo = task.querySelector('button');
    this.moreInfo.addEventListener('click', () => {
      this.displayMoreInfo();
    });
    this.confirmBtn = task.lastElementChild;
    this.confirmBtn.addEventListener('click', () => {
      this.renderElment();
    });
    list.append(task);
  }

  renderElment() {
    let rootElement;
    if (this.confirmDescription === 'Finish') {
      rootElement = document.getElementById('active-projects');
      this.deleteElment(rootElement);
      rootElement = document.getElementById('finished-projects');
      this.confirmDescription = 'Activate';
      this.createElement(rootElement);
    } else if (this.confirmDescription === 'Activate') {
      rootElement = document.getElementById('finished-projects');
      this.deleteElment(rootElement);
      rootElement = document.getElementById('active-projects');
      this.confirmDescription = 'Finish';
      this.createElement(rootElement);
    }
  }
}
projects = [];

const allProjects = document.querySelectorAll('li');

for (const pro of allProjects) {
  projects.push(
    new Project(
      pro.id,
      pro.getAttribute('data-extra-info'),
      pro.querySelector('h2').textContent,
      pro.querySelector('p').textContent,
      pro.lastElementChild.textContent,
      pro.querySelector('button'),
      pro.lastElementChild
    )
  );
}
