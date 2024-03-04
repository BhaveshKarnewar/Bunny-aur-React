function customRender(element, container) {
  // let domElement = document.createElement(element.type);
  // domElement.setAttribute("href", element.props.href);
  // domElement.setAttribute("target", element.props.target);
  // domElement.innerHTML = element.children;
  // container.appendChild(domElement);
  // console.log(domElement);

  let domElement = document.createElement(element.type);
  domElement.innerHTML = element.children;

  for (const prop in element.props) {
    domElement.setAttribute(prop, element.props[prop]);
  }

  container.appendChild(domElement);
  console.log(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click here for google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
