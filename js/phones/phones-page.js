import PhonesCatalog from './components/phones-catalog.js';
import PhonesService from './services/phones-service.js';
/*создание компонента, который отображает содержимое страницы, через класс*/
export default class PhonesPage {
    /*конструтор принимает элемент*/
    constructor({ element }) {
        this._element = element;
        this._render(); /*наполнение элемента*/
        
        this._catalog = new PhonesCatalog({
            element: document.querySelector('[data-phone-catalog]'),
            phones: PhonesService.getAll()
    //вызывает ошибку 
            //element: this._element.document.querySelector('[data-phone-catalog]')
        })
        
    }
    /*вызвать метод render который помещает в element всю верстку*/
    _render() {
        this._element.innerHTML = `
 <div class="row">

      <!--Sidebar-->
      <div class="col-md-2">
        <section>
          <p>
            Search:
            <input>
          </p>

          <p>
            Sort by:
            <select>
              <option value="name">Alphabetical</option>
              <option value="age">Newest</option>
            </select>
          </p>
        </section>

        <section>
          <p>Shopping Cart</p>
          <ul>
            <li>Phone 1</li>
            <li>Phone 2</li>
            <li>Phone 3</li>
          </ul>
        </section>
      </div>

      <!--Main content-->
      <div class="col-md-10">
        <div data-phone-catalog>

        </div>
      </div>
    </div>
`
    }
}