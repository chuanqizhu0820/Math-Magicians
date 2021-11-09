import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Calculator from './components/calculator';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <Router>
        <div id="headline">
          <h1>Math Magician</h1>
          <div id="navbar">
            <div className="navlink">
              <Link to="/">Home</Link>
            </div>
            <div className="navlink">
              <Link to="/calculator">Calculator</Link>
            </div>
            <div className="navlink">
              <Link to="/quote">Quote</Link>
            </div>
          </div>
        </div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

function Home() {
  return (
    <div>
      <h3>Welcome to the math playground!</h3>
      <div id="home-intro">
        {/* eslint-disable */}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, dolor optio aut quo quibusdam dolorum eum? Ex quos quaerat dignissimos laboriosam in consequatur molestiae non consequuntur eius tempore eos similique praesentium illo quae expedita animi maiores, ut adipisci dolor atque excepturi exercitationem explicabo, iure dolore! Illo asperiores iusto optio ea, itaque perspiciatis expedita deleniti fugiat ipsa totam. Fuga minus corporis quae voluptatem odit, dignissimos ea architecto deserunt rerum beatae, animi maxime eligendi consequuntur alias, nobis quasi similique pariatur? Similique quis excepturi suscipit repellat quas sequi ducimus at ex sunt harum, architecto sit rem dignissimos eaque fugit incidunt optio voluptatibus dicta!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium beatae commodi ullam animi officiis quibusdam a, omnis reprehenderit perferendis vero quas iusto ea placeat illo ipsa quo ducimus cumque. Ad exercitationem sunt voluptate voluptatum debitis, dolor adipisci earum iure nisi natus eos error distinctio asperiores blanditiis illum itaque nulla ducimus ullam omnis alias eius quidem, odit nobis numquam! Cumque officia, perferendis hic tempora dolores ut possimus aliquid, accusantium quo provident incidunt aliquam facilis dolor omnis, consequuntur soluta error quos? Fuga, natus officiis porro animi harum ducimus debitis quibusdam omnis est temporibus obcaecati perspiciatis vel itaque reprehenderit dolor eligendi doloribus exercitationem reiciendis veniam. Assumenda, iusto? Quod molestias sapiente ut distinctio cum rerum saepe esse error culpa, laudantium fuga nemo beatae, eligendi odit quia debitis? Veritatis, quo? Hic praesentium, sapiente omnis accusamus doloremque facere nihil quas totam officiis! Quis doloremque repudiandae, itaque expedita asperiores, unde sit accusantium porro molestiae voluptates, eligendi fugit rerum? Doloremque blanditiis nesciunt consectetur velit nisi molestiae et voluptatem? Exercitationem vel eum consequatur fuga aut? Rerum fuga distinctio magnam quas illo porro nostrum voluptatum placeat recusandae ratione. Aliquam, hic praesentium nobis sequi in quidem rem odio nulla quam ipsum repudiandae itaque architecto voluptatem doloribus dolorem autem corrupti? Hic, dolor!</p>
        {/* eslint-enable */}
      </div>
    </div>
  );
}
function Quote() {
  return (
    <div id="quotepage">
      <div id="quote">
        <p>Calculators can only calculate - they cannot do mathematics.</p>
      </div>
      <div id="author">
        <p>John A. Van de Walle</p>
      </div>

    </div>
  );
}
