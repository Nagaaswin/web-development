class Product {
  //title;
  //imgURL;
  //price;
  //Description;

  constructor(title, img, price, desc) {
    this.title = title;
    this.imgURL = img;
    this.price = price;
    this.Description = desc;
  }
}

class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderHookId,shouldRender=true) {
    this.hook = renderHookId;
    if(shouldRender)
    this.render();
  }

  render() {}

  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClasses) {
      rootElement.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hook).append(rootElement);
    return rootElement;
  }
}

class ShoppingCart extends Component {
  items = [];

  get totalAmount() {
    const total = this.items.reduce((preval, currval) => {
      return preval + currval.price;
    }, 0);
    return total;
  }

  constructor(renderHookId) {
    super(renderHookId);
  }

  addProduct(Product) {
    this.items.push(Product);
    this.totalOutput.innerHTML = `<h2>\$${this.totalAmount}</h2>`;
  }
  order() {
    alert('Your order is successful!!');
  }
  render() {
    const cartEl = this.createRootElement('section', 'cart');
    cartEl.innerHTML = `
            <h2>\$${0}</h2>
            <button>Order Now!</button>
        `;
    this.totalOutput = cartEl.querySelector('h2');
    const orderNowButton = cartEl.querySelector('button');
    orderNowButton.addEventListener('click', this.order);
  }
}
class ProductItem extends Component {
  constructor(Product, renderHookId) {
    super(renderHookId,false);
    this.Product = Product;
    this.render();
  }

  addToCart() {
    App.addProductToCart(this.Product);
  }

  render() {
    const prodEl = this.createRootElement('li', 'product-item');
    prodEl.innerHTML = `
            <div>
                <img src="${this.Product.imgURL}" alt="${this.Product.title}">
                <div class="product-item__content">
                    <h2>${this.Product.title}</h2>
                    <h3>\$${this.Product.price}</h3>
                    <p>${this.Product.Description}</p>
                    <button>Add To Cart </button>
                </div>
            </div> 
            `;
    const addCartButton = prodEl.querySelector('button');
    addCartButton.addEventListener('click', this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList extends Component {
  constructor(renderHookId) {
    super(renderHookId);
    this.fetchProducts();
  }

  products = [];

  fetchProducts() {
    this.products = [
      new Product(
        'Premium Football',
        'https://i2-prod.manchestereveningnews.co.uk/incoming/article17940730.ece/ALTERNATES/s1200b/0_Olympique-Lyon-v-Juventus-UEFA-Champions-League-Round-of-16-First-Leg.jpg',
        10,
        'Exclusive Champions League ball'
      ),
      new Product(
        'Nike Phantom',
        'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/wtp6jaxv7wckmoln0mgo/phantom-vision-elite-id.jpg',
        350,
        'Exclusive Nike Designer boots'
      ),
    ];
    this.renderProducts();
  }

  renderProducts() {
    for (const prod of this.products) {
      new ProductItem(prod, 'prod-List');
    }
  }
  render() {
    this.createRootElement('ul', 'product-List', [
      new ElementAttribute('id', 'prod-List'),
    ]);
    if (this.products && this.products.length > 0) this.renderProducts();
  }
}

class Shop {
  constructor() {
    this.render();
  }
  render() {
    this.cart = new ShoppingCart('app');
    new ProductList('app');
  }
}

class App {
  static cart;
  static inIt() {
    const shop = new Shop();
    this.cart = shop.cart;
  }

  static addProductToCart(Product) {
    this.cart.addProduct(Product);
  }
}

App.inIt();
