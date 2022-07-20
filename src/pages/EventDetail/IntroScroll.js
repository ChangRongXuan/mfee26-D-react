import React, { Component } from 'react';
import ShadowScrollbars from './ShadowScrollbars';

export default class IntroScroll extends Component {
    render() {
        return ( 
            <ShadowScrollbars
                style={{ height: 250 }}> 
                      <p>活動評價：</p>
                      <p>活動時間：</p>
                      <p>活動地點：</p>
                      <p>招募人數：</p>
                      <p>主辦單位：</p>
                      <p>活動內容 & 注意事項：</p>
                      <p>主辦單位介紹：Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illum deserunt nostrum modi cum eveniet aperiam qui. Nihil, ex soluta, repellendus tenetur praesentium enim at, minima dicta quibusdam possimus provident!
                      Tempora laboriosam architecto ipsa eveniet adipisci dolore saepe numquam voluptates illo sequi non aut enim, explicabo beatae. Error voluptatum doloremque, iure impedit eaque dolorum, delectus atque modi eos perspiciatis voluptas.
                      Earum blanditiis repellendus dolor at excepturi laborum, consectetur odio hic doloribus cumque asperiores reiciendis illo. Ipsum modi repellat incidunt rem vero maiores repellendus, neque quis sapiente unde. Provident, asperiores maiores!
                      Earum blanditiis repellendus dolor at excepturi laborum, consectetur odio hic doloribus cumque asperiores reiciendis illo. Ipsum modi repellat incidunt rem vero maiores repellendus, neque quis sapiente unde. Provident, asperiores maiores!
                      Earum blanditiis repellendus dolor at excepturi laborum, consectetur odio hic doloribus cumque asperiores reiciendis illo. Ipsum modi repellat incidunt rem vero maiores repellendus, neque quis sapiente unde. Provident, asperiores maiores!
                      Earum blanditiis repellendus dolor at excepturi laborum, consectetur odio hic doloribus cumque asperiores reiciendis illo. Ipsum modi repellat incidunt rem vero maiores repellendus, neque quis sapiente unde. Provident, asperiores maiores!
                      Rem vel expedita quaerat amet cupiditate, praesentium fugit quibusdam optio, dicta dignissimos earum ex rerum. A repellendus sint aperiam facere provident qui vero! Culpa quibusdam deleniti sapiente, ipsum iusto nam.
                      Quibusdam, optio voluptate consequatur quasi facilis quae, fugit nemo quam nulla repellat doloribus vel placeat quisquam ratione, ex praesentium. Harum totam illo error consequuntur. Culpa sapiente ipsam autem eum inventore.</p>
            </ShadowScrollbars>
        );
    }
}

// export default ShadowScrollTest;