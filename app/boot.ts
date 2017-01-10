import { bootstrap } from "@angular/platform-browser-dynamic";
import {Main} from './main';

@Component({
  selector: 'boot',
  directives: [ROUTER_DIRECTIVES,Main],
  template: `<h1>dfsdfds</h1>`

})



bootstrap(Main);
